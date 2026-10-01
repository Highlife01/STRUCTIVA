export interface SectorItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedModel: string;
  advantages: string[];
  metrics: string;
  image: string;
}

export const SECTORS: SectorItem[] = [
  {
    id: "agriculture",
    title: "Agriculture & Bulk Grain Storage",
    subtitle: "Protect harvest yields against moisture, pests and extreme weather.",
    description: "Column-free arch structures allow end-to-end bulk piling of wheat, corn, barley, fertilizers and cotton without dead corners or obstructive interior posts.",
    recommendedModel: "Q-Series Arch or S-Series Hybrid",
    advantages: [
      "Natural sidewall thrust absorption for loose grain piles",
      "Galvalume Plus steel resists agricultural chemical vapors",
      "Bird-proof and rodent-impervious sealed arch construction",
      "Quick loading with front loaders and drive-through trucks"
    ],
    metrics: "Up to 50,000 tons grain capacity",
    image: "/images/hero-arch-structure.jpg"
  },
  {
    id: "mining",
    title: "Mining, Aggregates & Bulk Minerals",
    subtitle: "Engineered for harsh abrasive environments and heavy dust containment.",
    description: "Designed to cover conveyor belts, mineral stockpiles, crushers and chemical storage yards. Aerodynamic arch shape minimizes wind resistance and dust dispersion.",
    recommendedModel: "Q-Series Arch or Container Canopy",
    advantages: [
      "Spans up to 45m without a single central pillar",
      "Withstands high salt, sulfur and chemical emissions",
      "High roof clearance accommodates dump truck tipping angles",
      "Relocatable or permanent installation options"
    ],
    metrics: "240 km/h wind & seismic certified",
    image: "/images/global-project.jpg"
  },
  {
    id: "aviation",
    title: "Aviation & Helicopter Hangars",
    subtitle: "Wide unobstructed openings for fixed-wing aircraft and rotary fleets.",
    description: "Unobstructed clear-span widths from 15m to 42m provide total maneuvering safety for private jets, turboprops, helicopters and cargo planes.",
    recommendedModel: "Q-Series or S-Series with Bi-Fold / Sliding Doors",
    advantages: [
      "Full width hydraulic bi-fold or multi-track sliding door compatibility",
      "Zero birds nesting in trusses — keeps aircraft paint and engines pristine",
      "Non-combustible steel structure reduces aviation insurance premiums",
      "Integrated ground anchoring and epoxy floor compatibility"
    ],
    metrics: "Clear spans up to 42m (138 ft)",
    image: "/images/arched-steel-hangar-hd.jpg"
  },
  {
    id: "logistics",
    title: "Logistics, Warehousing & Distribution",
    subtitle: "High vertical clearance and modular bay expansion for supply chains.",
    description: "S-Series vertical sidewall models support standard 4-tier pallet racking systems, dock levelers and automated forklift traffic.",
    recommendedModel: "S-Series Straight Sidewall or Industrial PEB",
    advantages: [
      "Modular expansion: add bays whenever inventory grows",
      "Double-lap water-tight joints protect sensitive packaged goods",
      "Thermal insulation options down to -20°C cold storage specs",
      "Rapid construction: operational in a fraction of traditional tilt-up time"
    ],
    metrics: "100% floor footprint efficiency",
    image: "/images/global-project.jpg"
  },
  {
    id: "military",
    title: "Defense, Government & Emergency",
    subtitle: "Rapidly deployable, ballistic-resistant and high-security structures.",
    description: "Trusted worldwide for military vehicle depots, munitions storage, disaster response logistics and remote forward-operating bases.",
    recommendedModel: "Q-Series Quonset or Container Canopy",
    advantages: [
      "Standard container flat-pack logistics for air or maritime transport",
      "Erectable in days using standard tools and local manpower",
      "Earth berming capability for blast defilade protection",
      "Proven NATO and UN field operational history"
    ],
    metrics: "48-hour flat-pack deployment",
    image: "/images/hero-arch-structure.jpg"
  },
  {
    id: "infrastructure",
    title: "Modular Water Tanks & Silos",
    subtitle: "STRUCTIVA's signature scalable liquid storage solutions.",
    description: "Galvanized and stainless steel sectional bolted water tanks engineered for municipal irrigation, fire fighting reserve, potable water and industrial effluent.",
    recommendedModel: "Modular Cylindrical & Prismatic Storage",
    advantages: [
      "Potable water WRAS & food-grade membrane liners",
      "Capacities from 10 m³ up to 5,000+ m³ per tank",
      "Hot-dip galvanized panels with anti-algae UV sealing",
      "Zero on-site welding required"
    ],
    metrics: "Capacities from 10 to 5,000 m³",
    image: "/images/engineering-detail.jpg"
  }
];

