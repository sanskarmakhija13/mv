import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const assets = [
  ["https://www.iiml-manfestvarchasva.com/images/slider/DSC_7072.jpeg", "public/headliners/salim-sulaiman.jpeg"],
  ["https://www.iiml-manfestvarchasva.com/images/slider/JNautiyalSlider_C.jpeg", "public/headliners/jubin-nautiyal.jpeg"],
  ["https://www.iiml-manfestvarchasva.com/images/slider/Amit-Trivedi-Slider_C.jpg", "public/headliners/amit-trivedi.jpg"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2021-22/5D4_7133_C.jpeg", "public/headliners/javed-ali.jpeg"],
  ["https://www.iiml-manfestvarchasva.com/images/slidekk.jpeg", "public/headliners/kk.jpeg"],
  ["https://www.iiml-manfestvarchasva.com/images/slider/GR2_C.jpeg", "public/headliners/guru-randhawa.jpeg"],
  ["https://www.iiml-manfestvarchasva.com/images/slider/VishalShekhar_C.jpeg", "public/headliners/vishal-shekhar.jpeg"],

  ["https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/dy-chandrachud.jpg", "public/leaders/dy-chandrachud.jpg"],
  ["https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/1-deepali-naair--group-cmo--ck-birla-group.jpg", "public/leaders/deepali-naair.jpg"],
  ["https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/gurpreet-chatwani-jpg.jpg", "public/leaders/gurpreet-chhatwal.jpg"],
  ["https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/riya-upreti.jpg", "public/leaders/riya-upreti.jpg"],
  ["https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/shivam-shahi.jpg", "public/leaders/shivam-shahi.jpg"],

  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/AXIS-BANK.png", "public/partners/axis-bank.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/Alpha-8-logo.png", "public/partners/alpha-8.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/Bonn-Logo-with-tagline-1.png", "public/partners/bonn.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/DECATHLON.png", "public/partners/decathlon.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/DEVYANI-INTL.png", "public/partners/devyani-international.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/mahindra-solarize-logo.png", "public/partners/mahindra-solarize.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/IDFC-FIRST-Bank-logo.png", "public/partners/idfc-first-bank.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/SBI.png", "public/partners/sbi.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/lic.png", "public/partners/lic.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/plum-bodylovin.png", "public/partners/plum.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/safeexpress-MAIN.png", "public/partners/safexpress.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/sparx.png", "public/partners/sparx.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2024/UPSRTC.png", "public/partners/upsrtc.png"],
  ["https://www.iiml-manfestvarchasva.com/images/partners/2025/UPSDM.png", "public/partners/upsdm.png"],
];

async function download(url, destination) {
  const full = path.join(root, destination);
  await fs.mkdir(path.dirname(full), { recursive: true });

  let lastError;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers: {
          "user-agent": "Mozilla/5.0 (compatible; MV-website-migration/1.0)",
          accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      if (buffer.length < 500) throw new Error(`response too small (${buffer.length} bytes)`);
      await fs.writeFile(full, buffer);
      console.log(`Downloaded ${destination} (${buffer.length} bytes)`);
      return;
    } catch (error) {
      lastError = error;
      console.warn(`Attempt ${attempt} failed for ${url}: ${error.message}`);
      await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
    }
  }
  throw lastError;
}

for (const [url, destination] of assets) {
  await download(url, destination);
}

let content = await fs.readFile(path.join(root, "lib/content.ts"), "utf8");

