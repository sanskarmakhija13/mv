import fs from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const root = process.cwd();

function commonsOriginal(filename) {
  const normalized = filename.replaceAll(" ", "_");
  const md5 = createHash("md5").update(normalized).digest("hex");
  return `https://upload.wikimedia.org/wikipedia/commons/${md5[0]}/${md5.slice(0,2)}/${encodeURIComponent(normalized)}`;
}

function commonsThumb(filename, width) {
  const normalized = filename.replaceAll(" ", "_");
  const md5 = createHash("md5").update(normalized).digest("hex");
  const encoded = encodeURIComponent(normalized);
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${md5[0]}/${md5.slice(0,2)}/${encoded}/${width}px-${encoded}`;
}


const assets = [
  ["https://cdn.starclinch.in/artist/bismil/Pune_never_fails_to_impress_me_with_their_verve.1.6.25_.......bismil_bismilkimehf_FaSaDKi.jpg?flop=false&format=webp&quality=90&width=1920", "public/headliners/bismil.jpg"],
  ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Javed%20Ali%20Youthopia%202016.jpg", "public/headliners/javed-ali.jpeg"],
  ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Vishal-Shekhar%20Indian%20Idol%20Junior%20press%20conference.jpg", "public/headliners/vishal-shekhar.jpeg"],
  ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Guru%20Randhawa%20at%20the%20launch%20of%20MTV%20Unplugged%20Season%208.jpg", "public/headliners/guru-randhawa.jpeg"],
  ["https://commons.wikimedia.org/wiki/Special:Redirect/file/KK%20%28125%29.jpg", "public/headliners/kk.jpeg"],
  ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Amit%20Trivedi%20Live%20%28OT%29%20%28cropped%29.jpg", "public/headliners/amit-trivedi.jpg"],
  ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Jubin%20Nauityal%20at%20the%20Good%20Homes%20Awards%202015.jpg", "public/headliners/jubin-nautiyal.jpeg"],
  ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Salim-Sulaiman%20Vitopia.jpg", "public/headliners/salim-sulaiman.jpeg"],
  ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Papon%20Euphuism.jpg", "public/headliners/papon.jpg"],
];

function isImage(bytes) {
  if (bytes.length < 4) return false;
  const jpg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  const png = bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
  const webp = bytes.length > 12 && bytes.subarray(0,4).toString("ascii")==="RIFF" && bytes.subarray(8,12).toString("ascii")==="WEBP";
  return jpg || png || webp;
}

async function download(url, destination) {
  const full = path.join(root, destination);
  await fs.mkdir(path.dirname(full), { recursive: true });

  let lastError;
  for (let attempt=1; attempt<=4; attempt++) {
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers: {
          "user-agent": "Mozilla/5.0 (compatible; MV-site-asset-refresh/1.0)",
          accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        },
        signal: AbortSignal.timeout(30000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length < 20000) throw new Error(`image too small: ${bytes.length} bytes`);
      if (!isImage(bytes)) throw new Error("response is not a valid image");
      await fs.writeFile(full, bytes);
      console.log(`Saved ${destination}: ${bytes.length} bytes`);
      return;
    } catch (err) {
      lastError = err;
      console.warn(`Attempt ${attempt} failed for ${url}: ${err.message}`);
      const rateLimited = String(err?.message || "").includes("429");
      await new Promise(r => setTimeout(r, (rateLimited ? 8000 : 2000) * attempt));
    }
  }
  throw lastError;
}

for (const [url, dest] of assets) {
  await download(url, dest);
  await new Promise(r => setTimeout(r, 5000));
}
