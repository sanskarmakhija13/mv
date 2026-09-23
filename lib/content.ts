export const site = {
  name: "Manfest-Varchasva",
  shortName: "MV",
  edition: "2026",
  dates: "6–8 February 2026",
  venue: "IIM Lucknow",
  tagline: "Where ideas, culture and energy collide.",
  email: "manfest-varchasva@iiml.ac.in",
  address: "IIM Lucknow, Prabandh Nagar, Lucknow 226013",
  heroImage:
    "https://www.iiml-manfestvarchasva.com/images/slider/DSC_7072.jpeg",
};

export const headliners = [
  {
    name: "Salim–Sulaiman",
    edition: "#MV'25",
    image:
      "https://www.iiml-manfestvarchasva.com/images/slider/DSC_7072.jpeg",
  },
  {
    name: "Jubin Nautiyal",
    edition: "#MV'24",
    image:
      "https://www.iiml-manfestvarchasva.com/images/slider/JNautiyalSlider_C.jpeg",
  },
  {
    name: "Amit Trivedi",
    edition: "#MV'23",
    image:
      "https://www.iiml-manfestvarchasva.com/images/slider/Amit-Trivedi-Slider_C.jpg",
  },
  {
    name: "Javed Ali",
    edition: "#MV'22",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2021-22/5D4_7133_C.jpeg",
  },
  {
    name: "KK",
    edition: "#MV2020-21",
    image: "https://www.iiml-manfestvarchasva.com/images/slidekk.jpeg",
  },
  {
    name: "Guru Randhawa",
    edition: "#MV2019",
    image:
      "https://www.iiml-manfestvarchasva.com/images/slider/GR2_C.jpeg",
  },
  {
    name: "Vishal & Shekhar",
    edition: "#MV2018",
    image:
      "https://www.iiml-manfestvarchasva.com/images/slider/VishalShekhar_C.jpeg",
  },
];

export const leaders = [
  {
    name: "Justice D.Y. Chandrachud",
    role: "50th Chief Justice of India",
    image:
      "https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/dy-chandrachud.jpg",
  },
  {
    name: "Deepali Naair",
    role: "Group CMO, CK Birla Group",
    image:
      "https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/1-deepali-naair--group-cmo--ck-birla-group.jpg",
  },
  {
    name: "Gurpreet Chhatwal",
    role: "CEO, CRISIL Ltd.",
    image:
      "https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/gurpreet-chatwani-jpg.jpg",
  },
  {
    name: "Riya Upreti",
    role: "Founder & CEO, FOBET",
    image:
      "https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/riya-upreti.jpg",
  },
  {
    name: "Shivam Shahi",
    role: "Co-Founder & COO, Blue Tokai Coffee Roasters",
    image:
      "https://iiml-manfestvarchasva.com/images/bagallery/gallery-8/thumbnail/category-1/shivam-shahi.jpg",
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
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/AXIS-BANK.png",
  },
  {
    name: "Alpha 8",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/Alpha-8-logo.png",
  },
  {
    name: "Bonn",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/Bonn-Logo-with-tagline-1.png",
  },
  {
    name: "Decathlon",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/DECATHLON.png",
  },
  {
    name: "Devyani International",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/DEVYANI-INTL.png",
  },
  {
    name: "Mahindra Solarize",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/mahindra-solarize-logo.png",
  },
  {
    name: "IDFC FIRST Bank",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/IDFC-FIRST-Bank-logo.png",
  },
  {
    name: "SBI",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/SBI.png",
  },
  {
    name: "LIC",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/lic.png",
  },
  {
    name: "Plum",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/plum-bodylovin.png",
  },
  {
    name: "Safexpress",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/safeexpress-MAIN.png",
  },
  {
    name: "Sparx",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/sparx.png",
  },
  {
    name: "UPSRTC",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2024/UPSRTC.png",
  },
  {
    name: "UPSDM",
    image:
      "https://www.iiml-manfestvarchasva.com/images/partners/2025/UPSDM.png",
  },
];

export type EventItem = {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  details?: string[];
  prize?: string;
  legacyUrl?: string;
};

export const events: EventItem[] = [
  {
    slug: "vibes",
    name: "Vibes",
    category: "Dance",
    blurb: "A dance event from the cultural line-up.",
    legacyUrl:
      "https://iiml-manfestvarchasva.com/index.php/events/cultural-events/dance/vibes",
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
    legacyUrl:
      "https://iiml-manfestvarchasva.com/index.php/events/cultural-events/dance/imperio",
  },
  {
    slug: "duex-danza",
    name: "Duex Danza",
    category: "Dance",
    blurb: "A cultural dance event from Manfest-Varchasva.",
    legacyUrl:
      "https://iiml-manfestvarchasva.com/index.php/events/cultural-events/dance/duex-danza",
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
