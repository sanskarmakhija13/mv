import fs from "node:fs/promises";
import path from "node:path";

const sources = [
  "https://media.insider.in/image/upload/w_1600/v1769763480/kd2ohaiwiyjvgeh8drxa.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/152f64201418371.667412c7b7f6d.jpg",
  "https://admin.hire4event.com/assets/artistimage/6-664de0faa3e26.webp"
];

function isImage(bytes) {
  const jpg = bytes.length > 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  const png = bytes.length > 4 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
  const webp = bytes.length > 12 && bytes.subarray(0,4).toString("ascii") === "RIFF" && bytes.subarray(8,12).toString("ascii") === "WEBP";
  return jpg || png || webp;
}

let saved = false;
for (const url of sources) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: { "user-agent": "Mozilla/5.0 (compatible; MV-site-asset-refresh/1.0)", accept: "image/*,*/*;q=0.8" },
      signal: AbortSignal.timeout(30000)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length < 50000 || !isImage(bytes)) throw new Error(`invalid/small image (${bytes.length} bytes)`);
    await fs.mkdir(path.join(process.cwd(),"public","headliners"), {recursive:true});
    await fs.writeFile(path.join(process.cwd(),"public","headliners","seedhe-maut.jpg"), bytes);
    console.log(`Saved Seedhe Maut image: ${bytes.length} bytes from ${url}`);
    saved = true;
    break;
  } catch (err) {
    console.warn(`Source failed: ${url}: ${err.message}`);
  }
}
if (!saved) throw new Error("Could not download a valid Seedhe Maut image");
