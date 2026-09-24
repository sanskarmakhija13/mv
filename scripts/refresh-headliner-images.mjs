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
  [commonsThumb("Papon Euphuism.jpg", 1600), "public/headliners/papon.jpg"],
  ["https://cdn.starclinch.in/artist/bismil/Pune_never_fails_to_impress_me_with_their_verve.1.6.25_.......bismil_bismilkimehf_FaSaDKi.jpg?flop=false&format=webp&quality=90&width=1920", "public/headliners/bismil.jpg"],
  [commonsOriginal("Salim-Sulaiman Vitopia.jpg"), "public/headliners/salim-sulaiman.jpeg"],
  [commonsOriginal("Jubin Nauityal at the Good Homes Awards 2015.jpg"), "public/headliners/jubin-nautiyal.jpeg"],
  [commonsOriginal("Amit Trivedi Live (OT) (cropped).jpg"), "public/headliners/amit-trivedi.jpg"],
  [commonsOriginal("Javed Ali Youthopia 2016.jpg"), "public/headliners/javed-ali.jpeg"],
  [commonsThumb("KK (125).jpg", 1200), "public/headliners/kk.jpeg"],
  [commonsOriginal("Guru Randhawa at the launch of MTV Unplugged Season 8.jpg"), "public/headliners/guru-randhawa.jpeg"],
  [commonsOriginal("Vishal-Shekhar Indian Idol Junior press conference.jpg"), "public/headliners/vishal-shekhar.jpeg"],
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
      await new Promise(r => setTimeout(r, 1500 * attempt));
    }
  }
  throw lastError;
}

for (const [url, dest] of assets) {
  await download(url, dest);
  await new Promise(r => setTimeout(r, 500));
}
