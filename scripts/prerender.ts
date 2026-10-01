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

// Complete 30 supported languages for SSG generation
const SSG_LANGUAGES = [
  { code: "tr", name: "Türkçe", dir: "ltr" },
  { code: "en", name: "English", dir: "ltr" },
  { code: "de", name: "Deutsch", dir: "ltr" },
  { code: "fr", name: "Français", dir: "ltr" },
  { code: "es", name: "Español", dir: "ltr" },
  { code: "it", name: "Italiano", dir: "ltr" },
  { code: "pt", name: "Português", dir: "ltr" },
  { code: "nl", name: "Nederlands", dir: "ltr" },
  { code: "pl", name: "Polski", dir: "ltr" },
  { code: "ro", name: "Română", dir: "ltr" },
  { code: "bg", name: "Български", dir: "ltr" },
  { code: "el", name: "Ελληνικά", dir: "ltr" },
  { code: "cs", name: "Čeština", dir: "ltr" },
  { code: "hu", name: "Magyar", dir: "ltr" },
  { code: "sr", name: "Srpski", dir: "ltr" },
  { code: "hr", name: "Hrvatski", dir: "ltr" },
  { code: "ru", name: "Русский", dir: "ltr" },
  { code: "uk", name: "Українська", dir: "ltr" },
  { code: "ar", name: "العربية", dir: "rtl" },
  { code: "fa", name: "فارسی", dir: "rtl" },
  { code: "he", name: "עברית", dir: "rtl" },
  { code: "zh", name: "简体中文", dir: "ltr" },
  { code: "ja", name: "日本語", dir: "ltr" },
  { code: "ko", name: "한국어", dir: "ltr" },
  { code: "hi", name: "हिन्दी", dir: "ltr" },
  { code: "id", name: "Bahasa Indonesia", dir: "ltr" },
  { code: "ms", name: "Bahasa Melayu", dir: "ltr" },
  { code: "vi", name: "Tiếng Việt", dir: "ltr" },
  { code: "th", name: "ไทย", dir: "ltr" },
  { code: "az", name: "Azərbaycanca", dir: "ltr" },
];

const ALL_HREFLANGS = [
  "tr", "en", "de", "fr", "es", "it", "pt", "nl", "pl", "ro",
  "bg", "el", "cs", "hu", "sr", "hr", "ru", "uk", "ar", "fa",
  "he", "zh", "ja", "ko", "hi", "id", "ms", "vi", "th", "az"
];

