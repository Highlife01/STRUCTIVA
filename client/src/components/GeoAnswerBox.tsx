import React from "react";
import { Sparkles, HelpCircle, ShieldCheck, Table, Globe2, Anchor, Tag } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";
import { WORLDWIDE_GEO_MARKETS, getPageSEO } from "../data/seoData";

export interface GeoQaItem {
  question: string;
  answer: string;
  keyFacts?: string[];
}

export const QA_BY_LANG: Record<string, GeoQaItem[]> = {
  tr: [
    {
      question: "STRUCTIVA Nedir ve Üretim Merkezi Nerededir?",
      answer: "STRUCTIVA, kolonsuz kemerli çelik yapılar, ön üretimli çelik binalar (PEB) ve ağır sanayi konstrüksiyonu alanında uzmanlaşmış uluslararası bir mühendislik ve imalat firmasıdır. Üretim, Türkiye'nin sanayi üssü Adana Organize Sanayi Bölgesi'ndeki entegre Structiva Tesisleri'nde gerçekleştirilmekte olup Mersin Uluslararası Limanı (15 km) üzerinden 50'den fazla ülkeye ihraç edilmektedir.",
      keyFacts: [
        "Structiva Tesisleri Adana / Türkiye entegre üretim merkezi (25.000 Ton/Yıl)",
        "Mersin Derin Deniz Konteyner Limanı'na 15 km mesafeden 50+ ülkeye doğrudan ihracat",
        "EN 1090-2 EXC4 CE, Eurocode 3 ve AISC 360-16 normlarına tam uygunluk"
      ]
    },
    {
      question: "STRUCTIVA Hangi Çelik Yapı Modellerini ve Açıklıkları Üretmektedir?",
      answer: "STRUCTIVA; Q-Series dairesel kemer hangarlar (9–45 m), S-Series düz duvarlı kemer yapılar (10–30 m), P-Series beşik çatılı sistemler (8–24 m), konteyner üstü kanopi çatıları (6–24 m) ve ağır sanayi PEB fabrika binaları (18–60 m+) imal eder. Tüm modeller iç kolonsuz net açıklık (clear-span) sunar.",
      keyFacts: [
        "9 metreden 45 metreye kadar %100 kolonsuz kemer açıklık (PEB'de 60m+)",
        "Galvalume Plus® AZ180 korozyona dayanıklı alüminyum-çinko alaşımı (25 yıl fabrika garantisi, 40-50 yıl tasarım ömrü)",
        "240 km/h kasırga rüzgarı ve 350 kg/m² kar yükü dayanımı"
      ]
    },
    {
      question: "Uluslararası Sevkiyat ve Sahada Montaj Nasıl Yapılır?",
      answer: "Tüm parçalar Adana fabrikamızda CNC hatlarında lazerle delinir ve şekillendirilir. 350–400 m² bina kiti tek bir 40HC konteynere demonte (flat-pack) olarak sığdırılır. Şantiyede sıfır kaynak gerektirir; 8.8 kalite yüksek mukavemetli cıvatalar ve 3D kurulum kılavuzları ile hızlıca monte edilir.",
      keyFacts: [
        "%100 ön mühendislikli, sahada kaynak gerektirmeyen cıvatalı montaj",
        "3D adım adım numaralandırılmış kurulum kılavuzu ve mühendislik desteği",
        "Düşük navlun maliyeti sağlayan kompakt 40HC konteyner yükleme planı"
      ]
    },
    {
      question: "Resmi Teknik Şartname ve Fiyat Teklifi (RFQ) Nasıl Alınır?",
      answer: "Alıcılar ve proje müdürleri, web sitemizdeki 3D Konfigüratör veya RFQ formu üzerinden arsa ölçülerini (açıklık, uzunluk, yükseklik) ve kullanım amacını ileterek 24 saat içinde statik fizibilite, malzeme dökümü (BOM) ve FOB/CIF navlun teklif mektubu alabilirler.",
      keyFacts: [
        "24 saat içinde ücretsiz statik ön analiz ve ticari teklif",
        "DWG, DXF, IFC ve PDF mimari projelerle uyumlu mühendislik",
        "FOB Mersin Limanı veya Hedef Ülke Limanı CIF teslim opsiyonları"
      ]
    }
  ],
  en: [
    {
      question: "What is STRUCTIVA and Where are Facilities Located?",
      answer: "STRUCTIVA is an international manufacturer and structural engineering corporation specializing in clear-span arch steel buildings, pre-engineered steel buildings (PEB), and heavy structural steel fabrication. Operating from its 25,000 MT/year integrated facilities in Adana, Türkiye (15 km from Mersin International Port), STRUCTIVA delivers certified bolted steel building kits to over 50 countries worldwide.",
      keyFacts: [
        "Integrated 25,000 MT/year manufacturing complex in Adana (AOSB), Türkiye",
        "Direct Mediterranean container port shipping (15 km to Mersin Port) to 50+ countries",
        "Full compliance with EN 1090-2 EXC4 CE, Eurocode 3, and AISC 360-16 specifications"
      ]
    },
    {
      question: "What Types of Steel Structures and Clear Spans Does STRUCTIVA Manufacture?",
      answer: "STRUCTIVA designs and fabricates Q-Series true arch hangars (9m–45m), S-Series straight-wall arch buildings (10m–30m), P-Series pitched roof structures (8m–24m), ISO container canopy roof trusses (6m–24m), and Heavy Industrial PEB portal frames (18m–60m+ clear span) with up to 50-ton overhead crane capacity.",
      keyFacts: [
        "Column-free clear spans from 9m to 45m in arches and up to 60m+ in PEB frames",
        "Galvalume Plus® AZ180 alloy steel (25-year factory warranty, 40–50 year design service life)",
        "Engineered for up to 240 km/h wind velocity and 350 kg/m² snow load"
      ]
    },
    {
      question: "How Does STRUCTIVA Manage International Shipping and On-Site Assembly?",
      answer: "STRUCTIVA conducts 3D static modeling and precision CNC roll-forming in Adana. Components are flat-packed into standard 40-foot High-Cube (40HC) ocean containers (~350–400 m² per container) for rapid, weld-free Grade 8.8 bolt-together assembly on-site anywhere in the world.",
      keyFacts: [
        "100% pre-engineered, zero on-site welding or hot-work permits required",
        "Includes comprehensive 3D step-by-step numbered assembly blueprints",
        "Standard 40HC maritime flat-pack logistics cutting freight costs by up to 70%"
      ]
    },
    {
      question: "How Can an International Buyer Request a Quotation (RFQ)?",
      answer: "Buyers can submit project requirements (desired clear span, length, peak height, building purpose, and destination seaport) through STRUCTIVA's online 3D Configurator or technical RFQ form. Our structural engineering bureau prepares a static feasibility review, Bill of Materials (BOM), and commercial FOB/CIF quotation within 24 hours.",
      keyFacts: [
        "Rapid 24-hour engineering feasibility and pricing turnaround",
        "Full support for CAD/DWG, IFC, and regional wind/seismic load codes",
        "Official Incoterms 2020 FOB Mersin Port or CIF Destination Seaport quotation"
      ]
    }
  ],
  de: [
    {
      question: "Was ist STRUCTIVA und wo befindet sich die Produktion?",
      answer: "STRUCTIVA ist ein internationaler Hersteller von säulenfreien Bogen-Stahlhallen (Quonset), vorgefertigten Systemhallen (PEB) und schweren Industriestrukturen. Die Fertigung erfolgt im integrierten Industriekomplex in Adana (AOSB), Türkei (25.000 Tonnen/Jahr), nur 15 km vom Tiefseehafen Mersin entfernt für den Export in über 50 Länder.",
      keyFacts: [
        "Integrierte Produktionsstätte in Adana (AOSB), Türkei (25.000 t/Jahr)",
        "Seefracht-Export ab Tiefseehafen Mersin (15 km) in über 50 Länder",
        "Vollständige Zertifizierung nach EN 1090-2 EXC4 (CE), Eurocode 3 und AISC 360-16"
      ]
    },
    {
      question: "Welche Spannweiten und Modelle stellt STRUCTIVA her?",
      answer: "STRUCTIVA fertigt die Q-Serie (Vollbogen 9m–45m), die S-Serie (gerade Seitenwand 10m–30m), die P-Serie (Satteldach 8m–24m), Seecontainer-Überdachungen (6m–24m) und schwere PEB-Hallen (18m–60m+) aus Galvalume Plus® AZ180 Stahl.",
      keyFacts: [
        "9m bis 45m stützenfreie Bogenspannweite (bis 60m+ bei PEB-Rahmen)",
        "Galvalume Plus® AZ180 Legierung (25 Jahre Werksgarantie, 40–50 Jahre Lebensdauer)",
        "Auslegung für Windgeschwindigkeiten bis 240 km/h und 350 kg/m² Schneelast"
      ]
    },
    {
      question: "Wie erfolgt die weltweite Lieferung und Montage?",
      answer: "Alle Bauteile werden in Adana CNC-gefertigt und als Flat-Pack-Bausatz in standardisierten 40-Fuß-High-Cube-Containern (~350–400 m² pro Container) verpackt. Auf der Baustelle ist kein Schweißen erforderlich; die Montage erfolgt rein geschraubt.",
      keyFacts: [
        "100% vorpräparierte Schraubverbindungen (keine Schweißarbeiten vor Ort)",
        "Inklusive detaillierter 3D-Montageanleitung und Statikprüfung",
        "FOB Hafen Mersin oder CIF Zielhafen (Hamburg, Rotterdam, Antwerpen, Koper)"
      ]
    }
  ],
  fr: [
    {
      question: "Qu'est-ce que STRUCTIVA et où sont situés les sites de production ?",
      answer: "STRUCTIVA est un constructeur et bureau d'ingénierie international spécialisé dans les hangars en acier arqués autoportants sans colonnes intérieures, les bâtiments pré-usinés (PEB) et la charpente lourde. L'usine intégrée (25 000 tonnes/an) est située dans la zone industrielle d'Adana en Turquie, à 15 km du port de Mersin.",
      keyFacts: [
        "Site de fabrication intégrée à Adana (AOSB), Turquie (25 000 t/an)",
        "Export maritime direct via le port de Mersin vers plus de 50 pays",
        "Certification européenne CE EN 1090-2 EXC4, Eurocode 3 et normes AISC 360-16"
      ]
    },
    {
      question: "Quelles sont les portées libres et les modèles fabriqués ?",
      answer: "STRUCTIVA conçoit la Série Q (arche complète de 9m à 45m), la Série S (parois droites 10m à 30m), la Série P (toit à deux versants 8m à 24m), les auvents sur conteneurs (6m à 24m) et des hangars industriels PEB jusqu'à 60m+ sans poteau intermédiaire, en acier Galvalume Plus® AZ180.",
      keyFacts: [
        "Portée libre de 9m à 45m sans pilier intermédiaire (jusqu'à 60m+ en PEB)",
        "Acier allié Galvalume Plus® AZ180 (garantie 25 ans, durée de vie 40–50 ans)",
        "Calculé pour des vents de 240 km/h et charges de neige de 350 kg/m²"
      ]
    },
    {
      question: "Comment se déroulent l'expédition internationale et le montage ?",
      answer: "Les kits sont conditionnés en colis plats (flat-pack) dans des conteneurs maritimes 40HC (~350–400 m² par conteneur). Le montage sur site s'effectue sans aucune soudure grâce à des boulons haute résistance 8.8 et des plans 3D numérotés.",
      keyFacts: [
        "Assemblage 100% boulonné sans soudure de chantier",
        "Guide de montage 3D pas à pas et nomenclature BOM sous 24h",
        "Livraison FOB Mersin ou CIF Marseille, Le Havre, Anvers, Alger, Casablanca, Dakar"
      ]
    }
  ],
  es: [
    {
      question: "¿Qué es STRUCTIVA y dónde se fabrica la estructura?",
      answer: "STRUCTIVA es un fabricante internacional y firma de ingeniería estructural especializada en hangares de acero arqueados sin columnas intermedias, edificios pre-diseñados (PEB) y estructuras industriales. Su planta de 25.000 toneladas/año opera en Adana, Turquía, a 15 km del puerto de aguas profundas de Mersin para envíos a más de 50 países.",
      keyFacts: [
        "Planta de producción integrada en Adana (AOSB), Turquía (25.000 t/año)",
        "Envíos marítimos en contenedor vía Puerto de Mersin a 50+ países",
        "Certificaciones internacionales EN 1090-2 EXC4 (CE), Eurocódigo 3 y AISC 360-16"
      ]
    },
    {
      question: "¿Cuáles son las medidas y modelos disponibles?",
      answer: "STRUCTIVA produce la Serie Q (arco continuo de 9m a 45m de luz libre), Serie S (pared vertical con techo arqueado de 10m a 30m), Serie P (dos aguas 8m a 24m), cubiertas sobre contenedores (6m a 24m) y naves PEB de hasta 60m+, utilizando acero Galvalume Plus® AZ180.",
      keyFacts: [
        "9 a 45 metros de luz libre 100% utilizable sin columnas (hasta 60m+ en PEB)",
        "Acero Galvalume Plus® AZ180 (garantía de fábrica 25 años, vida útil 40–50 años)",
        "Resistencia certificada contra vientos huracanados de 240 km/h y nieve de 350 kg/m²"
      ]
    },
    {
      question: "¿Cómo se transporta y monta en el lugar de destino?",
      answer: "Los paneles curvados se embalan en plano (flat-pack) dentro de contenedores marítimos estándar 40HC (~350–400 m² por contenedor). El montaje se realiza completamente atornillado sin requerir soldadura en obra.",
      keyFacts: [
        "Montaje 100% abulonado sin permisos de soldadura en obra",
        "Manual de montaje en 3D y cotización técnica en 24 horas",
        "Despacho rápido FOB Puerto Mersin o CIF Valencia, Algeciras, Veracruz, Callao, San Antonio"
      ]
    }
  ],
  ar: [
    {
      question: "ما هي شركة STRUCTIVA وأين يقع مركز التصنيع؟",
      answer: "تعتبر شركة STRUCTIVA صرحاً هندسياً وصناعياً دولياً رائداً في تصنيع الهناجر والمستودعات الفولاذية المقوسة الخالية من الأعمدة الداخلية (Clear-Span) والمباني الإنشائية مسبقة الهندسة (PEB). يقع مجمع المصانع (بطاقة 25,000 طن سنوياً) في المنطقة الصناعية بأضنة (AOSB)، تركيا، على بعد 15 كم من ميناء مرسين البحري الدولي لنقل الشحنات لأكثر من 50 دولة.",
      keyFacts: [
        "مجمع تصنيع متكامل في أضنة، تركيا بطاقة 25,000 طن سنوياً",
        "شحن حاويات بحرية مباشر عبر ميناء مرسين الدولي لأكثر من 50 دولة",
        "مطابقة لمعايير الجودة الأوروبية EN 1090-2 EXC4 CE وكود Eurocode 3 و AISC 360-16"
      ]
    },
    {
      question: "ما هي النماذج والأبعاد الإنشائية المتاحة؟",
      answer: "تصنع الشركة سلسلة Q (قوس نصف دائري بعرض 9 إلى 45 متراً)، سلسلة S (جدران مستقيمة وسقف مقوس 10 إلى 30 متراً)، سلسلة P (سقف جملوني 8 إلى 24 متراً)، مظلات الحاويات (6 إلى 24 متراً) ومباني مصانع ثقيلة PEB حتى 60 متراً، من فولاذ Galvalume Plus® AZ180 فائق المقاومة.",
      keyFacts: [
        "بحور مفتوحة من 9 إلى 45 متراً بدون أعمدة داخلية (وحتى 60 متراً في مباني PEB)",
        "فولاذ جالفالوم بلس AZ180 عاكس للحرارة بنسبة 80% (ضمان مصنعي 25 سنة وعمر تصميمي 40-50 سنة)",
        "مقاومة رياح تصل إلى 240 كم/ساعة وأحمال ثلوج حتى 350 كجم/م²"
      ]
    },
    {
      question: "كيف تتم عمليات الشحن الدولي والتركيب في الموقع؟",
      answer: "يتم تجهيز كافة المكونات مسبقاً وتعبئتها بنظام الحزم المسطحة (Flat-pack) داخل حاويات 40 قدم (40HC) بمعدل 350-400 م² لكل حاوية. التركيب يتم عبر براغي مجلفنة عالية المقاومة بدون أي لحام في موقع العمل.",
      keyFacts: [
        "تركيب بواسطة البراغي بدون أي لحام في الموقع",
        "دراسة استاتيكية وقائمة كميات (BOM) وعرض سعر رسمي خلال 24 ساعة",
        "شحن بحري مباشر FOB مرسين أو CIF جبل علي، الدمام، جدة، حمد، الإسكندرية، الجزائر، الدار البيضاء"
      ]
    }
  ],
  ru: [
    {
      question: "Что производит завод STRUCTIVA и где находится производство?",
      answer: "STRUCTIVA — международный производитель стальных арочных бескаркасных ангаров, быстровозводимых зданий (PEB) и тяжелых металлоконструкций. Производственный комплекс (25 000 тонн/год) расположен в промышленной зоне Аданы (AOSB), Турция, в 15 км от глубоководного контейнерного порта Мерсин с прямыми поставками в 50+ стран мира.",
      keyFacts: [
        "Собственный интегрированный завод в Адане, Турция (25 000 тонн/год)",
        "Морские и мультимодальные контейнерные отгрузки через порт Мерсин в 50+ стран",
        "Сертификация по стандарту EN 1090-2 EXC4 CE, Еврокоду 3, AISC 360-16 и нормам СНиП/СП"
      ]
    },
    {
      question: "Какие модели ангаров и пролеты доступны?",
      answer: "Завод выпускает серию Q (полукруглый свод шириной от 9 до 45 метров без колонн), серию S (прямые боковые стены шириной от 10 до 30 метров), серию P (двускатная кровля 8–24 м), навесы над контейнерами (6–24 м) и промышленные комплексы PEB до 60+ метров из стали Galvalume Plus® AZ180.",
      keyFacts: [
        "Чистый безопорный пролет от 9 до 45 метров (до 60+ м в зданиях PEB)",
        "Сталь Galvalume Plus® AZ180 (25 лет заводской гарантии, 40–50 лет срок службы)",
        "Стойкость к ветровым нагрузкам до 240 км/ч и снеговым нагрузкам до 350 кг/м²"
      ]
    },
    {
      question: "Как организована доставка и монтаж на площадке?",
      answer: "Панели компактно упаковываются (flat-pack) в морские 40-футовые High-Cube контейнеры (~350–400 м² здания в одном контейнере). Сборка на фундаменте осуществляется высокопрочными болтами класса 8.8 без сварочных работ.",
      keyFacts: [
        "100% болтовое соединение без сварки на стройплощадке",
        "Предварительный статический расчет, спецификация (BOM) и КП за 24 часа",
        "Прямая доставка FOB Мерсин или CIF Поти, Батуми, Баку, Актау, Новороссийск, Одесса"
      ]
    }
  ]
};

