export const runtime = "nodejs";
export const preferredRegion = "bom1";
export const dynamic = "force-dynamic";

const LEGACY_HOSTS = [
  "https://www.iiml-manfestvarchasva.com",
  "https://iiml-manfestvarchasva.com",
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const assetPath = searchParams.get("path");

  if (!assetPath || !assetPath.startsWith("/images/") || assetPath.includes("..")) {
    return new Response("Invalid asset path", { status: 400 });
  }

  let lastError: unknown;

  for (const host of LEGACY_HOSTS) {
    try {
      const response = await fetch(host + assetPath, {
        cache: "no-store",
        headers: {
          "user-agent": "Mozilla/5.0 (compatible; MV-media-migration/1.0)",
          accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        },
        signal: AbortSignal.timeout(25000),
      });

      if (!response.ok) {
        lastError = new Error(`${host} returned HTTP ${response.status}`);
        continue;
      }

      const bytes = await response.arrayBuffer();
      if (bytes.byteLength < 500) {
        lastError = new Error(`${host} returned an unexpectedly small response`);
        continue;
      }

      return new Response(bytes, {
        status: 200,
        headers: {
          "content-type": response.headers.get("content-type") || "application/octet-stream",
          "cache-control": "public, max-age=3600",
          "x-legacy-source": host,
        },
      });
    } catch (error) {
      lastError = error;
    }
  }

  console.error("Legacy media fetch failed", assetPath, lastError);
  return new Response("Legacy asset unavailable", { status: 502 });
}
