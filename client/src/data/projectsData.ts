/**
 * STRUCTIVA — International Case Studies & Projects Registry
 * Multilingual project library searchable by country, sector, model, and year.
 */

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  country: string;
  model: string;
  size: string;
  sector: string;
  year: string;
  image: string;
  description?: string;
}

export const BASE_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Mersin Port Uluslararası Lojistik Kampüsü",
    location: "Mersin, Türkiye",
    country: "Türkiye",
    model: "S-Series Hybrid (Düz Duvar)",
    size: "4.800 m² (4 x 1.200 m²)",
    sector: "logistics",
    year: "2025",
    image: "/images/global-project.jpg",
    description: "Akdeniz ana konteyner liman sahasında 4 modüler hangardan oluşan uluslararası aktarma ve transit antrepo tesisi."
  },
  {
    id: "proj-2",
    title: "Al-Ahsa Mega Tarımsal Hububat Depolama Tesisi",
    location: "Al-Ahsa, Suudi Arabistan",
    country: "Saudi Arabia",
    model: "Q-Series Quonset Arch",
    size: "12.500 m² (50.000 ton buğday kapasitesi)",
    sector: "agriculture",
    year: "2024",
    image: "/images/hero-arch-structure.jpg",
    description: "55°C çöl sıcağı ve kum fırtınalarına karşı Galvalume Plus® AZ180 yansıtıcı kaplamalı mega tahıl silosu."
  },
  {
    id: "proj-3",
    title: "Bavyera Bölge Havaalanı Genel Havacılık Hangarı",
    location: "Münih, Almanya",
    country: "Germany",
    model: "Q-Series Clear-Span (36m açıklık)",
    size: "2.160 m² (Hidrolik kapılı)",
    sector: "aviation",
    year: "2025",
    image: "/images/engineering-detail.jpg",
    description: "İç kolonsuz 36 metre net açıklık ve 320 kg/m² Alp kar yükü sertifikalı özel jet ve helikopter hangarı."
  },
  {
    id: "proj-4",
    title: "Bakü Liman Sahası Konteyner Üstü Kanopi Depoları",
    location: "Bakü, Azerbaycan",
    country: "Azerbaijan",
    model: "Container Canopy System",
    size: "3.200 m²",
    sector: "logistics",
    year: "2024",
    image: "/images/global-project.jpg",
    description: "Hazar Denizi kıyısındaki gümrük sahasında 40HC konteynerler üzerine doğrudan cıvatalanan hızlı montaj kanopi."
  },
  {
    id: "proj-5",
    title: "İç Anadolu Maden Konsantre Stoklama Deposu",
    location: "Sivas, Türkiye",
    country: "Türkiye",
    model: "Q-Series Heavy Snow Arch",
    size: "5.400 m²",
    sector: "mining",
    year: "2023",
    image: "/images/hero-arch-structure.jpg",
    description: "Yoğun kış don ve kar yüklerine dayanıklı, ağır iş makineleri ve damperli kamyonların rahatça çalıştığı cevher deposu."
  },
  {
    id: "proj-6",
    title: "Kazablanka Serbest Bölge İmalat Hangarı",
    location: "Kazablanka, Fas",
    country: "Morocco",
    model: "S-Series Industrial Hybrid",
    size: "6.200 m²",
    sector: "industrial",
    year: "2024",
    image: "/images/arched-steel-hangar-hd.jpg",
    description: "Otomotiv yan sanayi üretimi için yüksek tavanlı ve gezer vinç donanımlı ön mühendislikli çelik fabrika."
  }
];

const LOCALIZED_PROJECT_TITLES: Record<string, Record<string, { title: string; sectorLabel: string; model: string }>> = {
  en: {
    "proj-1": {
      title: "Mersin Port International Logistics Campus",
      sectorLabel: "Logistics & Warehousing",
      model: "S-Series Hybrid (Straight Wall)"
    },
    "proj-2": {
      title: "Al-Ahsa Mega Agricultural Grain Storage Depot",
      sectorLabel: "Agriculture & Bulk Crops",
      model: "Q-Series Quonset Arch"
    },
    "proj-3": {
      title: "Bavaria Regional Airport Aviation Hangar",
      sectorLabel: "Aviation & Aircraft Hangars",
      model: "Q-Series Clear-Span (36m span)"
    },
    "proj-4": {
      title: "Baku Port Container Canopy Staging Facilities",
      sectorLabel: "Port Logistics & Customs",
      model: "Container Canopy System"
    },
    "proj-5": {
      title: "Central Anatolia Mineral Stockpile Facility",
      sectorLabel: "Mining & Aggregates",
      model: "Q-Series Heavy Snow Arch"
    },
    "proj-6": {
      title: "Casablanca Free Zone Manufacturing Facility",
      sectorLabel: "Heavy Manufacturing",
      model: "S-Series Industrial Hybrid"
    }
  },
  de: {
    "proj-1": {
      title: "Mersin Port Internationales Logistikzentrum",
      sectorLabel: "Logistik & Lagerhallen",
      model: "S-Serie Hybrid (Gerade Wand)"
    },
    "proj-2": {
      title: "Al-Ahsa Agrar-Getreidelagerkomplex",
      sectorLabel: "Landwirtschaft & Getreide",
      model: "Q-Serie Quonset Bogenhalle"
    },
    "proj-3": {
      title: "Regionalflughafen Bayern Flugzeughangar",
      sectorLabel: "Luftfahrt & Hangars",
      model: "Q-Serie stützenfrei (36m Spannweite)"
    }
  }
};

export function getLocalizedProjects(lang: string = "tr"): ProjectItem[] {
  const normLang = (lang || "tr").toLowerCase().split("-")[0];
  const localizedSet = LOCALIZED_PROJECT_TITLES[normLang] || LOCALIZED_PROJECT_TITLES["en"] || {};

  return BASE_PROJECTS.map((p) => {
    const loc = localizedSet[p.id];
    if (!loc) return p;
    return {
      ...p,
      title: loc.title || p.title,
      model: loc.model || p.model,
    };
  });
}