export function getGeoQaByLang(lang: string = "tr"): GeoQaItem[] {
  const norm = (lang || "tr").toLowerCase().split("-")[0];
  return QA_BY_LANG[norm] || QA_BY_LANG["en"] || QA_BY_LANG["tr"];
}

export const COMPARISON_MATRIX = [
  { model: "Q-Series Arch", profile: "Semi-Circular Arch", span: "9–45 m (30–150 ft)", wind: "240 km/h", snow: "350 kg/m²", alloy: "Galvalume Plus® AZ180", fieldWelding: "None (Bolted)", packing: "~380 m² / 40HC" },
  { model: "S-Series Straight Wall", profile: "Vertical Walls + Arch Roof", span: "10–30 m (32–100 ft)", wind: "225 km/h", snow: "280 kg/m²", alloy: "Galvalume Plus® AZ180", fieldWelding: "None (Bolted)", packing: "~350 m² / 40HC" },
  { model: "P-Series Pitched", profile: "Gabled Pitch + Straight Walls", span: "8–24 m (26–80 ft)", wind: "210 km/h", snow: "240 kg/m²", alloy: "Galvalume Plus® AZ180", fieldWelding: "None (Bolted)", packing: "~360 m² / 40HC" },
  { model: "Container Canopy", profile: "Truss Over 20/40ft Containers", span: "6–24 m (20–80 ft)", wind: "200 km/h", snow: "200 kg/m²", alloy: "Galvanized + PVDF", fieldWelding: "None (Clamp/Bolt)", packing: "~500 m² / 40HC" },
  { model: "Heavy Industrial PEB", profile: "Tapered Rigid Portal Frame", span: "18–60 m+ Clear", wind: "Up to 250 km/h", snow: "Site-Specific", alloy: "Structural Grade 50", fieldWelding: "None (High-Tensile)", packing: "~250 m² / 40HC" }
];