const LOCALIZED_SECTOR_DATA: Record<string, Record<string, Partial<SectorItem>>> = {
  tr: {
    agriculture: {
      title: "Tarım & Dökme Tahıl Depolama",
      subtitle: "Hasat rekoltenizi neme, zararlılara ve şiddetli hava koşullarına karşı koruyun.",
      description: "Kolonsuz kemer yapılar; buğday, mısır, arpa, gübre ve pamuğun kör nokta veya engelleyici kolonlar olmadan uçtan uca depolanmasını sağlar.",
      advantages: [
        "Dökme tahıl yığınları için doğal yan itme yükü emilimi",
        "Tarımsal kimyasal buharlarına dayanıklı Galvalume Plus çeliği",
        "Kuş ve kemirgen girişini engelleyen sızdırmaz kemer geometrisi",
        "Ön yükleyiciler ve damperli kamyonlar için rahat sürüş alanı"
      ],
      metrics: "50.000 tona kadar tahıl depolama kapasitesi"
    },
    mining: {
      title: "Madencilik, Agrega & Cevher Depolama",
      subtitle: "Aşındırıcı tozlu zorlu ortamlar ve ağır yük stok sahaları için tasarlandı.",
      description: "Konveyör bantları, cevher stok sahaları, kırıcılar ve kimyasal stok sahalarını örtmek için geliştirilmiştir. Aerodinamik kemer formu rüzgar direncini ve toz yayılımını minimize eder.",
      advantages: [
        "Tek bir orta kolon olmadan 45 metreye kadar net açıklık",
        "Yüksek tuz, kükürt ve kimyasal emisyonlara mukavemet",
        "Damperli kamyonların boşaltma açılarına uygun yüksek tepe tavanı",
        "Kalıcı veya sökülebilir taşınabilir kurulum alternatifleri"
      ],
      metrics: "240 km/h rüzgar ve sismik sertifikalı"
    },
    aviation: {
      title: "Havacılık & Uçak/Helikopter Hangarları",
      subtitle: "Sabit ve döner kanatlı hava filoları için geniş, engelsiz açıklıklar.",
      description: "15m ila 42m arası kolonsuz net açıklık; özel jetler, turboprop uçaklar, helikopterler ve kargo filoları için tam manevra güvenliği sağlar.",
      advantages: [
        "Tam genişlikte hidrolik katlanır veya çok raylı sürme kapı uyumu",
        "Kuşların tünemesini engelleyen makassız iç yüzey — uçak gövde boyasını korur",
        "Yanmaz çelik yapı sayesinde düşük havacılık sigorta primleri",
        "Epoksi zemin kaplamaları ve entegre zemin ankrajı uyumu"
      ],
      metrics: "42 metreye kadar (138 ft) net açıklık"
    },
    logistics: {
      title: "Lojistik, Antrepo & Dağıtım Merkezleri",
      subtitle: "Tedarik zincirleri için yüksek tavan ve modüler aks genişleme kabiliyeti.",
      description: "S-Series düz dikey yan duvarlı modeller; 4 katlı palet raf sistemleri, yükleme körükleri ve otonom forklift trafiğini eksiksiz destekler.",
      advantages: [
        "Modüler genişleme: Envanter büyüdükçe yeni akslar ekleme kolaylığı",
        "Çift bindirmeli sızdırmaz cıvata kilitleri hassas ambalajlı ürünleri korur",
        "-20°C soğuk hava deposu standartlarına kadar termal yalıtım opsiyonları",
        "Geleneksel betonarme yapılara kıyasla 4 kat daha hızlı kurulum"
      ],
      metrics: "%100 taban alanı kullanım verimliliği"
    },
    military: {
      title: "Savunma, Kamu & Acil Durum Tesisleri",
      subtitle: "Hızlı konuşlandırılabilir, balistik dirençli ve yüksek güvenlikli yapılar.",
      description: "Askeri araç garajları, mühimmat depoları, afet müdahale lojistiği ve ileri operasyon üsleri için dünya çapında tercih edilmektedir.",
      advantages: [
        "Hava veya deniz yoluyla nakliyeye uygun standart 40HC konteyner yükleme planı",
        "Yerel iş gücü ve standart el aletleriyle birkaç günde montaj",
        "Patlama ve şarapnel koruması için toprak tahkimat uyumu",
        "Sahada kanıtlanmış NATO ve BM operasyon geçmişi"
      ],
      metrics: "48 saatte flat-pack konuşlandırma"
    },
    infrastructure: {
      title: "Modüler Su Depoları & Silolar",
      subtitle: "STRUCTIVA'nın ölçeklenebilir endüstriyel sıvı depolama çözümleri.",
      description: "Tarımsal sulama, yangın rezervi, içme suyu ve endüstriyel arıtma için cıvatalı prizmatik ve silindirik çelik depolama sistemleri.",
      advantages: [
        "İçme suyuna uygun WRAS ve gıda sertifikalı membran astar",
        "Her tank için 10 m³'ten 5.000+ m³'e kadar kapasite",
        "Sıcak daldırma galvanizli ve UV sızdırmaz paneller",
        "Şantiyede sıfır kaynak gerektiren cıvatalı montaj"
      ],
      metrics: "10 ila 5.000 m³ kapasite aralığı"
    }
  },
  de: {
    agriculture: {
      title: "Landwirtschaft & Getreidelagerung",
      subtitle: "Schutz der Ernte vor Feuchtigkeit, Schädlingen und extremen Währungsbedingungen.",
      description: "Säulenfreie Bogenhallen ermöglichen die vollständige Schüttgutlagerung von Getreide, Mais und Düngemitteln.",
      metrics: "Bis zu 50.000 Tonnen Getreidekapazität"
    },
    mining: {
      title: "Bergbau & Schüttgutdepots",
      subtitle: "Ausgelegt für anspruchsvolle staubige Umgebungen und schwere Halden.",
      description: "Aerodynamische Bogengeometrie schützt Förderbänder und Halden vor Windverwehungen.",
      metrics: "240 km/h windzertifiziert"
    },
    aviation: {
      title: "Luftfahrt & Flugzeughallen",
      subtitle: "Weite, säulenfreie Spannweiten für Jets und Hubschrauber.",
      description: "Ungehinderte Durchfahrten von 15m bis 42m für höchste Manövriersicherheit.",
      metrics: "Spannweiten bis 42m"
    },
    logistics: {
      title: "Logistik & Vertriebszentren",
      subtitle: "Hohe lichte Höhe für Hochregallager und Staplerverkehr.",
      description: "S-Serie mit geraden Wänden bietet maximale Raumausnutzung für Palettenregale.",
      metrics: "100% Flächeneffizienz"
    }
  }
};

/**
 * Returns sectors localized for the given language.
 */
export function getLocalizedSectors(lang: string = "tr"): SectorItem[] {
  const normLang = (lang || "tr").toLowerCase().split("-")[0];
  const localizedSet = LOCALIZED_SECTOR_DATA[normLang] || LOCALIZED_SECTOR_DATA["en"] || {};

  return SECTORS.map((sector) => {
    const loc = localizedSet[sector.id];
    if (!loc) return sector;

    return {
      ...sector,
      title: loc.title || sector.title,
      subtitle: loc.subtitle || sector.subtitle,
      description: loc.description || sector.description,
      advantages: loc.advantages || sector.advantages,
      metrics: loc.metrics || sector.metrics,
    };
  });
}