interface PageConfig {
  slug: string; // e.g. "models", "engineering", "knowledge/how-to-plan-industrial-steel-building"
  title: Record<string, string>;
  description: Record<string, string>;
  h1: Record<string, string>;
  subheading: Record<string, string>;
  bodyHtml: Record<string, string>;
  breadcrumbs: Array<{ name: string; path: string }>;
  schemaType: "WebPage" | "ProductModel" | "Article" | "ContactPage" | "AboutPage";
  publishedDate?: string;
  category?: string;
  faqItems?: Array<{ question: string; answer: string }>;
  priority?: string;
  changefreq?: string;
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
      de: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">9m – 45m</span>
              <p class="text-sm text-slate-300">100% stützenfreie Spannweite ohne interne Pfeiler.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">240 km/h</span>
              <p class="text-sm text-slate-300">Zertifizierte Wind- und Erdbebenstabilität nach Eurocode 3.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">15 km</span>
              <p class="text-sm text-slate-300">Direkte Nähe zum Tiefsee-Containerhafen Mersin.</p>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">Warum STRUCTIVA stützenfreie Bogenhallen?</h2>
          <ul class="space-y-3 text-slate-300 text-sm mb-8 list-disc pl-5">
            <li><strong>Maximales Raumvolumen:</strong> Keine Träger oder Zwischenstützen für uneingeschränkte Gabelstapler- und Flugzeugmanöver.</li>
            <li><strong>Galvalume Plus® AZ180 Legierung:</strong> 55% Al-Zn Beschichtung bietet bis zu 4-fachen Korrosionsschutz gegenüber herkömmlicher Verzinkung.</li>
            <li><strong>Schnelle Schraubmontage:</strong> Präzise vorgebohrte Bauteile erfordern kein Schweißen auf der Baustelle.</li>
            <li><strong>Globaler 40HC Container-Versand:</strong> 350-400 m² Hallenfläche kompakt verpackt in einem Standard-Überseecontainer.</li>
          </ul>
        </div>
      `,
      fr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">9m – 45m</span>
              <p class="text-sm text-slate-300">Portée libre à 100% sans poteaux ni piliers intérieurs.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">240 km/h</span>
              <p class="text-sm text-slate-300">Résistance certifiée aux vents d'ouragan selon l'Eurocode 3.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">15 km</span>
              <p class="text-sm text-slate-300">Proximité immédiate du port international de Mersin.</p>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">Pourquoi choisir les hangars en acier arqués STRUCTIVA ?</h2>
          <ul class="space-y-3 text-slate-300 text-sm mb-8 list-disc pl-5">
            <li><strong>Volume Intérieur Maximisé:</strong> Aucun encombrement intérieur pour la manœuvre d'aéronefs, chariots et ponts roulants.</li>
            <li><strong>Acier Galvalume Plus® AZ180:</strong> Alliage 55% Aluminium-Zinc résistant 4 fois plus longtemps à la corrosion que l'acier galvanisé standard.</li>
            <li><strong>Assemblage Boulonné Sans Soudure:</strong> Montage rapide par boulons à haute résistance sans permis de feu sur chantier.</li>
            <li><strong>Expédition Conteneurisée Flat-Pack:</strong> 350 à 400 m² de structure logés dans un unique conteneur 40HC.</li>
          </ul>
        </div>
      `,
      es: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">9m – 45m</span>
              <p class="text-sm text-slate-300">Luz libre 100% diáfana sin columnas interiores intermedias.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">240 km/h</span>
              <p class="text-sm text-slate-300">Resistencia estática certificada a vientos y sismos según Eurocódigo 3.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">15 km</span>
              <p class="text-sm text-slate-300">Ubicación estratégica a 15 km del Puerto Internacional de Mersin.</p>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">¿Por qué elegir los hangares de acero autoportantes STRUCTIVA?</h2>
          <ul class="space-y-3 text-slate-300 text-sm mb-8 list-disc pl-5">
            <li><strong>Aprovechamiento Espacial Total:</strong> Sin columnas intermedias que obstaculicen la maquinaria pesada o el acopio a granel.</li>
            <li><strong>Aleación Galvalume Plus® AZ180:</strong> 55% Aluminio-Zinc con durabilidad 4 veces superior al galvanizado común.</li>
            <li><strong>Montaje Empernado Rápido:</strong> Conexiones atornilladas de precisión sin requerir soldaduras en obra.</li>
            <li><strong>Logística en Contenedor 40HC:</strong> Entre 350 y 400 m² de estructura embalados en flat-pack por contenedor.</li>
          </ul>
        </div>
      `,
      ar: `
        <div class="prose max-w-4xl mx-auto py-8" dir="rtl">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">9م – 45م</span>
              <p class="text-sm text-slate-300">بحور مفتوحة 100% بدون أي أعمدة أو عوائق داخلية.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">240 كم/س</span>
              <p class="text-sm text-slate-300">مقاومة استاتيكية معتمدة للأعاصير والزلازل وفق كود Eurocode 3.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">15 كم</span>
              <p class="text-sm text-slate-300">قرب استراتيجي من ميناء مرسين للحاويات للشحن الدولي المباشر.</p>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">لماذا تختار هناجر ستركستيفا المقوسة الخالية من الأعمدة؟</h2>
          <ul class="space-y-3 text-slate-300 text-sm mb-8 list-disc pr-5">
            <li><strong>مساحة داخلية مفتوحة بالكامل:</strong> بدون أعمدة وسيطة تتيح حركة حرة للرافعات الشوكية وطائرات الطيران المدني والعسكري.</li>
            <li><strong>سبيكة Galvalume Plus® AZ180:</strong> طلاء 55% ألومنيوم وزنك يوفر مقاومة تآكل تفوق الجلفنة العادية بـ 4 أضعاف.</li>
            <li><strong>تركيب ميكانيكي بالبراغي:</strong> تجميع دقيق بالمسامير المقواة دون الحاجة لأعمال لحام بالموقع.</li>
            <li><strong>شحن مسطح في حاويات 40 قدم:</strong> تعبئة 350-400 م² من الهيكل الفولاذي في حاوية واحدة عالية السقف (40HC).</li>
          </ul>
        </div>
      `,
      ru: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">9м – 45м</span>
              <p class="text-sm text-slate-300">100% полезного пространства без внутренних колонн и балок.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">240 км/ч</span>
              <p class="text-sm text-slate-300">Сертифицированная стойкость к ветру и сейсмике по Еврокоду 3.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-3xl font-black text-amber-400 block mb-2">15 км</span>
              <p class="text-sm text-slate-300">15 км до глубоководного контейнерного порта Мерсин.</p>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">Почему выбирают стальные арочные ангары STRUCTIVA?</h2>
          <ul class="space-y-3 text-slate-300 text-sm mb-8 list-disc pl-5">
            <li><strong>Максимум полезного объема:</strong> Отсутствие промежуточных опор позволяет свободно работать складской и авиационной технике.</li>
            <li><strong>Сплав Galvalume Plus® AZ180:</strong> 55% алюминия и цинка обеспечивают коррозионную стойкость в 4 раза выше обычной оцинковки.</li>
            <li><strong>Болтовой монтаж без сварки:</strong> Высокоточная заводская перфорация обеспечивает быстрый монтаж без сварочных работ.</li>
            <li><strong>Логистика в 40HC контейнерах:</strong> 350-400 м² конструкций компактно упаковываются в один морской контейнер.</li>
          </ul>
        </div>
      `
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
      de: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">Q-Serie (Vollbogen)</h3>
              <p class="text-sm text-slate-300 mb-3">Spannweite: 9m – 45m | Firsthöhe: 4.5m – 18m</p>
              <p class="text-xs text-slate-400 leading-relaxed">Das tragfähigste Bogenprofil der Welt. 100% stützenfreies Innenvolumen für Getreidelager, Minen und Flugzeughangars.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">S-Serie (Gerade Seitenwand)</h3>
              <p class="text-sm text-slate-300 mb-3">Spannweite: 10m – 30m | Traufhöhe: 5m – 12m</p>
              <p class="text-xs text-slate-400 leading-relaxed">Vertikale Wände ermöglichen Palettenhochregallager und optimale Gabelstapler-Fahrwege.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">P-Serie (Satteldach)</h3>
              <p class="text-sm text-slate-300 mb-3">Spannweite: 8m – 24m | Höhe: 4m – 9m</p>
              <p class="text-xs text-slate-400 leading-relaxed">Kombiniert traditionelle Dacharchitektur mit schneller industrieller Schraubmontage für Werkstätten.</p>
            </div>
          </div>
        </div>
      `,
      fr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">Série Q (Arche Complète)</h3>
              <p class="text-sm text-slate-300 mb-3">Portée: 9m – 45m | Hauteur: 4.5m – 18m</p>
              <p class="text-xs text-slate-400 leading-relaxed">La géométrie en arche la plus robuste au monde. 100% de volume utile pour hangars d'aviation, grains et stockage minier.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">Série S (Parois Droites)</h3>
              <p class="text-sm text-slate-300 mb-3">Portée: 10m – 30m | Hauteur: 5m – 12m</p>
              <p class="text-xs text-slate-400 leading-relaxed">Parois verticales pour rayonnages à palettes et circulation optimale des chariots élévateurs.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">Série P (Toit en Pente)</h3>
              <p class="text-sm text-slate-300 mb-3">Portée: 8m – 24m | Hauteur: 4m – 9m</p>
              <p class="text-xs text-slate-400 leading-relaxed">Combine le profil traditionnel à deux pans avec la rapidité du montage boulonné industriel.</p>
            </div>
          </div>
        </div>
      `,
      es: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">Serie Q (Arco Completo)</h3>
              <p class="text-sm text-slate-300 mb-3">Luz: 9m – 45m | Altura: 4.5m – 18m</p>
              <p class="text-xs text-slate-400 leading-relaxed">La geometría de arco más resistente. 100% de volumen interior diáfano sin pérdida estructural para aviación y acopio.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">Serie S (Pared Recta)</h3>
              <p class="text-sm text-slate-300 mb-3">Luz: 10m – 30m | Altura: 5m – 12m</p>
              <p class="text-xs text-slate-400 leading-relaxed">Paredes laterales verticales para estanterías de palets y tránsito de carretillas elevadoras.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">Serie P (Dos Aguas)</h3>
              <p class="text-sm text-slate-300 mb-3">Luz: 8m – 24m | Altura: 4m – 9m</p>
              <p class="text-xs text-slate-400 leading-relaxed">Diseño tradicional a dos aguas con ingeniería de paneles empernados de rápido montaje.</p>
            </div>
          </div>
        </div>
      `,
      ar: `
        <div class="prose max-w-4xl mx-auto py-8" dir="rtl">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">سلسلة Q (قوس كامل)</h3>
              <p class="text-sm text-slate-300 mb-3">البحر: 9م – 45م | الارتفاع: 4.5م – 18م</p>
              <p class="text-xs text-slate-400 leading-relaxed">أقوى شكل هندسي مقوس في العالم. استغلال كامل للحجم بنسبة 100% بدون أي فقد إنشائي لهناجر الطائرات وتخزين الحبوب.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">سلسلة S (جدران مستقيمة)</h3>
              <p class="text-sm text-slate-300 mb-3">البحر: 10م – 30م | الارتفاع: 5م – 12م</p>
              <p class="text-xs text-slate-400 leading-relaxed">جدران جانبية عمودية توفر أعلى ارتفاع على الأطراف للأرفف الصناعية وحركة الرافعات الشوكية.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">سلسلة P (سقف جملوني)</h3>
              <p class="text-sm text-slate-300 mb-3">البحر: 8م – 24م | الارتفاع: 4م – 9م</p>
              <p class="text-xs text-slate-400 leading-relaxed">تجمع بين المظهر المعماري الجملوني التقليدي والتركيب السريع بالبراغي للورش والمستودعات التجارية.</p>
            </div>
          </div>
        </div>
      `,
      ru: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">Серия Q (Полукруглый свод)</h3>
              <p class="text-sm text-slate-300 mb-3">Пролет: 9м – 45м | Высота: 4.5м – 18м</p>
              <p class="text-xs text-slate-400 leading-relaxed">Самая прочная арочная геометрия в мире. 100% полезного объема для авиационных ангаров, зернохранилищ и сыпучих грузов.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">Серия S (Прямые стены)</h3>
              <p class="text-sm text-slate-300 mb-3">Пролет: 10м – 30м | Высота: 5м – 12м</p>
              <p class="text-xs text-slate-400 leading-relaxed">Вертикальные прямые стены обеспечивают максимальную высоту у стен для паллетных стеллажей и погрузчиков.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">Серия P (Двускатная кровля)</h3>
              <p class="text-sm text-slate-300 mb-3">Пролет: 8м – 24м | Высота: 4м – 9м</p>
              <p class="text-xs text-slate-400 leading-relaxed">Сочетает классический силуэт двускатной крыши со скоростью болтовой сборки для мастерских и гаражей.</p>
            </div>
          </div>
        </div>
      `
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
      de: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🌾 Landwirtschaft & Getreidelagerung</h3>
              <p class="text-sm text-slate-300">Stützenfreie Bogenhallen ermöglichen lückenloses Aufschütten von Weizen, Mais und Düngemitteln bis an die Außenwand ohne Vogelnester.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">✈️ Flugzeughangars & Aviation</h3>
              <p class="text-sm text-slate-300">Spannweiten bis 42m mit hydraulischen Falt- oder Schiebetoren für Jets, Turboprops und Hubschrauber.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">⛏️ Bergbau & Schüttguthallen</h3>
              <p class="text-sm text-slate-300">Schützt Förderbänder und Halden vor Witterung; Galvalume Plus® widersteht aggressiven Stäuben und Gasen.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📦 Logistik & Umschlagzentren</h3>
              <p class="text-sm text-slate-300">360-Grad-Rangierfreiheit für LKW und Flurförderzeuge; optimale Isolieroptionen für Temperaturkontrolle.</p>
            </div>
          </div>
        </div>
      `,
      fr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🌾 Agriculture & Stockage de Grains</h3>
              <p class="text-sm text-slate-300">La structure autoportante sans piliers permet un stockage en vrac continu jusqu'au ras des parois sans recoins.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">✈️ Hangars d'Aviation & Hélicoptères</h3>
              <p class="text-sm text-slate-300">Portées libres jusqu'à 42 m intégrant de grands portails pliants ou coulissants pour jets d'affaires et aéronefs.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">⛏️ Mines & Matières Premières</h3>
              <p class="text-sm text-slate-300">Confinement des poussières et couverture de convoyeurs avec haute résistance anticorrosion Galvalume Plus®.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📦 Plateformes Logistiques & Entrepôts</h3>
              <p class="text-sm text-slate-300">Circulation fluide à 360° pour engins et semi-remorques sans piliers gênants; isolation thermique complète.</p>
            </div>
          </div>
        </div>
      `,
      es: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🌾 Agricultura y Silos de Grano</h3>
              <p class="text-sm text-slate-300">El diseño arqueado sin columnas permite el apilamiento de trigo, maíz y fertilizantes de pared a pared con máxima higiene.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">✈️ Hangares de Aviación y Helicópteros</h3>
              <p class="text-sm text-slate-300">Luces libres de hasta 42 metros con puertas hidráulicas seccionales o corredizas para jets privados y aviones de carga.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">⛏️ Minería y Acopio de Áridos</h3>
              <p class="text-sm text-slate-300">Control de polvos y protección de cintas transportadoras con protección galvánica superior en ambientes agresivos.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📦 Logística y Centros de Distribución</h3>
              <p class="text-sm text-slate-300">Maniobrabilidad total para camiones y carretillas sin columnas intermedias, con opciones de aislamiento térmico.</p>
            </div>
          </div>
        </div>
      `,
      ar: `
        <div class="prose max-w-4xl mx-auto py-8" dir="rtl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🌾 الزراعة وتخزين الحبوب السائبة</h3>
              <p class="text-sm text-slate-300">تصميم مقوس خالٍ من الأعمدة يتيح تكديس القمح والذرة والأسمدة إلى أقصى الجوانب بأعلى درجات النظافة والحماية من الطيور.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">✈️ هناجر الطائرات والمروحيات</h3>
              <p class="text-sm text-slate-300">بحور مفتوحة تصل إلى 42 متراً مع أبواب هيدروليكية أو منزلقة عملاقة لصيانة وإيواء الطائرات الخاصة والتجارية.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">⛏️ قطاع التعدين وتشوين المواد</h3>
              <p class="text-sm text-slate-300">تغطية خطوط السيور ومنع انتشار الغبار مع حماية فائقة ضد التآكل الكيميائي بفضل سبيكة جالفالوم بلس.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📦 المراكز اللوجستية ومستودعات التوزيع</h3>
              <p class="text-sm text-slate-300">حرية دوران كاملة 360 درجة للشاحنات ومعدات المناولة دون أعمدة تعيق الحركة مع إمكانية العزل الحراري الكامل.</p>
            </div>
          </div>
        </div>
      `,
      ru: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🌾 Сельское хозяйство и зернохранилища</h3>
              <p class="text-sm text-slate-300">Арочная конструкция без колонн позволяет насыпать зерно от стены до стены без потерь площади и скопления птиц.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">✈️ Авиационные ангары и вертолетные площадки</h3>
              <p class="text-sm text-slate-300">Чистые пролеты до 42 метров с установкой подъемно-складных или откатных ворот для самолетов и вертолетов.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">⛏️ Горнодобывающая отрасль и склады сырья</h3>
              <p class="text-sm text-slate-300">Укрытие конвейеров и защита от пыли; сталь Galvalume Plus® выдерживает воздействие агрессивных минеральных сред.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📦 Логистические центры и склады</h3>
              <p class="text-sm text-slate-300">Полная свобода перемещения погрузчиков и фур внутри здания без помех от колонн; опции утепления минераловатными матами.</p>
            </div>
          </div>
        </div>
      `
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
      de: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📋 Internationale Baunormen</h3>
              <ul class="text-sm text-slate-300 space-y-2 list-disc pl-4">
                <li><strong>Eurocode 1 (EN 1991):</strong> Wind- und Schneelastberechnungen.</li>
                <li><strong>Eurocode 3 (EN 1993):</strong> Bemessung und Konstruktion von Stahlbauten.</li>
                <li><strong>EN 1090-2:</strong> Ausführungsklasse EXC3 &amp; EXC4 für tragende Bauteile.</li>
                <li><strong>AISC 360-16:</strong> Amerikanische Stahlbaunorm für globale Projekte.</li>
              </ul>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🛡️ Galvalume Plus® AZ180 Metallurgie</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                ASTM A792 Beschichtung mit 55% Al, 43,4% Zn und 1,6% Si. Bietet selbstheilenden kathodischen Schutz mit 4-facher Lebensdauer im Vergleich zu normaler Verzinkung.
              </p>
            </div>
          </div>
        </div>
      `,
      fr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📋 Conformité aux Normes Internationales</h3>
              <ul class="text-sm text-slate-300 space-y-2 list-disc pl-4">
                <li><strong>Eurocode 1 (EN 1991):</strong> Actions sur les structures (vent et neige).</li>
                <li><strong>Eurocode 3 (EN 1993):</strong> Calcul des structures en acier.</li>
                <li><strong>EN 1090-2:</strong> Contrôle de production en usine (Classe d'exécution EXC4).</li>
                <li><strong>AISC 360-16:</strong> Norme américaine pour charpente métallique.</li>
              </ul>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🛡️ Métallurgie Galvalume Plus® AZ180</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Revêtement ASTM A792 avec 55% Al, 43,4% Zn et 1,6% Si. Offre une protection cathodique sacrificielle qui surpasse l'acier galvanisé traditionnel par un facteur 4.
              </p>
            </div>
          </div>
        </div>
      `,
      es: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📋 Cumplimiento de Códigos Internacionales</h3>
              <ul class="text-sm text-slate-300 space-y-2 list-disc pl-4">
                <li><strong>Eurocódigo 1 (EN 1991):</strong> Parámetros de cargas de viento y acumulación de nieve.</li>
                <li><strong>Eurocódigo 3 (EN 1993):</strong> Diseño y cálculo de elementos estructurales de acero.</li>
                <li><strong>EN 1090-2:</strong> Certificación de fabricación de estructuras (Clase de Ejecución EXC4).</li>
                <li><strong>AISC 360-16:</strong> Especificación norteamericana de construcción en acero.</li>
              </ul>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🛡️ Metalurgia Galvalume Plus® AZ180</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Recubrimiento ASTM A792 con 55% Al, 43.4% Zn y 1.6% Si. Brinda protección galvánica auto-regenerable superando al galvanizado común por 4 a 6 veces en durabilidad.
              </p>
            </div>
          </div>
        </div>
      `,
      ar: `
        <div class="prose max-w-4xl mx-auto py-8" dir="rtl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📋 مطابقة المعايير والأكواد العالمية</h3>
              <ul class="text-sm text-slate-300 space-y-2 list-disc pr-4">
                <li><strong>Eurocode 1 (EN 1991):</strong> حسابات سرعة الرياح وتراكم أحمال الثلوج.</li>
                <li><strong>Eurocode 3 (EN 1993):</strong> تصميم وتدقيق عناصر المنشآت الفولاذية.</li>
                <li><strong>EN 1090-2:</strong> شهادة ضبط جودة التصنيع بالمصنع (فئة التنفيذ EXC4).</li>
                <li><strong>AISC 360-16:</strong> كود الإنشاءات الفولاذية الأمريكي للمشاريع الدولية.</li>
              </ul>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🛡️ الخصائص المعدنية لسبيكة جالفالوم بلس AZ180</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                طلاء ASTM A792 بنسبة 55% ألومنيوم و 43.4% زنك و 1.6% سيليكون. يوفر حماية كاثودية تلقائية تحمي المقاطع من الصدأ وتدوم 4 إلى 6 أضعاف عمر الجلفنة العادية.
              </p>
            </div>
          </div>
        </div>
      `,
      ru: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📋 Международные инженерные стандарты</h3>
              <ul class="text-sm text-slate-300 space-y-2 list-disc pl-4">
                <li><strong>Еврокод 1 (EN 1991):</strong> Расчет ветровых и снеговых нагрузок.</li>
                <li><strong>Еврокод 3 (EN 1993):</strong> Проектирование стальных несущих конструкций.</li>
                <li><strong>EN 1090-2:</strong> Заводской контроль качества производства (класс EXC4).</li>
                <li><strong>AISC 360-16:</strong> Американский стандарт для стальных конструкций.</li>
              </ul>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🛡️ Металлургия Galvalume Plus® AZ180</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Покрытие по ASTM A792 (55% Al, 43.4% Zn, 1.6% Si) обеспечивает самовосстанавливающуюся катодную защиту, служащую в 4-6 раз дольше обычной оцинковки.
              </p>
            </div>
          </div>
        </div>
      `
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
      de: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🏭 Mega-Produktionswerk Adana</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Mit einer Jahreskapazität von 25.000 Tonnen Stahlverarbeitung, automatisierten CNC-Rollformanlagen und Roboterschweißsystemen garantieren wir höchste Präzision.
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🚢 15 km zum Tiefseehafen Mersin</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Direkter Zugang zu den internationalen Mittelmeer-Terminals senkt Logistikkosten und ermöglicht weltweit konkurrenzlos günstige FOB- und CIF-Raten.
              </p>
            </div>
          </div>
        </div>
      `,
      fr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🏭 Usine de Fabrication Haute Capacité à Adana</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Capacité annuelle de 25 000 tonnes de charpente métallique, profileuses CNC automatisées et découpe robotisée garantissant une tolérance inframillimétrique.
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🚢 15 km du Port International de Mersin</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Liaison directe avec les grands terminaux maritimes méditerranéens pour des expéditions par conteneurs 40HC au meilleur tarif FOB ou CIF.
              </p>
            </div>
          </div>
        </div>
      `,
      es: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🏭 Centro de Fabricación en Adana</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Capacidad anual de 25.000 toneladas de acero estructural, líneas continuas de perfilado CNC y perforación automatizada bajo normas europeas.
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🚢 A 15 km del Puerto de Mersin</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Conexión marítima directa que elimina trámites terrestres y permite despachos en flat-pack 40HC a los mejores costos FOB y CIF del mercado.
              </p>
            </div>
          </div>
        </div>
      `,
      ar: `
        <div class="prose max-w-4xl mx-auto py-8" dir="rtl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🏭 مجمع التصنيع العملاق في أضنة</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                طاقة إنتاجية سنوية تبلغ 25,000 طن متري من الهياكل الفولاذية، مع خطوط درفلة CNC آلية وتثقيب روبوتي بدقة مليمترية فائقة.
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🚢 15 كم عن ميناء مرسين للمياه العميقة</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                نفاذ بحري مباشر لمحطات الحاويات الدولية في البحر الأبيض المتوسط يوفر أقل تكاليف نولون شحن FOB و CIF لجميع دول العالم.
              </p>
            </div>
          </div>
        </div>
      `,
      ru: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🏭 Завод STRUCTIVA в Адане</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Производственная мощность 25 000 тонн стали в год, автоматические прокатные линии CNC и роботизированная резка с гарантией субмиллиметровой точности.
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">🚢 15 км до глубоководного порта Мерсин</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Прямой выход к международным терминалам Средиземного моря гарантирует самые выгодные условия фрахта FOB и CIF по всему миру.
              </p>
            </div>
          </div>
        </div>
      `
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
      de: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📍 Werksadresse</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Organisierte Industriezone Adana (AOSB), Steel Fabrication St. No:12, Adana, Türkei<br>
                <em>(15 km zum Tiefseehafen Mersin)</em>
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📞 Direkte Ansprechpartner</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Telefon: <a href="tel:+905320550945" class="text-amber-400 hover:underline">+90 532 055 09 45</a><br>
                WhatsApp: <a href="https://wa.me/905320550945" class="text-emerald-400 hover:underline">+90 532 055 09 45</a><br>
                E-Mail: <a href="mailto:info@structiva.com.tr" class="text-amber-400 hover:underline">info@structiva.com.tr</a>
              </p>
            </div>
          </div>
        </div>
      `,
      fr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📍 Adresse de l'Usine</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Zone Industrielle Organisée d'Adana (AOSB), Rue de la Charpente Métallique N°12, Adana, Turquie<br>
                <em>(à 15 km du port de conteneurs de Mersin)</em>
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📞 Contacts Directs</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Téléphone: <a href="tel:+905320550945" class="text-amber-400 hover:underline">+90 532 055 09 45</a><br>
                WhatsApp: <a href="https://wa.me/905320550945" class="text-emerald-400 hover:underline">+90 532 055 09 45</a><br>
                E-mail: <a href="mailto:info@structiva.com.tr" class="text-amber-400 hover:underline">info@structiva.com.tr</a>
              </p>
            </div>
          </div>
        </div>
      `,
      es: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📍 Dirección de la Planta</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Zona Industrial Organizada de Adana (AOSB), Calle Fabricación de Acero N°12, Adana, Turquía<br>
                <em>(a 15 km del Puerto de Mersin)</em>
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📞 Canales Directos</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Teléfono: <a href="tel:+905320550945" class="text-amber-400 hover:underline">+90 532 055 09 45</a><br>
                WhatsApp: <a href="https://wa.me/905320550945" class="text-emerald-400 hover:underline">+90 532 055 09 45</a><br>
                Email: <a href="mailto:info@structiva.com.tr" class="text-amber-400 hover:underline">info@structiva.com.tr</a>
              </p>
            </div>
          </div>
        </div>
      `,
      ar: `
        <div class="prose max-w-4xl mx-auto py-8" dir="rtl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📍 عنوان المصنع والإنتاج</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                المنطقة الصناعية المنظمة في أضنة (AOSB)، شارع تصنيع الصلب رقم 12، أضنة، تركيا<br>
                <em>(يبعد 15 كم فقط عن ميناء مرسين الدولي للحاويات)</em>
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📞 قنوات الاتصال المباشرة</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                الهاتف: <a href="tel:+905320550945" class="text-amber-400 hover:underline">+90 532 055 09 45</a><br>
                واتساب: <a href="https://wa.me/905320550945" class="text-emerald-400 hover:underline">+90 532 055 09 45</a><br>
                البريد: <a href="mailto:info@structiva.com.tr" class="text-amber-400 hover:underline">info@structiva.com.tr</a>
              </p>
            </div>
          </div>
        </div>
      `,
      ru: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📍 Адрес производственного комплекса</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Организованная промышленная зона Аданы (AOSB), ул. Сталепрокатная №12, Адана, Турция<br>
                <em>(15 км от международного контейнерного порта Мерсин)</em>
              </p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 class="text-xl font-bold text-amber-400 mb-2">📞 Прямые контакты</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                Телефон: <a href="tel:+905320550945" class="text-amber-400 hover:underline">+90 532 055 09 45</a><br>
                WhatsApp: <a href="https://wa.me/905320550945" class="text-emerald-400 hover:underline">+90 532 055 09 45</a><br>
                Email: <a href="mailto:info@structiva.com.tr" class="text-amber-400 hover:underline">info@structiva.com.tr</a>
              </p>
            </div>
          </div>
        </div>
      `
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
      de: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Schritt 1</span>
              <p class="text-sm text-slate-300">Geben Sie Spannweite, Länge und Standortparameter an.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Schritt 2</span>
              <p class="text-sm text-slate-300">Unsere Ingenieure führen statische Analysen nach Eurocode 3 durch.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Schritt 3</span>
              <p class="text-sm text-slate-300">Erhalten Sie Stückliste (BOM) und FOB/CIF-Angebot in 24 Stunden.</p>
            </div>
          </div>
        </div>
      `,
      fr: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Étape 1</span>
              <p class="text-sm text-slate-300">Indiquez la portée, la longueur et le port de destination.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Étape 2</span>
              <p class="text-sm text-slate-300">Nos ingénieurs valident la faisabilité statique sous Eurocode 3.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Étape 3</span>
              <p class="text-sm text-slate-300">Recevez la nomenclature (BOM) et l'offre FOB/CIF sous 24h.</p>
            </div>
          </div>
        </div>
      `,
      es: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Paso 1</span>
              <p class="text-sm text-slate-300">Indique las dimensiones requeridas y el puerto de entrega.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Paso 2</span>
              <p class="text-sm text-slate-300">Nuestros calculistas verifican cargas de viento y nieve según Eurocódigo 3.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Paso 3</span>
              <p class="text-sm text-slate-300">Reciba el desglose de materiales (BOM) y presupuesto formal en 24h.</p>
            </div>
          </div>
        </div>
      `,
      ar: `
        <div class="prose max-w-4xl mx-auto py-8" dir="rtl">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">الخطوة 1</span>
              <p class="text-sm text-slate-300">حدد عرض البحر والطول وميناء الوصول المستهدف.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">الخطوة 2</span>
              <p class="text-sm text-slate-300">يقوم مهندسونا بحساب الأحمال وفق كود Eurocode / AISC المعتمد.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">الخطوة 3</span>
              <p class="text-sm text-slate-300">استلم جدول الكميات (BOM) وعرض أسعار FOB/CIF الرسمي خلال 24 ساعة.</p>
            </div>
          </div>
        </div>
      `,
      ru: `
        <div class="prose max-w-4xl mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Шаг 1</span>
              <p class="text-sm text-slate-300">Укажите ширину пролета, длину и порт доставки.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Шаг 2</span>
              <p class="text-sm text-slate-300">Инженеры выполняют статический расчет по Еврокоду 3.</p>
            </div>
            <div class="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span class="text-amber-400 font-bold block mb-1">Шаг 3</span>
              <p class="text-sm text-slate-300">Получите ведомость материалов (BOM) и КП FOB/CIF за 24 часа.</p>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    slug: "knowledge/how-to-plan-industrial-steel-building",
    schemaType: "Article",
    publishedDate: "2026-02-15",
    category: "Planning & Engineering",
    priority: "0.85",
    changefreq: "monthly",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "Bilgi Merkezi", path: "/knowledge" },
      { name: "Endüstriyel Çelik Bina Planlama Rehberi", path: "/knowledge/how-to-plan-industrial-steel-building" }
    ],
    title: {
      tr: "Endüstriyel Çelik Bina Planlama: Açıklık, Yükseklik ve Statik Yükler | STRUCTIVA®",
      en: "How to Plan an Industrial Steel Building: Span, Clearances & Load Factors | STRUCTIVA®",
      de: "Planung von Industrie-Stahlhallen: Spannweiten & Lastannahmen | STRUCTIVA®",
      fr: "Planification de Bâtiments Industriels en Acier : Portées & Charges | STRUCTIVA®",
      es: "Cómo Planificar Naves Industriales de Acero: Luces Libres y Cargas | STRUCTIVA®",
      ar: "دليل تخطيط وتصميم المباني الفولاذية الصناعية: البحور والأحمال | STRUCTIVA®",
      ru: "Проектирование промышленных стальных ангаров: пролеты и нагрузки | STRUCTIVA®"
    },
    description: {
      tr: "Kolonsuz kemer hangarlar ve çelik binalar için açıklık tespiti, zemin taşıma kapasitesi ve Eurocode 1 rüzgar/kar yükü planlama rehberi.",
      en: "A practical guide for developers and procurement directors on establishing optimal clear spans, ridge heights, column grids, and regional snow/wind load parameters.",
      de: "Leitfaden für Bauherren und Planer zur optimalen Festlegung von Spannweiten, Traufhöhen und statischen Lastannahmen.",
      fr: "Guide pratique pour déterminer les portées libres optimales, hauteurs sous faîtage et facteurs de charge au vent.",
      es: "Guía práctica para promotores sobre cómo definir luces libres, alturas de cumbrera y cargas de viento.",
      ar: "دليل عملي للمطورين والمهندسين لتحديد البحور الحرة، الارتفاعات، ومعايير أحمال الرياح والثلوج.",
      ru: "Практическое руководство по выбору оптимальной ширины пролета, высоты и расчету снеговых и ветровых нагрузок."
    },
    h1: {
      tr: "Endüstriyel Çelik Bina Planlama: Açıklık, Gabari ve Statik Yükler",
      en: "How to Plan an Industrial Steel Building: Span, Clearances & Load Factors",
      de: "Planung von Industrie-Stahlhallen: Spannweiten, Höhen & Lastannahmen",
      fr: "Planification de Bâtiments Industriels en Acier : Portées & Gabarits",
      es: "Cómo Planificar Naves Industriales: Luces Libres y Factores de Carga",
      ar: "دليل تخطيط المباني الفولاذية الصناعية: البحور المفتوحة والارتفاعات والأحمال",
      ru: "Проектирование стальных ангаров: пролеты, высоты и расчет нагрузок"
    },
    subheading: {
      tr: "Depolama, lojistik veya fabrika yatırımlarında doğru net açıklık ve Eurocode 1 yük parametrelerini belirleme kılavuzu.",
      en: "A practical engineering guide for developers and procurement directors to optimize structural geometry and wind/snow codes.",
      de: "Technischer Leitfaden zur Bestimmung der richtigen Tragwerksgeometrie und Wind-/Schneelasten.",
      fr: "Guide technique d'ingénierie pour optimiser la géométrie structurelle et respecter les normes Eurocode.",
      es: "Guía de ingeniería para optimizar la geometría estructural y cumplir normativas de carga.",
      ar: "دليل هندسي لتحديد الأبعاد الإنشائية المثالية وحساب أحمال الرياح والزلازل.",
      ru: "Инженерное руководство по расчету геометрических параметров и статических нагрузок."
    },
    bodyHtml: {
      tr: `
        <article class="prose max-w-4xl mx-auto py-8 text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <div class="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl mb-8">
            <h3 class="text-amber-400 font-bold text-lg mb-2">Özet Mühendislik Çıkarımları</h3>
            <ul class="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Kolonsuz Açıklık:</strong> Kemer geometrisi içeride kolon gerektirmez; %100 kesintisiz forklift ve vinç hareket alanı sağlar.</li>
              <li><strong>İklim Yükleri:</strong> Eurocode 1 (EN 1991) uyarınca 240 km/h rüzgar ve 3.5 kN/m² kar yüküne göre profil et kalınlığı belirlenir.</li>
              <li><strong>Zemin Tasarrufu:</strong> Yük çevre temel hatlarına homojen dağıtıldığından geleneksel noktasal ayaklara göre %25 temel tasarrufu sağlar.</li>
            </ul>
          </div>
          <p>Endüstriyel bir çelik yapı planlanırken ilk verilmesi gereken karar, operasyonların iç kolonsuz net açıklık (clear-span) gerektirip gerektirmediğidir. Depolama, lojistik merkezleri ve uçak hangarlarında iç kolonların kaldırılması trafik darboğazlarını önler ve metreküp başına depolama verimini %100'e çıkarır.</p>
          <p>Tasarım rüzgar yükü arsanın coğrafi konumuna, sahil yakınlığına ve rakımına bağlı olarak belirlenir. STRUCTIVA Adana mühendislik merkezinde tüm statik hesaplar Eurocode 1 (EN 1991-1-4) ve AISC 360-16 normlarında yapılarak 240 km/h kasırga rüzgarlarına dayanım garantilenir.</p>
        </article>
      `,
      en: `
        <article class="prose max-w-4xl mx-auto py-8 text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <div class="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl mb-8">
            <h3 class="text-amber-400 font-bold text-lg mb-2">Key Engineering Takeaways</h3>
            <ul class="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Clear-Span Arches:</strong> Eliminate interior columns for 100% unrestricted forklift and crane maneuverability.</li>
              <li><strong>Climate Loading:</strong> Wind velocities up to 240 km/h and ground snow loads up to 3.5 kN/m² per Eurocode 1.</li>
              <li><strong>Civil Cost Reduction:</strong> Continuous foundation distribution cuts foundation concrete costs by up to 25%.</li>
            </ul>
          </div>
          <p>Planning an industrial steel structure requires balancing operational efficiency, regulatory compliance, and lifecycle costs. Choosing clear spans allows maximum floor space utilization for aircraft hangars, bulk grain silos, and logistics hubs.</p>
          <p>At STRUCTIVA's Adana engineering center, all calculations comply with Eurocode 1 (EN 1991-1-4) and AISC 360-16, ensuring structures comfortably survive hurricane-force gusts up to 240 km/h.</p>
        </article>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Detaillierter Leitfaden zur Bemessung von stützenfreien Industriehallen nach Eurocode 1 und 3.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Guide de conception technique pour hangars industriels autoportants et calculs de portées.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Guía práctica para planificar naves industriales de acero sin columnas intermedias.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">دليل هندسي مفصل لتصميم الهناجر والمستودعات الفولاذية ذات البحور المفتوحة.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Инженерное руководство по проектированию стальных арочных бескаркасных зданий.</p></div>`
    }
  },
  {
    slug: "knowledge/peb-vs-conventional-structural-steel",
    schemaType: "Article",
    publishedDate: "2026-02-20",
    category: "Technical Comparison",
    priority: "0.85",
    changefreq: "monthly",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "Bilgi Merkezi", path: "/knowledge" },
      { name: "PEB ve Konvansiyonel Çelik Karşılaştırması", path: "/knowledge/peb-vs-conventional-structural-steel" }
    ],
    title: {
      tr: "Ön Üretimli Çelik (PEB) ve Konvansiyonel Çelik Karşılaştırması | STRUCTIVA®",
      en: "Pre-Engineered Buildings (PEB) vs. Conventional Structural Steel | STRUCTIVA®",
      de: "PEB-Fertighallen vs. Konventioneller Stahlbau im Vergleich | STRUCTIVA®",
      fr: "Bâtiments Pré-usinés (PEB) vs Acier Conventionnel | STRUCTIVA®",
      es: "Edificios PEB vs Acero Estructural Convencional | STRUCTIVA®",
      ar: "مقارنة المباني مسبقة الهندسة PEB مع الهياكل التقليدية | STRUCTIVA®",
      ru: "Сравнение быстровозводимых зданий PEB и классического металлопроката | STRUCTIVA®"
    },
    description: {
      tr: "Ön üretimli çelik kitleri ile sahada kaynaklı geleneksel çeliğin maliyet, teslim süresi ve sismik süneklik açısından karşılaştırması.",
      en: "Detailed comparison between pre-engineered factory-built steel kits and field-welded conventional steel frames in cost, lead time, and seismic ductility.",
      de: "Technischer Vergleich zwischen vorgefertigten PEB-Hallen und konventionell geschweißtem Stahlbau.",
      fr: "Comparatif détaillé entre kits métalliques pré-usinés (PEB) et charpente conventionnelle soudée.",
      es: "Comparativa entre naves pre-diseñadas (PEB) y acero convencional soldado en obra.",
      ar: "مقارنة فنية ومالية بين المباني مسبقة الهندسة PEB والهياكل الفولاذية التقليدية الملحومة.",
      ru: "Техническое сравнение быстровозводимых зданий PEB и традиционных сварных металлоконструкций."
    },
    h1: {
      tr: "Ön Üretimli Çelik (PEB) ve Konvansiyonel Çelik Karşılaştırması",
      en: "Pre-Engineered Buildings (PEB) vs. Conventional Structural Steel",
      de: "PEB-Fertighallen vs. Konventioneller Stahlbau",
      fr: "Bâtiments Pré-usinés (PEB) vs Charpente Métallique Conventionnelle",
      es: "Edificios PEB vs Acero Estructural Convencional",
      ar: "المباني مسبقة الهندسة PEB في مواجهة الهياكل الفولاذية التقليدية",
      ru: "Быстровозводимые здания PEB против традиционного металлопроката"
    },
    subheading: {
      tr: "Fabrika cıvatalı PEB sistemleri tonaj, montaj hızı ve şantiye maliyetlerinde nasıl %30-40 avantaj sağlar?",
      en: "How factory bolt-together PEB systems deliver a 30% to 40% project acceleration and 20% steel tonnage reduction.",
      de: "Warum PEB-Systeme durch optimierte Querschnitte bis zu 40% Bauzeit und 20% Stahlgewicht einsparen.",
      fr: "Comment les structures pré-usinées permettent d'économiser jusqu'à 40% de temps de montage.",
      es: "Por qué los sistemas PEB ahorran hasta un 40% en tiempo de ejecución y un 20% en peso de acero.",
      ar: "كيف توفر الأنظمة مسبقة الهندسة 30-40% من وقت التنفيذ و20% من وزن الفولاذ الإجمالي.",
      ru: "Преимущества систем PEB: сокращение сроков монтажа на 40% и экономия веса металла на 20%."
    },
    bodyHtml: {
      tr: `
        <article class="prose max-w-4xl mx-auto py-8 text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <div class="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl mb-8">
            <h3 class="text-amber-400 font-bold text-lg mb-2">Öne Çıkan Karşılaştırma Noktaları</h3>
            <ul class="list-disc pl-5 space-y-2 text-sm">
              <li><strong>%30-%40 Zaman Tasarrufu:</strong> Fabrikada cıvata delikleri açılmış kitler şantiyede sıcak kaynak gerektirmeden hızla kurulur.</li>
              <li><strong>%20 Tonaj Azalması:</strong> Değişken kesitli (tapered) I-profiller momenti karşılayacak noktalarda kalınlaşır; gereksiz çelik ağırlığı atılır.</li>
              <li><strong>EN 1090-2 EXC4 Sertifikası:</strong> Kaynaklar şantiyede değil, fabrikada robotik kollar altında ultrasonik testlerle denetlenir.</li>
            </ul>
          </div>
          <p>Geleneksel yapısal çelikte tüm kiriş boyu boyunca sabit haddelenmiş profil kullanılır. Bu durum düşük gerilme bölgelerinde gereksiz çelik kütlesi anlamına gelir. Oysa modern PEB sistemlerinde moment diyagramına uygun değişken kesitli petek veya dolu gövdeli plakalar kullanılarak taşıyıcı sistem %20 hafifletilir.</p>
        </article>
      `,
      en: `
        <article class="prose max-w-4xl mx-auto py-8 text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <div class="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl mb-8">
            <h3 class="text-amber-400 font-bold text-lg mb-2">Comparison Highlights</h3>
            <ul class="list-disc pl-5 space-y-2 text-sm">
              <li><strong>30–40% Faster Completion:</strong> Eliminates certified field welders via precision bolt-hole connections.</li>
              <li><strong>20% Weight Reduction:</strong> Tapered built-up sections place steel only where bending moments require it.</li>
              <li><strong>EN 1090-2 EXC4:</strong> Robotically welded in factory conditions under strict ultrasonic inspection.</li>
            </ul>
          </div>
          <p>Conventional structural steel utilizes uniform cross-section rolled profiles. PEB frames utilize custom tapered plates that mirror moment diagrams, drastically cutting foundation and material costs.</p>
        </article>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Wirtschaftlicher und technischer Vergleich zwischen PEB-Hallen und konventionellem Stahlbau.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Étude comparative sur les coûts, délais et résistance sismique entre PEB et acier classique.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Análisis comparativo de costos, tiempos de entrega y peso estructural entre PEB y acero tradicional.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">تحليل مقارن بين أنظمة PEB مسبقة الهندسة والهياكل الفولاذية التقليدية.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Сравнительный анализ преимуществ PEB зданий перед традиционными сварными балками.</p></div>`
    }
  },
  {
    slug: "knowledge/how-to-prepare-structural-steel-rfq",
    schemaType: "Article",
    publishedDate: "2026-02-28",
    category: "Procurement & Commercial",
    priority: "0.85",
    changefreq: "monthly",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "Bilgi Merkezi", path: "/knowledge" },
      { name: "Çelik Yapı RFQ Hazırlama Kılavuzu", path: "/knowledge/how-to-prepare-structural-steel-rfq" }
    ],
    title: {
      tr: "Uluslararası Çelik Yapı Şartnamesi & Teklif Talebi (RFQ) Hazırlama | STRUCTIVA®",
      en: "How to Prepare an International Structural Steel RFQ & Specification | STRUCTIVA®",
      de: "Leistungsverzeichnis & Ausschreibung (RFQ) für Stahlhallen erstellen | STRUCTIVA®",
      fr: "Comment Préparer un Appel d'Offres (RFQ) pour Bâtiments en Acier | STRUCTIVA®",
      es: "Cómo Preparar una Especificación y Solicitud de Cotización (RFQ) | STRUCTIVA®",
      ar: "كيفية إعداد كراسة الشروط والمواصفات الفنية لطلب عروض الأسعار RFQ | STRUCTIVA®",
      ru: "Подготовка технического задания и запроса КП (RFQ) на стальной ангар | STRUCTIVA®"
    },
    description: {
      tr: "Satın alma ve proje yöneticileri için doğru, hızlı ve rekabetçi çelik bina fiyat teklifleri almayı sağlayan teknik veri kontrol listesi.",
      en: "What engineering data, site conditions, and accessory lists procurement managers must include to receive accurate, fast, and competitive steel quotations.",
      de: "Leitfaden für Einkäufer zur Erstellung präziser Ausschreibungsunterlagen für Industriehallen.",
      fr: "Les données techniques et conditions de site essentielles pour obtenir un devis d'ingénierie sous 24h.",
      es: "Datos técnicos y requisitos de obra necesarios para obtener cotizaciones formales y competitivas en 24h.",
      ar: "قائمة البيانات الهندسية والمعايير الفنية الواجب توفرها للحصول على عرض أسعار دقيق وتنافسي خلال 24 ساعة.",
      ru: "Чек-лист исходных данных для составления ТЗ и получения точного коммерческого предложения за 24 часа."
    },
    h1: {
      tr: "Uluslararası Çelik Yapı Şartnamesi ve Teklif Talebi (RFQ) Hazırlama",
      en: "How to Prepare an International Structural Steel RFQ & Specification",
      de: "Vorbereitung eines Leistungsverzeichnisses (RFQ) für Stahlbauten",
      fr: "Préparation d'un Appel d'Offres (RFQ) pour Structures en Acier",
      es: "Cómo Preparar una Solicitud de Cotización (RFQ) para Estructuras de Acero",
      ar: "دليل إعداد طلبات عروض الأسعار والمواصفات الفنية للمباني الفولاذية (RFQ)",
      ru: "Как составить техническое задание и запрос коммерческого предложения (RFQ)"
    },
    subheading: {
      tr: "Belirsiz şartnameler ek maliyet yaratır; 24 saatte kesin FOB/CIF teklifi almak için gereken 5 temel mühendislik girdisi.",
      en: "Ambiguous specs lead to conservative assumptions. Supply precise engineering inputs for razor-sharp 24h proposals.",
      de: "Präzise Daten verhindern überhöhte Sicherheitszuschläge und beschleunigen die Angebotserstellung.",
      fr: "Fournissez les paramètres exacts pour recevoir un devis ferme FOB/CIF sous 24 heures.",
      es: "Evite sobrecostes por falta de información suministrando los datos clave desde el primer contacto.",
      ar: "تقديم معطيات فنية واضحة يضمن الحصول على أفضل سعر استاتيكي ودراسة دقيقة خلال 24 ساعة.",
      ru: "Точные параметры защищают от перезаклада по металлу и ускоряют получение официального КП."
    },
    bodyHtml: {
      tr: `
        <article class="prose max-w-4xl mx-auto py-8 text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <div class="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl mb-8">
            <h3 class="text-amber-400 font-bold text-lg mb-2">Başarılı bir RFQ için 5 Temel Veri</h3>
            <ul class="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Net İç Açıklık & Boy:</strong> İçten içe kullanılabilir en ve aks aralıkları.</li>
              <li><strong>Kapı Boyutları:</strong> Tır, uçak veya iş makineleri için net geçiş açıklığı (en × boy).</li>
              <li><strong>Şantiye Koordinatları:</strong> Yerel rüzgar hızı, kar yükü ve sismik bölge hesabı için tam lokasyon.</li>
              <li><strong>Kaplama Tipi:</strong> Galvalume Plus® AZ180 tek kat panel veya sandviç panel / yalıtım şiltesi tercihi.</li>
              <li><strong>Teslimat Incoterms:</strong> FOB Mersin Limanı veya varış limanında CIF teslim şartı.</li>
            </ul>
          </div>
          <p>STRUCTIVA Adana fabrikamız, iletilen şartnameler doğrultusunda 24 saat içinde Eurocode / AISC statik analizi, malzeme dökümü (BOM) ve konteyner yükleme planını içeren resmi teklif mektubunu sunar.</p>
        </article>
      `,
      en: `
        <article class="prose max-w-4xl mx-auto py-8 text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <div class="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl mb-8">
            <h3 class="text-amber-400 font-bold text-lg mb-2">5 Critical Inputs for an Accurate RFQ</h3>
            <ul class="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Clear Span & Length:</strong> Interior usable dimensions without obstruction.</li>
              <li><strong>Door Clearances:</strong> Required opening widths and heights for equipment or aircraft.</li>
              <li><strong>Site Coordinates:</strong> Statutory wind velocity, seismic zone, and snow accumulation.</li>
              <li><strong>Cladding Profile:</strong> Uninsulated Galvalume Plus AZ180 or insulated sandwich systems.</li>
              <li><strong>Incoterms 2020:</strong> FOB Mersin Port or CIF Destination seaport.</li>
            </ul>
          </div>
        </article>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Praktischer Leitfaden zur Ausschreibung von Stahlhallen und Vergabe von Industrieaufträgen.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Comment formaliser votre cahier des charges pour recevoir un devis d'ingénierie sous 24h.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Lista de comprobación técnica para directores de compras y licitaciones internacionales.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">خطوات وإرشادات إعداد طلبات عروض الأسعار الإنشائية المعتمدة دولياً.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Инструкция по составлению спецификации и получению расчета стоимости стального ангара.</p></div>`
    }
  },
  {
    slug: "knowledge/galvalume-plus-corrosion-science",
    schemaType: "Article",
    publishedDate: "2026-03-01",
    category: "Materials & Metallurgy",
    priority: "0.85",
    changefreq: "monthly",
    breadcrumbs: [
      { name: "STRUCTIVA", path: "/" },
      { name: "Bilgi Merkezi", path: "/knowledge" },
      { name: "Galvalume Plus Korozyon Fiziği", path: "/knowledge/galvalume-plus-corrosion-science" }
    ],
    title: {
      tr: "Galvalume Plus® AZ180 Metalürjisi: Korozyon Direnci ve Güneş Yansıtma | STRUCTIVA®",
      en: "Galvalume Plus® AZ180 Metallurgy: Corrosion Resistance & Solar Reflectance | STRUCTIVA®",
      de: "Galvalume Plus® AZ180 Metallurgie: Korrosionsschutz & Reflexion | STRUCTIVA®",
      fr: "Métallurgie Galvalume Plus® AZ180 : Résistance à la Corrosion | STRUCTIVA®",
      es: "Metalurgia Galvalume Plus® AZ180: Resistencia a la Corrosión | STRUCTIVA®",
      ar: "علم المعادن لسبائك Galvalume Plus® AZ180 ومقاومة التآكل | STRUCTIVA®",
      ru: "Металлургия Galvalume Plus® AZ180: стойкость к коррозии | STRUCTIVA®"
    },
    description: {
      tr: "%55 Alüminyum - Çinko alaşımının agresif deniz, kimyasal ve tarım ortamlarında standart galvanizli saclara göre 4-6 kat daha uzun ömürlü olmasının bilimsel nedenleri.",
      en: "Why a 55% Aluminum-Zinc alloy outperforms conventional hot-dip galvanized steel by 4 to 6 times in harsh marine and industrial environments.",
      de: "Wissenschaftliche Hintergründe zur überlegenen Lebensdauer von 55% Aluminium-Zink-Beschichtungen.",
      fr: "Pourquoi l'alliage 55% Aluminium-Zinc surpasse l'acier galvanisé traditionnel de 4 à 6 fois en milieu marin.",
      es: "Por qué la aleación de 55% Aluminio-Zinc supera al acero galvanizado convencional por 4 a 6 veces.",
      ar: "لماذا تتفوق سبائك 55% ألومنيوم-زنك على الجلفنة التقليدية بـ 4 إلى 6 أضعاف في البيئات الساحلية والصناعية.",
      ru: "Почему сплав 55% алюминия и цинка служит в 4-6 раз дольше обычной оцинковки в агрессивных средах."
    },
    h1: {
      tr: "Galvalume Plus® AZ180 Metalürjisi: Korozyon Direnci ve Isı Yansıtma",
      en: "Galvalume Plus® AZ180 Metallurgy: Corrosion Resistance & Solar Reflectance",
      de: "Galvalume Plus® AZ180 Metallurgie: Korrosionsschutz & Wärmereflexion",
      fr: "Métallurgie Galvalume Plus® AZ180 : Résistance à la Corrosion & Réflectance",
      es: "Metalurgia Galvalume Plus® AZ180: Resistencia a la Corrosión y Reflectancia",
      ar: "المعادن المتقدمة لسبائك جالفالوم بلس AZ180 ومقاومة التآكل والأملاح",
      ru: "Металлургия стали Galvalume Plus® AZ180: защита от коррозии и теплоотражение"
    },
    subheading: {
      tr: "%55 Alüminyum, %43.4 Çinko ve %1.6 Silikon alaşımının sunduğu kendini onaran katodik koruma ve 40-50 yıl bakım gerektirmeyen kullanım ömrü.",
      en: "Self-healing sacrificial barrier protection with 80% solar heat reflectance for 40-to-50-year service life.",
      de: "Selbstheilender kathodischer Korrosionsschutz mit 80% solarer Reflexion für jahrzehntelange Haltbarkeit.",
      fr: "Protection sacrificielle auto-cicatrisante et réflectance solaire de 80% pour une longévité de 40 à 50 ans.",
      es: "Protección galvánica autorregenerable y 80% de reflectancia solar para 40 a 50 años de vida útil.",
      ar: "حماية كاثودية ذاتية الشفاء مع انعكاس حراري يصل إلى 80% لعمر افتراضي يمتد من 40 إلى 50 عاماً.",
      ru: "Самовосстанавливающаяся катодная защита и 80% отражение солнечного тепла со сроком службы 40-50 лет."
    },
    bodyHtml: {
      tr: `
        <article class="prose max-w-4xl mx-auto py-8 text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <div class="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl mb-8">
            <h3 class="text-amber-400 font-bold text-lg mb-2">Galvalume Plus® AZ180 Metalürjik Özellikleri</h3>
            <ul class="list-disc pl-5 space-y-2 text-sm">
              <li><strong>%55 Alüminyum Bariyeri:</strong> Atmosferik korozyona ve oksitlenmeye karşı geçirimsiz mikroskobik film tabakası oluşturur.</li>
              <li><strong>%43.4 Çinko Katodik Koruma:</strong> Kesim kenarları veya vida deliklerinde çinko kendini feda ederek çekirdek çeliğin paslanmasını önler.</li>
              <li><strong>%80 Güneş Işını Yansıtma:</strong> Çatının ısınmasını önler, sıcak iklimlerde klima enerji tüketimini %35 azaltır.</li>
              <li><strong>40-50 Yıl Ömür:</strong> Boya veya periyodik bakım gerektirmeden tuz sisi ve tarımsal amonyak ortamında kusursuz dayanım.</li>
            </ul>
          </div>
          <p>Tüm STRUCTIVA kemer panelleri ASTM A792 standartlarında AZ180 kaplama ağırlığında üretilir. Standart G90 galvanizli saclara kıyasla 4 ila 6 kat daha uzun korozyon dayanımı sunar.</p>
        </article>
      `,
      en: `
        <article class="prose max-w-4xl mx-auto py-8 text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <div class="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl mb-8">
            <h3 class="text-amber-400 font-bold text-lg mb-2">Metallurgical Key Points</h3>
            <ul class="list-disc pl-5 space-y-2 text-sm">
              <li><strong>55% Aluminum Barrier:</strong> Microscopic passive aluminum oxide film prevents rust.</li>
              <li><strong>43.4% Zinc Cathodic Protection:</strong> Preferentially corrodes at scratches and bolt penetrations to protect the core steel.</li>
              <li><strong>80% Solar Reflectance:</strong> Cuts internal HVAC cooling energy demands by up to 35%.</li>
              <li><strong>40–50 Year Service Life:</strong> Zero painting or recoating required even in aggressive marine atmospheres.</li>
            </ul>
          </div>
        </article>
      `,
      de: `<div class="py-8"><p class="text-slate-300">Metallurgische Eigenschaften und Korrosionsverhalten von Galvalume Plus AZ180.</p></div>`,
      fr: `<div class="py-8"><p class="text-slate-300">Étude de la résistance à la corrosion et de la durabilité de l'acier Galvalume Plus AZ180.</p></div>`,
      es: `<div class="py-8"><p class="text-slate-300">Comportamiento metalúrgico y protección contra la corrosión de Galvalume Plus AZ180.</p></div>`,
      ar: `<div class="py-8"><p class="text-slate-300">الخصائص الميتالورجية ومقاومة الصدأ لسبائك جالفالوم بلس AZ180.</p></div>`,
      ru: `<div class="py-8"><p class="text-slate-300">Металлургические свойства и антикоррозийные характеристики стали Galvalume Plus AZ180.</p></div>`
    }
  }
];

