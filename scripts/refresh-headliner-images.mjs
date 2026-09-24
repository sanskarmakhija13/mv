import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const assets = [
  ["https://static.toiimg.com/thumb/resizemode-4%2Cwidth-1280%2Cheight-720%2Cmsid-126948726/126948726.jpg", "public/headliners/papon.jpg"],
  ["https://cdn-az.allevents.in/events8/banners/91667e00-5a9b-11f1-9fd1-657adc2b401f-rimg-w1200-h600-dc180f0f-gmir.jpg?v=1779975963", "public/headliners/bismil.jpg"],
  ["https://www.hindustantimes.com/ht-img/img/2025/02/06/original/Salim3_1738844088937.JPEG", "public/headliners/salim-sulaiman.jpeg"],
  ["https://www.hindi.awazthevoice.in/upload/news/1751708593550-jubin-nautiyal_%281%29.jpg", "public/headliners/jubin-nautiyal.jpeg"],
  ["https://media.assettype.com/freepressjournal/2023-04/c0d6b4b3-ef15-41e5-b3de-1a4e82eaa29d/Snapinsta_app_324911118_137774572475274_2406794815758119213_n_1080.jpg", "public/headliners/amit-trivedi.jpg"],
  ["https://static.toiimg.com/photo/63952318.cms", "public/headliners/javed-ali.jpeg"],
  ["https://images.hindustantimes.com/img/2022/06/01/original/singer_kk_death_body_mumbai_last_rites_news_1654104414972.jpg", "public/headliners/kk.jpeg"],
  ["https://static.toiimg.com/thumb/msid-66955128%2Cwidth-1280%2Cheight-720%2Cimgsize-80887%2Cresizemode-6%2Coverlay-toi_sw%2Cpt-32%2Cy_pad-40/photo.jpg", "public/headliners/guru-randhawa.jpeg"],
  ["https://i.ndtvimg.com/i/2016-09/vishal-shekhar_640x480_51475162023.jpg", "public/headliners/vishal-shekhar.jpeg"],
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

for (const [url, dest] of assets) await download(url, dest);
