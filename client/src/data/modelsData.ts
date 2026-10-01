export interface BuildingModel {
  id: string;
  name: string;
  series: string;
  tagline: string;
  description: string;
  spanRange: string;
  lengthRange: string;
  peakHeight: string;
  features: string[];
  bestFor: string[];
  snowLoad: string;
  windLoad: string;
  image: string;
  svgProfile: string; // SVG path for schematic silhouette
}

export const STEEL_MODELS: BuildingModel[] = [
  {
    id: "q-series",
    name: "Q-Series Arch",
    series: "Maximum Clear-Span Quonset",
    tagline: "The world's strongest arch shape — 100% usable volume with zero internal trusses.",
    description: "The classic semi-circular arch geometry engineered from Galvalume Plus® corrugated steel. Designed for extreme seismic, hurricane and heavy snow regions with zero internal structural loss.",
    spanRange: "9m – 45m (30ft – 150ft)",
    lengthRange: "Unlimited (expandable in 0.6m increments)",
    peakHeight: "4.5m – 18m",
    features: [
      "100% Clear-span usable floor space",
      "Galvalume Plus AZ180 coated steel",
      "Rapid bolt-together arch assembly",
      "Superior wind deflection aerodynamics",
      "Fireproof, vermin-proof & rot-free"
    ],
    bestFor: ["Grain & Bulk Crop Storage", "Salt & Chemical Depots", "Mining Stockpiles", "Military Aviation Hangars"],
    snowLoad: "Up to 350 kg/m² (70+ psf)",
    windLoad: "Certified to 240 km/h (150+ mph)",
    image: "/images/arched-steel-hangar-hd.jpg",
    svgProfile: "M 10 90 A 80 80 0 0 1 170 90 Z"
  },
  {
    id: "s-series",
    name: "S-Series Hybrid",
    series: "Straight Sidewall + Arch Roof",
    tagline: "Vertical sidewalls maximize perimeter shelving and forklift clearance.",
    description: "Combines 2.5m to 5m straight vertical sidewalls with an arched roof. Provides high ceiling clearance at the walls for heavy machinery, vertical pallet racking and overhead crane rails.",
    spanRange: "10m – 30m (32ft – 100ft)",
    lengthRange: "Unlimited modular bays",
    peakHeight: "5m – 12m",
    features: [
      "Full wall-to-wall vertical clearance",
      "Accommodates standard overhead rollup doors",
      "Double-lap water-tight bolt joints",
      "Natural daylight skylight integration",
      "Easily insulated with fiberglass blanket"
    ],
    bestFor: ["Commercial Warehouses", "Machinery Maintenance Workshops", "Logistics Transfer Centers", "Manufacturing Facilities"],
    snowLoad: "Up to 280 kg/m² (57 psf)",
    windLoad: "Certified to 225 km/h (140 mph)",
    image: "/images/global-project.jpg",
    svgProfile: "M 15 90 L 15 55 A 70 50 0 0 1 165 55 L 165 90 Z"
  },
  {
    id: "p-series",
    name: "P-Series Pitched",
    series: "Contemporary Pitched Arch",
    tagline: "Clean architectural appearance with straight sidewalls and a gable roof profile.",
    description: "Designed for commercial, residential and suburban settings where standard architectural roof pitch requirements apply. Exceptional structural strength with standard architectural appearance.",
    spanRange: "8m – 24m (26ft – 80ft)",
    lengthRange: "Unlimited modular bays",
    peakHeight: "4.5m – 9m",
    features: [
      "Modern pitched roof aesthetic",
      "Standard residential & commercial zoning fit",
      "Direct integration with brick, glass or composite facades",
      "High thermal insulation R-value compatibility",
      "Fast 2-day assembly with small crew"
    ],
    bestFor: ["Automotive Garages & Showrooms", "Retail Stores & Supermarkets", "Office-Workshop Hybrids", "Sports Clubs"],
    snowLoad: "Up to 240 kg/m² (50 psf)",
    windLoad: "Certified to 210 km/h (130 mph)",
    image: "/images/engineering-detail.jpg",
    svgProfile: "M 20 90 L 20 50 L 90 20 L 160 50 L 160 90 Z"
  },
  {
    id: "container-canopy",
    name: "Container Canopy",
    series: "ISO Shipping Container Mounted System",
    tagline: "Instant, cost-effective heavy covered space mounted directly on standard ISO containers.",
    description: "Utilizes 20ft or 40ft sea containers as structural foundation walls. Arches clamp directly to ISO container corner castings and top rails without requiring extensive concrete foundations.",
    spanRange: "6m – 24m (20ft – 80ft)",
    lengthRange: "6m, 12m, 18m, 24m, 48m (20ft / 40ft increments)",
    peakHeight: "4m – 9m above containers",
    features: [
      "Zero foundation costs in temporary or remote sites",
      "Lockable, secure tool/office storage inside containers",
      "Fully demountable and relocatable in 48 hours",
      "Certified container twist-lock clamp brackets",
      "Front and rear fabric or steel endwall options"
    ],
    bestFor: ["Mining Exploration Sites", "Port & Freight Terminal Staging", "Civil Construction Hubs", "Recycling & Biomass Facilities"],
    snowLoad: "Up to 200 kg/m² (40 psf)",
    windLoad: "Certified to 200 km/h (125 mph)",
    image: "/images/hero-arch-structure.jpg",
    svgProfile: "M 25 90 L 25 60 L 35 60 A 55 45 0 0 1 145 60 L 155 60 L 155 90 L 145 90 L 145 60 L 35 60 L 35 90 Z"
  },
  {
    id: "heavy-peb",
    name: "Heavy Industrial PEB",
    series: "Pre-Engineered Structural Steel & Joists",
    tagline: "High-tonnage industrial steel structures engineered for overhead cranes and large factory plants.",
    description: "Engineered in accordance with AISC and EN 1090-2 Execution Class 4. Designed with open-web steel joists, built-up welded plate girders and heavy portal frames for mega-scale industrial facilities.",
    spanRange: "18m – 60m+ clear span",
    lengthRange: "50m – 500m+",
    peakHeight: "7m – 24m",
    features: [
      "Heavy overhead crane runway compatibility (up to 50 tons)",
      "Multi-story mezzanine floor extensions",
      "EN 1090-2 EXC3 / EXC4 CE Certified fabrication",
      "Shot-blasted and epoxy-coated heavy steel sections",
      "Seismic Zone 1 high-ductility connection detailing"
    ],
    bestFor: ["Heavy Industrial Manufacturing", "Logistic Distribution Hubs", "Aircraft MRO Maintenance Facilities", "Power Plants"],
    snowLoad: "Engineered to local site codes",
    windLoad: "Engineered to local site codes",
    image: "/images/global-project.jpg",
    svgProfile: "M 10 90 L 10 40 L 90 25 L 170 40 L 170 90 Z"
  }
];