// OpenGraph locale codes for all 30 supported languages (Facebook/social)
const OG_LOCALE_MAP: Record<string, string> = {
  tr: "tr_TR", en: "en_US", de: "de_DE", fr: "fr_FR", es: "es_ES",
  it: "it_IT", pt: "pt_PT", nl: "nl_NL", pl: "pl_PL", ro: "ro_RO",
  bg: "bg_BG", el: "el_GR", cs: "cs_CZ", hu: "hu_HU", sr: "sr_RS",
  hr: "hr_HR", ru: "ru_RU", uk: "uk_UA", ar: "ar_SA", fa: "fa_IR",
  he: "he_IL", zh: "zh_CN", ja: "ja_JP", ko: "ko_KR", hi: "hi_IN",
  id: "id_ID", ms: "ms_MY", vi: "vi_VN", th: "th_TH", az: "az_AZ",
};

function buildHreflangTags(pageSlug: string): string {
  const subPath = pageSlug ? `/${pageSlug}` : "";
  const lines: string[] = [];

  for (const code of ALL_HREFLANGS) {
    lines.push(`    <link rel="alternate" hreflang="${code}" href="${SITE_URL}/${code}${subPath}" />`);
  }
  lines.push(`    <link rel="alternate" hreflang="x-default" href="${SITE_URL}/tr${subPath}" />`);
  return lines.join("\n");
}

