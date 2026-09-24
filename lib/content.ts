export const site = {
  name: "Manfest-Varchasva",
  shortName: "MV",
  edition: "2027",
  dates: "5–7 February 2027",
  venue: "IIM Lucknow",
  tagline: "Where ideas, culture and energy collide.",
  email: "manfest-varchasva@iiml.ac.in",
  address: "IIM Lucknow, Prabandh Nagar, Lucknow 226013",
  heroImage:
    "/headliners/salim-sulaiman.jpeg",
};

export const headliners = [
  {
    name: "Seedhe Maut",
    edition: "MV 2025–26",
    image: "/headliners/seedhe-maut-original.jpg",
    focus: "50% 58%",
  },
  {
    name: "Papon",
    edition: "MV 2025–26",
    image: "/headliners/papon-original.jpg",
    focus: "50% 54%",
  },
  {
    name: "Bismil",
    edition: "MV 2025–26",
    image: "/headliners/bismil-original.jpg",
    focus: "50% 60%",
  },
  {
    name: "Salim–Sulaiman",
    edition: "MV 2024–25",
    image:
      "/headliners/salim-sulaiman.jpeg",
    focus: "50% 50%",
  },
  {
    name: "Jubin Nautiyal",
    edition: "MV 2023–24",
    image:
      "/headliners/jubin-nautiyal.jpeg",
    focus: "50% 50%",
  },
  {
    name: "Amit Trivedi",
    edition: "MV 2022–23",
    image:
      "/headliners/amit-trivedi.jpg",
    focus: "50% 50%",
  },
  {
    name: "Javed Ali",
    edition: "MV 2021–22",
    image:
      "/headliners/javed-ali.jpeg",
    focus: "50% 50%",
  },
  {
    name: "KK",
    edition: "MV 2020–21",
    image: "/headliners/kk.jpeg",
    focus: "50% 50%",
  },
  {
    name: "Guru Randhawa",
    edition: "MV 2019–20",
    image:
      "/headliners/guru-randhawa.jpeg",
    focus: "50% 50%",
  },
  {
    name: "Vishal & Shekhar",
    edition: "MV 2018–19",
    image:
      "/headliners/vishal-shekhar.jpeg",
    focus: "50% 50%",
  },
]

export const leaders = [
  {
    name: "Justice D.Y. Chandrachud",
    role: "50th Chief Justice of India",
    image:
      "/leaders/dy-chandrachud.jpg",
  },
  {
    name: "Deepali Naair",
    role: "Group CMO, CK Birla Group",
    image:
      "/leaders/deepali-naair.jpg",
  },
  {
    name: "Gurpreet Chhatwal",
    role: "CEO, CRISIL Ltd.",
    image:
      "/leaders/gurpreet-chhatwal.jpg",
  },
  {
    name: "Riya Upreti",
    role: "Founder & CEO, FOBET",
    image:
      "/leaders/riya-upreti.jpg",
  },
  {
    name: "Shivam Shahi",
    role: "Co-Founder & COO, Blue Tokai Coffee Roasters",
    image:
      "/leaders/shivam-shahi.jpg",
  },
];

export const stats = [
  { value: "301+", label: "Colleges" },
  { value: "₹25L+", label: "Prize Money" },
  { value: "70+", label: "Events" },
  { value: "30,000+", label: "Participants" },
  { value: "70+", label: "Partners" },
];

export const partnerLogos = [
  {
    name: "Axis Bank",
    image:
      "/partners/axis-bank.png",
  },
  {
    name: "Alpha 8",
    image:
      "/partners/alpha-8.png",
  },
  {
    name: "Bonn",
    image:
      "/partners/bonn.png",
  },
  {
    name: "Decathlon",
    image:
      "/partners/decathlon.png",
  },
  {
    name: "Devyani International",
    image:
      "/partners/devyani-international.png",
  },
  {
    name: "Mahindra Solarize",
    image:
      "/partners/mahindra-solarize.png",
  },
  {
    name: "IDFC FIRST Bank",
    image:
      "/partners/idfc-first-bank.png",
  },
  {
    name: "SBI",
    image:
      "/partners/sbi.png",
  },
  {
    name: "LIC",
    image:
      "/partners/lic.png",
  },
  {
    name: "Plum",
    image:
      "/partners/plum.png",
  },
  {
    name: "Safexpress",
    image:
      "/partners/safexpress.png",
  },
  {
    name: "Sparx",
    image:
      "/partners/sparx.png",
  },
  {
    name: "UPSRTC",
    image:
      "/partners/upsrtc.png",
  },
  {
    name: "UPSDM",
    image:
      "/partners/upsdm.png",
  },
];