const replacements = new Map([

  ['"https://www.iiml-manfestvarchasva.com/images/slider/DSC_7072.jpeg"', '"/headliners/salim-sulaiman.jpeg"'],
  ['"https://www.iiml-manfestvarchasva.com/images/slider/JNautiyalSlider_C.jpeg"', '"/headliners/jubin-nautiyal.jpeg"'],
  ['"https://www.iiml-manfestvarchasva.com/images/slider/Amit-Trivedi-Slider_C.jpg"', '"/headliners/amit-trivedi.jpg"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2021-22/5D4_7133_C.jpeg"', '"/headliners/javed-ali.jpeg"'],
  ['"https://www.iiml-manfestvarchasva.com/images/slidekk.jpeg"', '"/headliners/kk.jpeg"'],
  ['"https://www.iiml-manfestvarchasva.com/images/slider/GR2_C.jpeg"', '"/headliners/guru-randhawa.jpeg"'],
  ['"https://www.iiml-manfestvarchasva.com/images/slider/VishalShekhar_C.jpeg"', '"/headliners/vishal-shekhar.jpeg"'],

  ['"https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/dy-chandrachud.jpg"', '"/leaders/dy-chandrachud.jpg"'],
  ['"https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/1-deepali-naair--group-cmo--ck-birla-group.jpg"', '"/leaders/deepali-naair.jpg"'],
  ['"https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/gurpreet-chatwani-jpg.jpg"', '"/leaders/gurpreet-chhatwal.jpg"'],
  ['"https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/riya-upreti.jpg"', '"/leaders/riya-upreti.jpg"'],
  ['"https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/shivam-shahi.jpg"', '"/leaders/shivam-shahi.jpg"'],

  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/AXIS-BANK.png"', '"/partners/axis-bank.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/Alpha-8-logo.png"', '"/partners/alpha-8.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/Bonn-Logo-with-tagline-1.png"', '"/partners/bonn.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/DECATHLON.png"', '"/partners/decathlon.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/DEVYANI-INTL.png"', '"/partners/devyani-international.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/mahindra-solarize-logo.png"', '"/partners/mahindra-solarize.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/IDFC-FIRST-Bank-logo.png"', '"/partners/idfc-first-bank.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/SBI.png"', '"/partners/sbi.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/lic.png"', '"/partners/lic.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/plum-bodylovin.png"', '"/partners/plum.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/safeexpress-MAIN.png"', '"/partners/safexpress.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/sparx.png"', '"/partners/sparx.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2024/UPSRTC.png"', '"/partners/upsrtc.png"'],
  ['"https://www.iiml-manfestvarchasva.com/images/partners/2025/UPSDM.png"', '"/partners/upsdm.png"'],
]);

for (const [from, to] of replacements) {
  content = content.split(from).join(to);
}

// Remove all links back to the legacy Joomla event pages.
content = content.replace(/\n\s*legacyUrl:\s*\n\s*"https:\/\/iiml-manfestvarchasva\.com\/[^"]+",?/g, "");
content = content.replace(/\n\s*legacyUrl:\s*"https:\/\/iiml-manfestvarchasva\.com\/[^"]+",?/g, "");

if (/iiml-manfestvarchasva\.com/.test(content)) {
  throw new Error("Legacy site URL still remains in lib/content.ts");
}
await fs.writeFile(path.join(root, "lib/content.ts"), content);

// No remote image hosts are needed after migration.
await fs.writeFile(
  path.join(root, "next.config.ts"),
  'import type { NextConfig } from "next";\n\nconst nextConfig: NextConfig = {};\n\nexport default nextConfig;\n'
);

// Remove the legacy page button from event pages.
const eventPagePath = path.join(root, "app/events/[slug]/page.tsx");
let eventPage = await fs.readFile(eventPagePath, "utf8");
eventPage = eventPage.replace(/\n\s*\{event\.legacyUrl \? \([\s\S]*?\) : null\}/g, "");
await fs.writeFile(eventPagePath, eventPage);

// Update the old migration notes now that media is local.
const readmePath = path.join(root, "README.md");
let readme = await fs.readFile(readmePath, "utf8");
readme = readme.replace(
  /## Image migration note[\s\S]*?(?=\n## |$)/,
  "## Media assets\n\nAll production images and logos used by the site are stored locally under `public/`. The Next.js site does not depend on the legacy Joomla website for media.\n"
);
await fs.writeFile(readmePath, readme);

const scriptsReadme = path.join(root, "scripts/README.md");
await fs.writeFile(
  scriptsReadme,
  "# Scripts\n\n`migrate-assets.mjs` was used for the one-time migration of legacy Joomla media into the Next.js repository. Production rendering uses only local files under `public/`.\n"
);

// Final text scan: the production source must contain no reference to the old domain.
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    if ([".git", "node_modules", ".next"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await walk(full));
    else result.push(full);
  }
  return result;
}

const textExtensions = new Set([".ts", ".tsx", ".js", ".mjs", ".json", ".md", ".css", ".yml", ".yaml", ".html", ".txt"]);
const legacyHits = [];
for (const file of await walk(root)) {
  if (!textExtensions.has(path.extname(file))) continue;
  const text = await fs.readFile(file, "utf8");
  if (text.includes("iiml-manfestvarchasva.com")) legacyHits.push(path.relative(root, file));
}
if (legacyHits.length) throw new Error(`Legacy domain remains in: ${legacyHits.join(", ")}`);

console.log("Migration complete: all legacy media references are local.");