function buildJsonLd(page: PageConfig, lang: string, canonicalUrl: string): string {
  const title = page.title[lang] || page.title.en || page.title.tr;
  const description = page.description[lang] || page.description.en || page.description.tr;

  const isRoot = page.slug === "";
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": isRoot
      ? [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "STRUCTIVA",
            "item": `${SITE_URL}/${lang}`
          }
        ]
      : [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "STRUCTIVA",
            "item": `${SITE_URL}/${lang}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": title.split("|")[0].trim(),
            "item": canonicalUrl
          }
        ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": ["Corporation", "Organization", "LocalBusiness", "Manufacturer"],
    "@id": `${SITE_URL}/#organization`,
    "name": BRAND_NAME,
    "legalName": "STRUCTIVA Çelik Yapı Sanayi A.Ş.",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/arched-steel-hangar-hd.jpg`,
    "image": `${SITE_URL}/images/arched-steel-hangar-hd.jpg`,
    "telephone": PHONE,
    "email": EMAIL,
    "priceRange": "$$$$",
    "currenciesAccepted": "USD, EUR, TRY, GBP, AED, SAR",
    "paymentAccepted": "Bank Wire, Letter of Credit (L/C)",
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
    },
    "hasMap": "https://maps.google.com/?q=Adana+Organize+Sanayi+Bolgesi",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      { "@type": "Country", "name": "Turkey" },
      { "@type": "Place", "name": "Worldwide" },
      { "@type": "Place", "name": "European Union" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "France" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Italy" },
      { "@type": "Country", "name": "Spain" },
      { "@type": "Country", "name": "Netherlands" },
      { "@type": "Country", "name": "Poland" },
      { "@type": "Country", "name": "Romania" },
      { "@type": "Country", "name": "Greece" },
      { "@type": "Place", "name": "Middle East" },
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Qatar" },
      { "@type": "Country", "name": "Kuwait" },
      { "@type": "Country", "name": "Iraq" },
      { "@type": "Place", "name": "Central Asia" },
      { "@type": "Country", "name": "Azerbaijan" },
      { "@type": "Country", "name": "Kazakhstan" },
      { "@type": "Country", "name": "Uzbekistan" },
      { "@type": "Place", "name": "North Africa" },
      { "@type": "Country", "name": "Egypt" },
      { "@type": "Country", "name": "Algeria" },
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Place", "name": "North America" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" }
    ],
    "hasCertification": [
      { "@type": "Certification", "name": "EN 1090-2:2018", "description": "Execution Class EXC3 & EXC4 Structural Steel" },
      { "@type": "Certification", "name": "CE Mark", "description": "Construction Products Regulation (CPR 305/2011/EU)" },
      { "@type": "Certification", "name": "ISO 9001:2015", "description": "Quality Management System" },
      { "@type": "Certification", "name": "ISO 14001:2015", "description": "Environmental Management" },
      { "@type": "Certification", "name": "ISO 45001:2018", "description": "Occupational Health & Safety" },
      { "@type": "Certification", "name": "AISC 360-16", "description": "Specification for Structural Steel Buildings" },
      { "@type": "Certification", "name": "ASTM A792", "description": "Galvalume Plus® AZ180 55% Al-Zn Coated Steel" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "STRUCTIVA Industrial Steel Buildings & Hangars",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Q-Series Clear-Span Arch Hangar",
            "description": "Continuous semi-circular arch steel building from 9m to 45m clear span with zero internal columns. Galvalume Plus® AZ180 alloy.",
            "material": "Galvalume Plus® AZ180 Steel",
            "category": "Clear-Span Steel Buildings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "S-Series Straight-Wall Arch Steel Building",
            "description": "Vertical straight sidewalls with arch roof crown from 12m to 30m clear span. Ideal for pallet racking and logistics.",
            "material": "Galvalume Plus® AZ180 Steel",
            "category": "Industrial Warehouses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "P-Series Gable Pitch Steel Building",
            "description": "Traditional pitched gable roofline with arched steel engineering from 10m to 24m clear span.",
            "material": "Galvalume Plus® AZ180 Steel",
            "category": "Commercial Steel Buildings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Container Canopy Arch Roof System",
            "description": "Heavy-duty arch trusses mounted on ISO shipping containers from 8m to 20m clear span.",
            "material": "Galvanized High-Tensile Steel",
            "category": "Modular Shelter Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Heavy Pre-Engineered Steel Building (PEB)",
            "description": "Tapered built-up portal frame structures up to 60m clear span with 50-ton overhead crane capacity.",
            "material": "Structural Steel Grade 50",
            "category": "Heavy Industrial Facilities"
          }
        }
      ]
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": PHONE,
        "contactType": "sales",
        "email": EMAIL,
        "availableLanguage": [
          "Turkish", "English", "German", "French", "Spanish",
          "Arabic", "Russian", "Italian", "Portuguese", "Dutch",
          "Polish", "Azerbaijani", "Chinese", "Hindi"
        ]
      }
    ],
    "knowsAbout": [
      "Clear-Span Arch Steel Buildings",
      "Aircraft Hangars",
      "Pre-Engineered Buildings (PEB)",
      "Galvalume Plus AZ180",
      "EN 1090-2 Execution Class 4",
      "AISC 360-16 Structural Steel",
      "Container Canopy Roof Systems",
      "Bulk Agricultural Grain Storage"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "url": SITE_URL,
    "name": BRAND_NAME,
    "publisher": { "@id": `${SITE_URL}/#organization` }
  };

  // Speakable schema (voice assistants & GEO answer engines — marks the
  // h1 + subheading summary as speakable content for audio answer surfaces)
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#speakable`,
    "url": canonicalUrl,
    "name": title,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "header p", "main p:first-of-type"]
    },
    "inLanguage": lang
  };

  const schemas: any[] = [breadcrumbList, orgSchema, websiteSchema, speakableSchema];

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
        "availability": "https://schema.org/InStock",
        "deliveryLeadTime": {
          "@type": "QuantitativeValue",
          "minValue": "2",
          "maxValue": "4",
          "unitCode": "WEE"
        }
      }
    });
  }

  if (page.schemaType === "Article") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "@id": `${canonicalUrl}#article`,
      "headline": title,
      "description": description,
      "image": `${SITE_URL}/images/arched-steel-hangar-hd.jpg`,
      "inLanguage": lang,
      "author": {
        "@type": "Organization",
        "name": BRAND_NAME,
        "url": SITE_URL
      },
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "datePublished": page.publishedDate || "2026-02-15",
      "dateModified": "2026-03-01",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "about": [
        { "@type": "Thing", "name": "Steel Building Engineering" },
        { "@type": "Thing", "name": "Clear-Span Arch Technology" },
        { "@type": "Thing", "name": "Galvalume Plus AZ180" }
      ]
    });
  }

  // FAQPage schema — powers rich FAQ results & AI answer engines (AEO/GEO)
  const defaultFaqs: Record<string, Array<{ question: string; answer: string }>> = {
    tr: [
      {
        question: "STRUCTIVA kemerli çelik hangarları hangi açıklık ve rüzgar yükü değerlerine sahiptir?",
        answer: "STRUCTIVA kemerli çelik hangarları 9 metreden 45 metreye kadar iç kolonsuz net açıklıkla üretilir. Eurocode 3 ve AISC 360-16 standartlarında 240 km/h rüzgar hızına ve 350 kg/m² kar yüküne dayanıklıdır."
      },
      {
        question: "Galvalume Plus® AZ180 kaplamanın geleneksel galvanize göre avantajı nedir?",
        answer: "%55 Alüminyum, %43.4 Çinko ve %1.6 Silikon alaşımlı kaplama (ASTM A792), standart galvanize göre 4 ila 6 kat daha uzun korozyon ömrü sunar. 40-50 yıl bakım gerektirmez ve güneş ışınlarını %80 oranında yansıtır."
      },
      {
        question: "Uluslararası deniz aşırı sevkiyat nasıl yapılır?",
        answer: "Tüm yapılar Adana fabrikamızda 40HC deniz konteynerlerine flat-pack olarak yüklenir. Yaklaşık 350-400 m² bina tek bir konteynere sığar. Mersin Limanı'na 15 km mesafeden 50+ ülkeye sevk edilir."
      }
    ],
    en: [
      {
        question: "What clear-span widths and wind loads do STRUCTIVA arch steel hangars support?",
        answer: "STRUCTIVA clear-span arch steel hangars are engineered from 9m to 45m without interior columns, certified under Eurocode 3 and AISC 360-16 for wind resistance up to 240 km/h and snow loads up to 350 kg/m²."
      },
      {
        question: "What makes Galvalume Plus® AZ180 superior to standard galvanized steel?",
        answer: "Galvalume Plus® AZ180 (55% Al, 43.4% Zn, 1.6% Si per ASTM A792) provides self-healing galvanic protection outlasting standard G90 galvanizing by 4 to 6 times, delivering 40-50 years of maintenance-free service with 80% solar heat reflectance."
      },
      {
        question: "How are STRUCTIVA steel building kits shipped internationally?",
        answer: "All building components are demountable and flat-packed into standard 40ft High-Cube (40HC) containers at our Adana facility (~350–400 m² per container) and dispatched worldwide via Mersin Deep-Water Port (15 km away)."
      }
    ],
    de: [
      {
        question: "Welche Spannweiten und Windlasten unterstützen STRUCTIVA Bogenhallen?",
        answer: "STRUCTIVA stützenfreie Bogen-Stahlhallen werden von 9m bis 45m Spannweite ohne Zwischensäulen gefertigt, zertifiziert nach Eurocode 3 und AISC 360-16 für Windgeschwindigkeiten bis 240 km/h und Schneelasten bis 350 kg/m²."
      },
      {
        question: "Was unterscheidet Galvalume Plus® AZ180 von normalem verzinktem Stahl?",
        answer: "Galvalume Plus® AZ180 (55% Al, 43,4% Zn, 1,6% Si nach ASTM A792) bietet selbstheilenden kathodischen Schutz, hält 4- bis 6-mal länger als Standardverzinkung und reflektiert 80% der Sonnenwärme über 40-50 Jahre wartungsfrei."
      },
      {
        question: "Wie erfolgt der internationale Übersee-Versand der Hallen?",
        answer: "Alle Komponenten werden im Werk Adana zerlegt und kompakt in 40HC Seecontainer verpackt (ca. 350-400 m² Hallenfläche pro Container) und über den 15 km entfernten Tiefseehafen Mersin weltweit verschifft."
      }
    ],
    fr: [
      {
        question: "Quelles sont les portées libres et résistances au vent des hangars STRUCTIVA ?",
        answer: "Les hangars arqués en acier STRUCTIVA offrent des portées libres de 9m à 45m sans poteaux intérieurs, certifiés selon l'Eurocode 3 et AISC 360-16 pour des vents jusqu'à 240 km/h et charges de neige jusqu'à 350 kg/m²."
      },
      {
        question: "Pourquoi l'acier Galvalume Plus® AZ180 est-il supérieur à l'acier galvanisé ordinaire ?",
        answer: "L'alliage Galvalume Plus® AZ180 (55% Al, 43,4% Zn, 1,6% Si selon ASTM A792) assure une protection cathodique sacrificielle durant 4 à 6 fois plus longtemps que la galvanisation classique, sans entretien pendant 40 à 50 ans avec 80% de réflectance solaire."
      },
      {
        question: "Comment les structures métalliques sont-elles expédiées à l'international ?",
        answer: "Tous les éléments sont préfabriqués en kit démontable et chargés en flat-pack dans des conteneurs maritimes 40HC (environ 350 à 400 m² par conteneur) depuis Adana via le port de haute mer de Mersin (15 km)."
      }
    ],
    es: [
      {
        question: "¿Qué luces libres y resistencia al viento soportan los hangares STRUCTIVA?",
        answer: "Los hangares arqueados de acero STRUCTIVA se fabrican de 9m a 45m de luz libre sin columnas intermedias, certificados bajo Eurocódigo 3 y AISC 360-16 para vientos de hasta 240 km/h y nieve de 350 kg/m²."
      },
      {
        question: "¿Qué ventaja tiene el acero Galvalume Plus® AZ180 frente al galvanizado estándar?",
        answer: "Galvalume Plus® AZ180 (55% Al, 43.4% Zn, 1.6% Si bajo norma ASTM A792) brinda protección galvánica auto-reparable que dura de 4 a 6 veces más que el galvanizado convencional, garantizando 40-50 años sin mantenimiento y 80% de reflectancia térmica solar."
      },
      {
        question: "¿Cómo se transportan las estructuras de acero al extranjero?",
        answer: "Todos los perfiles son desmontables y se embalan en flat-pack dentro de contenedores marítimos 40HC (350-400 m² por contenedor) desde la planta en Adana a través del Puerto de aguas profundas de Mersin (a 15 km)."
      }
    ],
    ar: [
      {
        question: "ما هي البحور المفتوحة ومقاومة الرياح التي تدعمها هناجر STRUCTIVA الفولاذية؟",
        answer: "تصنع هناجر STRUCTIVA المقوسة ببحور مفتوحة تتراوح من 9 إلى 45 متراً بدون أي أعمدة داخلية، وهي معتمدة وفق كود Eurocode 3 و AISC 360-16 لمقاومة رياح الأعاصير حتى 240 كم/س وأحمال ثلوج حتى 350 كجم/م²."
      },
      {
        question: "ما الذي يميز طلاء Galvalume Plus® AZ180 عن الجلفنة التقليدية؟",
        answer: "سبيكة جالفالوم بلس AZ180 (55% ألومنيوم و 43.4% زنك و 1.6% سيليكون وفق ASTM A792) توفر حماية كاثودية تلقائية تدوم من 4 إلى 6 أضعاف الجلفنة العادية، مع عمر افتراضي 40-50 سنة دون صيانة وانعكاس حراري شمسي بنسبة 80%."
      },
      {
        question: "كيف يتم شحن حزم المباني الفولاذية دولياً؟",
        answer: "يتم تحميل جميع مكونات المبنى مفككة ومحزومة بنظام flat-pack داخل حاويات شحن بحرية قياسية 40 قدم عالية السقف 40HC (حوالي 350-400 م² لكل حاوية) من مصنع أضنة عبر ميناء مرسين الدولي (على بعد 15 كم)."
      }
    ],
    ru: [
      {
        question: "Каковы доступные пролеты и ветровые нагрузки арочных ангаров STRUCTIVA?",
        answer: "Стальные арочные ангары STRUCTIVA производятся с пролетами от 9 до 45 метров без внутренних опор, сертифицированы по Еврокоду 3 и AISC 360-16 на ветровую стойкость до 240 км/ч и снеговые нагрузки до 350 кг/м²."
      },
      {
        question: "В чем преимущества покрытия Galvalume Plus® AZ180 перед обычной оцинковкой?",
        answer: "Сплав Galvalume Plus® AZ180 (55% Al, 43.4% Zn, 1.6% Si по ASTM A792) обеспечивает катодную самовосстанавливающуюся защиту, служащую в 4-6 раз дольше стандартной оцинковки, не требуя покраски 40-50 лет и отражая 80% солнечного тепла."
      },
      {
        question: "Как осуществляется международная доставка стальных ангаров?",
        answer: "Все элементы конструкции являются сборно-разборными и упаковываются в морские контейнеры 40HC (около 350-400 м² ангара на один контейнер) на заводе в Адане с отправкой через глубоководный порт Мерсин (15 км)."
      }
    ],
    it: [
      {
        question: "Quali luci libere e carichi di vento sopportano gli hangar in acciaio STRUCTIVA?",
        answer: "Gli hangar ad arco autoportanti STRUCTIVA offrono luci libere da 9m a 45m senza pilastri interni, certificati Eurocode 3 e AISC 360-16 per resistere a venti fino a 240 km/h e carichi neve fino a 350 kg/m²."
      },
      {
        question: "Qual è il vantaggio dell'acciaio Galvalume Plus® AZ180 rispetto alla zincatura comune?",
        answer: "Galvalume Plus® AZ180 (55% Al, 43,4% Zn, 1,6% Si secondo ASTM A792) garantisce una protezione catodica attiva che dura da 4 a 6 volte più a lungo della zincatura standard, con 40-50 anni di vita utile senza manutenzione e l'80% di riflettanza solare."
      },
      {
        question: "Come avvengono le spedizioni marittime internazionali?",
        answer: "Tutti i componenti prefabbricati sono imballati flat-pack in container marittimi 40HC (~350-400 m² per container) direttamente nello stabilimento di Adana e spediti tramite il vicino porto di Mersin (15 km)."
      }
    ],
    zh: [
      {
        question: "STRUCTIVA无立柱拱形钢结构机库的跨度与抗风等级是多少？",
        answer: "STRUCTIVA拱形钢结构无立柱机库跨度为9米至45米，内部完全无障碍。符合欧洲规范Eurocode 3和AISC 360-16标准，最高抗风速达240公里/小时，抗雪压达350公斤/平方米。"
      },
      {
        question: "相比普通镀锌钢板，Galvalume Plus® AZ180合金有何优势？",
        answer: "Galvalume Plus® AZ180（按ASTM A792标准，含55%铝、43.4%锌和1.6%硅）提供自愈性阴极电化学保护，防腐耐用寿命为普通镀锌的4至6倍，40至50年免维护并反射80%太阳热辐射。"
      },
      {
        question: "STRUCTIVA钢结构建筑套件如何进行全球海运集装箱交付？",
        answer: "所有建筑预制构件均可在土耳其阿达纳工厂扁平化紧凑装入40英尺高柜(40HC)海运集装箱（单个集装箱约容纳350–400平方米建筑），经由距离工厂仅15公里的梅尔辛深水港直发全球各主要港口。"
      }
    ]
  };

  const effectiveFaqs = page.faqItems && page.faqItems.length > 0
    ? page.faqItems
    : (defaultFaqs[lang] || defaultFaqs.en || defaultFaqs.tr);

  schemas.push({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": effectiveFaqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  });

  return schemas
    .map((s) => `    <script type="application/ld+json" data-seo-schema="true">\n${JSON.stringify(s, null, 2)}\n    </script>`)
    .join("\n");
}

function generateSitemapXml(pages: PageConfig[]): string {
  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'
  ];

  const currentDate = new Date().toISOString().split("T")[0];

  for (const page of pages) {
    const isRoot = page.slug === "";
    const priority = page.priority || (isRoot ? "1.0" : page.slug === "models" || page.slug === "configurator" || page.slug === "request-a-quote" ? "0.95" : page.slug === "engineering" || page.slug === "sectors" ? "0.9" : "0.85");
    const changefreq = page.changefreq || (isRoot || page.slug === "request-a-quote" ? "daily" : page.slug.startsWith("knowledge/") ? "monthly" : "weekly");

    // Output every language variant as its own distinct indexable <url> entry!
    for (const ssgLang of SSG_LANGUAGES) {
      const loc = isRoot ? `${SITE_URL}/${ssgLang.code}` : `${SITE_URL}/${ssgLang.code}/${page.slug}`;

      lines.push("  <url>");
      lines.push(`    <loc>${loc}</loc>`);

      // Hreflang alternates across all 30 languages
      for (const code of ALL_HREFLANGS) {
        const href = isRoot ? `${SITE_URL}/${code}` : `${SITE_URL}/${code}/${page.slug}`;
        lines.push(`    <xhtml:link rel="alternate" hreflang="${code}" href="${href}" />`);
      }
      const xDefaultHref = isRoot ? `${SITE_URL}/tr` : `${SITE_URL}/tr/${page.slug}`;
      lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultHref}" />`);

      lines.push(`    <lastmod>${currentDate}</lastmod>`);
      lines.push(`    <changefreq>${changefreq}</changefreq>`);
      lines.push(`    <priority>${priority}</priority>`);

      lines.push("    <image:image>");
      lines.push(`      <image:loc>${SITE_URL}/images/arched-steel-hangar-hd.jpg</image:loc>`);
      lines.push(`      <image:title>STRUCTIVA Clear-Span Arch Steel Buildings &amp; Hangars</image:title>`);
      lines.push(`      <image:caption>EN 1090-2 EXC4 and Eurocode 3 certified clear-span arch steel buildings exported globally via Mersin Port</image:caption>`);
      lines.push("    </image:image>");

      lines.push("  </url>");
    }
  }

  lines.push("</urlset>");
  return lines.join("\n");
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
  },
  it: {
    models: "Modelli",
    sectors: "Settori",
    engineering: "Ingegneria",
    configurator: "Configuratore 3D",
    projects: "Progetti",
    knowledge: "Centro Tecnico",
    about: "Chi Siamo",
    contact: "Contatti",
    quote: "Richiedi Preventivo",
    cta_h2: "Richiedi un'Offerta Tecnica Formale in 24 Ore",
    cta_p: "Studio di fattibilità statica, distinta base (BOM) e quotazione FOB/CIF lo stesso giorno.",
  },
  pt: {
    models: "Modelos",
    sectors: "Setores",
    engineering: "Engenharia",
    configurator: "Configurador 3D",
    projects: "Projetos",
    knowledge: "Centro Técnico",
    about: "Sobre Nós",
    contact: "Contato",
    quote: "Pedir Orçamento",
    cta_h2: "Solicite uma Proposta Técnica Formal em 24 Horas",
    cta_p: "Estudo de viabilidade estática, lista de materiais (BOM) e frete FOB/CIF no mesmo dia.",
  },
  nl: {
    models: "Modellen",
    sectors: "Sectoren",
    engineering: "Engineering",
    configurator: "3D-Configurator",
    projects: "Projecten",
    knowledge: "Kenniscentrum",
    about: "Over Ons",
    contact: "Contact",
    quote: "Offerte Aanvragen",
    cta_h2: "Vraag Binnen 24 Uur een Formele Technische Offerte Aan",
    cta_p: "Statische haalbaarheidstoets, stuklijst (BOM) en FOB/CIF zeevrachtofferte op dezelfde dag.",
  },
  pl: {
    models: "Modele",
    sectors: "Branże",
    engineering: "Inżynieria",
    configurator: "Konfigurator 3D",
    projects: "Projekty",
    knowledge: "Baza Wiedzy",
    about: "O Nas",
    contact: "Kontakt",
    quote: "Zapytaj o Ofertę",
    cta_h2: "Otrzymaj Oficjalną Ofertę Inżynieryjną w 24 Godziny",
    cta_p: "Analiza statyczna, zestawienie materiałów (BOM) i wycena frachtu morskiego FOB/CIF.",
  },
  ro: {
    models: "Modele",
    sectors: "Sectoare",
    engineering: "Inginerie",
    configurator: "Configurator 3D",
    projects: "Proiecte",
    knowledge: "Bază Tehnică",
    about: "Despre Noi",
    contact: "Contact",
    quote: "Cere Ofertă",
    cta_h2: "Solicitați o Ofertă Tehnică Oficială în 24 de Ore",
    cta_p: "Studiu static de fezabilitate, listă de materiale (BOM) și cotație FOB/CIF în aceeași zi.",
  },
  zh: {
    models: "建筑型号",
    sectors: "应用行业",
    engineering: "工程标准",
    configurator: "3D配置器",
    projects: "工程业绩",
    knowledge: "技术中心",
    about: "关于我们",
    contact: "联系我们",
    quote: "立即询价",
    cta_h2: "24小时内获取官方工程方案与正式报价",
    cta_p: "包含静力受力分析复核、完整物料清单(BOM)及离岸到港FOB/CIF海运运费测算。",
  },
  ja: {
    models: "モデル一覧",
    sectors: "適用分野",
    engineering: "構造工学",
    configurator: "3D設計ツール",
    projects: "納入事例",
    knowledge: "技術情報",
    about: "会社概要",
    contact: "お問い合わせ",
    quote: "見積を依頼",
    cta_h2: "24時間以内に正式なエンジニアリング提案書を発行",
    cta_p: "構造計算レビュー、資材明細(BOM)、海上運賃(FOB/CIF)見積りを即日提供。",
  },
  hi: {
    models: "मॉडल",
    sectors: "उद्योग क्षेत्र",
    engineering: "इंजीनियरिंग",
    configurator: "3D विन्यासकर्ता",
    projects: "परियोजनाएं",
    knowledge: "ज्ञान केंद्र",
    about: "हमारे बारे में",
    contact: "संपर्क करें",
    quote: "उद्धरण प्राप्त करें",
    cta_h2: "24 घंटे के भीतर आधिकारिक इंजीनियरिंग प्रस्ताव प्राप्त करें",
    cta_p: "स्थैतिक भार गणना, सामग्री बिल (BOM) और प्रमाणित FOB/CIF समुद्री शिपिंग दरें।",
  },
  az: {
    models: "Modellər",
    sectors: "Sektorlar",
    engineering: "Mühəndislik",
    configurator: "3D Konfiqurator",
    projects: "Layihələr",
    knowledge: "Məlumat Mərkəzi",
    about: "Haqqımızda",
    contact: "Əlaqə",
    quote: "Təklif Alın",
    cta_h2: "Layihəniz üçün 24 Saat Ərzində Təklif Əldə Edin",
    cta_p: "Statik fizibilite hesabatı, material spesifikasiyası (BOM) və FOB/CIF daşıma təklifi eyni gün təqdim olunur.",
  },
  uk: {
    models: "Моделі",
    sectors: "Галузі",
    engineering: "Інжиніринг",
    configurator: "3D Конфігуратор",
    projects: "Проекти",
    knowledge: "База знань",
    about: "Про нас",
    contact: "Контакти",
    quote: "Запит ціни",
    cta_h2: "Отримайте офіційну інженерну пропозицію за 24 години",
    cta_p: "Статичний розрахунок, специфікація матеріалів (BOM) та розрахунок фрахту FOB/CIF.",
  },
  fa: {
    models: "مدل‌ها",
    sectors: "بخش‌های صنعتی",
    engineering: "مهندسی و کیفیت",
    configurator: "پیکربندی سه‌بعدی",
    projects: "پروژه‌ها",
    knowledge: "مرکز دانش",
    about: "درباره ما",
    contact: "تماس با ما",
    quote: "استعلام قیمت",
    cta_h2: "دریافت پیشنهاد رسمی فنی و مهندسی ظرف ۲۴ ساعت",
    cta_p: "محاسبات استاتیکی، فهرست مقادیر مصالح (BOM) و استعلام کرایه حمل دریایی FOB/CIF.",
  }
};