const LOCALIZED_MODEL_DATA: Record<string, Record<string, Partial<BuildingModel>>> = {
  tr: {
    "q-series": {
      name: "Q-Series Kemer",
      series: "Maksimum Kolonsuz Açıklık Quonset",
      tagline: "Dünyanın en mukavim kemer formu — sıfır iç makas ile %100 kullanılabilir hacim.",
      description: "Galvalume Plus® oluklu çelikten üretilen klasik dairesel kemer geometrisi. Sıfır iç kolon kaybıyla aşırı deprem, kasırga ve yoğun kar bölgeleri için tasarlanmıştır.",
      features: [
        "%100 Kolonsuz açık iç zemin alanı",
        "Galvalume Plus AZ180 kaplamalı çelik",
        "Hızlı cıvatalı kemer montajı",
        "Üstün aerodinamik rüzgar defleksiyonu",
        "Yangına, kemirgenlere ve çürümeye tam dayanıklı"
      ],
      bestFor: ["Tahıl ve Dökme Mahsul Depoları", "Tuz ve Kimyasal Stok Alanları", "Maden Stok Sahaları", "Askeri Havacılık Hangarları"]
    },
    "s-series": {
      name: "S-Series Hibrit",
      series: "Düz Yan Duvar + Kemer Çatı",
      tagline: "Dikey yan duvarlar ile çevre raf düzeni ve forklift hareket alanı maksimize edilir.",
      description: "2.5m ila 5m düz dikey yan duvarları kemerli çatı formu ile birleştirir. Ağır makineler, dikey paletleme ve tavan vinçleri için yan duvarlarda yüksek tavan boşluğu sağlar.",
      features: [
        "Duvar kenarlarında tam dikey çalışma yüksekliği",
        "Standart seksiyonel ve rulo kapılara tam uyum",
        "Çift bindirmeli sızdırmaz cıvata kilitleri",
        "Doğal polikarbonat aydınlatma paneli entegrasyonu",
        "Cam yünü şilte ile kolay ısı yalıtımı"
      ],
      bestFor: ["Ticari Antrepolar", "Makine Bakım Atölyeleri", "Lojistik Transfer Merkezleri", "İmalat Fabrikaları"]
    },
    "p-series": {
      name: "P-Series Beşik Çatı",
      series: "Çağdaş Eğimli Beşik Kemer",
      tagline: "Düz yan duvarlar ve beşik çatı profili ile temiz mimari estetik.",
      description: "Geleneksel mimari çatı eğimi zorunluluğu olan ticari, konut ve banliyö alanları için tasarlanmıştır. Standart mimari görünüm ile olağanüstü yapısal mukavemet.",
      features: [
        "Modern beşik çatı mimari görünümü",
        "Şehir içi ticari ve konut imar standartlarına uygunluk",
        "Tuğla, cam veya kompozit cephelerle doğrudan birleşim",
        "Yüksek ısıl yalıtım değeri uyumluluğu",
        "Küçük bir montaj ekibiyle 2 günde hızlı kurulum"
      ],
      bestFor: ["Otomotiv Servis & Showroom", "Perakende Mağaza & Süpermarketler", "Ofis-Atölye Hibrit Binalar", "Spor Tesisleri"]
    },
    "container-canopy": {
      name: "Konteyner Üstü Kanopi",
      series: "ISO Deniz Konteyneri Üstü Çatı Sistemi",
      tagline: "Standart deniz konteynerleri üzerine kurulan anında ve ekonomik kapalı alan.",
      description: "20ft veya 40ft deniz konteynerlerini yapısal temel duvarı olarak kullanır. Kemerler, pahalı beton temellere gerek kalmadan doğrudan konteyner köşe kilitlerine bağlanır.",
      features: [
        "Şantiye ve geçici sahalarda sıfır beton temel maliyeti",
        "Konteyner içinde kilitli güvenli ekipman/ofis deposu",
        "48 saatte tamamen sökülebilir ve taşınabilir",
        "Sertifikalı konteyner kilit klemensleri",
        "Ön ve arka branda veya çelik cephe kapama opsiyonu"
      ],
      bestFor: ["Maden Arama Sahaları", "Liman ve Yük Terminal İstasyonları", "İnşaat Şantiyeleri", "Geri Dönüşüm Tesisleri"]
    },
    "heavy-peb": {
      name: "Ağır Sanayi PEB",
      series: "Ön Mühendislikli Çelik Fabrika & Depolar",
      tagline: "Tavan vinçleri ve büyük ölçekli sanayi tesisleri için yüksek tonajlı çelik binalar.",
      description: "AISC ve EN 1090-2 İcra Sınıfı 4 normlarına göre üretilir. Kademeli kaynaklı I-profilleri ve ağır portal çerçeveler ile mega endüstriyel tesisler için tasarlanmıştır.",
      features: [
        "50 tona kadar ağır tavan vinci köprüsü uyumluluğu",
        "Çok katlı asma kat (mezzanine) genişleme seçenekleri",
        "EN 1090-2 EXC3 / EXC4 CE sertifikalı imalat",
        "Kumlama ve epoksi astar boyalı ağır çelik profil kesitleri",
        "1. Derece Deprem Bölgesi yüksek sünek birleşim detayları"
      ],
      bestFor: ["Ağır Sanayi Üretim Tesisleri", "Lojistik Dağıtım Antrepoları", "Uçak MRO Bakım Hangarları", "Enerji Santralleri"]
    }
  },
  de: {
    "q-series": {
      name: "Q-Serie Rundbogen",
      series: "Säulenfreie Quonset-Bogenhalle",
      tagline: "Die weltweit stabilste Bogengeometrie — 100% nutzbares Innenraumvolumen ohne Zwischenträger.",
      description: "Klassische Rundbogenform aus Galvalume Plus® Wellstahl. Ausgelegt für extreme Erdbeben-, Orkan- und Schneelasten.",
      features: [
        "100% stützenfreie Bodenfläche",
        "Galvalume Plus AZ180 legierter Stahl",
        "Schnelle Schraubmontage",
        "Optimale Aerodynamik gegen Windlasten",
        "Feuerfest, ungezieferfest und verrottungsfrei"
      ],
      bestFor: ["Getreide- & Schüttgutlagerung", "Salz- & Chemielager", "Bergbau-Halden", "Militär- & Flugzeughallen"]
    },
    "s-series": {
      name: "S-Serie Hybrid",
      series: "Gerade Seitenwand + Bogendach",
      tagline: "Vertikale Seitenwände maximieren Palettenregalierung und Staplerhöhe.",
      description: "Kombiniert 2,5m bis 5m gerade Seitenwände mit einem Bogendach. Ideal für Hochregale und Hallenkrane.",
      features: [
        "Volle Durchgangshöhe an den Seitenwänden",
        "Kompatibel mit Industrie-Sektionaltoren",
        "Doppelt überlappende, wasserdichte Schraubnähte",
        "Einfache Integration von Lichtbändern",
        "Kostengünstige Glaswoll-Dämmung"
      ],
      bestFor: ["Industrielager", "Wartungswerkstätten", "Logistikzentren", "Produktionshallen"]
    },
    "p-series": {
      name: "P-Serie Satteldach",
      series: "Architektonisches Satteldach",
      tagline: "Klassische Dachform für gewerbliche und kommunale Bauauflagen.",
      description: "Entwickelt für Gewerbegebiete mit strengen Dachneigungsvorschriften.",
      bestFor: ["Gewerbeparks", "Kfz-Betriebe & Ausstellungen", "Supermärkte", "Sporthallen"]
    },
    "container-canopy": {
      name: "Container-Überdachung",
      series: "Montage auf ISO-Seecontainern",
      tagline: "Schnelle und kostengünstige Überdachung direkt auf Standard-Seecontainern.",
      description: "Nutzt 20-Fuß- oder 40-Fuß-Container als Fundamentersatz.",
      bestFor: ["Minenbetriebe", "Hafenlogistik", "Baustellenstützpunkte", "Recyclingbetriebe"]
    },
    "heavy-peb": {
      name: "Schwerer Industrie-Stahlbau",
      series: "Vorgefertigte PEB-Stahlhallen",
      tagline: "Hochleistungs-Stahlkonstruktionen für Schwerindustrie und Brückenkrane.",
      description: "Gefertigt nach EN 1090-2 EXC4 mit Schweißträgern für Megaprojekte und Brückenkrane bis 50 Tonnen.",
      bestFor: ["Schwerindustrie & Fabriken", "Großlogistik", "Flugzeugwartung MRO", "Kraftwerke"]
    }
  },
  ru: {
    "q-series": {
      name: "Q-Серия Арочный",
      series: "Максимальный безопорный пролет",
      tagline: "Самая прочная в мире форма арки — 100% полезного объема без внутренних ферм.",
      description: "Классическая арочная геометрия из стали Galvalume Plus®. Рассчитана на экстремальные нагрузки.",
      features: [
        "100% полезной площади без промежуточных колонн",
        "Сталь с покрытием Galvalume Plus AZ180",
        "Быстрый болтовой монтаж без сварки",
        "Аэродинамическая стойкость к ураганам",
        "Негорючий и долговечный каркас"
      ],
      bestFor: ["Зернохранилища", "Склады удобрений", "Горнорудные отвалы", "Авиационные ангары"]
    },
    "s-series": {
      name: "S-Серия Гибридный",
      series: "Прямые стены + арочная кровля",
      tagline: "Вертикальные стены обеспечивают максимальную высоту для стеллажей и погрузчиков.",
      description: "Сочетает вертикальные стены с арочной крышей. Оптимально для кран-балок и высоких ворот.",
      bestFor: ["Логистические склады", "Ремонтные цеха", "Производственные комплексы", "Автопарки"]
    }
  },
  ar: {
    "q-series": {
      name: "الفئة Q المقوسة",
      series: "أقصى بحر حر مفتوح بدون أعمدة",
      tagline: "أقوى تصميم مقوس هندسياً — حجم استيعابي 100% بدون أي قواطع داخلية.",
      description: "تصميم مقوس كلاسيكي مصنوع من فولاذ جالفالوم بلس AZ180 المقاوم للتآكل ورياح العواصف حتى 240 كم/س.",
      features: [
        "مساحة أرضية خالية بنسبة 100% من الأعمدة",
        "فولاذ مقاوم للصدأ Galvalume Plus AZ180",
        "تركيب مسبق الهندسة بالبراغي فقط بدون لحام",
        "شكل انسيابي مقاوم للرياح العاتية",
        "مقاوم للحرائق والرطوبة والقوارض"
      ],
      bestFor: ["تخزين الحبوب والمحاصيل الكبرى", "مستودعات الأملاح والكيماويات", "ساحات التعدين", "هناجر الطائرات العسكرية والمدنية"]
    },
    "s-series": {
      name: "الفئة S الهجينة",
      series: "جدران جانبية مستقيمة + سقف مقوس",
      tagline: "جدران رأسية تتيح رفع الرافعات الشوكية وتركيب أرفف التخزين العالية.",
      description: "تجمع بين الجدران الرأسية بارتفاع 2.5 إلى 5 أمتار والسقف المقوس لتوفير أقصى ارتفاع تخزين ممكن.",
      bestFor: ["المستودعات التجارية", "ورش صيانة المعدات الثقيلة", "مراكز التوزيع اللوجستية", "المصانع العامة"]
    }
  }
};

/**
 * Returns steel models localized for the given language.
 * Merges localized fields over the base English definition.
 */
export function getLocalizedModels(lang: string = "tr"): BuildingModel[] {
  const normLang = (lang || "tr").toLowerCase().split("-")[0];
  const localizedSet = LOCALIZED_MODEL_DATA[normLang] || LOCALIZED_MODEL_DATA["en"] || {};

  return STEEL_MODELS.map((model) => {
    const loc = localizedSet[model.id];
    if (!loc) return model;

    return {
      ...model,
      name: loc.name || model.name,
      series: loc.series || model.series,
      tagline: loc.tagline || model.tagline,
      description: loc.description || model.description,
      features: loc.features || model.features,
      bestFor: loc.bestFor || model.bestFor,
    };
  });
}

