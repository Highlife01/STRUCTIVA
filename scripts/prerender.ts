/**
 * STRUCTIVA — Static Site Generation (SSG) & Multi-Page Prerender Engine
 * 
 * Generates physical .html files with dedicated SEO meta tags, JSON-LD schemas,
 * and rich semantic HTML for all primary routes and multilingual paths.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const DIST_PUBLIC = path.join(ROOT_DIR, "dist", "public");
const BASE_INDEX_HTML = path.join(DIST_PUBLIC, "index.html");

const SITE_URL = "https://www.structiva.com.tr";
const BRAND_NAME = "STRUCTIVA";
const PHONE = "+90 532 055 09 45";
const EMAIL = "info@structiva.com.tr";
const ADDRESS = "Adana Organize Sanayi Bölgesi (AOSB), Çelik İmalat Caddesi No:12, Adana, Türkiye";

// Core supported languages for SSG generation
const SSG_LANGUAGES = [
  { code: "tr", name: "Türkçe", dir: "ltr" },
  { code: "en", name: "English", dir: "ltr" },
  { code: "de", name: "Deutsch", dir: "ltr" },
  { code: "fr", name: "Français", dir: "ltr" },
  { code: "es", name: "Español", dir: "ltr" },
  { code: "ar", name: "العربية", dir: "rtl" },
  { code: "ru", name: "Русский", dir: "ltr" },
];

const ALL_HREFLANGS = [
  "tr", "en", "de", "fr", "es", "it", "pt", "nl", "pl", "ro",
  "bg", "el", "cs", "hu", "sr", "hr", "ru", "uk", "ar", "fa",
  "he", "zh", "ja", "ko", "hi", "id", "ms", "vi", "th", "az"
];

interface PageConfig {
  slug: string; // e.g. "models", "engineering"
  title: Record<string, string>;
  description: Record<string, string>;
  h1: Record<string, string>;
  subheading: Record<string, string>;
  bodyHtml: Record<string, string>;
  breadcrumbs: Array<{ name: string; path: string }>;
  schemaType: "WebPage" | "ProductModel" | "Article" | "ContactPage" | "AboutPage";
}

const PAGES: PageConfig[] = [
  {
    slug: "",
    schemaType: "WebPage",
    breadcrumbs: [{ name: "STRUCTIVA", path: "/" }],
    title: {
      tr: "Kolonsuz Kemer Çelik Yapı & Hangar İmalatı | STRUCTIVA® Adana",
      en: "Clear-Span Arch Steel Buildings & Hangar Manufacturing | STRUCTIVA®",
      de: "Säulenfreie Bogen-Stahlhallen & Hangars | STRUCTIVA® Adana",
      fr: "Hangars Métalliques en Voûte Autoportante Sans Colonne | STRUCTIVA®",
      es: "Hangares y Estructuras Metálicas de Acero sin Columnas | STRUCTIVA®",
      ar: "هياكل حديدية مقوسة ومستودعات بدون أعمدة | STRUCTIVA® تركيا",
      ru: "Арочные бескаркасные ангары из стали | STRUCTIVA® Адана",
    },
    description: {
      tr: "Adana fabrikamızda EN 1090-2 EXC4 sertifikalı, 9m-45m kolonsuz açıklık kemer çelik hangarlar üretiyoruz. Mersin Limanı'na 15 km mesafede flat-pack konteyner ihracatı.",
      en: "Manufacturer of EN 1090-2 EXC4 certified clear-span arch steel hangars (9m-45m). Located in Adana, 15 km from Mersin International Deep-Water Container Port. Direct export to 50+ countries.",
      de: "Hersteller von EN 1090-2 EXC4 zertifizierten säulenfreien Bogenschuppen (9m-45m). Standort Adana, 15 km vom Hafen Mersin. Direkter Export in über 50 Länder.",
      fr: "Fabricant de hangars arqués sans colonnes intérieures de 9m à 45m. Usine à Adana, à 15 km du port de Mersin. Exportation directe dans plus de 50 pays.",
      es: "Fabricación de hangares arqueados de acero sin columnas intermedias (9m a 45m). Planta en Adana, a 15 km del Puerto de Mersin. Exportación a más de 50 países.",
      ar: "تصنيع هناجر ومستودعات فولاذية مقوسة بدون أعمدة داخلية من 9 إلى 45 متراً. مصنعنا في أضنة يبعد 15 كم عن ميناء مرسين. تصدير مباشر إلى أكثر من 50 دولة.",
      ru: "Производство арочных стальных ангаров без промежуточных колонн шириной от 9 до 45 метров. Завод в Адане, 15 км от порта Мерсин. Экспорт в 50+ стран мира.",
    },
    h1: {
      tr: "Kolonsuz Kemerli Çelik Yapılar & Ağır Sanayi Hangarları",
      en: "Clear-Span Arch Steel Buildings & Industrial Hangars",
      de: "Säulenfreie Bogen-Stahlgebäude & Industriehallen",
      fr: "Bâtiments en Acier Arqué Sans Piliers & Hangars Industriels",
      es: "Estructuras Arqueadas de Acero sin Columnas & Hangares Industriales",
      ar: "مباني فولاذية مقوسة خالية من الأعمدة وهناجر صناعية كبرى",
      ru: "Стальные арочные сооружения без колонн и промышленные ангары",
    },
    subheading: {
      tr: "Galvalume Plus® AZ180 alaşımlı çelik ile 45 metreye kadar iç kolonsuz, 240 km/h rüzgara dayanıklı, flat-pack konteyner sevkiyatlı yapılar.",
      en: "Up to 45m column-free clear spans engineered with Galvalume Plus® AZ180 steel, resisting 240 km/h hurricane winds with flat-pack 40HC container delivery.",
      de: "Bis zu 45m stützenfreie Spannweite aus Galvalume Plus® AZ180 Stahl, 240 km/h windzertifiziert, im 40HC Container lieferbar.",
      fr: "Portée libre jusqu'à 45 m sans colonnes en acier Galvalume Plus® AZ180, résistance au vent de 240 km/h, livraison en conteneur 40HC.",
      es: "Hasta 45 metros de luz libre sin columnas en acero Galvalume Plus® AZ180, resistente a vientos de 240 km/h y despacho en contenedor 40HC.",
      ar: "بحور مفتوحة حتى 45 متراً بدون أعمدة من فولاذ جالفالوم بلس AZ180، مقاومة رياح حتى 240 كم/س وشحن حاويات بحرية 40 قدم.",
      ru: "Пролеты до 45 метров без внутренних опор из стали Galvalume Plus® AZ180, стойкость к ветру до 240 км/ч, упаковка в 40HC контейнеры.",
    },
    bodyHtml: {
      tr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">9m – 45m</span>
              <p class="text-sm text-slate-300">İç kolonsuz açık açıklık ile %100 kullanılabilir zemin alanı.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">240 km/h</span>
              <p class="text-sm text-slate-300">Kasırga ve deprem sertifikalı Eurocode 3 / AISC statik hesap.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">15 km</span>
              <p class="text-sm text-slate-300">Mersin Uluslararası Konteyner Limanı'na lojistik yakınlık.</p>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">Neden STRUCTIVA Kolonsuz Kemer Çelik Hangarları?</h2>
          <ul class="space-y-3 text-slate-300 text-sm mb-8 list-disc pl-5">
            <li><strong>Maksimum İç Hacim:</strong> İçeride kolon, kafes kiriş veya destek ayakları bulunmaz. Forklift, vinç ve tarım makineleri engelsiz çalışır.</li>
            <li><strong>Galvalume Plus® AZ180 Mukavemeti:</strong> %55 Alüminyum - Çinko alaşımı sayesinde standart galvanizli saclara göre 4 kata kadar daha uzun korozyon ömrü sunar.</li>
            <li><strong>Cıvatalı Hızlı Montaj:</strong> Sahada şantiye kaynağı gerektirmez. Yüksek mukavemetli 8.8 kalite cıvatalarla haftalar içinde kurulur.</li>
            <li><strong>Flat-Pack Konteyner Lojistiği:</strong> 350-400 m² hangar kiti tek bir 40HC konteynere paketlenerek dünyanın her limanına en uygun navlunla sevk edilir.</li>
          </ul>
        </div>
      `,
      en: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">9m – 45m</span>
              <p class="text-sm text-slate-300">100% column-free clear span with zero internal obstructions.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">240 km/h</span>
              <p class="text-sm text-slate-300">Certified hurricane and seismic static resistance per Eurocode 3.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">15 km</span>
              <p class="text-sm text-slate-300">Proximity to Mersin International Container Port for direct freight.</p>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">Why STRUCTIVA Pre-Engineered Arched Steel Hangars?</h2>
          <ul class="space-y-3 text-slate-300 text-sm mb-8 list-disc pl-5">
            <li><strong>Maximized Internal Usable Space:</strong> No interior trusses or columns, allowing full forklift, overhead crane, and aircraft maneuvering.</li>
            <li><strong>Galvalume Plus® AZ180 Alloy:</strong> 55% Aluminum-Zinc alloy coating providing up to 4x the corrosion resistance of standard galvanized steel.</li>
            <li><strong>Weld-Free Bolt Assembly:</strong> Manufactured with precision bolt patterns. Assembled in days with zero field welding permits required.</li>
            <li><strong>Global Flat-Pack Shipping:</strong> 350-400 m² of building components flat-pack into a single 40ft High Cube container.</li>
          </ul>
        </div>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Säulenfreie Bogen-Stahlhallen und Hangars gefertigt in Adana nach EN 1090-2 EXC4 Standard.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Hangars et entrepôts métalliques autoportants en acier Galvalume Plus® certifiés CE et Eurocode 3.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Estructuras y hangares de acero sin columnas intermedias, fabricados bajo estándares internacionales en Adana.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">هياكل ومستودعات فولاذية مقوسة بدون أعمدة داخلية مصنعة وفق أعلى معايير الجودة العالمية في أضنة، تركيا.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Бескаркасные стальные ангары и склады без внутренних колонн от производителя STRUCTIVA в Турции.</p></div>`
    }
  },
  {
    slug: "models",
    schemaType: "ProductModel",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "Modeller", path: "/models" }
    ],
    title: {
      tr: "Kemer & Çelik Yapı Modelleri | Q, S, P Serisi Hangar | STRUCTIVA®",
      en: "Arched & Pre-Engineered Steel Building Models | STRUCTIVA®",
      de: "Bogen- & Stahlhallen-Modelle | Q-, S-, P-Serie | STRUCTIVA®",
      fr: "Modèles de Hangars et Bâtiments en Acier Arqué | STRUCTIVA®",
      es: "Modelos de Hangares y Estructuras Metálicas | STRUCTIVA®",
      ar: "نماذج الهناجر والمباني الفولاذية المقوسة | STRUCTIVA®",
      ru: "Модели стальных арочных ангаров и зданий | STRUCTIVA®",
    },
    description: {
      tr: "Q-Serisi tam kemer, S-Serisi düz duvar kemer çatı ve P-Serisi beşik çatı modelleri. 9m'den 45m'ye kadar kolonsuz, cıvatalı Galvalume Plus® çelik yapılar.",
      en: "Explore Q-Series full arch, S-Series straight-wall arch roof, and P-Series gable pitch steel buildings. Clear spans 9m to 45m with certified 240 km/h wind resistance.",
      de: "Entdecken Sie die Q-Serie (Vollbogen), S-Serie (gerade Seitenwand) und P-Serie. Stützenfreie Spannweiten von 9m bis 45m.",
      fr: "Découvrez la Série Q (arche complète), la Série S (parois droites) et la Série P. Portées libres de 9m à 45m.",
      es: "Descubra la Serie Q (arco completo), Serie S (pared recta) y Serie P. Luces libres de 9m a 45m sin columnas intermedias.",
      ar: "استكشف سلسلة Q (قوس كامل)، سلسلة S (جدران مستقيمة مع سقف مقوس) وسلسلة P. بحور مفتوحة من 9 إلى 45 متراً.",
      ru: "Модели ангаров серии Q (полукруглый свод), серии S (прямые стены) и серии P. Пролеты от 9 до 45 метров без колонн.",
    },
    h1: {
      tr: "Kemerli ve Ağır Yapısal Çelik Bina Modelleri",
      en: "Arched & Pre-Engineered Structural Steel Building Models",
      de: "Modelle für Bogen- und schwere Stahlbauhallen",
      fr: "Modèles de Bâtiments en Acier Arqué et Charpente Lourde",
      es: "Modelos de Edificios de Acero Arqueado y Estructuras Pesadas",
      ar: "نماذج المباني الفولاذية المقوسة والإنشائية الثقيلة",
      ru: "Модели арочных и тяжелых стальных конструкций",
    },
    subheading: {
      tr: "Tarımsal depolama, havacılık hangarı, endüstriyel fabrika ve şantiye barınakları için EN 1090-2 EXC4 sertifikalı 5 temel mühendislik serisi.",
      en: "5 certified engineering series for bulk grain storage, aircraft maintenance, logistics centers, and heavy manufacturing.",
      de: "5 zertifizierte Bausysteme für Schüttgutlager, Flugzeughangars, Logistikzentren und Industrieanlagen.",
      fr: "5 séries d'ingénierie certifiées pour le stockage de grains, hangars d'aviation et usines industrielles.",
      es: "5 series de ingeniería certificadas para granos, hangares de aviación, centros logísticos y fábricas.",
      ar: "5 سلاسل هندسية معتمدة لتخزين الحبوب، هناجر الطائرات، المراكز اللوجستية والمصانع الكبرى.",
      ru: "5 сертифицированных инженерных серий для зернохранилищ, авиационных ангаров и логистических комплексов.",
    },
    bodyHtml: {
      tr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">Q-Serisi (Tam Kemer)</h3>
              <p class="text-sm text-slate-300 mb-3">Açıklık: 9m – 45m | Yükseklik: 4.5m – 18m</p>
              <p class="text-xs text-slate-400 leading-relaxed">Dünyanın en mukavim kemer geometrisi. İçeride sıfır kiriş kaybı ile %100 kullanılabilir hacim. Tahıl depoları, maden stok sahaları ve uçak hangarları için ideal.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">S-Serisi (Düz Duvar + Kemer)</h3>
              <p class="text-sm text-slate-300 mb-3">Açıklık: 10m – 30m | Yükseklik: 5m – 12m</p>
              <p class="text-xs text-slate-400 leading-relaxed">Dikey yan duvarlar sayesinde paletli raf sistemleri ve forklift manevraları için maksimum duvar dibi yüksekliği sunar.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">P-Serisi (Beşik Çatı)</h3>
              <p class="text-sm text-slate-300 mb-3">Açıklık: 8m – 24m | Yükseklik: 4m – 9m</p>
              <p class="text-xs text-slate-400 leading-relaxed">Geleneksel beşik çatı mimarisini cıvatalı kemer çelik hızıyla birleştiren atölye ve ticari garaj modeli.</p>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">Galvalume Plus® AZ180 Alaşım Avantajı</h2>
          <p class="text-sm text-slate-300 leading-relaxed mb-6">Tüm panellerimiz ASTM A792 standartlarında %55 Alüminyum, %43.4 Çinko ve %1.6 Silikon alaşımlı sıcak daldırma kaplamalıdır. Güneş ışınlarını yansıtarak bina içini yazın serin tutar ve korozyona karşı üstün koruma sağlar.</p>
        </div>
      `,
      en: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">Q-Series (Full Arch)</h3>
              <p class="text-sm text-slate-300 mb-3">Span: 9m – 45m | Height: 4.5m – 18m</p>
              <p class="text-xs text-slate-400 leading-relaxed">The world's strongest arch shape. 100% usable interior volume with zero structural loss. Ideal for bulk grain, mining stockpiles, and aviation hangars.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">S-Series (Straight Sidewall)</h3>
              <p class="text-sm text-slate-300 mb-3">Span: 10m – 30m | Height: 5m – 12m</p>
              <p class="text-xs text-slate-400 leading-relaxed">Vertical straight sidewalls optimize vertical pallet racking and forklift operations along the building perimeter.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">P-Series (Gable Roof)</h3>
              <p class="text-sm text-slate-300 mb-3">Span: 8m – 24m | Height: 4m – 9m</p>
              <p class="text-xs text-slate-400 leading-relaxed">Combines a traditional pitched roof silhouette with arched panel engineering for workshops and commercial garages.</p>
            </div>
          </div>
        </div>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Überblick über unsere Modellreihen Q-Serie, S-Serie und P-Serie für industrielle Nutzung.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Aperçu des gammes de bâtiments en acier arqués Série Q, Série S et Série P.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Modelos de hangares y estructuras de acero de las Series Q, S y P para uso industrial y comercial.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">تفاصيل نماذج الهناجر الفولاذية سلسلة Q و S و P لتلبية مختلف الاحتياجات الصناعية والتجارية.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Характеристики и параметры арочных стальных моделей серии Q, серии S и серии P.</p></div>`
    }
  },
  {
    slug: "sectors",
    schemaType: "WebPage",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "Sektörler", path: "/sectors" }
    ],
    title: {
      tr: "Kullanım Alanları & Sektörel Çelik Yapılar | STRUCTIVA®",
      en: "Industry Sectors & Building Applications | STRUCTIVA®",
      de: "Branchen & Anwendungsbereiche | STRUCTIVA®",
      fr: "Secteurs d'Activité & Applications | STRUCTIVA®",
      es: "Sectores de Aplicación & Usos Industriales | STRUCTIVA®",
      ar: "قطاعات الاستخدام والتطبيقات الصناعية | STRUCTIVA®",
      ru: "Отрасли применения и назначение зданий | STRUCTIVA®",
    },
    description: {
      tr: "Tarım ve tahıl silosu, uçak/helikopter hangarı, lojistik depolama, askeri mühimmat barınağı ve endüstriyel tesisler için kolonsuz çelik çözümler.",
      en: "Engineered clear-span steel buildings for agriculture grain storage, aviation aircraft hangars, mining containment, military shelters, and logistics.",
      de: "Spezifische Hallenlösungen für Landwirtschaft, Getreidelager, Flugzeughangars, Bergbau und Logistik.",
      fr: "Bâtiments en acier autoportants pour l'agriculture, l'aviation, les mines et les entrepôts logistiques.",
      es: "Soluciones de acero sin columnas para agricultura, hangares de aviación, minería y logística de distribución.",
      ar: "حلول إنشائية متخصصة لتخزين الحبوب الزراعية، هناجر الطائرات، قطاع التعدين، والمستودعات اللوجستية الكبرى.",
      ru: "Решения для сельского хозяйства, зернохранилищ, авиационных ангаров, горнодобывающей промышленности и логистики.",
    },
    h1: {
      tr: "Sektörel Çelik Yapı ve Hangar Çözümleri",
      en: "Sector-Specific Clear-Span Steel Building Solutions",
      de: "Branchenspezifische Stahlhallen-Lösungen",
      fr: "Solutions de Bâtiments Métalliques par Secteur",
      es: "Soluciones de Hangares Metálicos por Sector",
      ar: "حلول المباني الفولاذية والهناجر حسب القطاع",
      ru: "Отраслевые решения стальных ангаров и складов",
    },
    subheading: {
      tr: "Farklı sektörlerin operasyonel ihtiyaçlarına göre optimize edilmiş kolonsuz, yangına ve kimyasallara dayanıklı çelik hangar tasarımları.",
      en: "Custom engineered steel designs optimized for heavy equipment clearances, chemical vapors, and high-density bulk storage.",
      de: "Optimiert für Schwermaschinen, aggressive Atmosphären und Schüttgutlagerung.",
      fr: "Optimisé pour les gros engins, les vapeurs chimiques et le stockage en vrac.",
      es: "Optimizado para maquinaria pesada, almacenamiento a granel y atmósferas agresivas.",
      ar: "تصاميم مخصصة للمعدات الثقيلة، تخزين البضائع السائبة، ومقاومة المواد الكيميائية والظروف القاسية.",
      ru: "Оптимизировано для тяжелой техники, сыпучих грузов и агрессивных сред.",
    },
    bodyHtml: {
      tr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🌾 Tarım ve Tahıl Depolama</h3>
              <p class="text-sm text-slate-300">İç kolonsuz yapısı sayesinde buğday, mısır, arpa ve gübre yığınları duvar dibine kadar kesintisiz doldurulabilir. Kuş yuvalanmasını önleyen pürüzsüz kemer panelleri ürün hijyenini korur.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">✈️ Havacılık ve Helikopter Hangarı</h3>
              <p class="text-sm text-slate-300">42 metreye varan net açıklık ve hidrolik katlanır veya sürgülü kapı entegrasyonu ile özel jetler, turboprop uçaklar ve askeri helikopterler için risksiz park ve bakım alanı sağlar.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">⛏️ Madencilik ve Agrega Stok Sahaları</h3>
              <p class="text-sm text-slate-300">Toz yayılımını önler, konveyör hatlarını örter ve aşındırıcı kimyasal gazlara karşı Galvalume Plus® alaşımı ile paslanmaz koruma sunar.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📦 Lojistik, Antrepo ve Soğuk Hava Depoları</h3>
              <p class="text-sm text-slate-300">Forkliftlerin ve tırların bina içerisinde 360 derece serbest manevra yapabilmesini sağlar; izolasyon şilteleri ile tam termal kontrol elde edilir.</p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🌾 Agriculture & Grain Storage</h3>
              <p class="text-sm text-slate-300">Column-free arches allow unrestricted end-to-end bulk piling of wheat, corn, and fertilizer without interior corners or roosting birds.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">✈️ Aviation Hangars</h3>
              <p class="text-sm text-slate-300">Clear spans up to 42m with hydraulic bi-fold or multi-track sliding door systems for private jets, turboprops, and military aircraft.</p>
            </div>
          </div>
        </div>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Detaillierte Branchenlösungen für Agrarwirtschaft, Luftfahrt, Bergbau und Logistik.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Applications sectorielles pour l'agriculture, l'aéronautique, les mines et les entrepôts.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Soluciones para agricultura, hangares aeronáuticos, minería y centros de distribución.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">تطبيقات المباني الفولاذية في قطاعات الزراعة، الطيران، التعدين، والتخزين اللوجستي.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Отраслевые решения для агросектора, авиации, добывающей промышленности и складов.</p></div>`
    }
  },
  {
    slug: "engineering",
    schemaType: "WebPage",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "Mühendislik", path: "/engineering" }
    ],
    title: {
      tr: "Mühendislik Standartları, Statik Hesap & Eurocode 3 | STRUCTIVA®",
      en: "Engineering Standards, Static Calculation & Eurocode 3 | STRUCTIVA®",
      de: "Ingenieurstandards, Statik & Eurocode 3 | STRUCTIVA®",
      fr: "Normes d'Ingénierie, Calcul Statique & Eurocode 3 | STRUCTIVA®",
      es: "Normas de Ingeniería, Cálculo Estático & Eurocode 3 | STRUCTIVA®",
      ar: "معايير الهندسة والحسابات الإنشائية وكود اليوروكود 3 | STRUCTIVA®",
      ru: "Инженерные стандарты, статические расчеты и Еврокод 3 | STRUCTIVA®",
    },
    description: {
      tr: "Eurocode 3 ve AISC 360-16 standartlarında 240 km/h rüzgar ve 250 kg/m² kar yükü dayanımlı statik hesaplar. Galvalume Plus AZ180 korozyon direnci.",
      en: "Structural engineering compliance under Eurocode 3 (EN 1993) and AISC 360-16. Certified up to 240 km/h wind velocity and 350 kg/m² snow load resistance.",
      de: "Tragwerksplanung nach Eurocode 3 und AISC 360-16. Zertifiziert für bis zu 240 km/h Windlast und 350 kg/m² Schneelast.",
      fr: "Conception structurelle conforme à l'Eurocode 3 et AISC 360-16. Certifié pour des vents de 240 km/h et de fortes charges de neige.",
      es: "Cálculos estructurales bajo normas Eurocódigo 3 y AISC 360-16. Resistencia certificada a vientos de 240 km/h y nieve extrema.",
      ar: "حسابات إنشائية واستاتيكية مطابقة لكود اليوروكود 3 و AISC 360-16، مقاومة رياح 240 كم/س وأحمال ثلوج مرتفعة.",
      ru: "Статические расчеты по Еврокоду 3 и AISC 360-16. Стойкость к ветровым нагрузкам до 240 км/ч и снеговым до 350 кг/м².",
    },
    h1: {
      tr: "Mühendislik Standartları, Statik Hesap ve Dayanım",
      en: "Structural Engineering Standards, Static Analysis & Durability",
      de: "Ingenieurwesen, Statische Berechnung & Dauerhaftigkeit",
      fr: "Ingénierie Structurale, Calcul Statique & Durabilité",
      es: "Ingeniería Estructural, Cálculo Estático y Resistencia",
      ar: "المعايير الهندسية، التحليل الإنشائي والمتانة الفائقة",
      ru: "Инженерные стандарты, прочностные расчеты и надежность",
    },
    subheading: {
      tr: "Her proje için yerel zemin, rüzgar ve kar haritasına göre lisanslı statik hesap raporları ve CE / EN 1090-2 EXC4 imalat sertifikası sağlıyoruz.",
      en: "Site-specific PE-stamped static calculation dossiers, wind tunnel verifications, and EN 1090-2 Execution Class 4 factory production control.",
      de: "Objektbezogene statische Nachweise, Windkanal-Validierung und Fertigung nach EN 1090-2 EXC4.",
      fr: "Dossiers de calcul statique certifiés, vérification au vent et fabrication EN 1090-2 EXC4.",
      es: "Memorias de cálculo estático personalizadas y fabricación certificada EN 1090-2 EXC4.",
      ar: "تقارير حسابات استاتيكية معتمدة وفق معايير EN 1090-2 EXC4 وشهادة المطابقة الأوروبية CE.",
      ru: "Индивидуальные расчетные отчеты и сертификация производства по EN 1090-2 EXC4.",
    },
    bodyHtml: {
      tr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📋 Uluslararası Kod Uyumluluğu</h3>
              <ul class="text-sm text-slate-300 space-y-2 list-disc pl-4">
                <li><strong>Eurocode 1 (EN 1991):</strong> Rüzgar ve kar yükü etki parametreleri.</li>
                <li><strong>Eurocode 3 (EN 1993):</strong> Çelik yapıların tasarımı ve eleman tahkiki.</li>
                <li><strong>EN 1090-2:</strong> İmalat yeterliliği (Execution Class EXC3 / EXC4).</li>
                <li><strong>AISC 360-16:</strong> Amerikan Çelik Yapı Şartnamesi.</li>
              </ul>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🛡️ Galvalume Plus® AZ180 Metalürjisi</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                ASTM A792 standartlarında %55 Alüminyum, %43.4 Çinko ve %1.6 Silikon kaplama. Alüminyum yüzeyde paslanmaz bariyer oluştururken, çinko çizilmelere karşı katodik koruma sağlar. Standart galvanizden 4 kat daha uzun ömürlüdür.
              </p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📋 Structural Code Compliance</h3>
              <ul class="text-sm text-slate-300 space-y-2 list-disc pl-4">
                <li><strong>Eurocode 1 (EN 1991):</strong> Wind velocity and ground snow drifts.</li>
                <li><strong>Eurocode 3 (EN 1993):</strong> Design of structural steel members.</li>
                <li><strong>EN 1090-2:</strong> Factory Production Control (Execution Class 4).</li>
                <li><strong>AISC 360-16:</strong> North American structural steel compliance.</li>
              </ul>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🛡️ Galvalume Plus® AZ180 Metallurgy</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                ASTM A792 coating with 55% Al, 43.4% Zn, and 1.6% Si. Provides sacrificial galvanic barrier protection outlasting standard galvanized steel by 4x.
              </p>
            </div>
          </div>
        </div>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Statische Nachweise und europäische Zulassungen nach EN 1090-2 und Eurocode 3.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Normes de conception structurale et métallurgie Galvalume Plus® AZ180.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Cumplimiento de normas técnicas europeas y americanas para hangares de acero.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">المعايير الهندسية والحسابات الإنشائية المطابقة للأكواد الدولية الأوروبية والأمريكية.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Инженерные нормативы, антикоррозийная защита Galvalume Plus® и ветроустойчивость.</p></div>`
    }
  },
  {
    slug: "configurator",
    schemaType: "WebPage",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "3D Konfigüratör", path: "/configurator" }
    ],
    title: {
      tr: "3D Çelik Hangar Konfigüratörü & Teknik Şartname | STRUCTIVA®",
      en: "3D Steel Building Configurator & Spec Sheet Generator | STRUCTIVA®",
      de: "3D Stahlhallen-Konfigurator & Leistungsverzeichnis | STRUCTIVA®",
      fr: "Configurateur 3D de Hangars Métalliques & Fiche Technique | STRUCTIVA®",
      es: "Configurador 3D de Hangares y Generador de Especificaciones | STRUCTIVA®",
      ar: "أداة التصميم ثلاثية الأبعاد للهناجر الفولاذية | STRUCTIVA®",
      ru: "3D Конфигуратор стальных ангаров и спецификация | STRUCTIVA®",
    },
    description: {
      tr: "İstediğiniz açıklık, uzunluk ve yükseklikte çelik yapınızı 3D olarak tasarlayın. Anında teknik şartname (PDF) ve 24 saatte FOB/CIF fiyat teklifi alın.",
      en: "Parametrically configure your steel building in interactive 3D. Download instant branded technical specification PDF sheets and receive 24h factory quotes.",
      de: "Konfigurieren Sie Ihr Stahlgebäude interaktiv in 3D und laden Sie direkt ein technisches PDF-Datenblatt herunter.",
      fr: "Configurez votre bâtiment métallique en 3D et téléchargez immédiatement une fiche technique PDF personnalisée.",
      es: "Diseñe su estructura de acero en 3D paramétrico y descargue la ficha técnica en PDF con presupuesto en 24h.",
      ar: "قم بتصميم الهنجر أو المستودع الفولاذي بأبعادك المطلوبة بتقنية 3D وحمل ورقة المواصفات الفنية PDF فوراً.",
      ru: "Спроектируйте стальной ангар в 3D с нужными размерами и скачайте готовую спецификацию в PDF.",
    },
    h1: {
      tr: "3D Çelik Yapı Konfigüratörü ve Mühendislik Şartnamesi",
      en: "3D Steel Building Configurator & Engineering Spec Generator",
      de: "3D Stahlbau-Konfigurator & Technische Spezifikation",
      fr: "Configurateur 3D & Générateur de Spécifications Techniques",
      es: "Configurador 3D y Generador de Especificaciones Técnicas",
      ar: "أداة التصميم ثلاثي الأبعاد وتوليد المواصفات الفنية المعتمدة",
      ru: "3D Конфигуратор стальных зданий и генератор спецификаций",
    },
    subheading: {
      tr: "Açıklık, uzunluk, tepe yüksekliği ve kapı konfigürasyonunu belirleyin; anında konteyner yükleme planı ve teknik şartname oluşturun.",
      en: "Define clear-span width, bay length, ridge peak height and door options for instant container freight volume calculations and PDF spec sheets.",
      de: "Geben Sie Breite, Länge und Höhe ein für sofortige Frachtberechnung und Datenblatt-Erstellung.",
      fr: "Définissez la largeur, longueur et hauteur pour un devis instantané et le calcul logistique des conteneurs.",
      es: "Defina la luz, longitud y altura para obtener cubicaje de transporte y ficha técnica en PDF.",
      ar: "حدد العرض والطول والارتفاع لتحصل على حجم الشحن بالحاويات والمواصفات الفنية خلال ثوانٍ.",
      ru: "Задайте ширину, длину и высоту для расчета объема контейнеров и скачивания PDF спецификации.",
    },
    bodyHtml: {
      tr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-8 text-center">
            <h2 class="text-xl font-bold text-amber-400 mb-2">İnteraktif 3D Tasarım Aracı</h2>
            <p class="text-sm text-slate-300">Sayfa tarayıcınızda açıldığında WebGL destekli gerçek zamanlı 3D motoru devreye girer. Çelik kemer panellerini 360 derece döndürebilir ve ölçü değişikliklerini canlı izleyebilirsiniz.</p>
          </div>
        </div>
      `,
      en: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-8 text-center">
            <h2 class="text-xl font-bold text-amber-400 mb-2">Interactive 3D Engineering Tool</h2>
            <p class="text-sm text-slate-300">When loaded in a browser, the WebGL 3D engine renders your steel structure in real-time with live dimension sliders and instant PDF spec export.</p>
          </div>
        </div>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Interaktive 3D-Konfiguration von Industriehallen mit sofortigem Datenblatt-Export.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Outil de configuration 3D interactif avec export immédiat de fiche technique PDF.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Herramienta 3D interactiva para diseñar naves industriales y exportar especificaciones.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">أداة تصميم تفاعلية ثلاثية الأبعاد للهياكل الفولاذية مع إمكانية تصدير المواصفات بصيغة PDF.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Интерактивное 3D проектирование ангаров с мгновенным экспортом спецификации.</p></div>`
    }
  },
  {
    slug: "projects",
    schemaType: "WebPage",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "Projeler", path: "/projects" }
    ],
    title: {
      tr: "Uluslararası Çelik Yapı Projeleri & Referanslar | STRUCTIVA®",
      en: "International Steel Projects & Global Case Studies | STRUCTIVA®",
      de: "Internationale Stahlbauprojekte & Referenzen | STRUCTIVA®",
      fr: "Projets Internationaux & Références Mondiales | STRUCTIVA®",
      es: "Proyectos Internacionales y Casos de Éxito | STRUCTIVA®",
      ar: "المشاريع الدولية وسجل الإنجازات العالمية | STRUCTIVA®",
      ru: "Международные реализованные проекты и объекты | STRUCTIVA®",
    },
    description: {
      tr: "Avrupa, Orta Doğu, Afrika ve Orta Asya'da tamamlanan kolonsuz çelik hangar ve depo projelerimiz. Mersin Limanı çıkışlı küresel teslimat.",
      en: "Completed clear-span hangars and pre-engineered buildings across Europe, the Middle East, Africa, and Central Asia dispatched from Mersin Port.",
      de: "Erfolgreich realisierte Bogen- und Stahlhallenprojekte weltweit mit Seefracht ab Hafen Mersin.",
      fr: "Projets de hangars et entrepôts métalliques réalisés à l'international avec expédition maritime depuis Mersin.",
      es: "Proyectos ejecutados en Europa, Oriente Medio, África y Asia Central con logística portuaria directa.",
      ar: "مشاريع الهناجر والمستودعات الفولاذية المنجزة حول العالم المشحونة بحراً عبر ميناء مرسين الدولي.",
      ru: "Завершенные проекты арочных стальных ангаров в Европе, на Ближнем Востоке, в Африке и Центральной Азии.",
    },
    h1: {
      tr: "Uluslararası Projelerimiz ve Küresel Referanslar",
      en: "International Projects & Global Engineering Installations",
      de: "Internationale Projekte & Referenzbauten",
      fr: "Projets Internationaux & Réalisations",
      es: "Proyectos Internacionales y Referencias",
      ar: "مشاريعنا الدولية وسجل الإنجازات حول العالم",
      ru: "Наши международные проекты и объекты",
    },
    subheading: {
      tr: "50'den fazla ülkeye sevk edilen 500.000 m²'yi aşkın kolonsuz çelik yapı imalatı.",
      en: "Over 500,000 m² of pre-engineered clear-span steel delivered to 50+ countries worldwide.",
      de: "Über 500.000 m² stützenfreie Stahlbauten in mehr als 50 Länder weltweit geliefert.",
      fr: "Plus de 500 000 m² de structures en acier sans piliers livrées dans plus de 50 pays.",
      es: "Más de 500.000 m² de estructuras de acero despachadas a más de 50 países.",
      ar: "أكثر من 500,000 متر مربع من الهياكل الفولاذية المقوسة الموردة لأكثر من 50 دولة حول العالم.",
      ru: "Более 500 000 м² смонтированных стальных сооружений без колонн в 50+ странах мира.",
    },
    bodyHtml: {
      tr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <p class="text-sm text-slate-300 leading-relaxed mb-6">
            Adana'daki entegre üretim tesisimizden çıkan yapılar, Mersin Uluslararası Konteyner Limanı üzerinden flat-pack 40HC konteynerlerde Avrupa, Orta Doğu, Kuzey ve Sahra-Altı Afrika ile Orta Asya cumhuriyetlerine doğrudan sevk edilmektedir.
          </p>
        </div>
      `,
      en: `
        <div class="prose max-w-4xl mx-auto py-8">
          <p class="text-sm text-slate-300 leading-relaxed mb-6">
            Fabricated in our Adana facility and containerized for ocean freight via Mersin Deep-Water Port to Europe, the Middle East, Central Asia, and the Americas.
          </p>
        </div>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Überblick über unsere weltweiten Großprojekte in Industrie, Agrarwirtschaft und Bergbau.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Découvrez nos réalisations majeures livrées et montées sur quatre continents.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Galería de proyectos ejecutados con éxito en más de 50 países del mundo.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">استعرض أبرز مشاريعنا المنفذة بنجاح في مجالات الزراعة، الطيران، التعدين والمستودعات.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Примеры реализованных объектов и инженерных решений по всему миру.</p></div>`
    }
  },
  {
    slug: "knowledge",
    schemaType: "WebPage",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "Bilgi Bankası", path: "/knowledge" }
    ],
    title: {
      tr: "Çelik Yapı Teknik Bilgi Bankası & Kılavuzlar | STRUCTIVA®",
      en: "Steel Engineering Knowledge Hub & Guides | STRUCTIVA®",
      de: "Technisches Wissenszentrum für Stahlbau | STRUCTIVA®",
      fr: "Centre de Connaissances & Guides Techniques | STRUCTIVA®",
      es: "Centro de Conocimiento Técnico y Guías de Acero | STRUCTIVA®",
      ar: "مركز المعرفة الفنية وأدلة الهندسة الإنشائية | STRUCTIVA®",
      ru: "База знаний по стальным конструкциям и руководства | STRUCTIVA®",
    },
    description: {
      tr: "Galvalume Plus® kaplama, cıvatalı montaj rehberleri, temel beton detayları, konteyner lojistiği ve çelik yapı mühendislik makaleleri.",
      en: "Engineering articles on clear spans, Galvalume Plus metallurgy, PEB vs conventional steel frames, and international RFQ procurement.",
      de: "Fachartikel über Tragwerksplanung, Korrosionsschutz, Fundamentierung und Ausschreibungen.",
      fr: "Articles techniques sur le dimensionnement, les alliages Galvalume Plus et la préparation des appels d'offres.",
      es: "Artículos de ingeniería sobre luces libres, corrosión Galvalume Plus y preparación de pliegos de compra.",
      ar: "مقالات هندسية متخصصة حول البحور المفتوحة، سبائك الجالفالوم، وإعداد طلبات عروض الأسعار الإنشائية.",
      ru: "Статьи по расчету пролетов, металлургии Galvalume Plus и подготовке технических спецификаций.",
    },
    h1: {
      tr: "Teknik Bilgi Bankası, Mühendislik Makaleleri ve Kılavuzlar",
      en: "Engineering Knowledge Hub, Technical Guides & Articles",
      de: "Technisches Wissen & Fachartikel für Stahlbau",
      fr: "Centre de Connaissances & Guides Techniques",
      es: "Centro de Conocimiento y Guías Técnicas",
      ar: "مركز المعرفة الهندسية والأدلة الفنية المتخصصة",
      ru: "База инженерных знаний, статьи и руководства",
    },
    subheading: {
      tr: "Çelik yapı planlaması, şartname hazırlama ve montaj aşamalarında proje yöneticilerine rehberlik eden teknik kaynaklar.",
      en: "In-depth technical guides for structural engineers, project managers, and procurement officers.",
      de: "Fundierte Leitfäden für Planer, Bauleiter und Einkäufer.",
      fr: "Ressources techniques pour les directeurs de projet et ingénieurs civils.",
      es: "Recursos técnicos para directores de obra, calculistas y jefes de compras.",
      ar: "موارد فنية وإرشادات هندسية للمهندسين الاستشاريين ومدراء المشاريع والمشتريات.",
      ru: "Технические руководства для инженеров, проектировщиков и руководителей проектов.",
    },
    bodyHtml: {
      tr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="space-y-6">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-lg font-bold text-amber-400 mb-2">
                <a href="/knowledge/how-to-plan-industrial-steel-building" class="hover:underline">1. Endüstriyel Çelik Bina Nasıl Planlanır: Açıklık, Yükseklik ve Yük Faktörleri</a>
              </h3>
              <p class="text-sm text-slate-300">İç kolonsuz açık açıklıkların forklift ve vinç verimliliğine etkisi, yerel rüzgar ve kar haritasına göre panel et kalınlığı seçimi.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-lg font-bold text-amber-400 mb-2">
                <a href="/knowledge/peb-vs-conventional-structural-steel" class="hover:underline">2. Ön Üretimli Çelik Binalar (PEB) ile Geleneksel Çelik Yapıların Karşılaştırması</a>
              </h3>
              <p class="text-sm text-slate-300">Cıvatalı PEB ve kemer sistemlerinin şantiye kaynağına kıyasla %30-40 zaman ve tonaj avantajları.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-lg font-bold text-amber-400 mb-2">
                <a href="/knowledge/how-to-prepare-structural-steel-rfq" class="hover:underline">3. Uluslararası Çelik Yapı Şartnamesi ve RFQ Nasıl Hazırlanır?</a>
              </h3>
              <p class="text-sm text-slate-300">Eksiksiz bir teklif almak için gerekli zemin parametreleri, kapı detayları ve Incoterms (FOB/CIF) lojistik kılavuzu.</p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="space-y-6">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-lg font-bold text-amber-400 mb-2">
                <a href="/en/knowledge/how-to-plan-industrial-steel-building" class="hover:underline">1. How to Plan an Industrial Steel Building: Span, Clearances & Load Factors</a>
              </h3>
              <p class="text-sm text-slate-300">A practical guide for developers on establishing optimal clear spans, ridge heights, and snow/wind load parameters.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-lg font-bold text-amber-400 mb-2">
                <a href="/en/knowledge/peb-vs-conventional-structural-steel" class="hover:underline">2. Pre-Engineered Buildings (PEB) vs. Conventional Structural Steel</a>
              </h3>
              <p class="text-sm text-slate-300">Comparing factory bolt-together kits with field-welded frames in cost, lead time, and seismic performance.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-lg font-bold text-amber-400 mb-2">
                <a href="/en/knowledge/how-to-prepare-structural-steel-rfq" class="hover:underline">3. How to Prepare an International Structural Steel RFQ & Specification</a>
              </h3>
              <p class="text-sm text-slate-300">Step-by-step checklist to avoid commercial omissions and receive precise 24-hour engineering quotations.</p>
            </div>
          </div>
        </div>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Technische Leitfäden zu Spannweiten, Korrosionsbeständigkeit und PEB-Systemen.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Articles et guides sur les normes de charpente métallique et le dimensionnement.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Publicaciones técnicas sobre cálculo de estructuras, pliegos de licitación y logística.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">أدلة هندسية ومقالات فنية حول التخطيط الإنشائي للهناجر الفولاذية وإعداد كراسات الشروط.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Статьи и технические материалы по проектированию стальных конструкций.</p></div>`
    }
  },
  {
    slug: "about",
    schemaType: "AboutPage",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "Hakkımızda", path: "/about" }
    ],
    title: {
      tr: "Hakkımızda | STRUCTIVA® Çelik Yapı Teknolojileri Adana",
      en: "About STRUCTIVA® | Pre-Engineered Steel Structures Adana",
      de: "Über STRUCTIVA® | Stahlbau-Hersteller Adana",
      fr: "À Propos de STRUCTIVA® | Structures Métalliques Adana",
      es: "Acerca de STRUCTIVA® | Fabricante de Estructuras de Acero Adana",
      ar: "عن شركة STRUCTIVA® | مصنع الهياكل الفولاذية في أضنة",
      ru: "О компании STRUCTIVA® | Завод стальных конструкций в Адане",
    },
    description: {
      tr: "Adana üretim tesisimiz, Mersin Uluslararası Limanı lojistik avantajımız, mühendislik kadromuz ve küresel ihracat vizyonumuz.",
      en: "Learn about STRUCTIVA's Adana manufacturing plants, 15 km proximity to Mersin deep-water container port, and certified export engineering.",
      de: "Erfahren Sie mehr über die Produktionswerke in Adana, den Logistikvorteil am Hafen Mersin und unser Ingenieurteam.",
      fr: "Découvrez notre usine de fabrication à Adana, notre accès direct au port de Mersin et nos certifications internationales.",
      es: "Conozca nuestras plantas de fabricación en Adana, la cercanía al puerto de aguas profundas de Mersin y nuestra ingeniería de exportación.",
      ar: "تعرف على مصانع شركة STRUCTIVA في أضنة، موقعنا الاستراتيجي قرب ميناء مرسين، وسجلنا في التصدير لأكثر من 50 دولة.",
      ru: "Узнайте о производстве STRUCTIVA в Адане, преимуществах логистики через порт Мерсин и наших стандартах качества.",
    },
    h1: {
      tr: "STRUCTIVA Çelik Yapı Sanayi — Adana'dan Dünyaya",
      en: "STRUCTIVA Engineered Steel — From Adana to the World",
      de: "STRUCTIVA Stahlbau — Von Adana in die Welt",
      fr: "STRUCTIVA Bâtiments Métalliques — D'Adana vers le Monde",
      es: "STRUCTIVA Estructuras de Acero — De Adana al Mundo",
      ar: "شركة STRUCTIVA للصناعات الفولاذية — من أضنة إلى العالم",
      ru: "STRUCTIVA Стальные конструкции — из Аданы по всему миру",
    },
    subheading: {
      tr: "Akdeniz'in en stratejik lojistik merkezinde, EN 1090-2 EXC4 standartlarında ağır yapısal çelik ve kemer hangar imalatı.",
      en: "Located at the heart of the Mediterranean logistics corridor with EN 1090-2 EXC4 execution class certification.",
      de: "Am strategischen Logistikknotenpunkt des östlichen Mittelmeers mit CE- und EN 1090-2 EXC4 Zertifizierung.",
      fr: "Au cœur du carrefour logistique méditerranéen avec certification EN 1090-2 classe d'exécution 4.",
      es: "En el nudo logístico estratégico del Mediterráneo con certificación de ejecución EN 1090-2 EXC4.",
      ar: "في الموقع اللوجستي الاستراتيجي لحوض البحر الأبيض المتوسط مع اعتماد EN 1090-2 EXC4.",
      ru: "В стратегическом логистическом узле Средиземноморья с сертификатом EN 1090-2 класс EXC4.",
    },
    bodyHtml: {
      tr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🏭 Adana Mega İmalat Tesisleri</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Yıllık 25.000 ton çelik işleme kapasitemiz, CNC profil roll-forming hatlarımız ve robotik delme-kesme istasyonlarımız ile milimetrik toleranslarla üretim yapıyoruz.
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🚢 Mersin Limanı Lojistik Koridoru</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Mersin Uluslararası Konteyner Limanı'na yalnızca 15 km mesafedeyiz. Fabrikamızda yüklenen 40HC konteynerler doğrudan gemiye verilerek iç nakliye maliyetleri minimize edilir.
              </p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🏭 Adana Mega Manufacturing Hub</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                With an annual fabrication capacity of 25,000 metric tons, automated CNC roll-forming lines, and robotic punching, we guarantee sub-millimeter precision.
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🚢 15 km to Mersin Deep-Water Port</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Immediate access to Mediterranean international container terminals eliminates inland transit bottlenecks and delivers the lowest FOB/CIF rates worldwide.
              </p>
            </div>
          </div>
        </div>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Über unser Unternehmen, Produktionsstandort in Adana und weltweite Logistik.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Notre histoire, notre usine à Adana et notre réseau logistique mondial.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Nuestra historia, capacidad productiva en Adana y alcance logístico global.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">نبذة عن مصنعنا، طاقتنا الإنتاجية السنوية في أضنة ومزايانا اللوجستية التنافسية.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">О заводе STRUCTIVA в Адане, мощностях и логистических возможностях.</p></div>`
    }
  },
  {
    slug: "contact",
    schemaType: "ContactPage",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "İletişim", path: "/contact" }
    ],
    title: {
      tr: "İletişim & Fabrika Adresi | STRUCTIVA® Adana Türkiye",
      en: "Contact Us & Factory Location | STRUCTIVA® Adana Turkey",
      de: "Kontakt & Werksstandort | STRUCTIVA® Adana Türkei",
      fr: "Contactez-Nous & Adresse de l'Usine | STRUCTIVA® Turquie",
      es: "Contacto y Ubicación de Planta | STRUCTIVA® Turquía",
      ar: "اتصل بنا وعنوان المصنع | STRUCTIVA® أضنة، تركيا",
      ru: "Контакты и адрес завода | STRUCTIVA® Адана, Турция",
    },
    description: {
      tr: "STRUCTIVA çelik yapı fabrikası iletişim bilgileri. Adana merkezli üretim tesisi, telefon +90 532 055 09 45, e-posta info@structiva.com.tr.",
      en: "Get in touch with STRUCTIVA's engineering and sales team in Adana. Direct phone: +90 532 055 09 45, email: info@structiva.com.tr.",
      de: "Kontaktieren Sie das STRUCTIVA Engineering- und Vertriebsteam in Adana. Telefon: +90 532 055 09 45, E-Mail: info@structiva.com.tr.",
      fr: "Contactez l'équipe d'ingénierie et commerciale de STRUCTIVA à Adana. Tél : +90 532 055 09 45, E-mail : info@structiva.com.tr.",
      es: "Póngase en contacto con el equipo de ingeniería de STRUCTIVA en Adana. Tel: +90 532 055 09 45, email: info@structiva.com.tr.",
      ar: "تواصل مع مهندسي وفريق مبيعات شركة STRUCTIVA في أضنة. هاتف: 0945 055 532 90+، بريد: info@structiva.com.tr.",
      ru: "Свяжитесь с инженерным отделом завода STRUCTIVA в Адане. Телефон: +90 532 055 09 45, email: info@structiva.com.tr.",
    },
    h1: {
      tr: "İletişim & Fabrika Ziyaret Bilgileri",
      en: "Contact & Factory Location Details",
      de: "Kontakt & Anfahrtsinformationen",
      fr: "Contact & Informations de Visite d'Usine",
      es: "Contacto e Información de Fábrica",
      ar: "معلومات الاتصال وزيارة المصنع",
      ru: "Контакты и информация для посещения завода",
    },
    subheading: {
      tr: "Adana Organize Sanayi Bölgesi'ndeki fabrikamızı ziyaret edebilir veya 24 saat içinde mühendislik desteği alabilirsiniz.",
      en: "Visit our fabrication facilities in Adana or connect directly with our international export desk.",
      de: "Besuchen Sie unser Werk in Adana oder fordern Sie rund um die Uhr Unterstützung an.",
      fr: "Visitez notre site de production à Adana ou contactez notre bureau d'exportation.",
      es: "Visite nuestras instalaciones en Adana o solicite asesoramiento técnico a nuestro departamento de exportación.",
      ar: "يمكنكم زيارة مصنعنا في المنطقة الصناعية المنظمة في أضنة أو التواصل مع قسم الصادرات الدولية.",
      ru: "Посетите наш завод в промышленной зоне Аданы или получите консультацию инженера онлайн.",
    },
    bodyHtml: {
      tr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📍 Üretim Tesisi Adresi</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Adana Organize Sanayi Bölgesi (AOSB), Çelik İmalat Caddesi No:12, Adana, Türkiye<br>
                <em>(Mersin Limanı'na 15 km mesafede)</em>
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📞 Doğrudan Hatlar</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Telefon: <a href="tel:+905320550945" class="text-amber-400 hover:underline">+90 532 055 09 45</a><br>
                WhatsApp: <a href="https://wa.me/905320550945" class="text-emerald-400 hover:underline">+90 532 055 09 45</a><br>
                E-posta: <a href="mailto:info@structiva.com.tr" class="text-amber-400 hover:underline">info@structiva.com.tr</a>
              </p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📍 Manufacturing Address</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Adana Organized Industrial Zone (AOSB), Steel Fabrication St. No:12, Adana, Turkey<br>
                <em>(15 km from Mersin International Deep-Water Container Terminal)</em>
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📞 Direct Contact Points</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Telephone: <a href="tel:+905320550945" class="text-amber-400 hover:underline">+90 532 055 09 45</a><br>
                WhatsApp: <a href="https://wa.me/905320550945" class="text-emerald-400 hover:underline">+90 532 055 09 45</a><br>
                Email: <a href="mailto:info@structiva.com.tr" class="text-amber-400 hover:underline">info@structiva.com.tr</a>
              </p>
            </div>
          </div>
        </div>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Kontaktieren Sie uns telefonisch oder per E-Mail für technische Beratungen.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Nos coordonnées et adresse de l'usine pour toute demande technique ou commerciale.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Canales de contacto y ubicación de la planta de producción en Adana.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">أرقام التواصل الرسمية وعنوان مصنعنا في المنطقة الصناعية بأضنة، تركيا.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Контактные телефоны, email и адрес завода металлоконструкций в Адане.</p></div>`
    }
  },
  {
    slug: "request-a-quote",
    schemaType: "WebPage",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "Teklif Alın", path: "/request-a-quote" }
    ],
    title: {
      tr: "24 Saatte Hızlı Fiyat Teklifi Alın (RFQ) | STRUCTIVA®",
      en: "Request an Engineering Quote (RFQ) in 24h | STRUCTIVA®",
      de: "Angebot anfordern (RFQ) innerhalb von 24 Stunden | STRUCTIVA®",
      fr: "Demander un Devis d'Ingénierie (RFQ) sous 24h | STRUCTIVA®",
      es: "Solicitar Presupuesto y Cotización en 24h (RFQ) | STRUCTIVA®",
      ar: "طلب عرض أسعار هندسي خلال 24 ساعة (RFQ) | STRUCTIVA®",
      ru: "Запрос коммерческого предложения (RFQ) за 24 часа | STRUCTIVA®",
    },
    description: {
      tr: "Çelik hangar ve depo projeniz için 24 saat içinde statik fizibilite, konteyner yükleme planı ve detaylı FOB/CIF fiyat teklifi alın.",
      en: "Submit your project requirements for an official engineering review, BOM calculation, container loading plan, and formal FOB/CIF quote within 24 hours.",
      de: "Fordern Sie ein kostenloses Angebot mit statischer Vorbemessung und Frachtkostenberechnung an.",
      fr: "Recevez une offre commerciale officielle avec pré-dimensionnement statique et plan de chargement sous 24h.",
      es: "Obtenga un presupuesto formal con pre-cálculo estático y cubicaje marítimo en 24 horas.",
      ar: "احصل على دراسة استاتيكية أولية وعرض أسعار مفصل FOB أو CIF لمشروعك الإنشائي خلال 24 ساعة.",
      ru: "Получите официальный расчет стоимости, смету материалов и план загрузки контейнеров за 24 часа.",
    },
    h1: {
      tr: "24 Saatte Mühendislik Teklifi Alın (RFQ)",
      en: "Request a Formal Engineering Proposal (RFQ) in 24 Hours",
      de: "Kostenloses Angebot & Vorbemessung anfordern",
      fr: "Demande de Devis & Étude d'Ingénierie sous 24h",
      es: "Solicite una Propuesta de Ingeniería en 24 Horas",
      ar: "طلب دراسة هندسية وعرض أسعار رسمي خلال 24 ساعة",
      ru: "Запрос коммерческого предложения за 24 часа",
    },
    subheading: {
      tr: "Bina açıklığı, uzunluğu, kullanım amacı ve hedef teslim limanını iletin; mühendislerimiz projenizi 24 saat içinde hesaplasın.",
      en: "Provide your span, length, peak height, and delivery seaport for a detailed static analysis and ocean freight quote.",
      de: "Teilen Sie uns Maße und Lieferhafen mit; unsere Ingenieure berechnen Ihr Projekt innerhalb von 24 Stunden.",
      fr: "Indiquez les dimensions et le port de destination pour un calcul statique et logistique rapide.",
      es: "Envíenos las medidas y puerto de destino para cotizar estructura y flete marítimo.",
      ar: "أرسل أبعاد المبنى والميناء المستهدف لتجهيز دراسة الأحمال وحسابات الشحن البحري.",
      ru: "Укажите размеры и порт назначения для расчета конструкции и стоимости морской доставки.",
    },
    bodyHtml: {
      tr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Adım 1</span>
              <p class="text-sm text-slate-300">Açıklık, uzunluk ve zemin şartlarını belirtin.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Adım 2</span>
              <p class="text-sm text-slate-300">Mühendislerimiz Eurocode / AISC statik analizi yapsın.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Adım 3</span>
              <p class="text-sm text-slate-300">24 saatte malzeme dökümü (BOM) ve FOB/CIF teklifinizi alın.</p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Step 1</span>
              <p class="text-sm text-slate-300">Define building span, length, and site location.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Step 2</span>
              <p class="text-sm text-slate-300">Engineers perform Eurocode/AISC feasibility check.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Step 3</span>
              <p class="text-sm text-slate-300">Receive full BOM and FOB/CIF quote in 24 hours.</p>
            </div>
          </div>
        </div>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Erhalten Sie in 3 einfachen Schritten Ihr individuelles Angebot.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Recevez votre devis détaillé en 3 étapes simples sous 24 heures.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Obtenga su presupuesto de ingeniería en 3 sencillos pasos.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">احصل على عرض أسعار هندسي مفصل في 3 خطوات بسيطة خلال 24 ساعة.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Получите расчет стоимости стального ангара за 3 простых шага.</p></div>`
    }
  }
];

function buildHreflangTags(pageSlug: string): string {
  const subPath = pageSlug ? `/${pageSlug}` : "";
  const lines: string[] = [];

  for (const code of ALL_HREFLANGS) {
    lines.push(`    <link rel="alternate" hreflang="${code}" href="${SITE_URL}/${code}${subPath}" />`);
  }
  lines.push(`    <link rel="alternate" hreflang="x-default" href="${SITE_URL}/en${subPath}" />`);
  return lines.join("\n");
}

function buildJsonLd(page: PageConfig, lang: string, canonicalUrl: string): string {
  const title = page.title[lang] || page.title.en || page.title.tr;
  const description = page.description[lang] || page.description.en || page.description.tr;

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": page.breadcrumbs.map((bc, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": bc.name,
      "item": `${SITE_URL}${bc.path}`
    }))
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": BRAND_NAME,
    "legalName": "STRUCTIVA Çelik Yapı Sanayi A.Ş.",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/arched-steel-hangar-hd.jpg`,
    "telephone": PHONE,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Organize Sanayi Bölgesi (AOSB), Çelik İmalat Caddesi No:12",
      "addressLocality": "Adana",
      "postalCode": "01350",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.9914",
      "longitude": "35.3308"
    }
  };

  const schemas: any[] = [breadcrumbList, orgSchema];

  if (page.schemaType === "ProductModel") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ProductModel",
      "name": title,
      "brand": { "@type": "Brand", "name": BRAND_NAME },
      "manufacturer": { "@id": `${SITE_URL}/#organization` },
      "description": description,
      "category": "Industrial Steel Buildings / Clear-Span Hangars",
      "material": "Galvalume Plus® AZ180 55% Al-Zn Alloy Coated Steel",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "offerCount": "100",
        "availability": "https://schema.org/InStock"
      }
    });
  }

  return schemas
    .map((s) => `    <script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n    </script>`)
    .join("\n");
}

const SHELL_NAV: Record<string, Record<string, string>> = {
  tr: {
    models: "Modeller",
    sectors: "Sektörler",
    engineering: "Mühendislik",
    configurator: "3D Konfigüratör",
    projects: "Projeler",
    knowledge: "Bilgi Merkezi",
    about: "Hakkımızda",
    contact: "İletişim",
    quote: "Teklif Al",
    cta_h2: "Projeniz için 24 Saatte Hızlı Teklif Alın",
    cta_p: "Statik fizibilite raporu, malzeme dökümü (BOM) ve FOB/CIF navlun teklifiniz aynı gün hazırlansın.",
  },
  en: {
    models: "Models",
    sectors: "Sectors",
    engineering: "Engineering",
    configurator: "3D Configurator",
    projects: "Projects",
    knowledge: "Knowledge Hub",
    about: "About Us",
    contact: "Contact",
    quote: "Get Instant Quote",
    cta_h2: "Request a Formal Engineering Proposal Within 24 Hours",
    cta_p: "Receive static load calculations, Bill of Materials (BOM), and certified FOB/CIF shipping rates.",
  },
  de: {
    models: "Modelle",
    sectors: "Branchen",
    engineering: "Engineering",
    configurator: "3D-Konfigurator",
    projects: "Projekte",
    knowledge: "Wissenszentrum",
    about: "Über Uns",
    contact: "Kontakt",
    quote: "Angebot anfordern",
    cta_h2: "Schnellangebot innerhalb von 24 Stunden anfordern",
    cta_p: "Statische Prüfung, Stückliste (BOM) und zertifizierte FOB/CIF-Seefrachtangebote.",
  },
  fr: {
    models: "Modèles",
    sectors: "Secteurs",
    engineering: "Ingénierie",
    configurator: "Configurateur 3D",
    projects: "Projets",
    knowledge: "Base Technique",
    about: "À Propos",
    contact: "Contact",
    quote: "Demander Devis",
    cta_h2: "Obtenez un devis technique d'ingénierie sous 24 heures",
    cta_p: "Étude statique, nomenclature matière (BOM) et tarif fret maritime FOB/CIF.",
  },
  es: {
    models: "Modelos",
    sectors: "Sectores",
    engineering: "Ingeniería",
    configurator: "Configurador 3D",
    projects: "Proyectos",
    knowledge: "Centro Técnico",
    about: "Nosotros",
    contact: "Contacto",
    quote: "Pedir Presupuesto",
    cta_h2: "Solicite cotización técnica formal en 24 horas",
    cta_p: "Cálculo estático, lista de materiales (BOM) y flete marítimo contenedor FOB/CIF.",
  },
  ar: {
    models: "النماذج",
    sectors: "القطاعات",
    engineering: "الهندسة والجودة",
    configurator: "التكوين ثلاثي الأبعاد",
    projects: "المشاريع",
    knowledge: "مركز المعرفة",
    about: "من نحن",
    contact: "اتصل بنا",
    quote: "طلب عرض سعر",
    cta_h2: "احصل على عرض سعر هندسي رسمي خلال 24 ساعة",
    cta_p: "مراجعة إنشائية وقائمة كميات (BOM) وشحن بحري مباشر FOB/CIF.",
  },
  ru: {
    models: "Модели",
    sectors: "Отрасли",
    engineering: "Инжиниринг",
    configurator: "3D Конфигуратор",
    projects: "Проекты",
    knowledge: "База знаний",
    about: "О нас",
    contact: "Контакты",
    quote: "Запросить КП",
    cta_h2: "Получите коммерческое предложение за 24 часа",
    cta_p: "Статический расчет, ведомость материалов (BOM) и расчет морского фрахта FOB/CIF.",
  }
};

function generateSemanticHtml(page: PageConfig, lang: string): string {
  const title = page.title[lang] || page.title.en || page.title.tr;
  const h1 = page.h1[lang] || page.h1.en || page.h1.tr;
  const subheading = page.subheading[lang] || page.subheading.en || page.subheading.tr;
  const bodyHtml = page.bodyHtml[lang] || page.bodyHtml.en || page.bodyHtml.tr;

  const isRtl = lang === "ar";
  const dir = isRtl ? "rtl" : "ltr";
  const labels = SHELL_NAV[lang] || SHELL_NAV.en || SHELL_NAV.tr;

  return `
    <div dir="${dir}" class="min-h-screen flex flex-col bg-[#09131c] text-white selection:bg-amber-500 selection:text-[#0f1d2a]">
      <!-- Semantic Accessible Static Shell -->
      <header class="border-b border-white/10 bg-[#09131c]/90 backdrop-blur-md sticky top-0 z-50">
        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/${lang === "tr" ? "" : lang}" class="flex items-center gap-3 text-white text-xl font-black tracking-tight group">
            <span class="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[#0f1d2a] font-mono font-black text-sm">ST</span>
            <span>STRUCTIVA<span class="text-amber-400">®</span></span>
          </a>
          <nav class="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-300">
            <a href="/${lang}/models" class="hover:text-amber-400 transition-colors">${labels.models}</a>
            <a href="/${lang}/sectors" class="hover:text-amber-400 transition-colors">${labels.sectors}</a>
            <a href="/${lang}/engineering" class="hover:text-amber-400 transition-colors">${labels.engineering}</a>
            <a href="/${lang}/configurator" class="hover:text-amber-400 transition-colors">${labels.configurator}</a>
            <a href="/${lang}/projects" class="hover:text-amber-400 transition-colors">${labels.projects}</a>
            <a href="/${lang}/knowledge" class="hover:text-amber-400 transition-colors">${labels.knowledge}</a>
            <a href="/${lang}/about" class="hover:text-amber-400 transition-colors">${labels.about}</a>
            <a href="/${lang}/contact" class="hover:text-amber-400 transition-colors">${labels.contact}</a>
          </nav>
          <div class="flex items-center gap-4">
            <a href="/${lang}/request-a-quote" class="px-5 py-2.5 rounded-xl bg-amber-500 text-[#0f1d2a] font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
              ${labels.quote}
            </a>
          </div>
        </div>
      </header>

      <main class="flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumb" class="mb-8 text-xs text-slate-400 flex items-center gap-2">
          <a href="/${lang === "tr" ? "" : lang}" class="hover:text-amber-400">STRUCTIVA</a>
          <span>/</span>
          <span class="text-amber-400 font-semibold">${h1}</span>
        </nav>

        <!-- Main Heading Block -->
        <div class="max-w-4xl mb-12">
          <span class="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-3">EN 1090-2 EXC4 · CE · EUROCODE 3</span>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">${h1}</h1>
          <p class="text-base sm:text-lg text-slate-300 leading-relaxed">${subheading}</p>
        </div>

        <!-- Page Specific Body Content -->
        ${bodyHtml}

        <!-- Call to Action Banner -->
        <div class="mt-16 p-8 rounded-3xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 class="text-2xl font-black text-white mb-2">${labels.cta_h2}</h2>
            <p class="text-sm text-slate-300">${labels.cta_p}</p>
          </div>
          <div class="flex items-center gap-4 shrink-0">
            <a href="/${lang}/configurator" class="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all">
              ${labels.configurator}
            </a>
            <a href="/${lang}/request-a-quote" class="px-6 py-3 rounded-xl bg-amber-500 text-[#0f1d2a] font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
              ${labels.quote}
            </a>
          </div>
        </div>
      </main>

      <footer class="border-t border-white/10 bg-[#070e16] text-slate-400 py-12">
        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          <div>
            <span class="text-white font-black text-base block mb-3">STRUCTIVA®</span>
            <p class="leading-relaxed mb-4">Adana Tesisleri — 9-45m net açıklıklı, Galvalume Plus® alaşımlı kemerli çelik hangarlar ve endüstriyel yapılar.</p>
            <p class="text-slate-300">Mersin Limanı'na 15 km mesafede flat-pack konteyner ihracatı.</p>
          </div>
          <div>
            <span class="text-white font-bold uppercase tracking-wider block mb-3">Modeller</span>
            <ul class="space-y-2">
              <li><a href="/${lang}/models" class="hover:text-amber-400">Q-Serisi Kemer Hangar</a></li>
              <li><a href="/${lang}/models" class="hover:text-amber-400">S-Serisi Düz Duvar</a></li>
              <li><a href="/${lang}/models" class="hover:text-amber-400">P-Serisi Beşik Çatı</a></li>
              <li><a href="/${lang}/models" class="hover:text-amber-400">Konteyner Kanopisi</a></li>
            </ul>
          </div>
          <div>
            <span class="text-white font-bold uppercase tracking-wider block mb-3">Mühendislik</span>
            <ul class="space-y-2">
              <li><a href="/${lang}/engineering" class="hover:text-amber-400">Eurocode 3 Statik Hesap</a></li>
              <li><a href="/${lang}/engineering" class="hover:text-amber-400">EN 1090-2 EXC4 Sertifikası</a></li>
              <li><a href="/${lang}/knowledge" class="hover:text-amber-400">Teknik Bilgi Bankası</a></li>
              <li><a href="/${lang}/about" class="hover:text-amber-400">Adana Üretim Tesisi</a></li>
            </ul>
          </div>
          <div>
            <span class="text-white font-bold uppercase tracking-wider block mb-3">İletişim & Fabrika</span>
            <p class="leading-relaxed mb-2">${ADDRESS}</p>
            <p class="mb-1">Tel: <a href="tel:+905320550945" class="text-amber-400 hover:underline">${PHONE}</a></p>
            <p>E-posta: <a href="mailto:${EMAIL}" class="text-amber-400 hover:underline">${EMAIL}</a></p>
          </div>
        </div>
        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-white/5 text-center text-[11px] text-slate-500">
          © ${new Date().getFullYear()} STRUCTIVA Çelik Yapı Sanayi A.Ş. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  `;
}

function prerender() {
  console.log("🚀 Starting STRUCTIVA Multi-Page SSG Pre-rendering Engine...");

  if (!fs.existsSync(BASE_INDEX_HTML)) {
    console.error(`❌ Error: Base index.html not found at ${BASE_INDEX_HTML}. Please run 'vite build' first.`);
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(BASE_INDEX_HTML, "utf-8");
  let generatedCount = 0;

  for (const page of PAGES) {
    for (const lang of SSG_LANGUAGES) {
      const isDefaultTr = lang.code === "tr";
      const isRootPage = page.slug === "";

      // Determine the output directory and canonical path
      // 1. Language prefixed route: e.g. /en/models, /tr/models
      const langSlugPath = isRootPage ? lang.code : `${lang.code}/${page.slug}`;
      const langCanonicalUrl = `${SITE_URL}/${langSlugPath}`;

      const title = page.title[lang.code] || page.title.en || page.title.tr;
      const description = page.description[lang.code] || page.description.en || page.description.tr;
      const hreflangs = buildHreflangTags(page.slug);
      const jsonLd = buildJsonLd(page, lang.code, langCanonicalUrl);
      const semanticHtml = generateSemanticHtml(page, lang.code);

      // Construct tailored HTML
      let html = baseTemplate;

      // Update lang attribute on html tag
      html = html.replace(/<html\s+lang="[^"]*"/, `<html lang="${lang.code}" dir="${lang.dir}"`);

      // Update <title>
      html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);

      // Update <meta name="description">
      html = html.replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
        `<meta name="description" content="${description}" />`
      );

      // Update canonical link
      html = html.replace(
        /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
        `<link rel="canonical" href="${langCanonicalUrl}" />\n${hreflangs}`
      );

      // Update OpenGraph
      html = html.replace(
        /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
        `<meta property="og:title" content="${title}" />`
      );
      html = html.replace(
        /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
        `<meta property="og:description" content="${description}" />`
      );
      html = html.replace(
        /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
        `<meta property="og:url" content="${langCanonicalUrl}" />`
      );

      // Inject JSON-LD right before </head>
      html = html.replace("</head>", `${jsonLd}\n  </head>`);

      // Replace <div id="root">...</div> with our pre-rendered semantic HTML
      html = html.replace(
        /<div id="root">[\s\S]*?<\/div>/,
        `<div id="root">${semanticHtml}</div>`
      );

      // Write language-specific file: dist/public/<lang>/<slug>/index.html
      const targetDir = path.join(DIST_PUBLIC, lang.code, page.slug);
      fs.mkdirSync(targetDir, { recursive: true });
      const targetFilePath = path.join(targetDir, "index.html");
      fs.writeFileSync(targetFilePath, html, "utf-8");
      generatedCount++;

      // Also for Turkish, generate the unprefixed root route if applicable (e.g. /models, /engineering)
      if (isDefaultTr) {
        if (!isRootPage) {
          const rootDir = path.join(DIST_PUBLIC, page.slug);
          fs.mkdirSync(rootDir, { recursive: true });
          
          // Unprefixed canonical: https://www.structiva.com.tr/<slug>
          const rootCanonical = `${SITE_URL}/${page.slug}`;
          let rootHtml = html.replace(new RegExp(langCanonicalUrl, "g"), rootCanonical);

          // Write dist/public/<slug>/index.html
          fs.writeFileSync(path.join(rootDir, "index.html"), rootHtml, "utf-8");

          // Also write dist/public/<slug>.html for direct file matching
          fs.writeFileSync(path.join(DIST_PUBLIC, `${page.slug}.html`), rootHtml, "utf-8");
          generatedCount += 2;
        } else {
          // It's the root home page: dist/public/index.html
          const rootCanonical = `${SITE_URL}/`;
          let rootHtml = html.replace(new RegExp(langCanonicalUrl, "g"), rootCanonical);
          fs.writeFileSync(path.join(DIST_PUBLIC, "index.html"), rootHtml, "utf-8");
          console.log("  ✓ Updated root dist/public/index.html with semantic content & schema");
        }
      }
    }
  }

  console.log(`✨ Successfully generated ${generatedCount} static HTML pages across ${SSG_LANGUAGES.length} languages!`);
}

prerender();