function generateSemanticHtml(page: PageConfig, lang: string): string {
  const title = page.title[lang] || page.title.en || page.title.tr;
  const h1 = page.h1[lang] || page.h1.en || page.h1.tr;
  const subheading = page.subheading[lang] || page.subheading.en || page.subheading.tr;
  const bodyHtml = page.bodyHtml[lang] || page.bodyHtml.en || page.bodyHtml.tr;

  const isRtl = lang === "ar" || lang === "fa" || lang === "he";
  const dir = isRtl ? "rtl" : "ltr";
  const labels = SHELL_NAV[lang] || SHELL_NAV.en || SHELL_NAV.tr;

  const footerDesc = lang === "tr"
    ? "Adana Tesisleri — 9-45m net açıklıklı, Galvalume Plus® alaşımlı kemerli çelik hangarlar ve endüstriyel yapılar.<br>Mersin Limanı'na 15 km mesafede flat-pack konteyner ihracatı."
    : "Adana Fabrication Plant — 9m-45m clear-span Galvalume Plus® arch steel hangars & PEB structures.<br>Direct flat-pack container export via Mersin Deep-Water Port (15 km away).";

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
            <p class="leading-relaxed mb-4">${footerDesc}</p>
          </div>
          <div>
            <span class="text-white font-bold uppercase tracking-wider block mb-3">${labels.models}</span>
            <ul class="space-y-2">
              <li><a href="/${lang}/models" class="hover:text-amber-400">Q-Series / Q-Serisi</a></li>
              <li><a href="/${lang}/models" class="hover:text-amber-400">S-Series / S-Serisi</a></li>
              <li><a href="/${lang}/models" class="hover:text-amber-400">P-Series / P-Serisi</a></li>
              <li><a href="/${lang}/models" class="hover:text-amber-400">Container Canopy</a></li>
            </ul>
          </div>
          <div>
            <span class="text-white font-bold uppercase tracking-wider block mb-3">${labels.engineering}</span>
            <ul class="space-y-2">
              <li><a href="/${lang}/engineering" class="hover:text-amber-400">Eurocode 3 &amp; AISC 360-16</a></li>
              <li><a href="/${lang}/engineering" class="hover:text-amber-400">EN 1090-2 EXC4 CE</a></li>
              <li><a href="/${lang}/knowledge" class="hover:text-amber-400">${labels.knowledge}</a></li>
              <li><a href="/${lang}/about" class="hover:text-amber-400">${labels.about}</a></li>
            </ul>
          </div>
          <div>
            <span class="text-white font-bold uppercase tracking-wider block mb-3">${labels.contact}</span>
            <p class="leading-relaxed mb-2">${ADDRESS}</p>
            <p class="mb-1">Tel: <a href="tel:+905320550945" class="text-amber-400 hover:underline">${PHONE}</a></p>
            <p>E-posta: <a href="mailto:${EMAIL}" class="text-amber-400 hover:underline">${EMAIL}</a></p>
          </div>
        </div>
        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-white/5 text-center text-[11px] text-slate-500">
          © ${new Date().getFullYear()} STRUCTIVA Çelik Yapı Sanayi A.Ş. All rights reserved / Tüm hakları saklıdır.
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

      // Update lang and dir attribute on html tag
      html = html.replace(/<html[^>]*>/, `<html lang="${lang.code}" dir="${lang.dir}">`);

      // Update <title>
      html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);

      // Update <meta name="description">
      html = html.replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
        `<meta name="description" content="${description}" />`
      );

      // Update canonical link and replace template's alternate hreflangs with page-specific ones
      html = html.replace(
        /<link\s+rel="canonical"[\s\S]*?<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/?>/,
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

      // OpenGraph locale per language (social sharing in each market)
      html = html.replace(
        /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/,
        `<meta property="og:locale" content="${OG_LOCALE_MAP[lang.code] || "en_US"}" />`
      );

      // Twitter Cards (page-specific for social / AI answer engines)
      html = html.replace(
        /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
        `<meta name="twitter:title" content="${title}" />`
      );
      html = html.replace(
        /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
        `<meta name="twitter:description" content="${description}" />`
      );

      // Dublin Core semantic metadata (academic & semantic search engines)
      html = html.replace(
        /<meta\s+name="DC.title"\s+content="[^"]*"\s*\/?>/,
        `<meta name="DC.title" content="${title}" />`
      );
      html = html.replace(
        /<meta\s+name="DC.description"\s+content="[^"]*"\s*\/?>/,
        `<meta name="DC.description" content="${description}" />`
      );
      html = html.replace(
        /<meta\s+name="DC.language"\s+content="[^"]*"\s*\/?>/,
        `<meta name="DC.language" content="${lang.code}" />`
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

      // Turkish is the default language: the canonical TR home is /tr and the
      // legacy unprefixed paths (/models, /engineering, ...) are 301-redirected
      // to /tr/* via firebase.json "redirects". We deliberately do NOT emit
      // unprefixed physical pages anymore — that created duplicate content with
      // conflicting canonicals (/models vs /tr/models) and split SEO signals.
      if (isDefaultTr && isRootPage) {
        // Fallback root index.html (only served if the hosting redirect is removed)
        fs.writeFileSync(path.join(DIST_PUBLIC, "index.html"), html, "utf-8");
        console.log("  ✓ Updated root dist/public/index.html (canonical /tr, legacy redirect target)");
      }
    }
  }

  console.log(`✨ Successfully generated ${generatedCount} static HTML pages across ${SSG_LANGUAGES.length} languages!`);

  // Generate dynamic, ultra-comprehensive XML sitemap
  const sitemapXml = generateSitemapXml(PAGES);
  const clientSitemapPath = path.join(ROOT_DIR, "client", "public", "sitemap.xml");
  const distSitemapPath = path.join(DIST_PUBLIC, "sitemap.xml");

  fs.writeFileSync(clientSitemapPath, sitemapXml, "utf-8");
  fs.writeFileSync(distSitemapPath, sitemapXml, "utf-8");
  console.log(`🗺️  Successfully generated comprehensive sitemap.xml with ${PAGES.length} routes across 30 languages!`);

  // Generate custom 404.html (served automatically by Firebase Hosting)
  generate404Page(baseTemplate);
}