export type EventItem = {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  details?: string[];
  prize?: string;
};

export const events: EventItem[] = [
  {
    slug: "vibes",
    name: "Vibes",
    category: "Dance",
    blurb: "A dance event from the cultural line-up.",
  },
  {
    slug: "imperio",
    name: "Imperio",
    category: "Dance",
    blurb:
      "The Bollywood group dance showcase where crews bring rhythm, energy and stage presence to IIM Lucknow.",
    details: [
      "Team size: 6–20 members",
      "2 rounds: online preliminary + offline final",
      "Bollywood songs only; no restriction on dance form/style",
      "Final round at IIM Lucknow",
    ],
    prize: "₹20,000 first place · ₹13,000 runners-up",
  },
  {
    slug: "duex-danza",
    name: "Duex Danza",
    category: "Dance",
    blurb: "A cultural dance event from Manfest-Varchasva.",
  },
  {
    slug: "taal",
    name: "Taal",
    category: "Dance",
    blurb: "A dance event in the Manfest-Varchasva cultural programme.",
  },
  {
    slug: "jashn",
    name: "JashN",
    category: "Fashion Parade",
    blurb: "The fashion parade event of Manfest-Varchasva.",
  },
  {
    slug: "antarnaad",
    name: "Antarnaad",
    category: "Theatre",
    blurb: "A theatre event from the cultural line-up.",
  },
  {
    slug: "halla-bol",
    name: "Halla Bol",
    category: "Theatre",
    blurb: "A theatre event from the cultural line-up.",
  },
  {
    slug: "izhaar",
    name: "Izhaar",
    category: "Theatre",
    blurb: "A theatre event from the cultural line-up.",
  },
  {
    slug: "stairway-to-hell",
    name: "Stairway to Hell",
    category: "Music",
    blurb: "A music event from the Manfest-Varchasva cultural programme.",
  },
  {
    slug: "sur",
    name: "Sur",
    category: "Music",
    blurb: "A music event from the Manfest-Varchasva cultural programme.",
  },
  {
    slug: "the-joust",
    name: "The Joust",
    category: "Literary",
    blurb: "A literary event from the cultural line-up.",
  },
  {
    slug: "rohan",
    name: "Rohan",
    category: "Literary",
    blurb: "A literary event from the cultural line-up.",
  },
  {
    slug: "iim-lucknow-mun",
    name: "IIM Lucknow MUN",
    category: "MUN",
    blurb: "The Model United Nations platform at Manfest-Varchasva.",
  },
  {
    slug: "young-leaders-programme",
    name: "YLP",
    category: "Leaders Express",
    blurb: "A Leaders Express format focused on ideas, leadership and conversation.",
  },
  {
    slug: "icons",
    name: "ICONS",
    category: "Leaders Express",
    blurb: "A Leaders Express format featuring notable voices and ideas.",
  },
  {
    slug: "minute-to-win-it",
    name: "Minute to Win It",
    category: "Management",
    blurb: "A management challenge from the Manfest-Varchasva event line-up.",
  },
  {
    slug: "vridhi-season-4",
    name: "Vridhi Season 4",
    category: "Management",
    blurb: "A management event from the Manfest-Varchasva programme.",
  },
];

export const galleryImages = [
  ...headliners.map((item) => ({ src: item.image, alt: item.name })),
  ...leaders.slice(0, 4).map((item) => ({ src: item.image, alt: item.name })),
];