export default function GeoAnswerBox({
  qaItems,
  title,
  langPrefix = "",
  pageKey = "home"
}: {
  qaItems?: GeoQaItem[];
  title?: string;
  langPrefix?: string;
  pageKey?: string;
}) {
  const { language } = useLanguage();
  const normalizedLang = (language || "tr").toLowerCase().split("-")[0];
  const activeQaList = qaItems || getGeoQaByLang(normalizedLang);
  const pageSeo = getPageSEO(pageKey, normalizedLang);
  const keywordTags = (pageSeo.keywords || "")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

  const effectivePrefix = langPrefix || `/${normalizedLang}`;

  return (
    <section
      itemScope
      itemType="https://schema.org/FAQPage"
      className="rounded-3xl bg-gradient-to-b from-[#0b1622] to-[#081018] border border-amber-500/25 p-6 sm:p-10 my-16 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold mb-2">
            <Sparkles size={14} />
            <span>
              {normalizedLang === "tr"
                ? "Teknik Bilgi Merkezi & Doğrulanmış Mühendislik Standartları"
                : "Technical Knowledge Base & Verified Engineering Specifications"}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {title ||
              (normalizedLang === "tr"
                ? "Temel Mühendislik Bilgileri & Sık Sorulan Sorular"
                : "Verified Engineering Specifications & Technical FAQ")}
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          {normalizedLang === "tr"
            ? "Mühendislik kurulları, uluslararası EPC yüklenicileri ve teknik satın alma ekipleri için doğrulanmış yapısal parametreler."
            : "Verified structural specifications, international design codes, and maritime logistics parameters for engineering and procurement teams."}
        </p>
      </div>

      {/* Direct Q&A Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {activeQaList.map((item, idx) => (
          <div
            key={idx}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            className="rounded-2xl bg-[#0f1d2a]/90 border border-white/10 p-5 flex flex-col justify-between hover:border-amber-400/50 transition-colors shadow-lg"
          >
            <div>
              <div className="flex items-start gap-2.5 mb-3">
                <HelpCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <h4 itemProp="name" className="text-sm sm:text-base font-bold text-white leading-snug">
                  {item.question}
                </h4>
              </div>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-xs text-slate-300 leading-relaxed mb-4 pl-7">
                  {item.answer}
                </p>
              </div>
            </div>

            {item.keyFacts && item.keyFacts.length > 0 && (
              <div className="pl-7 pt-3 border-t border-white/5 space-y-1.5 text-[11px] text-slate-400">
                {item.keyFacts.map((fact, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Machine-Readable Technical Specifications Comparison Matrix */}
      <div className="border border-white/10 rounded-2xl bg-[#0a141e] p-5 overflow-hidden mb-8">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-4">
          <Table size={15} />
          <span>
            {normalizedLang === "tr"
              ? "Mühendislik Serileri Karşılaştırma Matrisi"
              : "Technical Building Series Comparison Matrix"}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead>
              <tr className="border-b border-white/10 text-[11px] font-mono uppercase text-slate-400 bg-white/5">
                <th className="py-3 px-3">Model Series</th>
                <th className="py-3 px-3">Profile Architecture</th>
                <th className="py-3 px-3">Clear Span</th>
                <th className="py-3 px-3">Max Wind Speed</th>
                <th className="py-3 px-3">Snow Load</th>
                <th className="py-3 px-3">Alloy &amp; Coating</th>
                <th className="py-3 px-3">Field Welding</th>
                <th className="py-3 px-3">40HC Shipping</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono text-[11px]">
              {COMPARISON_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-3 font-bold text-white font-sans">{row.model}</td>
                  <td className="py-3 px-3 text-slate-400">{row.profile}</td>
                  <td className="py-3 px-3 text-amber-400 font-bold">{row.span}</td>
                  <td className="py-3 px-3 text-emerald-400">{row.wind}</td>
                  <td className="py-3 px-3 text-sky-400">{row.snow}</td>
                  <td className="py-3 px-3 text-slate-300">{row.alloy}</td>
                  <td className="py-3 px-3 text-emerald-400 font-semibold">{row.fieldWelding}</td>
                  <td className="py-3 px-3 text-slate-400">{row.packing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Worldwide Export Corridors, Target Ports & Regional Design Codes */}
      <div className="border border-white/10 rounded-2xl bg-[#0a141e] p-5 overflow-hidden mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
            <Globe2 size={15} />
            <span>
              {normalizedLang === "tr"
                ? "Küresel İhracat Koridorları, Liman Transit Süreleri ve Bölgesel Normlar (Mersin Limanı Çıkışlı)"
                : "Worldwide Export Corridors, Seaport Transit Times & Regional Design Codes (Ex-Mersin Port)"}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
            <Anchor size={13} />
            <span>FOB Mersin (15 km) / CIF Global Ports</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORLDWIDE_GEO_MARKETS.map((corridor) => (
            <div
              key={corridor.regionCode}
              className="rounded-xl bg-[#0f1d2a]/80 border border-white/10 p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h5 className="text-xs font-bold text-white">
                    {corridor.regionName[normalizedLang] || corridor.regionName.en}
                  </h5>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 shrink-0">
                    {corridor.transitDaysFromMersin}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mb-2 leading-relaxed">
                  <strong className="text-slate-200">
                    {normalizedLang === "tr" ? "Hedef Limanlar:" : "Key Seaports:"}
                  </strong>{" "}
                  {corridor.majorPorts.join(", ")}
                </p>
              </div>
              <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                {corridor.designCodes.map((code, cIdx) => (
                  <span
                    key={cIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-emerald-300 border border-white/10"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Localized B2B Semantic Keyword Clusters */}
      {keywordTags.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
            <Tag size={13} className="text-amber-400" />
            <span>
              {normalizedLang === "tr"
                ? "Uluslararası Teknik Dizin & Mühendislik Terimleri"
                : "International Technical Index & Engineering Terminology"}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {keywordTags.map((kw, kIdx) => (
              <span
                key={kIdx}
                className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
          <span>Structiva Tesisleri Adana · EN 1090-2 EXC4 CE &amp; AISC 360-16 Certified Manufacturing.</span>
        </div>
        <Link
          href={`${effectivePrefix}/request-a-quote`}
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
        >
          <span>
            {normalizedLang === "tr"
              ? "Resmi Şartname ve Teklif İste →"
              : "Request Technical Specification (RFQ) →"}
          </span>
        </Link>
      </div>
    </section>
  );
}