/**
 * Generates a branded static 404.html page used automatically by
 * Firebase Hosting as the custom error page for all unmatched routes.
 */
function generate404Page(baseTemplate: string) {
  const notFoundShell = `
    <div class="min-h-screen flex flex-col bg-[#09131c] text-white">
      <main class="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <span class="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-4">EN 1090-2 EXC4 · CE · EUROCODE 3</span>
        <h1 class="text-7xl sm:text-8xl font-black text-white tracking-tight mb-4">404</h1>
        <p class="text-lg text-slate-300 mb-2">Aradığınız sayfa bulunamadı.</p>
        <p class="text-sm text-slate-400 mb-10 max-w-md leading-relaxed">The page you are looking for does not exist or has been moved. Explore our clear-span engineering solutions below.</p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a href="/" class="px-6 py-3 rounded-xl bg-amber-500 text-[#0f1d2a] font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">Ana Sayfa / Home</a>
          <a href="/en" class="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all">English</a>
          <a href="/tr/models" class="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all">Modeller</a>
          <a href="/tr/knowledge" class="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all">Bilgi Merkezi</a>
          <a href="/tr/request-a-quote" class="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all">Teklif Al</a>
        </div>
      </main>
      <footer class="border-t border-white/10 bg-[#070e16] text-slate-400 py-8 text-center text-xs">
        © ${new Date().getFullYear()} STRUCTIVA Çelik Yapı Sanayi A.Ş. — Adana, Türkiye
      </footer>
    </div>
  `;

  let html = baseTemplate;
  html = html.replace(/<html[^>]*>/, `<html lang="tr" dir="ltr">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>404 — Sayfa Bulunamadı | STRUCTIVA®</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="Sayfa bulunamadı (404). STRUCTIVA kolonsuz kemer çelik hangar çözümleri için ana sayfaya dönün." />`
  );
  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${notFoundShell}</div>`
  );

  fs.writeFileSync(path.join(DIST_PUBLIC, "404.html"), html, "utf-8");
  console.log("  ✓ Generated custom 404.html for Firebase Hosting");
}

prerender();

