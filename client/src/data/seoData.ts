/**
 * STRUCTIVA — Comprehensive Worldwide Multilingual Keywords, SEO & GEO Registry
 * Provides localized titles, meta descriptions, high-intent B2B keywords, H1s,
 * and regional GEO intelligence across all 30 supported languages and 14 routes.
 */

export interface PageSEOMeta {
  title: string;
  description: string;
  keywords: string;
  h1: string;
}

export interface GeoMarketCorridor {
  regionCode: string;
  regionName: Record<string, string>;
  countries: string[];
  majorPorts: string[];
  transitDaysFromMersin: string;
  designCodes: string[];
  primaryKeywords: string[];
}

export const WORLDWIDE_GEO_MARKETS: GeoMarketCorridor[] = [
  {
    regionCode: "EU-WEST-CENTRAL",
    regionName: {
      tr: "Batı ve Orta Avrupa (AB Koridoru)",
      en: "Western & Central Europe (EU Corridor)",
      de: "West- und Mitteleuropa (EU-Korridor)",
      fr: "Europe de l'Ouest et Centrale (Corridor UE)",
      es: "Europa Occidental y Central (Corredor UE)",
      ar: "أوروبا الغربية والوسطى (ممر الاتحاد الأوروبي)",
      ru: "Западная и Центральная Европа (ЕС)"
    },
    countries: ["Germany", "France", "Italy", "Spain", "Netherlands", "Belgium", "Poland", "Austria", "Czechia", "Hungary", "Portugal"],
    majorPorts: ["Rotterdam", "Hamburg", "Antwerp", "Valencia", "Genoa", "Marseille", "Gdańsk", "Koper"],
    transitDaysFromMersin: "4 – 9 Days",
    designCodes: ["EN 1090-2 EXC4", "CE Marking (CPR 305/2011/EU)", "Eurocode 1 (EN 1991)", "Eurocode 3 (EN 1993)"],
    primaryKeywords: [
      "säulenfreie Bogenhallen", "hangar métallique autoportant", "capannoni in acciaio ad arco",
      "naves industriales sin columnas", "kolomvrije boogloodsen", "łukowe hale stalowe", "EN 1090-2 EXC4 steel buildings"
    ]
  },
  {
    regionCode: "BALKANS-EAST-EU",
    regionName: {
      tr: "Balkanlar, Doğu Avrupa ve Karadeniz",
      en: "Balkans, Eastern Europe & Black Sea",
      de: "Balkan, Osteuropa & Schwarzmeerraum",
      fr: "Balkans, Europe de l'Est & Mer Noire",
      es: "Balcanes, Europa del Este y Mar Negro",
      ar: "البلقان وأوروبا الشرقية والبحر الأسود",
      ru: "Балканы, Восточная Европа и Черноморский бассейн"
    },
    countries: ["Romania", "Bulgaria", "Greece", "Ukraine", "Serbia", "Croatia", "Bosnia", "Albania", "Moldova"],
    majorPorts: ["Constanța", "Varna", "Burgas", "Piraeus", "Thessaloniki", "Odessa", "Rijeka"],
    transitDaysFromMersin: "2 – 5 Days",
    designCodes: ["Eurocode 3", "EN 1090-2 EXC4", "Seismic Eurocode 8 (EN 1998)", "DBN Ukraine"],
    primaryKeywords: [
      "hale metalice arcuite", "безколонни стоманени халета", "μεταλλικά κτίρια χωρίς κολώνες",
      "безколонні арочні ангари", "lučne čelične hale bez stubova", "grain storage hangar Black Sea"
    ]
  },
  {
    regionCode: "MENA-GCC",
    regionName: {
      tr: "Orta Doğu, Körfez (GCC) ve Kuzey Afrika",
      en: "Middle East, Arabian Gulf (GCC) & North Africa",
      de: "Naher Osten, Golfstaaten (GCC) & Nordafrika",
      fr: "Moyen-Orient, Golfe (CCG) & Afrique du Nord",
      es: "Medio Oriente, Golfo Pérsico y Norte de África",
      ar: "الشرق الأوسط والخليج العربي وشمال أفريقيا (MENA & GCC)",
      ru: "Ближний Восток, Персидский залив и Северная Африка"
    },
    countries: ["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Oman", "Iraq", "Egypt", "Algeria", "Morocco", "Libya", "Tunisia", "Jordan"],
    majorPorts: ["Jebel Ali (Dubai)", "Dammam", "Jeddah", "Hamad (Doha)", "Shuwaikh", "Umm Qasr", "Alexandria", "Algiers", "Casablanca", "Tangier Med"],
    transitDaysFromMersin: "3 – 14 Days",
    designCodes: ["AISC 360-16", "ASCE 7 Wind Loads", "Saudi Building Code (SBC 306)", "ASTM A792 AZ180 High Solar Reflectance"],
    primaryKeywords: [
      "هناجر حديد بدون أعمدة", "مستودعات فولاذية مقوسة", "مباني حديدية مسبقة الهندسة PEB",
      "hangar métallique Algérie Maroc", "solar reflective steel warehouse GCC", "Galvalume Plus AZ180 desert hangar"
    ]
  },
  {
    regionCode: "CIS-CENTRAL-ASIA",
    regionName: {
      tr: "Orta Asya, Kafkasya ve Türk Devletleri (BDT)",
      en: "Central Asia, Caucasus & CIS Corridor",
      de: "Zentralasien, Kaukasus & GUS-Korridor",
      fr: "Asie Centrale, Caucase & CEI",
      es: "Asia Central, Cáucaso y CEI",
      ar: "آسيا الوسطى والقوقاز ورابطة الدول المستقلة",
      ru: "Центральная Азия, Кавказ и страны СНГ"
    },
    countries: ["Azerbaijan", "Kazakhstan", "Uzbekistan", "Turkmenistan", "Georgia", "Kyrgyzstan", "Tajikistan"],
    majorPorts: ["Poti", "Batumi", "Baku (Alat)", "Aktau", "Turkmenbashi"],
    transitDaysFromMersin: "4 – 12 Days (Multimodal Sea + Rail/Road)",
    designCodes: ["SNiP / SP RK / GOST", "Eurocode 3", "Extreme Snow Load 350 kg/m²", "Seismic Zone 9 Compliance"],
    primaryKeywords: [
      "бескаркасные арочные ангары", "быстровозводимые здания PEB", "sütunsuz tağ polad anqar",
      "зернохранилища под ключ", "авиационные ангары Казахстан Узбекистан Азербайджан"
    ]
  },
  {
    regionCode: "AMERICAS-AFRICA-APAC",
    regionName: {
      tr: "Amerika Kıtası, Sahra Altı Afrika ve Asya-Pasifik",
      en: "The Americas, Sub-Saharan Africa & Asia-Pacific",
      de: "Nord-/Südamerika, Subsahara-Afrika & Asien-Pazifik",
      fr: "Amériques, Afrique Subsaharienne & Asie-Pacifique",
      es: "Las Américas, África Subsahariana y Asia-Pacífico",
      ar: "الأمريكتان وأفريقيا جنوب الصحراء وآسيا والمحيط الهادئ",
      ru: "Северная и Южная Америка, Африка и Азиатско-Тихоокеанский регион"
    },
    countries: ["United States", "Canada", "Brazil", "Mexico", "Chile", "Colombia", "Nigeria", "Kenya", "Ghana", "Senegal", "India", "Indonesia", "Vietnam", "Thailand", "Malaysia", "Japan", "South Korea"],
    majorPorts: ["Houston", "Savannah", "Newark", "Santos", "Manzanillo", "Lagos (Apapa)", "Mombasa", "Dakar", "Abidjan", "Nhava Sheva (Mumbai)", "Singapore", "Jakarta", "Haiphong"],
    transitDaysFromMersin: "14 – 28 Days (40HC Flat-Pack Ocean Freight)",
    designCodes: ["AISC 360-16", "AISI S100", "IBC Hurricane 240 km/h (Category 5)", "NBR 8800", "IS 800"],
    primaryKeywords: [
      "quonset hut steel building kits", "clear span arch hangar", "galpões metálicos em arco",
      "naves industriales prefabricadas", "무주 아치형 강구조", "無柱アーチ型鉄骨格納庫", "无立柱拱形钢结构"
    ]
  }
];

// Complete SEO metadata by language (all 30 languages) and page key (14 routes)
export const SEO_REGISTRY: Record<string, Record<string, PageSEOMeta>> = {
  tr: {
    home: {
      title: "Kolonsuz Kemer Çelik Yapı & Hangar İmalatı | STRUCTIVA® Adana",
      description: "Adana fabrikamızda EN 1090-2 EXC4 sertifikalı, 9m-45m kolonsuz açıklık kemer çelik hangarlar üretiyoruz. Mersin Limanı'na 15 km mesafede flat-pack konteyner ihracatı.",
      keywords: "kolonsuz kemer çelik yapı, kemerli çelik hangar, çelik hangar imalatı, prefabrik çelik depo, uçak hangarı yapımı, tahıl deposu çelik, PEB çelik binalar, Galvalume Plus AZ180, Adana çelik konstrüksiyon fabrikası, Mersin limanı çelik yapı ihracatı, cıvatalı çelik hangar fiyatları, EN 1090-2 EXC4 çelik yapı",
      h1: "Kolonsuz Kemerli Çelik Yapılar & Ağır Sanayi Hangarları"
    },
    models: {
      title: "Kemerli ve PEB Çelik Yapı Modelleri | STRUCTIVA®",
      description: "Q-Series, S-Series, P-Series, Konteyner Üstü Kanopi ve Ağır Sanayi PEB çelik binalar. 9m-45m kolonsuz net açıklık, 240 km/h rüzgar dayanımı.",
      keywords: "kemerli çelik bina modelleri, Q-Series kemer hangar, S-Series düz duvarlı çelik depo, P-Series beşik çatı çelik yapı, konteyner üstü kanopi çatı, ağır sanayi PEB çelik bina, quonset hangar Türkiye",
      h1: "Ön Mühendislikli Çelik Yapı ve Hangar Modelleri"
    },
    sectors: {
      title: "Endüstriyel Sektör Çözümleri & Depolama | STRUCTIVA®",
      description: "Tarım, madencilik, havacılık hangarları, lojistik antrepolar ve ağır sanayi için kolonsuz açık açıklıklı çelik yapı çözümleri.",
      keywords: "tarımsal tahıl deposu çelik, uçak bakım hangarı imalatı, helikopter hangarı çelik, maden stok sahası kapatma, lojistik antrepo çelik konstrüksiyon, soğuk hava deposu çelik bina, askeri hangar sistemleri",
      h1: "Sektörel Çelik Yapı ve Depolama Sistemleri"
    },
    engineering: {
      title: "Yapısal Çelik Mühendisliği & Standartlar | STRUCTIVA®",
      description: "EN 1090-2 EXC4, CE işareti, AISC 360-16 ve Galvalume Plus® AZ180 metalürjisi. 240 km/h rüzgar ve sismik dayanım analizleri.",
      keywords: "EN 1090-2 EXC4 sertifikası, Eurocode 3 çelik statik hesap, AISC 360-16 çelik yapı, Galvalume Plus AZ180 sac, ASTM A792 alüminyum çinko kaplama, 240 km/h rüzgar dayanımlı hangar, sismik çelik bina tasarımı",
      h1: "Sıfır Toleranslı Yapısal Çelik Mühendisliği"
    },
    configurator: {
      title: "3D Parametrik Çelik Yapı Konfigüratörü | STRUCTIVA®",
      description: "Genişlik, uzunluk ve yükseklik belirleyerek anlık taban alanı, hacim ve 40HC konteyner lojistik hesabını 3D modelle görselleştirin.",
      keywords: "3D çelik bina konfigüratörü, çelik hangar ölçü hesaplama, çelik depo maliyet hesaplama, 40HC konteyner yükleme hesabı, online çelik yapı tasarımı, hangar m2 hesaplama",
      h1: "İnteraktif 3D Çelik Yapı Konfigüratörü"
    },
    projects: {
      title: "Uluslararası Referanslar & Tamamlanan Projeler | STRUCTIVA®",
      description: "50'den fazla ülkede kurulan çöl sıcağına ve yoğun kar yüklerine dayanıklı kemer çelik hangar ve antrepo projelerimiz.",
      keywords: "uluslararası çelik yapı projeleri, tamamlanan çelik hangar referansları, yurt dışı çelik konstrüksiyon ihracatı, Avrupa Orta Doğu Afrika çelik bina projeleri, Adana çelik hangar referansları",
      h1: "Ekonomileri Harekete Geçiren Çelik Yapılar"
    },
    knowledge: {
      title: "Çelik Mühendislik Bilgi Merkezi & Rehberler | STRUCTIVA®",
      description: "Çelik bina planlama rehberleri, PEB vs konvansiyonel çelik karşılaştırmaları ve uluslararası RFQ hazırlama kılavuzları.",
      keywords: "çelik bina planlama rehberi, PEB ve geleneksel çelik karşılaştırması, çelik yapı teknik şartname örneği, Galvalume Plus korozyon direnci, çelik hangar kurulum kılavuzu",
      h1: "Teknik Bilgi Merkezi & Mühendislik Kılavuzları"
    },
    about: {
      title: "Hakkımızda & Adana Üretim Tesisleri | STRUCTIVA®",
      description: "Adana Organize Sanayi Bölgesi'nde yıllık 25.000 ton kapasiteli entegre tesislerimizde uluslararası standartlarda cıvatalı çelik yapılar üretiyoruz.",
      keywords: "Structiva Çelik Yapı Sanayi, Adana OSB çelik fabrikası, Türkiye çelik hangar üreticisi, 25000 ton çelik üretim kapasitesi, Mersin limanı çelik ihracatçısı",
      h1: "Structiva Tesisleri Adana & Mühendislik Mirasımız"
    },
    contact: {
      title: "İletişim & Global İhracat Masası | STRUCTIVA®",
      description: "Adana mühendislik merkezimiz ve ihracat direktörlüğümüz ile iletişime geçin. 24 saat içinde statik fizibilite ve resmi teklif mektubu alın.",
      keywords: "Structiva iletişim, Adana çelik yapı telefon, çelik hangar ihracat departmanı, çelik bina teklif hattı, AOSB çelik konstrüksiyon adres",
      h1: "Global İhracat Masası & İletişim"
    },
    rfq: {
      title: "Resmi Teknik Şartname & Fiyat Teklifi (RFQ) | STRUCTIVA®",
      description: "Arsa ölçülerinizi, hedef açıklık ve yükseklik değerlerinizi girerek 24 saat içinde malzeme dökümü (BOM) ve FOB/CIF fiyat teklifi alın.",
      keywords: "çelik hangar fiyat teklifi al, çelik yapı RFQ formu, FOB Mersin çelik bina fiyatı, CIF konteyner çelik hangar maliyeti, 24 saatte çelik proje teklifi",
      h1: "Teknik Şartname ve Proje Teklif Talebi (RFQ)"
    }
  },

  en: {
    home: {
      title: "Clear-Span Arch Steel Buildings & Hangar Manufacturing | STRUCTIVA®",
      description: "Manufacturer of EN 1090-2 EXC4 certified clear-span arch steel hangars (9m-45m). Located in Adana, 15 km from Mersin International Deep-Water Container Port. Direct export to 50+ countries.",
      keywords: "clear-span arch steel buildings, quonset hut kits manufacturer, pre-engineered steel buildings PEB, aircraft hangar manufacturer, column-free steel warehouse, Galvalume Plus AZ180 arch panels, bolted steel building kits, container canopy roof trusses, bulk grain storage building, EN 1090-2 EXC4 steel fabrication Turkey, FOB Mersin flat-pack steel buildings",
      h1: "Clear-Span Arch Steel Buildings & Industrial Hangars"
    },
    models: {
      title: "Arched & Pre-Engineered Steel Building Models | STRUCTIVA®",
      description: "Explore Q-Series, S-Series, P-Series, Container Canopies and Heavy PEB steel structures. Clear-span widths from 9m to 45m with certified 240 km/h wind resistance.",
      keywords: "Q-Series arch hangar, S-Series straight wall steel building, P-Series pitched roof metal building, shipping container canopy roof kit, heavy industrial PEB portal frame, 45m clear span steel structure",
      h1: "Engineered Clear-Span Steel Models"
    },
    sectors: {
      title: "Industrial Sector Applications & Bulk Storage | STRUCTIVA®",
      description: "Engineered steel structures for agriculture, mining stockpiles, aviation hangars, logistics distribution centers, and heavy manufacturing.",
      keywords: "agricultural bulk grain storage building, aviation MRO aircraft hangar, mining stockpile cover structure, logistics warehouse steel kit, military equipment shelter, fertilizer storage arch building",
      h1: "Industrial Sector Solutions"
    },
    engineering: {
      title: "Structural Steel Engineering Standards & Quality | STRUCTIVA®",
      description: "EN 1090-2 Execution Class 4, CE marking, AISC 360-16, and Galvalume Plus® AZ180 metallurgy engineered for 240 km/h wind resilience and seismic safety.",
      keywords: "EN 1090-2 EXC4 certified manufacturer, Eurocode 3 structural steel design, AISC 360-16 steel buildings, ASTM A792 Galvalume Plus AZ180, 240 km/h hurricane rated steel building, 350 kg/m2 snow load hangar",
      h1: "Zero-Tolerance Structural Engineering"
    },
    configurator: {
      title: "3D Interactive Steel Building Configurator | STRUCTIVA®",
      description: "Specify clear span, building length, and peak height to compute real-time floor area, usable volume and container shipping counts in interactive 3D.",
      keywords: "3D steel building configurator, metal building size calculator, arch hangar volume calculator, 40HC container shipping estimator, parametric steel structure planner",
      h1: "Parametric 3D Building Configurator"
    },
    projects: {
      title: "International Steel Building Case Studies & Projects | STRUCTIVA®",
      description: "Review international completed industrial projects, clear-span hangars, logistics campuses, and bulk storage facilities manufactured at Structiva Tesisleri Adana.",
      keywords: "international steel building projects, clear-span hangar case studies, exported PEB buildings Europe MENA Africa CIS, completed aircraft hangars, grain storage reference projects",
      h1: "Structures That Move Economies"
    },
    knowledge: {
      title: "Steel Structure Knowledge Center & Technical Guides | STRUCTIVA®",
      description: "Technical guides, structural steel planning rules, PEB vs conventional comparisons, and procurement specifications by STRUCTIVA Adana engineers.",
      keywords: "industrial steel building planning guide, PEB vs conventional structural steel, how to prepare steel building RFQ, Galvalume Plus AZ180 corrosion resistance whitepaper",
      h1: "Knowledge Hub & Engineering Whitepapers"
    },
    about: {
      title: "About STRUCTIVA — Structiva Tesisleri Adana & Global Heritage | STRUCTIVA®",
      description: "Operating from its 25,000 MT capacity integrated steel fabrication hub in Adana, STRUCTIVA delivers certified structural steel buildings and PEB kits globally.",
      keywords: "STRUCTIVA steel structures, Adana steel fabrication plant, Turkish structural steel exporter, 25000 MT annual steel capacity, Mersin port flat-pack building supplier",
      h1: "Structiva Facilities Adana & Engineering Heritage"
    },
    contact: {
      title: "Contact STRUCTIVA Global Export & Engineering Desk | STRUCTIVA®",
      description: "Connect directly with STRUCTIVA Adana structural engineers and sales directors for custom building quotes, CAD specifications, and container shipping schedules.",
      keywords: "contact STRUCTIVA engineering, international steel building sales desk, Adana AOSB steel factory contact, direct export steel hangars quote",
      h1: "Global Export & Engineering Desk"
    },
    rfq: {
      title: "Request a Technical Quotation (RFQ) | STRUCTIVA® Steel Structures",
      description: "Submit your structural steel project specifications, clear span dimensions, and site requirements for an official engineering review and commercial quote within 24 hours.",
      keywords: "request steel building quote, structural steel RFQ form, FOB Mersin CIF destination steel kit price, 24 hour engineering quotation, bill of materials steel hangar",
      h1: "Request an Official Project Quotation (RFQ)"
    }
  },

  de: {
    home: {
      title: "Säulenfreie Bogen-Stahlhallen & Hangars | STRUCTIVA® Adana",
      description: "Hersteller von EN 1090-2 EXC4 zertifizierten säulenfreien Bogenschuppen (9m-45m). Standort Adana, 15 km vom Tiefseehafen Mersin. Direkter Export in über 50 Länder.",
      keywords: "säulenfreie Bogenhallen, Rundbogenhallen Stahl, Systemhallen Stahlbau PEB, Flugzeughangar Hersteller, freitragende Stahlhalle, Getreidelagerhalle Stahl, Containerüberdachung, EN 1090-2 EXC4 Stahlbau Türkei, Galvalume Plus AZ180, Industriehallen Bausatz",
      h1: "Säulenfreie Bogen-Stahlgebäude & Industriehallen"
    },
    models: {
      title: "Bogenhallen & PEB Stahlbau-Modelle | STRUCTIVA®",
      description: "Q-Serie, S-Serie, P-Serie, Container-Überdachungen und schwere Industriehallen. 9m bis 45m Spannweite ohne Zwischensäulen, 240 km/h windzertifiziert.",
      keywords: "Q-Serie Rundbogenhalle, S-Serie Stahlhalle gerade Wand, P-Serie Satteldachhalle, Seecontainer Überdachung Stahl, PEB Industriehalle bis 60m Spannweite",
      h1: "Ingenieurmäßige Stahlbau-Modelle"
    },
    sectors: {
      title: "Industriezweige & Schüttgutlagerung | STRUCTIVA®",
      description: "Säulenfreie Stahlhallen für Landwirtschaft, Bergbau, Flugzeughangars, Logistikzentren und Schwerindustrie.",
      keywords: "Landwirtschaftliche Lagerhalle Stahl, Getreidelagerhalle stützenfrei, Flugzeughangar Bau, Bergbau Schüttgutlager, Logistikhalle Systembau",
      h1: "Industrielle Branchenlösungen"
    },
    engineering: {
      title: "Stahlbau-Ingenieurwesen & Normen | STRUCTIVA®",
      description: "Zertifiziert nach EN 1090-2 EXC4, CE-Kennzeichnung, AISC 360-16 und Galvalume Plus® AZ180 Legierungsstahl mit 240 km/h Windfestigkeit.",
      keywords: "EN 1090-2 EXC4 Zertifizierung, Eurocode 3 Tragwerksplanung, CE-Kennzeichnung Stahlbau, Galvalume Plus AZ180 Korrosionsschutz, Schneelast 350 kg/m2 Stahlhalle",
      h1: "Präzisions-Stahlbauingenieurwesen"
    },
    configurator: {
      title: "3D Stahlhallen-Konfigurator | STRUCTIVA®",
      description: "Konfigurieren Sie Spannweite, Länge und Höhe mit interaktiver 3D-Vorschau und Echtzeit-Berechnung der Containerfracht.",
      keywords: "3D Stahlhallen Konfigurator, Hallenbau Rechner online, Bogenhalle Abmessungen berechnen, 40HC Container Frachtberechnung",
      h1: "Interaktiver 3D-Konfigurator"
    },
    projects: {
      title: "Internationale Stahlbauprojekte & Referenzen | STRUCTIVA®",
      description: "Über 50 Länder weltweit: Entdecken Sie erfolgreich realisierte Bogenhallen, Getreidelager und Logistikzentren aus Adana.",
      keywords: "Stahlbau Referenzen international, realisierte Bogenhallen Europa, Industriehallen Projekte weltweit, STRUCTIVA Referenzprojekte",
      h1: "Weltweit bewährte Referenzprojekte"
    },
    knowledge: {
      title: "Stahlbau-Wissenszentrum & Fachartikel | STRUCTIVA®",
      description: "Praxisleitfäden zu Hallenplanung, PEB-Vergleich, Schnee- und Windlasten sowie Ausschreibungen von STRUCTIVA Ingenieuren.",
      keywords: "Stahlhalle planen Leitfaden, PEB Systemhalle vs konventioneller Stahlbau, Ausschreibung Stahlbau RFQ, Galvalume Plus Metallurgie",
      h1: "Wissenszentrum & Technische Leitfäden"
    },
    about: {
      title: "Über STRUCTIVA & Werk Adana | STRUCTIVA®",
      description: "Modernste automatisierte CNC-Fertigung in Adana (AOSB), Türkei. 25.000 Tonnen Jahreskapazität und weltweiter Export.",
      keywords: "STRUCTIVA Stahlbau Werk Adana, Stahlhallen Hersteller Türkei, 25000 Tonnen Stahlfertigung, Export ab Hafen Mersin",
      h1: "Structiva Werke Adana & Ingenieurstradition"
    },
    contact: {
      title: "Kontakt & Internationaler Exportdesk | STRUCTIVA®",
      description: "Sprechen Sie direkt mit unseren Tragwerksplanern in Adana. Erhalten Sie innerhalb von 24 Stunden eine statische Vorprüfung und ein Angebot.",
      keywords: "STRUCTIVA Kontakt, Stahlbau Exportabteilung, Tragwerksplanung Beratung, Angebot Stahlhalle anfordern",
      h1: "Globaler Exportdesk & Kontakt"
    },
    rfq: {
      title: "Technisches Angebot (RFQ) Anfordern | STRUCTIVA®",
      description: "Geben Sie Ihre Projektdaten ein und erhalten Sie innerhalb von 24 Stunden eine prüffähige statische Vorberechnung und ein Frachtangebot.",
      keywords: "Stahlhalle Angebot anfordern, Stahlbau Preisanfrage RFQ, FOB Mersin CIF Seefracht Angebot, Stückliste Stahlhalle 24h",
      h1: "Projekt- und Preisanfrage (RFQ)"
    }
  },

  fr: {
    home: {
      title: "Hangars Métalliques en Voûte Autoportante Sans Colonne | STRUCTIVA®",
      description: "Fabricant de hangars arqués sans colonnes intérieures de 9m à 45m certifiés EN 1090-2 EXC4. Usine à Adana, à 15 km du port de Mersin. Exportation dans plus de 50 pays.",
      keywords: "hangar métallique en voûte autoportante, bâtiment industriel en acier sans pilier, charpente métallique pré-usinée PEB, hangar aviation en kit, bâtiment stockage céréales, abri sur conteneur maritime, acier Galvalume Plus AZ180, fabricant hangar acier Turquie",
      h1: "Bâtiments Métalliques Arqués Sans Colonne & Hangars Industriels"
    },
    models: {
      title: "Modèles de Hangars et Bâtiments en Acier PEB | STRUCTIVA®",
      description: "Découvrez la Série Q, Série S, Série P, abris de conteneurs et bâtiments industriels PEB. Portées libres de 9 à 45 m résistant à 240 km/h de vent.",
      keywords: "modèles hangars métalliques arqués, Série Q arche autoportante, Série S bâtiment parois droites, auvent sur conteneur maritime, bâtiment industriel PEB grande portée",
      h1: "Modèles d'Ingénierie Métallique"
    },
    sectors: {
      title: "Applications Industrielles & Stockage de Vrac | STRUCTIVA®",
      description: "Structures en acier sans piliers pour l'agriculture, l'exploitation minière, les hangars d'aviation et la logistique internationale.",
      keywords: "hangar agricole stockage céréales, hangar avion hélicoptère acier, bâtiment stockage minier vrac, entrepôt logistique métallique en kit",
      h1: "Solutions par Secteur d'Activité"
    },
    engineering: {
      title: "Normes d'Ingénierie Structurale & Qualité | STRUCTIVA®",
      description: "Conforme EN 1090-2 EXC4, marquage CE, AISC 360-16 et alliage Galvalume Plus® AZ180 pour une protection anticorrosion durable.",
      keywords: "certification EN 1090-2 EXC4, calcul Eurocode 3 charpente métallique, acier Galvalume Plus AZ180 anticorrosion, résistance vent 240 km/h hangar",
      h1: "Ingénierie Métallique de Précision"
    },
    configurator: {
      title: "Configurateur 3D de Bâtiment en Acier | STRUCTIVA®",
      description: "Définissez la portée libre, la longueur et la hauteur pour visualiser la géométrie 3D et calculer le nombre de conteneurs maritimes 40HC.",
      keywords: "configurateur 3D hangar métallique, calculateur dimension bâtiment acier, estimation transport conteneur 40HC, conception hangar en ligne",
      h1: "Configurateur Paramétrique 3D"
    },
    projects: {
      title: "Études de Cas & Projets Internationaux | STRUCTIVA®",
      description: "Consultez nos réalisations de hangars arqués et d'entrepôts industriels exportés dans plus de 50 pays depuis Adana, Turquie.",
      keywords: "projets hangars métalliques internationaux, références bâtiments acier Europe Afrique Moyen-Orient, réalisations STRUCTIVA Adana",
      h1: "Des Structures qui Soutiennent l'Économie"
    },
    knowledge: {
      title: "Centre de Connaissances & Guides Techniques | STRUCTIVA®",
      description: "Guides pratiques sur la conception de hangars, comparaison PEB vs charpente soudée et préparation d'appels d'offres internationaux.",
      keywords: "guide conception bâtiment métallique, comparatif PEB vs charpente traditionnelle, préparer appel d'offres RFQ acier, science anticorrosion Galvalume",
      h1: "Centre de Ressources Techniques"
    },
    about: {
      title: "À Propos de STRUCTIVA — Usines d'Adana | STRUCTIVA®",
      description: "Implanté dans la zone industrielle d'Adana avec une capacité de 25 000 tonnes/an, STRUCTIVA conçoit et expédie des kits boulonnés dans le monde entier.",
      keywords: "usine charpente métallique Adana Turquie, fabricant hangars acier export, capacité 25000 tonnes acier, expédition port de Mersin",
      h1: "Sites de Production d'Adana & Savoir-Faire"
    },
    contact: {
      title: "Contact & Pôle d'Exportation International | STRUCTIVA®",
      description: "Échangez directement avec nos ingénieurs à Adana pour vos projets de hangars industriels. Devis sous 24h.",
      keywords: "contact STRUCTIVA Turquie, bureau export bâtiments métalliques, ingénierie hangar acier contact, devis rapide charpente",
      h1: "Pôle Export & Contact Ingénierie"
    },
    rfq: {
      title: "Demande de Devis Technique (RFQ) | STRUCTIVA®",
      description: "Soumettez les dimensions et spécifications de votre projet pour recevoir une étude statique préliminaire et un devis commercial sous 24 heures.",
      keywords: "demande de devis hangar métallique, formulaire RFQ bâtiment acier, prix hangar en kit FOB Mersin CIF, étude statique gratuite 24h",
      h1: "Demande d'Offre de Prix Officielle (RFQ)"
    }
  },

  es: {
    home: {
      title: "Hangares y Estructuras Metálicas de Acero sin Columnas | STRUCTIVA®",
      description: "Fabricación de hangares arqueados de acero sin columnas intermedias (9m a 45m). Planta en Adana, a 15 km del Puerto de Mersin. Exportación a más de 50 países.",
      keywords: "naves industriales de acero sin columnas, hangares arqueados autoportantes, estructuras metálicas pre-diseñadas PEB, galpones metálicos en kit, hangar para aviones, almacén de granos, techos sobre contenedores, fabricante acero estructural Turquía",
      h1: "Estructuras Arqueadas de Acero sin Columnas & Hangares"
    },
    models: {
      title: "Modelos de Naves y Hangares de Acero PEB | STRUCTIVA®",
      description: "Serie Q, Serie S, Serie P, techos sobre contenedores y naves industriales PEB. Luces libres de 9m a 45m certificadas para vientos de 240 km/h.",
      keywords: "modelos de naves industriales de acero, Serie Q hangar arqueado, Serie S nave pared recta, cubierta sobre contenedores marítimos, edificios PEB gran luz",
      h1: "Modelos de Estructuras de Acero"
    },
    sectors: {
      title: "Sectores Industriales y Almacenamiento | STRUCTIVA®",
      description: "Estructuras de acero sin columnas interiores para agricultura, minería, hangares de aviación, logística y manufactura pesada.",
      keywords: "almacén agrícola de granos en acero, hangares de aviación y helicópteros, cubiertas para acopio minero, bodegas logísticas prefabricadas",
      h1: "Soluciones por Sector Industrial"
    },
    engineering: {
      title: "Ingeniería Estructural & Normas Internacionales | STRUCTIVA®",
      description: "Certificación EN 1090-2 EXC4, marcado CE, AISC 360-16 y aleación Galvalume Plus® AZ180 con alta resistencia anticorrosión.",
      keywords: "certificación EN 1090-2 EXC4, cálculo estructural Eurocódigo 3 y AISC 360-16, acero Galvalume Plus AZ180, resistencia a huracanes 240 km/h",
      h1: "Ingeniería Estructural de Cero Tolerancia"
    },
    configurator: {
      title: "Configurador 3D de Estructuras de Acero | STRUCTIVA®",
      description: "Calcule en tiempo real la superficie, el volumen y la logística en contenedores 40HC con nuestro configurador interactivo 3D.",
      keywords: "configurador 3D naves industriales, calculadora de galpones de acero, cálculo de contenedores 40HC, diseño paramétrico de hangares",
      h1: "Configurador 3D Paramétrico"
    },
    projects: {
      title: "Proyectos Internacionales y Casos de Éxito | STRUCTIVA®",
      description: "Hangares y almacenes industriales instalados en más de 50 países, diseñados para resistir huracanes y cargas extremas de nieve.",
      keywords: "proyectos internacionales estructuras metálicas, casos de éxito hangares de acero, exportación de naves PEB Europa Latinoamérica África",
      h1: "Estructuras que Impulsan Economías"
    },
    knowledge: {
      title: "Centro de Conocimiento y Guías Técnicas | STRUCTIVA®",
      description: "Guías sobre planificación de naves industriales, comparación PEB vs acero convencional y preparación de licitaciones RFQ.",
      keywords: "guía planificación nave industrial, comparativa PEB vs acero convencional, cómo preparar licitación RFQ acero, metalurgia Galvalume Plus",
      h1: "Centro de Conocimiento Técnico"
    },
    about: {
      title: "Acerca de STRUCTIVA — Fábrica de Adana | STRUCTIVA®",
      description: "Capacidad de 25.000 toneladas métricas anuales en Adana, Turquía. Conexión marítima directa para entregas flat-pack a nivel mundial.",
      keywords: "fábrica de estructuras metálicas Adana Turquía, exportador mundial de hangares de acero, capacidad 25000 toneladas anuales, puerto de Mersin",
      h1: "Instalaciones de Adana y Tradición de Ingeniería"
    },
    contact: {
      title: "Contacto & Departamento de Exportación Global | STRUCTIVA®",
      description: "Comuníquese con nuestros ingenieros estructurales en Adana. Reciba un estudio de viabilidad y cotización formal en 24 horas.",
      keywords: "contacto STRUCTIVA Turquía, departamento exportación estructuras de acero, asesoría ingeniería estructural, cotización rápida hangares",
      h1: "Contacto y Ventas Internacionales"
    },
    rfq: {
      title: "Solicitud de Cotización Técnica (RFQ) | STRUCTIVA®",
      description: "Envíe las dimensiones y requisitos de su nave para recibir una propuesta técnica preliminar y cotización FOB/CIF en 24 horas.",
      keywords: "solicitar cotización nave industrial, formulario RFQ hangar de acero, precio galpón metálico FOB Mersin CIF, presupuesto ingeniería 24h",
      h1: "Solicitud de Cotización Formal (RFQ)"
    }
  },

  ar: {
    home: {
      title: "هياكل حديدية مقوسة ومستودعات بدون أعمدة | STRUCTIVA® تركيا",
      description: "تصنيع هناجر ومستودعات فولاذية مقوسة بدون أعمدة داخلية من 9 إلى 45 متراً. مصنعنا في أضنة يبعد 15 كم عن ميناء مرسين. تصدير مباشر إلى أكثر من 50 دولة.",
      keywords: "هناجر حديد بدون أعمدة, مستودعات فولاذية مقوسة, مباني حديدية مسبقة الهندسة PEB, تصنيع هناجر طائرات, صوامع ومستودعات حبوب, مظلات حاويات الشحن, مصنع هياكل حديدية في تركيا أضنة, أسعار الهناجر الحديدية",
      h1: "مباني فولاذية مقوسة خالية من الأعمدة وهناجر صناعية كبرى"
    },
    models: {
      title: "نماذج الهناجر والمباني الفولاذية مسبقة الصنع | STRUCTIVA®",
      description: "استكشف الفئة Q، الفئة S، مظلات الحاويات والمباني الصناعية PEB. بحور حرة من 9 إلى 45 متراً ومقاومة رياح حتى 240 كم/ساعة.",
      keywords: "نماذج الهناجر الحديدية, سلسلة Q هناجر مقوسة, سلسلة S مستودعات جدران مستقيمة, مظلات فوق الحاويات, مباني صناعية PEB",
      h1: "نماذج الهياكل الحديدية الهندسية"
    },
    sectors: {
      title: "حلول القطاعات الصناعية وتخزين الحبوب والمناجم | STRUCTIVA®",
      description: "هياكل حديدية خالية من الأعمدة للقطاع الزراعي، الصوامع، حظائر الطائرات ومستودعات اللوجستيات الكبرى.",
      keywords: "مستودعات تخزين الحبوب والأعلاف, هناجر صيانة الطائرات والمروحيات, مستودعات لوجستية ومناجم, هناجر عسكرية وصناعية",
      h1: "حلول القطاعات والتخزين الاستراتيجي"
    },
    engineering: {
      title: "معايير الهندسة الإنشائية الفولاذية والجودة | STRUCTIVA®",
      description: "مطابقة EN 1090-2 EXC4 وعلامة CE ومواصفات AISC 360-16 وفولاذ Galvalume Plus® المقاوم للتآكل والحرارة.",
      keywords: "شهادة EN 1090-2 EXC4, كود البناء الأوروبي Eurocode 3, مواصفات AISC 360-16, فولاذ جالفالوم بلس AZ180 المقاوم للصدأ والحرارة",
      h1: "هندسة إنشائية بدقة متناهية"
    },
    configurator: {
      title: "محدد القياسات التفاعلي ثلاثي الأبعاد 3D | STRUCTIVA®",
      description: "حدد العرض والطول والارتفاع لحساب المساحة والحجم وحاويات الشحن البحرية 40HC بنموذج 3D تفاعلي فوري.",
      keywords: "تصميم هنجر ثلاثي الأبعاد 3D, حاسبة مساحة وحجم المستودعات, حساب عدد حاويات الشحن 40HC, تخطيط المباني الفولاذية",
      h1: "أداة تكوين المباني ثلاثية الأبعاد"
    },
    projects: {
      title: "المشاريع الدولية وسجل الإنجازات العالمية | STRUCTIVA®",
      description: "مشاريع هناجر ومستودعات عملاقة منجزة في أكثر من 50 دولة مصممة لتحمل حرارة الصحراء والثلوج الكثيفة.",
      keywords: "مشاريع الهناجر والمستودعات الدولية, سابقة أعمال الهياكل الحديدية في الخليج والشرق الأوسط وأفريقيا, مشاريع STRUCTIVA تركيا",
      h1: "هياكل فولاذية تدعم الاقتصادات"
    },
    knowledge: {
      title: "مركز المعرفة الإنشائية والأدلة الفنية | STRUCTIVA®",
      description: "أدلة هندسية وتخطيطية للمباني الفولاذية ومقارنات PEB وسبل إعداد مناقصات الشراء الدولية.",
      keywords: "دليل تخطيط المستودعات الصناعية, مقارنة مباني PEB مع الحديد التقليدي, إعداد كراسة شروط RFQ للهناجر, خصائص فولاذ جالفالوم",
      h1: "مركز المعرفة والأبحاث الهندسية"
    },
    about: {
      title: "عن ستروكتيفا — مجمع مصانع أضنة الهندسي | STRUCTIVA®",
      description: "طاقة إنتاجية سنوية 25,000 طن متري في أضنة، تركيا. شحن بحري سريع عبر موانئ البحر الأبيض المتوسط.",
      keywords: "شركة ستروكتيفا للهياكل الحديدية, مصنع أضنة للمباني الفولاذية, تصدير هناجر من تركيا عبر ميناء مرسين",
      h1: "مصانع ستروكتيفا في أضنة وتاريخنا الهندسي"
    },
    contact: {
      title: "الاتصال ومكتب التصدير الدولي المباشر | STRUCTIVA®",
      description: "تواصل مباشرة مع مهندسينا الإنشائيين في أضنة للحصول على دراسة استاتيكية وعرض أسعار رسمي خلال 24 ساعة.",
      keywords: "تواصل مع مصنع ستروكتيفا تركيا, رقم هاتف ومبيعات الهناجر الحديدية, مكتب التصدير الدولي أضنة",
      h1: "مكتب التصدير الدولي والاتصال"
    },
    rfq: {
      title: "طلب عرض سعر ومواصفات فنية (RFQ) | STRUCTIVA®",
      description: "أرسل أبعاد مشروعك ومتطلبات الموقع للحصول على دراسة جدوى هندسية وعرض أسعار تجاري FOB أو CIF خلال 24 ساعة.",
      keywords: "طلب عرض سعر هنجر حديد, نموذج تسعير مستودع فولاذي RFQ, أسعار الشحن FOB مرسين و CIF للموانئ العربية",
      h1: "طلب عرض سعر رسمي للمشروع (RFQ)"
    }
  },

  ru: {
    home: {
      title: "Арочные бескаркасные ангары из стали | STRUCTIVA® Адана",
      description: "Производство арочных стальных ангаров без промежуточных колонн шириной от 9 до 45 метров. Завод в Адане, 15 км от порта Мерсин. Экспорт в 50+ стран мира.",
      keywords: "бескаркасные арочные ангары, быстровозводимые стальные здания PEB, строительство зернохранилищ, авиационные ангары из стали, склады без внутренних колонн, навесы над морскими контейнерами, завод металлоконструкций Турция Адана, сталь Galvalume Plus AZ180",
      h1: "Стальные арочные сооружения без колонн и промышленные ангары"
    },
    models: {
      title: "Модели стальных арочных ангаров и PEB зданий | STRUCTIVA®",
      description: "Серии Q, S, P, навесы на контейнеры и быстровозводимые промышленные здания. Пролеты до 45 метров, ветровая стойкость 240 км/ч.",
      keywords: "модели стальных ангаров, серия Q арочный ангар, серия S прямостенный ангар, навесы между контейнерами, здания PEB большой пролет",
      h1: "Инженерные модели стальных сооружений"
    },
    sectors: {
      title: "Отраслевые решения и склады сыпучих грузов | STRUCTIVA®",
      description: "Стальные конструкции без внутренних опор для сельского хозяйства, зернохранилищ, горной добычи, авиационных ангаров и логистики.",
      keywords: "зернохранилища и овощехранилища из стали, авиационные ангары для самолетов, склады для горнорудной промышленности, логистические терминалы",
      h1: "Отраслевые решения для промышленности"
    },
    engineering: {
      title: "Стандарты проектирования и качество металлоконструкций | STRUCTIVA®",
      description: "Сертификация EN 1090-2 EXC4, маркировка CE, нормы AISC 360-16 и сталь Galvalume Plus® AZ180 с защитой от коррозии.",
      keywords: "сертификат EN 1090-2 EXC4, проектирование по Еврокоду 3 и СНиП, алюмоцинковое покрытие Galvalume Plus AZ180, снеговая нагрузка 350 кг/м2",
      h1: "Прецизионное проектирование стальных конструкций"
    },
    configurator: {
      title: "3D Конфигуратор стальных зданий | STRUCTIVA®",
      description: "Задайте ширину, длину и высоту ангара для мгновенного расчета площади, объема и необходимого количества контейнеров 40HC.",
      keywords: "3D конфигуратор ангаров онлайн, расчет площади и объема склада, калькулятор морских контейнеров 40HC, параметрический расчет здания",
      h1: "Интерактивный 3D конфигуратор зданий"
    },
    projects: {
      title: "Международные реализованные проекты и портфолио | STRUCTIVA®",
      description: "Промышленные ангары и склады, возведенные в более чем 50 странах мира, устойчивые к ураганным ветрам и снеговым нагрузкам.",
      keywords: "реализованные проекты стальных ангаров, портфолио металлоконструкций СНГ Европа Азия, построенные зернохранилища и склады STRUCTIVA",
      h1: "Сооружения, двигающие экономику"
    },
    knowledge: {
      title: "Центр инженерных знаний и руководства | STRUCTIVA®",
      description: "Технические статьи о проектировании ангаров, сравнении PEB с традиционным прокатом и правилах составления RFQ.",
      keywords: "руководство по проектированию ангаров, сравнение PEB и сварных металлоконструкций, как составить ТЗ на ангар RFQ, свойства Galvalume Plus",
      h1: "Центр знаний и технические руководства"
    },
    about: {
      title: "О компании STRUCTIVA — Завод в Адане | STRUCTIVA®",
      description: "Собственный производственный комплекс мощностью 25 000 тонн в год в Адане, Турция. Быстрая морская логистика через порт Мерсин.",
      keywords: "завод металлоконструкций STRUCTIVA Адана Турция, производитель стальных ангаров на экспорт, мощность 25000 тонн в год, отгрузка из порта Мерсин",
      h1: "Завод STRUCTIVA в Адане и инженерные традиции"
    },
    contact: {
      title: "Контакты и международный экспортный отдел | STRUCTIVA®",
      description: "Свяжитесь напрямую с нашими инженерами-проектировщиками в Адане. Расчет проекта и коммерческое предложение за 24 часа.",
      keywords: "контакты завода STRUCTIVA Турция, отдел экспорта металлоконструкций, связаться с инженером-проектировщиком ангаров",
      h1: "Международный экспортный отдел и контакты"
    },
    rfq: {
      title: "Запрос технического расчета и стоимости (RFQ) | STRUCTIVA®",
      description: "Отправьте габариты здания и назначение объекта для получения предварительного статического расчета и цен FOB/CIF в течение 24 часов.",
      keywords: "запросить расчет стоимости ангара, форма RFQ на быстровозводимое здание, цена ангара FOB Мерсин CIF, спецификация металлоконструкций за 24 часа",
      h1: "Запрос официального коммерческого предложения (RFQ)"
    }
  },

  az: {
    home: {
      title: "Sütunsuz Tağ Polad Konstruksiya və Anqar İstehsalı | STRUCTIVA®",
      description: "Adana zavodumuzda EN 1090-2 EXC4 sertifikatlı, 9m-45m sütunsuz tağ polad anqarlar istehsal edirik. Mersin Limanı vasitəsilə 50-dən çox ölkəyə ixrac.",
      keywords: "sütunsuz tağ polad konstruksiya, metal anqar istehsalı, PEB sənaye binaları, təyyarə anqarı, taxıl anbarı tikintisi, konteyner üstü kanopi, Galvalume Plus AZ180, Türkiyə polad konstruksiya zavodu",
      h1: "Sütunsuz Tağvari Polad Konstruksiyalar və Anqarlar"
    },
    models: {
      title: "Tağvari və PEB Polad Konstruksiya Modelləri | STRUCTIVA®",
      description: "Q-Series, S-Series, P-Series və konteyner üstü kanopilər. 9m-dən 45m-ə qədər sütunsuz aşırım, 240 km/saat külək davamlılığı.",
      keywords: "polad anqar modelləri, Q-Series tağvari anqar, S-Series düz divarlı anbar, P-Series ikimailli dam, konteyner kanopisi, PEB polad bina",
      h1: "Mühəndislik Polad Modelləri"
    },
    sectors: {
      title: "Sənaye Sahələri və Anbar Həlləri | STRUCTIVA®",
      description: "Kənd təsərrüfatı, mədənçilik, aviasiya anqarları və logistika mərkəzləri üçün sütunsuz polad konstruksiyalar.",
      keywords: "kənd təsərrüfatı taxıl anbarı, aviasiya təyyarə anqarı, logistika mərkəzi metal konstruksiya, mədən sənayesi örtükləri",
      h1: "Sahəvi Polad Həlləri"
    },
    engineering: {
      title: "Struktur Polad Mühəndisliyi və Standartlar | STRUCTIVA®",
      description: "EN 1090-2 EXC4, CE nişanı, AISC 360-16 və Galvalume Plus® AZ180 metallurgiyası.",
      keywords: "EN 1090-2 EXC4 sertifikatı, Eurocode 3 polad hesablamaları, Galvalume Plus AZ180 korroziya müqaviməti, seysmik davamlı polad binalar",
      h1: "Sıfır Tolerantlı Polad Mühəndisliyi"
    },
    configurator: {
      title: "3D Polad Bina Konfiquratoru | STRUCTIVA®",
      description: "En, uzunluq və hündürlüyü təyin edərək sahə, həcm və konteyner sayını 3D modeldə hesablayın.",
      keywords: "3D polad anqar konfiquratoru, anbar ölçüsü hesablama, 40HC konteyner daşıma hesabı",
      h1: "3D Parametrik Konfiqurator"
    },
    projects: {
      title: "Beynəlxalq Layihələr və İstinadlar | STRUCTIVA®",
      description: "50-dən çox ölkədə qurulan anqar və anbar layihələrimiz.",
      keywords: "beynəlxalq polad konstruksiya layihələri, Azərbaycan və Qafqaz anqar layihələri, tamamlanmış sənaye anbarları",
      h1: "İqtisadiyyatı İrəli Aparan Konstruksiyalar"
    },
    knowledge: {
      title: "Polad Konstruksiya Məlumat Mərkəzi | STRUCTIVA®",
      description: "Polad bina planlaşdırma qaydaları və texniki məqalələr.",
      keywords: "polad bina planlaşdırma bələdçisi, PEB və ənənəvi polad müqayisəsi, texniki şərtlərin hazırlanması RFQ",
      h1: "Texniki Məlumat Mərkəzi"
    },
    about: {
      title: "Haqqımızda — Adana Zavodu | STRUCTIVA®",
      description: "İldə 25.000 ton istehsal gücünə malik Adana kompleksimiz və beynəlxalq ixracat.",
      keywords: "STRUCTIVA Adana polad zavodu, Türkiyə metal konstruksiya istehsalçısı, 25000 ton illik istehsal gücü",
      h1: "Adana İstehsalat Kompleksi və İrs"
    },
    contact: {
      title: "Əlaqə & Qlobal İxrac Şöbəsi | STRUCTIVA®",
      description: "Adana mühəndislik ofisimizlə əlaqə saxlayın və 24 saat ərzində təklif alın.",
      keywords: "STRUCTIVA əlaqə, polad anqar sifarişi, Adana mühəndislik mərkəzi telefon",
      h1: "Qlobal İxrac Masası və Əlaqə"
    },
    rfq: {
      title: "Rəsmi Qiymət Təklifi (RFQ) Tələbi | STRUCTIVA®",
      description: "Layihə ölçülərini daxil edərək 24 saat ərzində texniki və kommersiya təklifi əldə edin.",
      keywords: "polad anqar qiymət təklifi, metal konstruksiya RFQ forması, Bakı və Azərbaycan çatdırılma qiymətləri",
      h1: "Rəsmi Layihə Təklifi Tələbi"
    }
  },

  it: {
    home: {
      title: "Capannoni ad Arco in Acciaio Senza Colonne | STRUCTIVA® Adana",
      description: "Produttore di capannoni metallici autoportanti senza colonne (9m-45m) certificati EN 1090-2 EXC4. Export diretto verso oltre 50 paesi via Porto di Mersin.",
      keywords: "capannoni in acciaio ad arco autoportanti, strutture metalliche senza colonne, edifici pre-ingegnerizzati PEB, hangar aeronautici in acciaio, copertura tra container, carpenteria metallica EN 1090-2 EXC4, Galvalume Plus AZ180",
      h1: "Strutture ad Arco in Acciaio Senza Colonne & Hangar Industriali"
    },
    models: {
      title: "Modelli di Capannoni e Strutture in Acciaio PEB | STRUCTIVA®",
      description: "Serie Q, Serie S, Serie P, coperture per container e capannoni industriali. Luci libere fino a 45m e resistenza al vento di 240 km/h.",
      keywords: "modelli capannoni in acciaio, Serie Q arco autoportante, Serie S pareti verticali, tettoie su container, capannoni industriali PEB",
      h1: "Modelli di Ingegneria per Capannoni in Acciaio"
    },
    sectors: {
      title: "Settori Industriali & Stoccaggio Merci | STRUCTIVA®",
      description: "Soluzioni in acciaio per agricoltura, stoccaggio cereali, hangar aeronautici, logistica e manifattura pesante.",
      keywords: "capannoni agricoli stoccaggio cereali, hangar aerei ed elicotteri, depositi minerari in acciaio, magazzini logistici prefabbricati",
      h1: "Soluzioni per Settore Industriale"
    },
    engineering: {
      title: "Ingegneria Strutturale & Norme Eurocodice 3 | STRUCTIVA®",
      description: "Certificati EN 1090-2 EXC4, marcatura CE, AISC 360-16 e acciaio Galvalume Plus® AZ180 con garanzia anticorrosione.",
      keywords: "certificazione EN 1090-2 EXC4, calcolo strutturale Eurocodice 3, marcatura CE carpenteria metallica, Galvalume Plus AZ180",
      h1: "Ingegneria Strutturale di Precisione"
    },
    configurator: {
      title: "Configuratore 3D di Capannoni in Acciaio | STRUCTIVA®",
      description: "Calcola in 3D interattivo superficie, cubatura e conteggio container marittimi 40HC con scheda tecnica istantanea.",
      keywords: "configuratore 3D capannoni acciaio, calcolo dimensioni hangar, stima trasporto container 40HC",
      h1: "Configuratore Parametrico 3D"
    },
    projects: {
      title: "Progetti Internazionali & Referenze Mondiali | STRUCTIVA®",
      description: "Oltre 500.000 m² di capannoni in acciaio forniti in oltre 50 paesi nel mondo.",
      keywords: "progetti capannoni metallici internazionali, referenze hangar in acciaio Europa Mediterraneo, realizzazioni STRUCTIVA",
      h1: "Strutture che Guidano le Economie"
    },
    knowledge: {
      title: "Centro Tecnico & Guide di Ingegneria in Acciaio | STRUCTIVA®",
      description: "Guide di progettazione per capannoni industriali, analisi PEB vs carpenteria tradizionale e redazione di capitolati RFQ.",
      keywords: "guida progettazione capannoni acciaio, confronto PEB vs carpenteria tradizionale, preparazione capitolato RFQ, metallurgia Galvalume",
      h1: "Centro di Conoscenza e Guide Tecniche"
    },
    about: {
      title: "Chi Siamo — Stabilimenti di Produzione Adana | STRUCTIVA®",
      description: "Capacità produttiva di 25.000 tonnellate annue ad Adana (Turchia). Logistica marittima diretta tramite il porto di Mersin.",
      keywords: "stabilimento produzione acciaio Adana Turchia, produttore hangar metallici export, capacità 25000 tonnellate",
      h1: "Stabilimenti di Adana e Tradizione Ingegneristica"
    },
    contact: {
      title: "Contatti & Ufficio Export Globale | STRUCTIVA®",
      description: "Contatta i nostri ingegneri ad Adana. Ricevi studio di fattibilità statica e quotazione formale entro 24 ore.",
      keywords: "contatti STRUCTIVA, ufficio export carpenteria metallica, consulenza ingegneria capannoni acciaio",
      h1: "Ufficio Export Internazionale & Contatti"
    },
    rfq: {
      title: "Richiesta di Preventivo Tecnico (RFQ) in 24 Ore | STRUCTIVA®",
      description: "Invia i parametri del tuo progetto per una verifica ingegneristica, distinta base (BOM) e quotazione FOB/CIF in 24h.",
      keywords: "preventivo capannone in acciaio, richiesta offerta tecnica RFQ, quotazione FOB Mersin CIF Genova Trieste Valencia",
      h1: "Richiesta di Offerta Formale (RFQ)"
    }
  },

  pt: {
    home: {
      title: "Galpões Metálicos em Arco Sem Colunas Intermediárias | STRUCTIVA®",
      description: "Fabricação de galpões em arco autoportantes de 9m a 45m de vão livre certificados EN 1090-2 EXC4. Exportação direta para 50+ países via Porto de Mersin.",
      keywords: "galpões metálicos em arco autoportantes, estruturas de aço sem colunas, edifícios pré-engenheirados PEB, hangares para aviação, armazém graneleiro de aço, cobertura para contêineres, Galvalume Plus AZ180",
      h1: "Estruturas de Aço em Arco Sem Colunas & Hangares"
    },
    models: {
      title: "Modelos de Galpões e Prédios de Aço PEB | STRUCTIVA®",
      description: "Série Q, Série S, Série P, coberturas de contêineres e galpões PEB pesados. Vãos livres de 9m a 45m com resistência a ventos de 240 km/h.",
      keywords: "modelos de galpões metálicos, Série Q arco autoportante, Série S parede reta, cobertura sobre contêineres, galpão industrial PEB",
      h1: "Modelos Estruturais de Engenharia"
    },
    sectors: {
      title: "Aplicações Industriais e Armazenamento a Granel | STRUCTIVA®",
      description: "Estruturas de aço sem pilares para agronegócio, silos de grãos, hangares de aviação e logística integrada.",
      keywords: "armazém graneleiro agrícola em aço, hangar para aeronaves e helicópteros, cobertura para mineração, galpão logístico pré-fabricado",
      h1: "Soluções por Setor Industrial"
    },
    engineering: {
      title: "Engenharia Estrutural & Padrões Eurocode 3 | STRUCTIVA®",
      description: "Certificação EN 1090-2 EXC4, marcação CE, AISC 360-16 e liga Galvalume Plus® AZ180 com alta durabilidade.",
      keywords: "certificação EN 1090-2 EXC4, cálculo estrutural Eurocode 3 e AISC 360-16, aço Galvalume Plus AZ180 anticorrosivo",
      h1: "Engenharia Estrutural de Precisão"
    },
    configurator: {
      title: "Configurador 3D de Galpões de Aço | STRUCTIVA®",
      description: "Configure vão livre, comprimento e altura em 3D interativo com cálculo de cubagem de transporte em contêineres 40HC.",
      keywords: "configurador 3D galpão metálico, calculadora de estrutura de aço, cálculo de contêiner 40HC",
      h1: "Configurador 3D Paramétrico"
    },
    projects: {
      title: "Projetos Internacionais e Instalações Globais | STRUCTIVA®",
      description: "Casos de sucesso de galpões e armazéns industriais entregues em mais de 50 países.",
      keywords: "projetos internacionais galpões de aço, obras realizadas estruturas metálicas Europa Brasil África, portfólio STRUCTIVA",
      h1: "Estruturas que Impulsionam Economias"
    },
    knowledge: {
      title: "Central de Conhecimento Técnico & Guias de Engenharia | STRUCTIVA®",
      description: "Artigos técnicos sobre projeto de galpões, comparativo PEB vs estruturas soldadas e especificações de compra.",
      keywords: "guia planejamento galpão industrial, comparativo PEB vs aço convencional, como preparar RFQ estrutura metálica",
      h1: "Centro de Conhecimento Técnico"
    },
    about: {
      title: "Sobre a STRUCTIVA — Fábrica em Adana | STRUCTIVA®",
      description: "Complexo fabril de 25.000 toneladas/ano em Adana, Turquia, a 15 km do Porto de Mersin.",
      keywords: "fábrica estruturas metálicas Adana Turquia, exportador galpões de aço, capacidade 25000 toneladas ano",
      h1: "Instalações de Adana e Tradição em Engenharia"
    },
    contact: {
      title: "Contato & Departamento de Exportação Global | STRUCTIVA®",
      description: "Fale diretamente com nossa equipe de engenharia e receba sua proposta formal em 24 horas.",
      keywords: "contato STRUCTIVA Turquia, departamento exportação galpões metálicos, engenharia estrutural contato",
      h1: "Departamento de Exportação Global"
    },
    rfq: {
      title: "Solicitação de Cotação Técnica (RFQ) em 24h | STRUCTIVA®",
      description: "Envie as especificações do seu galpão para receber estudo preliminar e orçamento FOB/CIF em 24 horas.",
      keywords: "solicitar orçamento galpão metálico, formulário RFQ estrutura de aço, preço FOB Mersin CIF Santos Lisboa Luanda",
      h1: "Solicitação de Cotação Formal (RFQ)"
    }
  },

  nl: {
    home: {
      title: "Kolomvrije Boogloodsen & Stalen Hallen | STRUCTIVA® Adana",
      description: "Fabrikant van EN 1090-2 EXC4 gecertificeerde kolomvrije boogloodsen (9m-45m). Gelegen in Adana, 15 km van de diepzeehaven Mersin. Export naar 50+ landen.",
      keywords: "kolomvrije boogloodsen, zelfdragende stalen hallen, systeembouw staalhallen PEB, vliegtuighangar staal, graanopslag loods, containeroverkapping, EN 1090-2 EXC4 staalbouw, Galvalume Plus AZ180",
      h1: "Kolomvrije Boogloodsen & Industriële Stalen Gebouwen"
    },
    models: {
      title: "Modellen voor Boog- en Systeembouwhallen (PEB) | STRUCTIVA®",
      description: "Q-Serie, S-Serie, P-Serie en containeroverkappingen. Vrije overspanningen van 9m tot 45m met 240 km/h windbestendigheid.",
      keywords: "boogloods modellen, Q-Serie rondbooghal, S-Serie rechte zijwanden, zeecontainer overkapping, PEB industriehal",
      h1: "Ingenieurmatige Staalbouw Modellen"
    },
    sectors: {
      title: "Industriële Sectoren & Bulkopslag | STRUCTIVA®",
      description: "Kolomvrije staalconstructies voor landbouw, graanopslag, vliegtuighangars en logistieke distributiecentra.",
      keywords: "agrarische opslagloods graan, vliegtuighangar staalbouw, mijnbouw bulkopslag, logistieke distributiehal",
      h1: "Sectorgerichte Oplossingen"
    },
    engineering: {
      title: "Constructieve Ingenieursnormen & Eurocode 3 | STRUCTIVA®",
      description: "EN 1090-2 EXC4, CE-markering, AISC 360-16 en Galvalume Plus® AZ180 met onderhoudsvrije levensduur.",
      keywords: "EN 1090-2 EXC4 certificering, Eurocode 3 staalconstructie berekening, Galvalume Plus AZ180 corrosiebescherming",
      h1: "Precisie Staalbouw Engineering"
    },
    configurator: {
      title: "3D Staalbouw Configurator | STRUCTIVA®",
      description: "Bereken realtime vloeroppervlak, volume en 40HC zeecontainerplanning in interactieve 3D.",
      keywords: "3D staalhal configurator, boogloods afmetingen berekenen, 40HC container transport calculator",
      h1: "Interactieve 3D Configurator"
    },
    projects: {
      title: "Internationale Referentieprojecten | STRUCTIVA®",
      description: "Succesvol gerealiseerde industriële hallen en opslagloodsen in meer dan 50 landen wereldwijd.",
      keywords: "internationale staalbouw projecten, referentieprojecten boogloodsen Europa, STRUCTIVA realisaties",
      h1: "Bewezen Internationale Projecten"
    },
    knowledge: {
      title: "Technisch Kenniscentrum & Staalbouw Gidsen | STRUCTIVA®",
      description: "Deskundige gidsen over halontwerp, PEB-vergelijkingen en internationale aanbestedingen.",
      keywords: "staalhal ontwerpen gids, PEB vs traditionele staalbouw, offerteaanvraag RFQ voorbereiden",
      h1: "Technisch Kenniscentrum"
    },
    about: {
      title: "Over STRUCTIVA — Productiefaciliteiten Adana | STRUCTIVA®",
      description: "Geïntegreerde staalverwerkingscapaciteit van 25.000 ton per jaar in Adana, Turkije.",
      keywords: "STRUCTIVA staalfabriek Adana Turkije, exporteur stalen hallen, 25000 ton jaarlijkse capaciteit",
      h1: "Fabriek Adana & Staalbouw Traditie"
    },
    contact: {
      title: "Contact & Internationale Exportdesk | STRUCTIVA®",
      description: "Direct contact met constructeurs in Adana. Binnen 24 uur een statische haalbaarheidstoets en offerte.",
      keywords: "contact STRUCTIVA, internationale export staalbouw, constructief advies stalen loods",
      h1: "Internationale Exportdesk"
    },
    rfq: {
      title: "Offerteaanvraag (RFQ) Binnen 24 Uur | STRUCTIVA®",
      description: "Dien uw afmetingen in en ontvang binnen 24 uur een gedetailleerde materiaallijst (BOM) en vrachtofferte.",
      keywords: "offerte stalen hal aanvragen, RFQ formulier staalbouw, CIF Rotterdam Antwerpen zeevracht offerte",
      h1: "Officiële Projectaanvraag (RFQ)"
    }
  },

  pl: {
    home: {
      title: "Łukowe Hale Stalowe Bez Słupów Wewnętrznych | STRUCTIVA®",
      description: "Producent certyfikowanych wg EN 1090-2 EXC4 samonośnych hal łukowych (9m-45m). Fabryka w Adanie, 15 km od portu Mersin. Eksport do 50+ krajów.",
      keywords: "łukowe hale stalowe samonośne, hale stalowe bez słupów, konstrukcje stalowe PEB, hangary lotnicze producent, magazyny zbożowe stalowe, zadaszenia kontenerowe, EN 1090-2 EXC4, Galvalume Plus AZ180",
      h1: "Samonośne Łukowe Hale Stalowe & Hangary Przemysłowe"
    },
    models: {
      title: "Modele Hal Łukowych i Konstrukcji Stalowych PEB | STRUCTIVA®",
      description: "Seria Q, Seria S, Seria P i zadaszenia kontenerowe. Rozpiętości od 9m do 45m z odpornością na wiatr do 240 km/h.",
      keywords: "modele hal stalowych, Seria Q hala łukowa, Seria S hala o prostych ścianach, zadaszenie między kontenerami, hala przemysłowa PEB",
      h1: "Modele Konstrukcyjne Hal Stalowych"
    },
    sectors: {
      title: "Zastosowania Przemysłowe i Magazyny Masowe | STRUCTIVA®",
      description: "Hale bez podpór wewnętrznych dla rolnictwa, magazynowania zbóż, hangarów lotniczych i logistyki.",
      keywords: "hale rolnicze magazyny zbożowe, hangary lotnicze ze stali, składowiska górnicze, hale magazynowe logistyczne",
      h1: "Rozwiązania dla Przemysłu i Rolnictwa"
    },
    engineering: {
      title: "Inżynieria Konstrukcyjna & Normy Eurokod 3 | STRUCTIVA®",
      description: "Zgodność z EN 1090-2 EXC4, znak CE, AISC 360-16 i stal Galvalume Plus® AZ180 o wieloletniej trwałości.",
      keywords: "certyfikat EN 1090-2 EXC4, obliczenia statyczne Eurokod 3, powłoka Galvalume Plus AZ180, obciążenie śniegiem 350 kg/m2",
      h1: "Precyzyjna Inżynieria Konstrukcji Stalowych"
    },
    configurator: {
      title: "Interaktywny Konfigurator Hal 3D | STRUCTIVA®",
      description: "Zaprojektuj halę w 3D, sprawdź kubaturę i liczbę kontenerów morskich 40HC z natychmiastowym eksportem specyfikacji.",
      keywords: "konfigurator 3D hal stalowych, kalkulator wymiarów hali, obliczanie transportu w kontenerach 40HC",
      h1: "Parametryczny Konfigurator 3D"
    },
    projects: {
      title: "Międzynarodowe Realizacje i Projekty | STRUCTIVA®",
      description: "Ponad 500 000 m² hal dostarczonych do ponad 50 krajów na całym świecie.",
      keywords: "realizacje hal stalowych na świecie, międzynarodowe projekty konstrukcji stalowych, referencje STRUCTIVA",
      h1: "Konstrukcje, Które Budują Gospodarkę"
    },
    knowledge: {
      title: "Baza Wiedzy Inżynieryjnej & Poradniki | STRUCTIVA®",
      description: "Praktyczne poradniki dotyczące projektowania hal, porównanie PEB ze stalą tradycyjną i przygotowanie zapytań RFQ.",
      keywords: "poradnik planowania hali stalowej, porównanie PEB vs tradycyjna konstrukcja stalowa, jak przygotować zapytanie ofertowe RFQ",
      h1: "Baza Wiedzy Technicznej"
    },
    about: {
      title: "O Firmie STRUCTIVA — Zakład w Adanie | STRUCTIVA®",
      description: "Zdolność produkcyjna 25 000 ton rocznie w Adanie, Turcja, przy strategicznym węźle portowym Mersin.",
      keywords: "fabryka konstrukcji stalowych Adana Turcja, producent hal łukowych na eksport, wydajność 25000 ton rocznie",
      h1: "Zakłady w Adanie i Tradycja Inżynieryjna"
    },
    contact: {
      title: "Kontakt i Dział Eksportu Globalnego | STRUCTIVA®",
      description: "Skontaktuj się z naszymi inżynierami i otrzymaj kalkulację oraz ofertę w ciągu 24 godzin.",
      keywords: "kontakt STRUCTIVA, dział eksportu hal stalowych, doradztwo inżynieryjne konstrukcje stalowe",
      h1: "Dział Eksportu Globalnego"
    },
    rfq: {
      title: "Zapytanie Ofertowe (RFQ) w 24 Godziny | STRUCTIVA®",
      description: "Prześlij wymiary i wymagania obiektu, aby otrzymać bezpłatną kalkulację statyczną i wycenę FOB/CIF w 24h.",
      keywords: "zapytanie ofertowe hala stalowa, formularz wyceny RFQ, cena hali stalowej z transportem morskim",
      h1: "Zapytanie o Wycenę Projektu (RFQ)"
    }
  },

  ro: {
    home: {
      title: "Hale Metalice Arcuite Fără Stâlpi Intermediari | STRUCTIVA®",
      description: "Producător de hangare arcuite din oțel fără stâlpi interiori (9m-45m) certificate EN 1090-2 EXC4. Livrare directă în peste 50 de țări prin Portul Mersin.",
      keywords: "hale metalice arcuite autoportante, hale fără stâlpi interiori, structuri metalice PEB, hangare aviație, depozite cereale oțel, acoperișuri containere, EN 1090-2 EXC4, Galvalume Plus AZ180",
      h1: "Hale Metalice Arcuite Autoportante & Hangare Industriale"
    },
    models: {
      title: "Modele de Hale Arcuite și Structuri Metalice PEB | STRUCTIVA®",
      description: "Seria Q, Seria S, Seria P și acoperișuri peste containere. Deschideri libere 9m-45m și rezistență la vânt de 240 km/h.",
      keywords: "modele hale metalice, Seria Q hală arcuită, Seria S pereți drepți, copertine containere, hală industrială PEB",
      h1: "Modele de Structuri Metalice"
    },
    sectors: {
      title: "Aplicații Industriale & Depozitare Vrac | STRUCTIVA®",
      description: "Structuri metalice autoportante pentru agricultură, silozuri de cereale, hangare aviatice și centre logistice.",
      keywords: "hale agricole depozitare cereale, hangare avioane și elicoptere, depozite industriale logistică",
      h1: "Soluții pe Sectoare Industriale"
    },
    engineering: {
      title: "Inginerie Structurală & Standarde Eurocode 3 | STRUCTIVA®",
      description: "Certificare EN 1090-2 EXC4, marcaj CE, AISC 360-16 și aliaj Galvalume Plus® AZ180 rezistent la coroziune.",
      keywords: "certificare EN 1090-2 EXC4, proiectare Eurocode 3 structuri metalice, oțel Galvalume Plus AZ180",
      h1: "Inginerie Structurală de Înaltă Precizie"
    },
    configurator: {
      title: "Configurator 3D de Hale Metalice | STRUCTIVA®",
      description: "Calculați în 3D suprafața, volumul util și optimizarea containerelor maritime 40HC cu fișă tehnică PDF.",
      keywords: "configurator 3D hale metalice, calculator dimensiuni hală, transport container 40HC Constanța",
      h1: "Configurator Parametric 3D"
    },
    projects: {
      title: "Proiecte Internaționale & Referințe Globale | STRUCTIVA®",
      description: "Peste 500.000 m² de structuri metalice livrate în peste 50 de țări din întreaga lume.",
      keywords: "proiecte hale metalice internaționale, referințe hangare România Europa, portofoliu STRUCTIVA",
      h1: "Structuri Care Susțin Economia"
    },
    knowledge: {
      title: "Centru de Cunoștințe Tehnice & Ghiduri de Inginerie | STRUCTIVA®",
      description: "Ghiduri practice de proiectare a halelor, comparativ PEB vs profile laminate și proceduri de achiziție.",
      keywords: "ghid proiectare hală metalică, comparație PEB vs structură clasică, pregătire cerere ofertă RFQ",
      h1: "Centru de Resurse Tehnice"
    },
    about: {
      title: "Despre STRUCTIVA — Fabrica din Adana | STRUCTIVA®",
      description: "Capacitate de 25.000 tone/an în Adana, Turcia, la 15 km de Portul Internațional Mersin.",
      keywords: "fabrica de structuri metalice Adana Turcia, producător hale metalice export, livrare rapidă Marea Neagră Constanța",
      h1: "Fabricile din Adana și Tradiția Tehnică"
    },
    contact: {
      title: "Contact & Biroul de Export Internațional | STRUCTIVA®",
      description: "Discutați direct cu inginerii noștri din Adana și obțineți oferta tehnică în 24 de ore.",
      keywords: "contact STRUCTIVA Turcia, departament export hale metalice, ofertă tehnică inginerie",
      h1: "Birou de Export Internațional"
    },
    rfq: {
      title: "Cerere de Ofertă Tehnică (RFQ) în 24h | STRUCTIVA®",
      description: "Trimiteți dimensiunile proiectului pentru un calcul preliminar și o cotație fermă FOB/CIF în 24 de ore.",
      keywords: "cerere ofertă hală metalică, preț hală arcuită FOB Mersin CIF Constanța, deviz structură metalică 24h",
      h1: "Cerere de Ofertă Oficială (RFQ)"
    }
  },

  bg: {
    home: {
      title: "Безколонни Дъгови Стоманени Халета и Хангари | STRUCTIVA® Адана",
      description: "Производител на сертифицирани по EN 1090-2 EXC4 безколонни дъгови стоманени халета (9м-45м). Завод в Адана, на 15 км от пристанище Мерсин. Износ в 50+ държави.",
      keywords: "безколонни дъгови стоманени халета, сглобяеми метални халета, самоносещи стоманени конструкции, авиационни хангари, зърнохранилища, PEB стоманени сгради, Galvalume Plus AZ180",
      h1: "Самоносещи Дъгови Стоманени Халета и Индустриални Хангари"
    },
    models: {
      title: "Модели Дъгови и PEB Стоманени Халета | STRUCTIVA®",
      description: "Серия Q, Серия S, Серия P, покриви над контейнери и тежки PEB сгради. Светъл отвор от 9м до 45м и ветрова устойчивост 240 км/ч.",
      keywords: "модели стоманени халета, Серия Q дъгово хале, Серия S прави стени, навеси над контейнери, PEB индустриални сгради",
      h1: "Инженерни Модели Стоманени Конструкции"
    },
    sectors: {
      title: "Индустриални Сектори и Складове за Насипни Товари | STRUCTIVA®",
      description: "Стоманени конструкции без вътрешни колони за земеделие, зърнобази, авиационни хангари и логистични центрове.",
      keywords: "селскостопански халета за зърно, самолетни хангари, минни складове, логистични бази метални конструкции",
      h1: "Секторни Индустриални Решения"
    },
    engineering: {
      title: "Конструктивно Инженерство и Еврокод 3 | STRUCTIVA®",
      description: "Сертификация EN 1090-2 EXC4, CE маркировка, AISC 360-16 и стомана Galvalume Plus® AZ180.",
      keywords: "сертификат EN 1090-2 EXC4, Еврокод 3 статични изчисления, антикорозионна стомана Galvalume Plus AZ180",
      h1: "Прецизно Стоманено Инженерство"
    },
    configurator: {
      title: "3D Конфигуратор за Стоманени Халета | STRUCTIVA®",
      description: "Изчислете в реално време площ, обем и брой 40HC морски контейнери в интерактивен 3D модел.",
      keywords: "3D конфигуратор метални халета, калкулатор за размери на хале, контейнерен транспорт Варна Бургас",
      h1: "Интерактивен 3D Конфигуратор"
    },
    projects: {
      title: "Международни Проекти и Референции | STRUCTIVA®",
      description: "Над 500 000 м² изградени стоманени халета и складове в над 50 държави по света.",
      keywords: "международни проекти стоманени халета, референции метални конструкции България Европа, обекти на STRUCTIVA",
      h1: "Конструкции, Които Движат Икономиката"
    },
    knowledge: {
      title: "Инженерен Център за Знания и Ръководства | STRUCTIVA®",
      description: "Технически ръководства за планиране на халета, сравнение на PEB и подготовка на тръжни спецификации RFQ.",
      keywords: "ръководство за проектиране на стоманено хале, PEB срещу конвенционална стомана, изготвяне на запитване RFQ",
      h1: "Технически Център за Знания"
    },
    about: {
      title: "За STRUCTIVA — Завод в Адана, Турция | STRUCTIVA®",
      description: "Производствен капацитет 25 000 тона годишно в Адана и бърза морска логистика чрез пристанище Мерсин.",
      keywords: "завод за метални конструкции Адана Турция, производител на стоманени халета, доставка до Варна и Бургас",
      h1: "Заводите в Адана и Инженерното Наследство"
    },
    contact: {
      title: "Контакти и Международен Експортен Отдел | STRUCTIVA®",
      description: "Свържете се с нашите инженери в Адана и получете техническа оферта в рамките на 24 часа.",
      keywords: "контакти STRUCTIVA Турция, експортен отдел стоманени халета, инженерна консултация",
      h1: "Международен Експортен Отдел"
    },
    rfq: {
      title: "Запитване за Оферта (RFQ) за 24 Часа | STRUCTIVA®",
      description: "Изпратете размерите на вашия проект за статична оценка, спецификация (BOM) и FOB/CIF оферта.",
      keywords: "оферта за стоманено хале, цена на метално хале FOB Мерсин CIF Варна Бургас, техническа оферта RFQ",
      h1: "Запитване за Официална Оферта (RFQ)"
    }
  },

  el: {
    home: {
      title: "Τοξωτά Μεταλλικά Κτίρια & Υπόστεγα Χωρίς Κολώνες | STRUCTIVA®",
      description: "Κατασκευαστής πιστοποιημένων κατά EN 1090-2 EXC4 αυτοφερόμενων τοξωτών μεταλλικών κτιρίων (9m-45m). Εργοστάσιο στα Άδανα, 15 χλμ από το λιμάνι της Μερσίνης.",
      keywords: "τοξωτά μεταλλικά κτίρια χωρίς κολώνες, προκατασκευασμένα μεταλλικά υπόστεγα PEB, υπόστεγα αεροσκαφών, μεταλλικές αποθήκες, στέγαστρα εμπορευματοκιβωτίων, EN 1090-2 EXC4, Galvalume Plus AZ180",
      h1: "Αυτοφερόμενα Τοξωτά Μεταλλικά Κτίρια & Βιομηχανικά Υπόστεγα"
    },
    models: {
      title: "Μοντέλα Τοξωτών & Προκατασκευασμένων Κτιρίων PEB | STRUCTIVA®",
      description: "Σειρά Q, Σειρά S, Σειρά P και στέγαστρα κοντέινερ. Ελεύθερα ανοίγματα 9m έως 45m με αντοχή σε ανέμους 240 km/h.",
      keywords: "μοντέλα μεταλλικών κτιρίων, Σειρά Q τοξωτό υπόστεγο, Σειρά S κάθετοι τοίχοι, στέγαστρο κοντέινερ, βιομηχανικά κτίρια PEB",
      h1: "Μηχανικά Μοντέλα Μεταλλικών Κατασκευών"
    },
    sectors: {
      title: "Βιομηχανικές Εφαρμογές & Αποθήκευση Χύδην | STRUCTIVA®",
      description: "Μεταλλικές κατασκευές χωρίς εσωτερικούς στύλους για γεωργία, σιλό σιτηρών, υπόστεγα αεροσκαφών και εφοδιαστική.",
      keywords: "γεωργικές αποθήκες σιτηρών, μεταλλικά υπόστεγα αεροπλάνων, αποθήκες μεταλλείων, κέντρα logistics",
      h1: "Λύσεις ανά Βιομηχανικό Κλάδο"
    },
    engineering: {
      title: "Δομική Μηχανική & Πρότυπα Ευρωκώδικα 3 | STRUCTIVA®",
      description: "Πιστοποίηση EN 1090-2 EXC4, σήμανση CE, AISC 360-16 και κράμα χάλυβα Galvalume Plus® AZ180.",
      keywords: "πιστοποίηση EN 1090-2 EXC4, στατική μελέτη Ευρωκώδικας 3, αντιδιαβρωτικός χάλυβας Galvalume Plus AZ180",
      h1: "Μηχανική Ακριβείας Μεταλλικών Κατασκευών"
    },
    configurator: {
      title: "Τρισδιάστατος (3D) Διαμορφωτής Μεταλλικών Κτιρίων | STRUCTIVA®",
      description: "Υπολογίστε σε 3D επιφάνεια, όγκο και αριθμό εμπορευματοκιβωτίων 40HC με άμεση τεχνική προδιαγραφή.",
      keywords: "3D διαμορφωτής μεταλλικών κτιρίων, υπολογισμός διαστάσεων υποστέγου, μεταφορά κοντέινερ 40HC Πειραιάς Θεσσαλονίκη",
      h1: "Παραμετρικός Διαμορφωτής 3D"
    },
    projects: {
      title: "Διεθνή Έργα & Παγκόσμιες Αναφορές | STRUCTIVA®",
      description: "Πάνω από 500.000 m² μεταλλικών κτιρίων εγκατεστημένα σε περισσότερες από 50 χώρες.",
      keywords: "διεθνή έργα μεταλλικών κατασκευών, έργα αναφοράς Ελλάδα Κύπρος Ευρώπη, χαρτοφυλάκιο STRUCTIVA",
      h1: "Κατασκευές που Κινούν τις Οικονομίες"
    },
    knowledge: {
      title: "Κέντρο Τεχνικής Γνώσης & Οδηγοί Μηχανικής | STRUCTIVA®",
      description: "Οδηγοί σχεδιασμού βιομηχανικών κτιρίων, σύγκριση PEB και προετοιμασία προδιαγραφών RFQ.",
      keywords: "οδηγός σχεδιασμού μεταλλικού κτιρίου, σύγκριση PEB με συμβατικό χάλυβα, προετοιμασία προσφοράς RFQ",
      h1: "Κέντρο Τεχνικής Γνώσης"
    },
    about: {
      title: "Σχετικά με τη STRUCTIVA — Εργοστάσιο στα Άδανα | STRUCTIVA®",
      description: "Ετήσια δυναμικότητα 25.000 τόνων στα Άδανα της Τουρκίας, 15 χλμ από το λιμάνι της Μερσίνης.",
      keywords: "εργοστάσιο μεταλλικών κατασκευών Άδανα, εξαγωγές μεταλλικών κτιρίων, θαλάσσια μεταφορά από Μερσίνη",
      h1: "Εγκαταστάσεις Αδάνων & Μηχανική Κληρονομιά"
    },
    contact: {
      title: "Επικοινωνία & Τμήμα Διεθνών Εξαγωγών | STRUCTIVA®",
      description: "Επικοινωνήστε απευθείας με τους πολιτικούς μηχανικούς μας και λάβετε προσφορά εντός 24 ωρών.",
      keywords: "επικοινωνία STRUCTIVA, τμήμα εξαγωγών μεταλλικών κτιρίων, τεχνική υποστήριξη",
      h1: "Γραφείο Διεθνών Εξαγωγών"
    },
    rfq: {
      title: "Αίτημα Τεχνικής Προσφοράς (RFQ) σε 24 Ώρες | STRUCTIVA®",
      description: "Υποβάλετε τις διαστάσεις του έργου σας για προκαταρκτική στατική μελέτη και προσφορά FOB/CIF.",
      keywords: "αίτημα προσφοράς μεταλλικού κτιρίου, τιμή τοξωτού υποστέγου CIF Πειραιάς Θεσσαλονίκη Λεμεσός",
      h1: "Επίσημο Αίτημα Προσφοράς (RFQ)"
    }
  },

  cs: {
    home: {
      title: "Samonosné Obloukové Ocelové Haly Bez Sloupů | STRUCTIVA®",
      description: "Výrobce certifikovaných obloukových ocelových hal bez vnitřních sloupů (9m-45m) dle EN 1090-2 EXC4. Export do více než 50 zemí přes přístav Mersin.",
      keywords: "samonosné obloukové ocelové haly, ocelové haly bez sloupů, montované haly PEB, letecké hangáry, skladovací haly na obilí, přístřešky na kontejnery, Galvalume Plus AZ180",
      h1: "Samonosné Obloukové Ocelové Haly & Průmyslové Hangáry"
    },
    models: {
      title: "Modely Obloukových a Montovaných Ocelových Hal PEB | STRUCTIVA®",
      description: "Řada Q, Řada S, Řada P a kontejnerové přístřešky. Rozpětí 9m až 45m s odolností proti větru 240 km/h.",
      keywords: "modely ocelových hal, Řada Q oblouková hala, Řada S rovné stěny, přístřešek mezi kontejnery, průmyslová hala PEB",
      h1: "Inženýrské Modely Ocelových Konstrukcí"
    },
    sectors: {
      title: "Průmyslová Odvětví & Skladování Sypkých Hmot | STRUCTIVA®",
      description: "Ocelové haly bez vnitřních sloupů pro zemědělství, sklady obilí, letecké hangáry a logistická centra.",
      keywords: "zemědělské haly na obilí, letecké hangáry z oceli, důlní sklady, logistické montované haly",
      h1: "Řešení pro Průmyslová Odvětví"
    },
    engineering: {
      title: "Konstrukční Inženýrství & Normy Eurokód 3 | STRUCTIVA®",
      description: "Certifikace EN 1090-2 EXC4, označení CE, AISC 360-16 a ocel Galvalume Plus® AZ180.",
      keywords: "certifikace EN 1090-2 EXC4, statické výpočty Eurokód 3, antikorozní ocel Galvalume Plus AZ180",
      h1: "Přesné Inženýrství Ocelových Konstrukcí"
    },
    configurator: {
      title: "3D Konfigurátor Ocelových Hal | STRUCTIVA®",
      description: "Spočítejte v interaktivním 3D plochu, objem a počet námořních kontejnerů 40HC.",
      keywords: "3D konfigurátor ocelových hal, kalkulačka rozměrů haly, výpočet přepravy v kontejnerech 40HC",
      h1: "Parametrický 3D Konfigurátor"
    },
    projects: {
      title: "Mezinárodní Projekty a Reference | STRUCTIVA®",
      description: "Více než 500 000 m² ocelových konstrukcí dodaných do 50+ zemí světa.",
      keywords: "mezinárodní projekty ocelových hal, reference montovaných hal Evropa, realizace STRUCTIVA",
      h1: "Konstrukce, Které Pohánějí Ekonomiku"
    },
    knowledge: {
      title: "Technické Znalostní Centrum & Průvodci | STRUCTIVA®",
      description: "Odborné návody pro plánování ocelových hal, srovnání PEB a přípravu výběrových řízení RFQ.",
      keywords: "průvodce plánováním ocelové haly, PEB vs konvenční ocel, příprava poptávky RFQ",
      h1: "Technické Znalostní Centrum"
    },
    about: {
      title: "O Společnosti STRUCTIVA — Výrobní Závod Adana | STRUCTIVA®",
      description: "Výrobní kapacita 25 000 tun ročně v Adaně, Turecko, 15 km od přístavu Mersin.",
      keywords: "výrobce ocelových konstrukcí Adana Turecko, export ocelových hal, kapacita 25000 tun",
      h1: "Výrobní Závody Adana & Inženýrská Tradice"
    },
    contact: {
      title: "Kontakt & Mezinárodní Exportní Oddělení | STRUCTIVA®",
      description: "Spojte se s našimi statiky v Adaně a získejte cenovou nabídku do 24 hodin.",
      keywords: "kontakt STRUCTIVA, exportní oddělení ocelových hal, technická konzultace",
      h1: "Mezinárodní Exportní Oddělení"
    },
    rfq: {
      title: "Poptávka Technické Nabídky (RFQ) do 24 Hodin | STRUCTIVA®",
      description: "Zadejte rozměry haly a obdržte předběžný statický výpočet, kusovník (BOM) a nabídku FOB/CIF.",
      keywords: "poptávka ocelové haly, cena obloukové haly RFQ, kalkulace montované haly do 24 hodin",
      h1: "Oficiální Poptávka Projektu (RFQ)"
    }
  },

  hu: {
    home: {
      title: "Oszlopmentes Íves Acélcsarnokok és Hangárok | STRUCTIVA®",
      description: "EN 1090-2 EXC4 tanúsítvánnyal rendelkező önhordó íves acélcsarnokok (9m-45m) gyártója. Közvetlen export több mint 50 országba a Mersini Kikötőn keresztül.",
      keywords: "oszlopmentes íves acélcsarnokok, önhordó acélszerkezetek, előregyártott PEB ipari csarnokok, repülőgép hangár, gabonatároló csarnok, konténer tető, Galvalume Plus AZ180",
      h1: "Oszlopmentes Íves Acélcsarnokok & Ipari Hangárok"
    },
    models: {
      title: "Íves és PEB Acélcsarnok Modellek | STRUCTIVA®",
      description: "Q-Széria, S-Széria, P-Széria és konténerfedések. 9m–45m szabad fesztáv és 240 km/h szélállóság.",
      keywords: "acélcsarnok modellek, Q-Széria íves csarnok, S-Széria egyenes oldalfal, konténer előtető, PEB ipari csarnok",
      h1: "Mérnöki Acélszerkezeti Modellek"
    },
    sectors: {
      title: "Ipari Alkalmazások és Ömlesztett Tárolás | STRUCTIVA®",
      description: "Belső oszlopok nélküli acélcsarnokok mezőgazdasági, bányászati, légiközlekedési és logisztikai célokra.",
      keywords: "mezőgazdasági gabonatároló csarnok, repülőgép hangár építés, bányászati tároló, logisztikai raktárcsarnok",
      h1: "Ipari Ágazati Megoldások"
    },
    engineering: {
      title: "Tartószerkezeti Mérnöki Szabványok & Eurocode 3 | STRUCTIVA®",
      description: "EN 1090-2 EXC4 tanúsítvány, CE jelölés, AISC 360-16 és Galvalume Plus® AZ180 korrózióálló acél.",
      keywords: "EN 1090-2 EXC4 minősítés, Eurocode 3 statikai méretezés, Galvalume Plus AZ180 bevonat",
      h1: "Precíziós Acélszerkezeti Mérnöki Munka"
    },
    configurator: {
      title: "3D Interaktív Acélcsarnok Konfigurátor | STRUCTIVA®",
      description: "Számítsa ki 3D-ben az alapterületet, a térfogatot és a 40HC tengeri konténerek számát.",
      keywords: "3D acélcsarnok konfigurátor, csarnok méret kalkulátor, 40HC konténer szállítás számítás",
      h1: "Parametrikus 3D Konfigurátor"
    },
    projects: {
      title: "Nemzetközi Projektek és Referenciák | STRUCTIVA®",
      description: "Több mint 500 000 m² felépített acélcsarnok világszerte több mint 50 országban.",
      keywords: "nemzetközi acélcsarnok projektek, ipari csarnok referenciák Európa, STRUCTIVA megvalósult munkák",
      h1: "Gazdaságot Mozgató Szerkezetek"
    },
    knowledge: {
      title: "Műszaki Tudásközpont és Tervezési Útmutatók | STRUCTIVA®",
      description: "Útmutatók ipari csarnokok tervezéséhez, PEB összehasonlítások és RFQ ajánlatkérések összeállításához.",
      keywords: "acélcsarnok tervezési útmutató, PEB vs hagyományos acélszerkezet, RFQ ajánlatkérés előkészítése",
      h1: "Műszaki Tudásközpont"
    },
    about: {
      title: "A STRUCTIVA-ról — Adanai Gyártóüzem | STRUCTIVA®",
      description: "Évi 25 000 tonna gyártási kapacitás a törökországi Adanában, 15 km-re a Mersini Kikötőtől.",
      keywords: "STRUCTIVA acélszerkezet gyár Adana, török acélcsarnok gyártó, 25000 tonna kapacitás",
      h1: "Adanai Gyártóbázis és Mérnöki Örökség"
    },
    contact: {
      title: "Kapcsolat és Nemzetközi Export Iroda | STRUCTIVA®",
      description: "Lépjen kapcsolatba adanai mérnökeinkkel, és kérjen hivatalos árajánlatot 24 órán belül.",
      keywords: "STRUCTIVA kapcsolat, acélcsarnok export osztály, mérnöki tanácsadás",
      h1: "Nemzetközi Export Iroda"
    },
    rfq: {
      title: "Műszaki Árajánlatkérés (RFQ) 24 Órán Belül | STRUCTIVA®",
      description: "Küldje el projektje méreteit előzetes statikai vizsgálathoz, anyagkiíráshoz (BOM) és FOB/CIF árajánlathoz.",
      keywords: "acélcsarnok árajánlatkérés, íves csarnok ár RFQ, csarnok szállítási kalkuláció 24 órán belül",
      h1: "Hivatalos Projekt Árajánlatkérés (RFQ)"
    }
  },

  sr: {
    home: {
      title: "Lučne Čelične Hale i Hangari Bez Stubova | STRUCTIVA® Adana",
      description: "Proizvođač EN 1090-2 EXC4 sertifikovanih samonosećih lučnih čeličnih hala (9m-45m). Fabrika u Adani, 15 km od luke Mersin. Izvoz u preko 50 zemalja.",
      keywords: "lučne čelične hale bez stubova, samonoseći čelični hangari, montažne industrijske hale PEB, hangari za avione, skladišta žitarica, nadstrešnice za kontejnere, Galvalume Plus AZ180",
      h1: "Samonoseće Lučne Čelične Hale & Industrijski Hangari"
    },
    models: {
      title: "Modeli Lučnih i Montažnih Čeličnih Hala PEB | STRUCTIVA®",
      description: "Q-Serija, S-Serija, P-Serija i krovovi nad kontejnerima. Rasponi od 9m do 45m sa otpornošću na vetar od 240 km/h.",
      keywords: "modeli čeličnih hala, Q-Serija lučni hangar, S-Serija ravni zidovi, nadstrešnica nad kontejnerima, PEB hala",
      h1: "Inženjerski Modeli Čeličnih Konstrukcija"
    },
    sectors: {
      title: "Industrijski Sektori i Skladištenje Rasutog Tereta | STRUCTIVA®",
      description: "Čelične hale bez unutrašnjih stubova za poljoprivredu, silose za žitarice, avio-hangare i logistiku.",
      keywords: "poljoprivredne hale za žitarice, hangari za avione i helikoptere, rudarska skladišta, logistički centri",
      h1: "Rešenja po Industrijskim Sektorima"
    },
    engineering: {
      title: "Strukturno Inženjerstvo i Evrokod 3 Standardi | STRUCTIVA®",
      description: "EN 1090-2 EXC4 sertifikat, CE oznaka, AISC 360-16 i legura Galvalume Plus® AZ180.",
      keywords: "EN 1090-2 EXC4 sertifikacija, statički proračun Evrokod 3, antikorozivni čelik Galvalume Plus AZ180",
      h1: "Precizno Strukturno Inženjerstvo"
    },
    configurator: {
      title: "3D Konfigurator Čeličnih Hala | STRUCTIVA®",
      description: "Izračunajte u 3D površinu, zapreminu i broj 40HC brodskih kontejnera u realnom vremenu.",
      keywords: "3D konfigurator čeličnih hala, kalkulator dimenzija hangara, proračun transporta kontejnerima",
      h1: "Parametarski 3D Konfigurator"
    },
    projects: {
      title: "Međunarodni Projekti i Reference | STRUCTIVA®",
      description: "Preko 500.000 m² izgrađenih čeličnih hala u više od 50 država širom sveta.",
      keywords: "međunarodni projekti čeličnih hala, reference montažnih hala Balkan Evropa, realizovani objekti STRUCTIVA",
      h1: "Konstrukcije Koje Pokreću Ekonomiju"
    },
    knowledge: {
      title: "Centar Tehničkog Znanja i Inženjerski Vodiči | STRUCTIVA®",
      description: "Stručni vodiči za planiranje industrijskih hala, poređenje PEB sistema i pripremu RFQ dokumentacije.",
      keywords: "vodič za planiranje čelične hale, PEB naspram klasičnog čelika, priprema upita za ponudu RFQ",
      h1: "Tehnički Centar Znanja"
    },
    about: {
      title: "O Kompaniji STRUCTIVA — Fabrika u Adani | STRUCTIVA®",
      description: "Godišnji kapacitet od 25.000 tona čelika u Adani, Turska, na 15 km od luke Mersin.",
      keywords: "fabrika čeličnih konstrukcija Adana Turska, proizvođač montažnih hala, izvoz čelika luka Mersin",
      h1: "Pogoni u Adani i Inženjerska Tradicija"
    },
    contact: {
      title: "Kontakt i Međunarodni Izvozni Odsek | STRUCTIVA®",
      description: "Kontaktirajte naše građevinske inženjere u Adani i dobijte tehničku ponudu u roku od 24 sata.",
      keywords: "kontakt STRUCTIVA Turska, prodaja čeličnih hala, konsultacije sa inženjerima",
      h1: "Međunarodni Izvozni Odsek"
    },
    rfq: {
      title: "Zahtev za Tehničku Ponudu (RFQ) za 24 Sata | STRUCTIVA®",
      description: "Pošaljite dimenzije vašeg objekta za preliminarni statički proračun, specifikaciju materijala i FOB/CIF cenu.",
      keywords: "upit za cenu čelične hale, RFQ formular za hangar, cena montažne hale sa prevozom",
      h1: "Zvanični Zahtev za Ponudu (RFQ)"
    }
  },

  hr: {
    home: {
      title: "Lučne Čelične Hale i Hangari Bez Stupova | STRUCTIVA® Adana",
      description: "Proizvođač EN 1090-2 EXC4 certificiranih samonosivih lučnih čeličnih hala (9m-45m). Tvornica u Adani, 15 km od luke Mersin. Izvoz u 50+ zemalja.",
      keywords: "lučne čelične hale bez stupova, samonosivi čelični hangari, montažne čelične građevine PEB, zrakoplovni hangari, skladišta žitarica, nadstrešnice za kontejnere, Galvalume Plus AZ180",
      h1: "Samonosive Lučne Čelične Hale & Industrijski Hangari"
    },
    models: {
      title: "Modeli Lučnih i Montažnih Čeličnih Hala PEB | STRUCTIVA®",
      description: "Serija Q, Serija S, Serija P i nadstrešnice za kontejnere. Rasponi od 9m do 45m uz otpornost na vjetar od 240 km/h.",
      keywords: "modeli čeličnih hala, Serija Q lučni hangar, Serija S ravni zidovi, nadstrešnica nad kontejnerima, PEB industrijska hala",
      h1: "Inženjerski Modeli Čeličnih Konstrukcija"
    },
    sectors: {
      title: "Industrijski Sektori i Skladištenje Rasutog Tereta | STRUCTIVA®",
      description: "Čelične konstrukcije bez unutarnjih stupova za poljoprivredu, silose, zrakoplovne hangare i logistiku.",
      keywords: "poljoprivredna skladišta žitarica, hangari za zrakoplove, rudarska skladišta, logistički distributivni centri",
      h1: "Rješenja po Industrijskim Sektorima"
    },
    engineering: {
      title: "Konstrukcijsko Inženjerstvo i Eurokod 3 Norme | STRUCTIVA®",
      description: "Certifikat EN 1090-2 EXC4, CE oznaka, AISC 360-16 i legura čelika Galvalume Plus® AZ180.",
      keywords: "certifikat EN 1090-2 EXC4, statički izračun Eurokod 3, antikorozivni čelik Galvalume Plus AZ180",
      h1: "Precizno Konstrukcijsko Inženjerstvo"
    },
    configurator: {
      title: "3D Konfigurator Čeličnih Hala | STRUCTIVA®",
      description: "Izračunajte u 3D površinu, volumen i broj 40HC brodskih kontejnera s trenutnim tehničkim listom.",
      keywords: "3D konfigurator čeličnih hala, kalkulator dimenzija hale, pomorski prijevoz kontejnera Luka Rijeka Ploče",
      h1: "Parametarski 3D Konfigurator"
    },
    projects: {
      title: "Međunarodni Projekti i Reference | STRUCTIVA®",
      description: "Više od 500.000 m² isporučenih čeličnih hala u preko 50 zemalja svijeta.",
      keywords: "međunarodni projekti čeličnih hala, reference montažnih hala Hrvatska Europa, portfelj STRUCTIVA",
      h1: "Konstrukcije Koje Pokreću Gospodarstvo"
    },
    knowledge: {
      title: "Centar Tehničkog Znanja i Vodiči | STRUCTIVA®",
      description: "Vodiči za planiranje industrijskih hala, usporedba PEB sustava i priprema natječajne dokumentacije RFQ.",
      keywords: "vodič za planiranje čelične hale, PEB naspram klasične čelične gradnje, priprema RFQ upita",
      h1: "Tehnički Centar Znanja"
    },
    about: {
      title: "O Tvrtki STRUCTIVA — Tvornica u Adani | STRUCTIVA®",
      description: "Kapacitet proizvodnje od 25.000 tona godišnje u Adani, Turska, uz izravnu pomorsku vezu iz luke Mersin.",
      keywords: "tvornica čeličnih konstrukcija Adana Turska, izvoznik čeličnih hala, kapacitet 25000 tona",
      h1: "Proizvodni Pogoni Adana i Inženjerska Baština"
    },
    contact: {
      title: "Kontakt i Međunarodni Izvozni Ured | STRUCTIVA®",
      description: "Obratite se našim inženjerima u Adani i zatražite ponudu sa statičkom provjerom unutar 24 sata.",
      keywords: "kontakt STRUCTIVA, izvozni ured čelične hale, inženjersko savjetovanje",
      h1: "Međunarodni Izvozni Ured"
    },
    rfq: {
      title: "Zahtjev za Tehničku Ponudu (RFQ) u 24 Sata | STRUCTIVA®",
      description: "Pošaljite dimenzije objekta za preliminarni statički izračun, troškovnik materijala (BOM) i FOB/CIF ponudu.",
      keywords: "zahtjev za ponudu čelična hala, cijena lučnog hangara CIF Rijeka Ploče Koper, ponuda u 24h",
      h1: "Službeni Zahtjev za Ponudu (RFQ)"
    }
  },

  uk: {
    home: {
      title: "Безколонні арочні сталеві ангари та склади | STRUCTIVA® Адана",
      description: "Виробництво арочних сталевих ангарів без внутрішніх колон (9м-45м) за стандартом EN 1090-2 EXC4. Експорт у 50+ країн світу через порт Мерсін.",
      keywords: "безколонні арочні сталеві ангари, швидкомонтовані будівлі PEB, будівництво зерносховищ, авіаційні ангари зі сталі, склади без колон, навіси над контейнерами, завод металоконструкцій Туреччина, Galvalume Plus AZ180",
      h1: "Сталеві арочні споруди без колон та промислові ангари"
    },
    models: {
      title: "Моделі сталевих арочних та PEB будівель | STRUCTIVA®",
      description: "Серії Q, S, P та накриття для контейнерів. Прогони до 45м, стійкість до ураганного вітру 240 км/год.",
      keywords: "моделі сталевих ангарів, Серія Q арочний ангар, Серія S прямі стіни, накриття на контейнери, промислові будівлі PEB",
      h1: "Інженерні моделі сталевих конструкцій"
    },
    sectors: {
      title: "Рішення для агросектору, складів та промисловості | STRUCTIVA®",
      description: "Сталеві конструкції без внутрішніх опор для зберігання зерна, ангарів авіації та логістичних терміналів.",
      keywords: "зерносховища та елеватори зі сталі, ангари для літаків і гелікоптерів, логістичні склади, промислові цехи",
      h1: "Галузеві рішення для промисловості"
    },
    engineering: {
      title: "Інженерні стандарти, статичні розрахунки та Єврокод 3 | STRUCTIVA®",
      description: "Сертифікація EN 1090-2 EXC4, маркування CE, AISC 360-16 та сплав Galvalume Plus® AZ180.",
      keywords: "сертифікат EN 1090-2 EXC4, розрахунок конструкцій Єврокод 3 та ДБН, алюмоцинкове покриття Galvalume Plus AZ180",
      h1: "Високоточне проєктування металоконструкцій"
    },
    configurator: {
      title: "Інтерактивний 3D конфігуратор сталевих будівель | STRUCTIVA®",
      description: "Задайте параметри будівлі та отримайте розрахунок об'єму морських контейнерів 40HC у 3D.",
      keywords: "3D конфігуратор ангарів онлайн, калькулятор розмірів складу, розрахунок доставки в контейнерах 40HC",
      h1: "Параметричний 3D конфігуратор"
    },
    projects: {
      title: "Міжнародні реалізовані проекти та об'єкти | STRUCTIVA®",
      description: "Понад 500 000 м² змонтованих сталевих споруд у більш ніж 50 країнах світу.",
      keywords: "реалізовані проєкти сталевих ангарів, будівництво ангарів Україна Європа, портфоліо STRUCTIVA",
      h1: "Споруди, що підтримують економіку"
    },
    knowledge: {
      title: "База інженерних знань та технічні посібники | STRUCTIVA®",
      description: "Посібники з проєктування ангарів, порівняння PEB та класичного металопрокату.",
      keywords: "посібник з планування сталевого ангара, порівняння PEB та зварних конструкцій, як підготувати технічне завдання RFQ",
      h1: "Центр знань та інженерні посібники"
    },
    about: {
      title: "Про компанію STRUCTIVA — Завод в Адані | STRUCTIVA®",
      description: "Виробничий комплекс потужністю 25 000 тонн на рік в Адані, Туреччина.",
      keywords: "завод металоконструкцій Адана Туреччина, виробник швидкомонтованих ангарів, доставка морем через порт Мерсін",
      h1: "Завод STRUCTIVA в Адані та інженерна спадщина"
    },
    contact: {
      title: "Контакти та міжнародний експортний відділ | STRUCTIVA®",
      description: "Зв'яжіться з нашими інженерами в Адані та отримайте розрахунок за 24 години.",
      keywords: "контакти STRUCTIVA Туреччина, відділ експорту сталевих ангарів, консультація інженера-конструктора",
      h1: "Міжнародний експортний відділ та контакти"
    },
    rfq: {
      title: "Запит комерційної пропозиції (RFQ) за 24 години | STRUCTIVA®",
      description: "Надішліть розміри споруди та отримайте специфікацію матеріалів і вартість доставки FOB/CIF.",
      keywords: "запит ціни на сталевий ангар, форма RFQ швидкомонтована будівля, ціна ангара з доставкою в Україну",
      h1: "Офіційний запит комерційної пропозиції (RFQ)"
    }
  },

  fa: {
    home: {
      title: "سوله‌های قوسی بدون ستون و سازه‌های فولادی صنعتی | STRUCTIVA® آدانا",
      description: "تولیدکننده سوله‌ها و آشیانه‌های قوسی بدون ستون میانی (دهانه ۹ تا ۴۵ متر) با گواهینامه EN 1090-2 EXC4 در کارخانه آدانا ترکیه. صادرات به بیش از ۵۰ کشور.",
      keywords: "سوله قوسی بدون ستون, سازه فلزی پیش ساخته PEB, آشیانه هواپیما, انبار غلات و سیلو, ساخت سوله صنعتی ترکیه آدانا, ورق گالوالوم پلاس AZ180, سوله پیچ و مهره ای",
      h1: "سازه‌های فولادی قوسی بدون ستون و آشیانه‌های صنعتی سنگین"
    },
    models: {
      title: "مدل‌های سوله قوسی و ساختمان‌های فولادی پیش‌ساخته PEB | STRUCTIVA®",
      description: "سری Q، سری S، سری P، سایبان کانتینری و سوله‌های سنگین PEB. دهانه آزاد ۹ تا ۴۵ متر با مقاومت باد ۲۴۰ کیلومتر بر ساعت.",
      keywords: "مدل های سوله فولادی, سوله قوسی سری Q, سوله دیوار صاف سری S, مسقف سازی کانتینر, سوله سنگین صنعتی PEB",
      h1: "مدل‌های مهندسی سازه‌های فولادی"
    },
    sectors: {
      title: "کاربردهای صنعتی و انبارهای فله و کشاورزی | STRUCTIVA®",
      description: "سازه‌های فولادی بدون ستون برای انبار غلات کشاورزی، معادن، آشیانه هواپیما و مراکز لجستیک.",
      keywords: "انبار مکانیزه غلات و کشاورزی, ساخت آشیانه هواپیما و هلیکوپتر, پوشش دپوی معادن, سوله انبار لجستیک",
      h1: "راهکارهای تخصصی صنایع"
    },
    engineering: {
      title: "استانداردهای مهندسی سازه و آیین‌نامه Eurocode 3 | STRUCTIVA®",
      description: "گواهینامه EN 1090-2 EXC4، نشان CE، استاندارد AISC 360-16 و آلیاژ ضدزنگ Galvalume Plus® AZ180.",
      keywords: "گواهینامه EN 1090-2 EXC4, طراحی سازه فولادی Eurocode 3 و AISC, ورق گالوالوم پلاس AZ180 ضد خوردگی",
      h1: "مهندسی سازه‌های فولادی با دقت بالا"
    },
    configurator: {
      title: "پیکربندی سه‌بعدی (3D) آنلاین سوله و سازه فولادی | STRUCTIVA®",
      description: "محاسبه آنی مساحت، حجم مفید و تعداد کانتینرهای حمل دریایی 40HC با ابزار سه‌بعدی تعاملی.",
      keywords: "طراحی سه بعدی سوله آنلاین, محاسبه ابعاد و وزن سوله, برآورد حمل کانتینر 40HC",
      h1: "پیکربندی پارامتریک سه‌بعدی"
    },
    projects: {
      title: "پروژه‌های بین‌المللی و رزومه جهانی | STRUCTIVA®",
      description: "بیش از ۵۰۰,۰۰۰ متر مربع سوله و سازه فولادی اجرا شده در بیش از ۵۰ کشور جهان.",
      keywords: "پروژه های بین المللی سوله سازی, رزومه اجرایی سازه فلزی خاورمیانه و آسیا, پروژه های شرکت STRUCTIVA",
      h1: "سازه‌هایی که اقتصاد را به حرکت درمی‌آورند"
    },
    knowledge: {
      title: "مرکز دانش فنی و راهنماهای مهندسی فولاد | STRUCTIVA®",
      description: "مقالات تخصصی طراحی سوله، مقایسه PEB با سوله سنتی و نحوه تهیه اسناد مناقصه RFQ.",
      keywords: "راهنمای طراحی سوله صنعتی, مقایسه سوله PEB با تیرورق سنتی, نحوه تنظیم استعلام قیمت RFQ",
      h1: "مرکز دانش فنی و مقالات مهندسی"
    },
    about: {
      title: "درباره STRUCTIVA — مجتمع کارخانجات آدانا ترکیه | STRUCTIVA®",
      description: "ظرفیت تولید سالانه ۲۵,۰۰۰ تن سازه فولادی در منطقه صنعتی آدانا، در فاصله ۱۵ کیلومتری بندر مرسین.",
      keywords: "کارخانه سوله سازی آدانا ترکیه, تولیدکننده بین المللی سازه فلزی, ظرفیت 25000 تن در سال",
      h1: "تأسیسات تولیدی آدانا و میراث مهندسی"
    },
    contact: {
      title: "تماس با ما و دفتر صادرات بین‌المللی | STRUCTIVA®",
      description: "ارتباط مستقیم با مهندسان سازه در آدانا و دریافت پیش‌فاکتور رسمی و محاسبات فنی ظرف ۲۴ ساعت.",
      keywords: "تماس با شرکت STRUCTIVA ترکیه, دفتر فروش و صادرات سوله, مشاوره مهندسی سازه فلزی",
      h1: "میز صادرات جهانی و تماس با مهندسان"
    },
    rfq: {
      title: "درخواست استعلام قیمت و پیشنهاد فنی (RFQ) در ۲۴ ساعت | STRUCTIVA®",
      description: "ارسال ابعاد پروژه جهت دریافت بررسی ایستایی، فهرست مقادیر مصالح (BOM) و قیمت FOB/CIF.",
      keywords: "استعلام قیمت سوله قوسی, فرم RFQ سازه فلزی, قیمت صادراتی سوله تحویل FOB مرسین",
      h1: "درخواست رسمی پیش‌فاکتور پروژه (RFQ)"
    }
  },

  he: {
    home: {
      title: "מבני פלדה קשתיים והאנגרים ללא עמודים | STRUCTIVA® אדנה",
      description: "יצרן האנגרים ומבני פלדה קשתיים ללא עמודים פנימיים (9-45 מטר) בתקן EN 1090-2 EXC4. מפעל באדנה, 15 ק\"מ מנמל מרסין. יצוא ליותר מ-50 מדינות.",
      keywords: "מבני פלדה קשתיים ללא עמודים, האנגרים מפלדה בהרכבה מהירה, מבני תעשייה PEB, האנגרים למטוסים, מחסנים חקלאיים, Galvalume Plus AZ180, קונסטרוקציית פלדה",
      h1: "מבני פלדה קשתיים ללא עמודים והאנגרים תעשייתיים"
    },
    models: {
      title: "דגמי האנגרים ומבני פלדה מתועשים PEB | STRUCTIVA®",
      description: "סדרת Q, סדרת S, סדרת P וקירוי מכולות. מפתחים נקיים מ-9 עד 45 מטר ועמידות לרוחות של 240 קמ\"ש.",
      keywords: "דגמי מבני פלדה, סדרת Q האנגר קשתי, סדרת S קירות ישרים, קירוי בין מכולות, מבני PEB",
      h1: "דגמים הנדסיים של מבני פלדה"
    },
    sectors: {
      title: "פתרונות לתעשייה, חקלאות ואחסון בתפזורת | STRUCTIVA®",
      description: "מבני פלדה ללא עמודים לחקלאות, אחסון גרעינים, האנגרים לתעופה ומרכזים לוגיסטיים.",
      keywords: "מחסני תבואה חקלאיים מפלדה, האנגרים למטוסים ומסוקים, אחסון מחצבים, מרלו\"ג מפלדה",
      h1: "פתרונות לפי מגזרי תעשייה"
    },
    engineering: {
      title: "הנדסת מבנים ותקני יורוקוד 3 | STRUCTIVA®",
      description: "הסמכת EN 1090-2 EXC4, תו CE, תקן AISC 360-16 וסגסוגת Galvalume Plus® AZ180 עמידה לקורוזיה.",
      keywords: "תקן EN 1090-2 EXC4, תכנון הנדסי יורוקוד 3, פלדת גלוולום פלוס AZ180 נגד חלודה",
      h1: "הנדסת שלד פלדה בדיוק מרבי"
    },
    configurator: {
      title: "קונפיגורטור תלת-ממדי (3D) למבני פלדה | STRUCTIVA®",
      description: "חשבו בזמן אמת שטח רצפה, נפח ומספר מכולות 40HC להובלה ימית בהדמיית תלת-ממד.",
      keywords: "קונפיגורטור 3D למבני פלדה, מחשבון מידות האנגר, חישוב הובלה במכולות 40HC",
      h1: "קונפיגורטור תלת-ממדי פרמטרי"
    },
    projects: {
      title: "פרויקטים בינלאומיים ומבנים שבוצעו | STRUCTIVA®",
      description: "מעל 500,000 מ\"ר של מבני פלדה והאנגרים שהוקמו ביותר מ-50 מדינות ברחבי העולם.",
      keywords: "פרויקטים בינלאומיים מבני פלדה, האנגרים שבוצעו באגן הים התיכון ואירופה, תיק עבודות STRUCTIVA",
      h1: "מבנים שמניעים כלכלות"
    },
    knowledge: {
      title: "מרכז ידע הנדסי ומדריכים טכניים | STRUCTIVA®",
      description: "מדריכים לתכנון מבני תעשייה, השוואת PEB מול פלדה קונבנציונלית והכנת מפרטי מכרז RFQ.",
      keywords: "מדריך תכנון מבנה פלדה, השוואת PEB מול קונסטרוקציה רגילה, הכנת בקשה להצעת מחיר RFQ",
      h1: "מרכז ידע ומדריכי הנדסה"
    },
    about: {
      title: "אודות STRUCTIVA — מפעלי הייצור באדנה | STRUCTIVA®",
      description: "כושר ייצור של 25,000 טון בשנה באדנה, טורקיה, במרחק 15 ק\"מ מנמל המכולות של מרסין.",
      keywords: "מפעל קונסטרוקציית פלדה אדנה, יצרן האנגרים מפלדה ליצוא, שילוח ימי מנמל מרסין",
      h1: "מפעלי אדנה ומורשת הנדסית"
    },
    contact: {
      title: "יצירת קשר ומחלקת יצוא בינלאומית | STRUCTIVA®",
      description: "צרו קשר ישיר עם מהנדסי המבנים שלנו וקבלו בדיקת היתכנות והצעת מחיר תוך 24 שעות.",
      keywords: "יצירת קשר STRUCTIVA, מחלקת יצוא מבני פלדה, ייעוץ הנדסי האנגרים",
      h1: "דסק יצוא עולמי ויצירת קשר"
    },
    rfq: {
      title: "בקשה להצעת מחיר טכנית (RFQ) תוך 24 שעות | STRUCTIVA®",
      description: "שלחו את מידות הפרויקט לקבלת חישוב סטטי ראשוני, כתב כמויות (BOM) והצעת מחיר FOB/CIF.",
      keywords: "הצעת מחיר להאנגר פלדה, טופס RFQ למבנה תעשייה, מחיר מבנה פלדה בהובלה ימית",
      h1: "בקשה רשמית להצעת מחיר (RFQ)"
    }
  },

  zh: {
    home: {
      title: "无立柱拱形钢结构与机库制造 | STRUCTIVA® 土耳其阿达纳",
      description: "土耳其阿达纳工厂专业制造EN 1090-2 EXC4认证的9米至45米无柱净跨拱形钢结构机库与重工业厂房。距梅尔辛深水港仅15公里，直接出口至50多个国家。",
      keywords: "无立柱拱形钢结构, 预制钢结构建筑 PEB, 飞机机库制造, 大跨度无柱钢结构仓库, 镀铝锌钢板 Galvalume Plus AZ180, 集装箱顶棚, 土耳其钢结构工厂, EN 1090-2 EXC4认证",
      h1: "无立柱拱形钢结构与重工业机库制造"
    },
    models: {
      title: "拱形与预制轻钢结构建筑型号 | STRUCTIVA®",
      description: "Q系列全拱、S系列直墙拱顶、P系列人字屋脊及集装箱顶棚。净跨9至45米，经抗240公里/小时飓风风压验算。",
      keywords: "拱形钢结构型号, Q系列全拱机库, S系列直立侧墙仓库, 集装箱拱形顶棚, 重型PEB门式刚架厂房",
      h1: "预制工程钢结构建筑系列"
    },
    sectors: {
      title: "工业行业应用与大宗散料仓储 | STRUCTIVA®",
      description: "适用于农业粮食仓储、矿业堆场封闭、航空维修机库及大型现代化物流仓储中转中心。",
      keywords: "粮食散料钢结构平房仓, 航空飞机维修机库, 矿山堆场封闭大棚, 现代物流立体仓库钢结构",
      h1: "多行业专用钢结构方案"
    },
    engineering: {
      title: "结构工程标准与欧洲规范Eurocode 3 | STRUCTIVA®",
      description: "EN 1090-2 EXC4最高制造等级、CE认证、AISC 360-16标准及ASTM A792 Galvalume Plus® AZ180超耐蚀镀铝锌合金。",
      keywords: "EN 1090-2 EXC4钢结构欧盟认证, Eurocode 3欧洲规范计算, 美标AISC 360-16, Galvalume Plus AZ180耐腐蚀铝锌钢板",
      h1: "高精度结构钢工程标准"
    },
    configurator: {
      title: "3D交互式钢结构参数化配置器 | STRUCTIVA®",
      description: "实时调整跨度、长度与脊高，即时预览3D模型并计算40尺高柜海运装柜量与技术参数表。",
      keywords: "3D钢结构建筑配置器, 在线机库尺寸计算器, 40HC海运集装箱装柜量测算",
      h1: "3D参数化建筑配置器"
    },
    projects: {
      title: "全球工程业绩与国际案例研究 | STRUCTIVA®",
      description: "在欧洲、中东、非洲及中亚50多个国家成功交付超过50万平方米无立柱钢结构项目。",
      keywords: "国际钢结构工程案例, 海外EPC总包钢结构供货业绩, 欧洲中东非洲钢结构项目参考",
      h1: "赋能全球经济的钢结构工程"
    },
    knowledge: {
      title: "钢结构工程技术知识中心与设计指南 | STRUCTIVA®",
      description: "工业钢结构规划指南、预制钢结构(PEB)与传统焊接型钢对比白皮书及国际采购规范。",
      keywords: "工业钢结构规划指南, PEB预制钢结构与传统型钢对比, 国际钢结构询价单RFQ编制指南",
      h1: "技术知识中心与设计手册"
    },
    about: {
      title: "关于STRUCTIVA — 阿达纳智造基地 | STRUCTIVA®",
      description: "年产25,000吨高精度结构钢，阿达纳自动化工厂依托梅尔辛港提供全球海运快速直达服务。",
      keywords: "土耳其STRUCTIVA钢结构制造基地, 阿达纳工业区钢构厂, 年产25000吨钢结构出口商",
      h1: "阿达纳现代化制造基地与工程底蕴"
    },
    contact: {
      title: "联系我们 & 全球出口工程部 | STRUCTIVA®",
      description: "直接对接阿达纳结构工程师与外贸团队，24小时内获取受力分析复核与正式报价函。",
      keywords: "联系STRUCTIVA钢结构, 土耳其钢结构出口部电话邮箱, 结构工程技术咨询",
      h1: "全球出口贸易与工程咨询部"
    },
    rfq: {
      title: "24小时官方技术方案与报价申请(RFQ) | STRUCTIVA®",
      description: "提交建筑尺寸及建设地风雪荷载要求，24小时内获得完整物料清单(BOM)及FOB/CIF离岸到港报价。",
      keywords: "钢结构厂房在线询价RFQ, 无柱机库FOB梅尔辛港CIF报价, 24小时工程物料清单BOM",
      h1: "官方项目询价申请 (RFQ)"
    }
  },

  ja: {
    home: {
      title: "無柱アーチ型鉄骨造・大型格納庫製造 | STRUCTIVA® トルコ・アダナ",
      description: "アダナ工場にてEN 1090-2 EXC4認証の9m〜45m無柱スパンアーチ型鉄骨格納庫・倉庫を製造。メルシン国際コンテナ港から世界50カ国以上へ直送。",
      keywords: "無柱アーチ型鉄骨建築, システム建築 PEB, 航空機格納庫 製造, 大空間鉄骨倉庫, ガルバリウム鋼板 AZ180, コンテナキャノピー, EN 1090-2 EXC4",
      h1: "無柱アーチ型鉄骨建造物＆大型産業用ハンガー"
    },
    models: {
      title: "アーチ型＆システム建築鉄骨モデル | STRUCTIVA®",
      description: "Qシリーズ（完全アーチ）、Sシリーズ（直壁アーチ）、Pシリーズ（切妻）。風速240km/hに耐える高強度設計。",
      keywords: "アーチ型鉄骨モデル, Qシリーズ格納庫, Sシリーズ直壁倉庫, コンテナ屋根トラス, PEBシステム建築",
      h1: "設計済エンジニアリング鉄骨モデル"
    },
    sectors: {
      title: "産業分野別ソリューション＆大型倉庫 | STRUCTIVA®",
      description: "農業用穀物倉庫、鉱山資材置場、航空機ハンガー、物流ハブ向けの内部無柱大空間。",
      keywords: "穀物貯蔵鉄骨倉庫, 航空機・ヘリコプター格納庫, 鉱業ストックパイル上屋, 大型物流倉庫",
      h1: "産業分野別クリアスパン構造"
    },
    engineering: {
      title: "構造工学基準・ユーロコード3適合 | STRUCTIVA®",
      description: "EN 1090-2 EXC4、CEマーク、AISC 360-16、ASTM A792 Galvalume Plus® AZ180高耐食性合金鋼材。",
      keywords: "EN 1090-2 EXC4認証, ユーロコード3構造計算, AISC 360-16基準, ガルバリウムプラスAZ180耐食鋼板",
      h1: "ゼロトレランス構造エンジニアリング"
    },
    configurator: {
      title: "3D鉄骨建築コンフィギュレーター | STRUCTIVA®",
      description: "幅・長さ・高さを3Dで直感操作し、床面積、有効容積、40HC海上コンテナ積載数を即座に算出。",
      keywords: "3D鉄骨建築シミュレーター, 格納庫サイズ計算, 40HCコンテナ輸送計算ツール",
      h1: "3Dパラメトリック設計ツール"
    },
    projects: {
      title: "世界50カ国以上の納入実績・施工事例 | STRUCTIVA®",
      description: "過酷な砂漠気候から豪雪地帯まで、世界各地で稼働する50万m²以上の施工実績。",
      keywords: "海外鉄骨建築プロジェクト実績, アーチ型格納庫施工事例, グローバルEPC調達実績",
      h1: "世界経済を支える鉄骨建造物"
    },
    knowledge: {
      title: "鉄骨エンジニアリング技術ナレッジハブ | STRUCTIVA®",
      description: "産業用建物の計画指針、PEBと従来工法の比較、海外調達RFQ仕様書の作成ガイド。",
      keywords: "鉄骨倉庫計画ガイド, PEBシステム建築と在来鉄骨の比較, 国際調達RFQ作成マニュアル",
      h1: "技術ナレッジハブ＆技術ホワイトペーパー"
    },
    about: {
      title: "STRUCTIVAについて — アダナ製造拠点 | STRUCTIVA®",
      description: "年間25,000トンの加工能力を誇るアダナ最新鋭工場とエンジニアリングの歴史。",
      keywords: "STRUCTIVAトルコ・アダナ工場, 年間25000トン鉄骨製造, メルシン港コンテナ輸出",
      h1: "アダナ製造施設とエンジニアリングの歩み"
    },
    contact: {
      title: "お問い合わせ＆グローバル輸出窓口 | STRUCTIVA®",
      description: "アダナ本社の構造エンジニアに直接相談可能。24時間以内に予備構造計算と見積もりを提供。",
      keywords: "STRUCTIVAお問い合わせ, 海外鉄骨調達窓口, 構造設計エンジニア相談",
      h1: "グローバル輸出デスク＆お問い合わせ"
    },
    rfq: {
      title: "24時間正式技術見積依頼 (RFQ) | STRUCTIVA®",
      description: "プロジェクト寸法と建設地条件を入力するだけで、24時間以内に資材明細(BOM)とFOB/CIF見積書を発行。",
      keywords: "鉄骨建築見積依頼RFQ, 格納庫価格FOB/CIF見積り, 24時間BOM算出",
      h1: "正式見積依頼フォーム (RFQ)"
    }
  },

  ko: {
    home: {
      title: "무주 아치형 강구조 건물 및 대형 격납고 제조 | STRUCTIVA® 아다나",
      description: "EN 1090-2 EXC4 인증을 받은 9m~45m 무주(기둥 없는) 아치형 철골 격납고 및 산업용 건물 제조업체. 메르신 국제 컨테이너항에서 15km 거리, 50개국 이상 직수출.",
      keywords: "무주 아치형 강구조 건물, 시스템 건축 PEB, 항공기 격납고 제작, 대공간 철골 창고, 갈바륨 강판 AZ180, 컨테이너 캐노피, EN 1090-2 EXC4 인증, 터키 철골 공장",
      h1: "무주 아치형 철골 구조물 및 대형 산업용 격납고"
    },
    models: {
      title: "아치형 및 사전 엔지니어링 철골 건물(PEB) 모델 | STRUCTIVA®",
      description: "Q-시리즈, S-시리즈, P-시리즈, 컨테이너 캐노피 및 대형 PEB 산업용 건물. 9m~45m 무주 스팬 및 240km/h 내풍 설계.",
      keywords: "아치형 철골 건물 모델, Q-시리즈 완전 아치, S-시리즈 직벽형 창고, 컨테이너 지붕 트러스, 대형 PEB 공장",
      h1: "엔지니어링 무주 철골 건물 모델"
    },
    sectors: {
      title: "산업 분야별 솔루션 및 대량 벌크 보관 창고 | STRUCTIVA®",
      description: "농업용 곡물 창고, 광산 야적장, 항공기 MRO 격납고, 물류 센터 및 중공업 플랜트를 위한 기둥 없는 철골 솔루션.",
      keywords: "농업용 곡물 저장 창고, 항공기 및 헬리콥터 격납고, 광산 벌크 보관 시설, 대형 물류 창고 철골",
      h1: "산업 분야별 맞춤형 철골 솔루션"
    },
    engineering: {
      title: "구조 엔지니어링 표준 및 유로코드 3 품질 인증 | STRUCTIVA®",
      description: "EN 1090-2 EXC4, CE 마크, AISC 360-16 및 Galvalume Plus® AZ180 합금 강판으로 구현한 내풍·내진 설계.",
      keywords: "EN 1090-2 EXC4 인증, 유로코드 3 및 AISC 360-16 구조 계산, 갈바륨 플러스 AZ180 부식 방지 강판",
      h1: "무결점 정밀 구조 엔지니어링"
    },
    configurator: {
      title: "3D 인터랙티브 철골 건물 컨피규레이터 | STRUCTIVA®",
      description: "폭, 길이, 높이를 설정하여 실시간 바닥 면적, 용적 및 40HC 해상 컨테이너 선적 수량을 3D로 시뮬레이션하세요.",
      keywords: "3D 철골 건물 설계 시뮬레이터, 격납고 면적 및 용적 계산기, 40HC 컨테이너 물류 계산",
      h1: "파라메트릭 3D 건물 컨피규레이터"
    },
    projects: {
      title: "글로벌 시공 실적 및 해외 프로젝트 사례 | STRUCTIVA®",
      description: "유럽, 중동, 아프리카, 중앙아시아 등 전 세계 50개국 이상에 납품된 50만m² 이상의 무주 철골 프로젝트.",
      keywords: "해외 철골 건물 시공 실적, 글로벌 EPC 플랜트 건축 사례, 아치형 격납고 납품 레퍼런스",
      h1: "세계 경제를 움직이는 강구조물"
    },
    knowledge: {
      title: "철골 엔지니어링 기술 지식 센터 및 백서 | STRUCTIVA®",
      description: "산업용 철골 건물 계획 가이드, PEB 대 일반 철골 비교 분석 및 국제 입찰 사양서(RFQ) 작성 지침.",
      keywords: "산업용 철골 창고 계획 가이드, PEB 시스템 대 일반 철골 비교, 해외 철골 구매 RFQ 작성법",
      h1: "기술 지식 허브 및 엔지니어링 가이드"
    },
    about: {
      title: "STRUCTIVA 소개 — 아다나 통합 제조 단지 | STRUCTIVA®",
      description: "연간 25,000톤 생산 능력을 갖춘 튀르키예 아다나 자동화 철골 제작 공장 및 글로벌 해상 물류 허브.",
      keywords: "STRUCTIVA 튀르키예 아다나 공장, 연간 25000톤 철골 생산, 메르신항 플랫팩 수출",
      h1: "아다나 제조 시설 및 엔지니어링 헤리티지"
    },
    contact: {
      title: "문의하기 및 글로벌 수출 엔지니어링 데스크 | STRUCTIVA®",
      description: "아다나 구조 엔지니어 및 해외 영업팀에 직접 문의하세요. 24시간 이내 구조 검토 및 공식 견적서 제공.",
      keywords: "STRUCTIVA 문의처, 해외 철골 수출 상담, 구조 엔지니어링 기술 지원",
      h1: "글로벌 수출 데스크 및 문의"
    },
    rfq: {
      title: "24시간 공식 기술 견적 요청 (RFQ) | STRUCTIVA®",
      description: "건물 치수 및 현장 조건을 입력하여 24시간 내에 구조 타당성 검토, 자재 명세서(BOM) 및 FOB/CIF 견적을 받아보세요.",
      keywords: "철골 건물 견적 요청 RFQ, 무주 격납고 FOB/CIF 가격 견적, 24시간 자재 명세서 BOM 산출",
      h1: "공식 프로젝트 기술 견적 요청 (RFQ)"
    }
  },

  hi: {
    home: {
      title: "बिना खंभों वाले मेहराबदार स्टील हैंगर व औद्योगिक भवन | STRUCTIVA®",
      description: "अदाना, तुर्की स्थित कारखाने में EN 1090-2 EXC4 प्रमाणित 9m से 45m तक क्लियर-स्पैन स्टील हैंगर का निर्माण। 50+ देशों में सीधा निर्यात।",
      keywords: "कॉलम-मुक्त आर्च स्टील बिल्डिंग, प्री-इंजीनियर्ड स्टील भवन PEB, एयरक्राफ्ट हैंगर निर्माता, औद्योगिक स्टील गोदाम, अनाज भंडारण शेड, Galvalume Plus AZ180, कंटेनर कैनोपी",
      h1: "कॉलम-मुक्त आर्च स्टील बिल्डिंग और औद्योगिक हैंगर"
    },
    models: {
      title: "आर्च और प्री-इंजीनियर्ड स्टील बिल्डिंग मॉडल | STRUCTIVA®",
      description: "Q-सीरीज़, S-सीरीज़, P-सीरीज़ और कंटेनर शेल्टर। बिना आंतरिक खंभों के 45m तक चौड़ाई और 240 किमी/घंटा हवा प्रतिरोध।",
      keywords: "स्टील बिल्डिंग मॉडल, Q-सीरीज़ आर्च हैंगर, S-सीरीज़ गोदाम, कंटेनर कैनोपी रूफ, PEB इंडस्ट्रियल शेड",
      h1: "इंजीनियर्ड स्टील बिल्डिंग मॉडल"
    },
    sectors: {
      title: "कृषि, उड्डयन, खनन और रसद के लिए स्टील समाधान | STRUCTIVA®",
      description: "अनाज भंडारण, विमान हैंगर, खनन स्टॉकपाइल और बड़े वेयरहाउस के लिए बाधा रहित आंतरिक स्थान।",
      keywords: "कृषि अनाज भंडारण गोदाम, विमान और हेलीकॉप्टर हैंगर, खनन भंडारण शेड, लॉजिस्टिक्स वेयरहाउस",
      h1: "औद्योगिक क्षेत्र समाधान"
    },
    engineering: {
      title: "संरचनात्मक इंजीनियरिंग मानक व यूरोकोड 3 | STRUCTIVA®",
      description: "EN 1090-2 EXC4, CE मार्क, AISC 360-16 और गैलवाल्यूम प्लस® AZ180 मिश्र धातु द्वारा दीर्घकालिक संक्षारण संरक्षण।",
      keywords: "EN 1090-2 EXC4 प्रमाणन, यूरोकोड 3 और AISC 360-16 डिज़ाइन, गैलवाल्यूम प्लस AZ180 जंग रोधी स्टील",
      h1: "सटीक संरचनात्मक इंजीनियरिंग"
    },
    configurator: {
      title: "3D स्टील बिल्डिंग विन्यासकर्ता | STRUCTIVA®",
      description: "3D मॉडल में भवन की चौड़ाई, लंबाई व ऊंचाई दर्ज करें और 40HC समुद्री कंटेनर की सटीक संख्या जानें।",
      keywords: "3D स्टील बिल्डिंग कैलकुलेटर, गोदाम आकार गणना, 40HC कंटेनर शिपिंग अनुमान",
      h1: "पैरामीट्रिक 3D विन्यासकर्ता"
    },
    projects: {
      title: "अंतर्राष्ट्रीय परियोजनाएं और वैश्विक संदर्भ | STRUCTIVA®",
      description: "दुनिया भर के 50 से अधिक देशों में 500,000 वर्ग मीटर से अधिक स्थापित स्टील संरचनाएं।",
      keywords: "अंतर्राष्ट्रीय स्टील भवन परियोजनाएं, पूर्ण किए गए हैंगर और वेयरहाउस, STRUCTIVA वैश्विक पोर्टफोलियो",
      h1: "अर्थव्यवस्था को गति देने वाली संरचनाएं"
    },
    knowledge: {
      title: "स्टील इंजीनियरिंग तकनीकी ज्ञान केंद्र | STRUCTIVA®",
      description: "औद्योगिक भवनों की योजना, पीईबी बनाम पारंपरिक स्टील तुलना और अंतर्राष्ट्रीय खरीद गाइड।",
      keywords: "स्टील गोदाम योजना गाइड, PEB बनाम पारंपरिक स्टील, RFQ निविदा कैसे तैयार करें",
      h1: "तकनीकी ज्ञान केंद्र और श्वेतपत्र"
    },
    about: {
      title: "STRUCTIVA के बारे में — अदाना विनिर्माण संयंत्र | STRUCTIVA®",
      description: "तुर्की के अदाना में वार्षिक 25,000 मीट्रिक टन निर्माण क्षमता और मर्सिन बंदरगाह से त्वरित समुद्री रसद।",
      keywords: "STRUCTIVA अदाना स्टील फैक्ट्री, तुर्की स्टील स्ट्रक्चर निर्यातक, 25000 टन वार्षिक क्षमता",
      h1: "अदाना सुविधाएं और इंजीनियरिंग विरासत"
    },
    contact: {
      title: "संपर्क और वैश्विक निर्यात विभाग | STRUCTIVA®",
      description: "अदाना इंजीनियरों से सीधे संपर्क करें और 24 घंटे के भीतर तकनीकी प्रस्ताव प्राप्त करें।",
      keywords: "STRUCTIVA संपर्क, अंतर्राष्ट्रीय स्टील निर्यात डेस्क, स्ट्रक्चरल इंजीनियरिंग परामर्श",
      h1: "वैश्विक निर्यात और संपर्क डेस्क"
    },
    rfq: {
      title: "24 घंटे में आधिकारिक मूल्य उद्धरण (RFQ) प्राप्त करें | STRUCTIVA®",
      description: "परियोजना का आकार बताएं और 24 घंटे में सामग्री बिल (BOM) तथा FOB/CIF मूल्य उद्धरण पाएं।",
      keywords: "स्टील हैंगर कोटेशन प्राप्त करें, पीईबी भवन मूल्य RFQ, FOB मर्सिन CIF मुंबई मुंद्रा पोर्ट शिपिंग",
      h1: "आधिकारिक परियोजना उद्धरण अनुरोध (RFQ)"
    }
  },

  id: {
    home: {
      title: "Gudang Baja Lengkung Tanpa Kolom & Pabrik Hanggar | STRUCTIVA®",
      description: "Produsen hanggar dan gudang baja lengkung tanpa kolom tengah (9m-45m) bersertifikat EN 1090-2 EXC4 di Adana, Turki. Ekspor langsung ke 50+ negara.",
      keywords: "gudang baja lengkung tanpa kolom, konstruksi baja PEB, hanggar pesawat baja, kanopi kontainer, pabrik baja Turki, Galvalume Plus AZ180, gudang pertanian",
      h1: "Bangunan Baja Lengkung Tanpa Kolom & Hanggar Industri"
    },
    models: {
      title: "Model Gudang Baja Lengkung & Gedung PEB | STRUCTIVA®",
      description: "Q-Series, S-Series, P-Series, Kanopi Kontainer, dan Gedung Baja Berat PEB. Bentang bebas 9m hingga 45m tahan angin 240 km/jam.",
      keywords: "model gudang baja, Q-Series hanggar lengkung, S-Series dinding tegak, kanopi atas kontainer, gedung pabrik PEB",
      h1: "Model Rekayasa Struktur Baja"
    },
    sectors: {
      title: "Solusi Sektor Industri & Penyimpanan Curah | STRUCTIVA®",
      description: "Struktur baja bentang bebas untuk pertanian, pertambangan, hanggar penerbangan, dan pusat distribusi logistik.",
      keywords: "gudang penyimpanan gabah dan pupuk, hanggar pesawat dan helikopter, penutup stockpile tambang, gudang logistik",
      h1: "Solusi Sektor Industri"
    },
    engineering: {
      title: "Standar Rekayasa Struktur Baja & Eurocode 3 | STRUCTIVA®",
      description: "Sertifikasi EN 1090-2 EXC4, tanda CE, AISC 360-16, dan baja lapis Galvalume Plus® AZ180 tahan korosi.",
      keywords: "sertifikasi EN 1090-2 EXC4, standar Eurocode 3 dan AISC 360-16, baja anti karat Galvalume Plus AZ180",
      h1: "Rekayasa Struktur Baja Presisi Tinggi"
    },
    configurator: {
      title: "Konfigurator Bangunan Baja 3D Interaktif | STRUCTIVA®",
      description: "Tentukan lebar, panjang, dan tinggi dalam 3D untuk menghitung luas lantai, volume, dan jumlah kontainer 40HC.",
      keywords: "konfigurator 3D gudang baja, kalkulator ukuran hanggar, estimasi pengiriman kontainer 40HC",
      h1: "Konfigurator Bangunan 3D Parametrik"
    },
    projects: {
      title: "Studi Kasus & Proyek Konstruksi Baja Internasional | STRUCTIVA®",
      description: "Lebih dari 500.000 m² hanggar dan gudang baja terpasang di lebih dari 50 negara di seluruh dunia.",
      keywords: "proyek gudang baja internasional, referensi hanggar baja, portofolio proyek STRUCTIVA",
      h1: "Struktur Baja Penggerak Ekonomi"
    },
    knowledge: {
      title: "Pusat Pengetahuan Teknik & Panduan Struktur Baja | STRUCTIVA®",
      description: "Panduan perencanaan gudang industri, perbandingan PEB vs baja konvensional, dan penyusunan dokumen RFQ.",
      keywords: "panduan perencanaan gudang baja, perbandingan PEB vs baja konvensional, cara menyusun RFQ konstruksi baja",
      h1: "Pusat Pengetahuan Teknik"
    },
    about: {
      title: "Tentang STRUCTIVA — Fasilitas Pabrik Adana | STRUCTIVA®",
      description: "Kapasitas fabrikasi 25.000 metrik ton per tahun di Adana, Turki, 15 km dari Pelabuhan Internasional Mersin.",
      keywords: "pabrik struktur baja Adana Turki, eksportir hanggar baja dunia, kapasitas 25000 ton per tahun",
      h1: "Fasilitas Produksi Adana & Warisan Rekayasa"
    },
    contact: {
      title: "Kontak & Meja Ekspor Internasional | STRUCTIVA®",
      description: "Hubungi langsung insinyur struktur kami di Adana dan dapatkan penawaran resmi dalam 24 jam.",
      keywords: "kontak STRUCTIVA Turki, divisi ekspor gudang baja, konsultasi teknik struktur baja",
      h1: "Meja Ekspor Global & Kontak"
    },
    rfq: {
      title: "Permintaan Penawaran Harga Teknis (RFQ) 24 Jam | STRUCTIVA®",
      description: "Kirimkan spesifikasi dimensi proyek Anda untuk studi kelayakan statis, daftar material (BOM), dan harga FOB/CIF.",
      keywords: "minta penawaran harga gudang baja, formulir RFQ hanggar baja, harga pengiriman CIF Jakarta Surabaya Belawan",
      h1: "Permintaan Penawaran Proyek Resmi (RFQ)"
    }
  },

  ms: {
    home: {
      title: "Bangunan Keluli Gerbang Tanpa Tiang & Pembuatan Hangar | STRUCTIVA®",
      description: "Pengilang hangar dan gudang keluli gerbang tanpa tiang dalaman (9m-45m) diperakui EN 1090-2 EXC4 di Adana, Turkiye. Eksport terus ke 50+ negara.",
      keywords: "bangunan keluli gerbang tanpa tiang, struktur keluli pra-kejuruteraan PEB, hangar pesawat, gudang industri keluli, kanopi kontena, Galvalume Plus AZ180",
      h1: "Bangunan Keluli Gerbang Tanpa Tiang & Hangar Industri"
    },
    models: {
      title: "Model Bangunan Keluli Gerbang & PEB | STRUCTIVA®",
      description: "Siri Q, Siri S, Siri P, Kanopi Kontena dan Bangunan PEB Berat. Rentang bebas 9m hingga 45m tahan angin 240 km/j.",
      keywords: "model gudang keluli, Siri Q hangar gerbang, Siri S dinding tegak, bumbung kanopi kontena, bangunan kilang PEB",
      h1: "Model Kejuruteraan Struktur Keluli"
    },
    sectors: {
      title: "Aplikasi Sektor Industri & Penyimpanan Pukal | STRUCTIVA®",
      description: "Struktur keluli rentang bebas untuk pertanian, perlombongan, hangar penerbangan dan hab logistik.",
      keywords: "gudang penyimpanan bijirin pertanian, hangar penyelenggaraan pesawat, bumbung stok lombong, gudang logistik",
      h1: "Penyelesaian Mengikut Sektor Industri"
    },
    engineering: {
      title: "Piawaian Kejuruteraan Struktur & Eurocode 3 | STRUCTIVA®",
      description: "Pensijilan EN 1090-2 EXC4, tanda CE, AISC 360-16 dan aloi Galvalume Plus® AZ180 tahan kakisan.",
      keywords: "pensijilan EN 1090-2 EXC4, reka bentuk struktur Eurocode 3, keluli tahan karat Galvalume Plus AZ180",
      h1: "Kejuruteraan Struktur Keluli Berketepatan Tinggi"
    },
    configurator: {
      title: "Konfigurator Bangunan Keluli 3D Interaktif | STRUCTIVA®",
      description: "Tetapkan lebar, panjang dan tinggi dalam 3D untuk mengira keluasan lantai, isipadu dan bilangan kontena 40HC.",
      keywords: "konfigurator 3D bangunan keluli, kalkulator saiz gudang, anggaran penghantaran kontena 40HC",
      h1: "Konfigurator Bangunan 3D Parametrik"
    },
    projects: {
      title: "Kajian Kes & Projek Bangunan Keluli Antarabangsa | STRUCTIVA®",
      description: "Lebih 500,000 m² struktur keluli dan hangar siap dibina di lebih 50 negara di seluruh dunia.",
      keywords: "projek bangunan keluli antarabangsa, rujukan hangar keluli, portfolio global STRUCTIVA",
      h1: "Struktur Yang Menggerakkan Ekonomi"
    },
    knowledge: {
      title: "Pusat Pengetahuan Kejuruteraan & Panduan Teknikal | STRUCTIVA®",
      description: "Panduan perancangan bangunan keluli industri, perbandingan PEB dan penyediaan dokumen sebut harga RFQ.",
      keywords: "panduan perancangan gudang keluli, perbandingan PEB vs keluli konvensional, cara menyediakan RFQ",
      h1: "Hab Pengetahuan Teknikal"
    },
    about: {
      title: "Mengenai STRUCTIVA — Kompleks Kilang Adana | STRUCTIVA®",
      description: "Kapasiti fabrikasi 25,000 tan metrik setahun di Adana, Turkiye, 15 km dari Pelabuhan Kontena Antarabangsa Mersin.",
      keywords: "kilang struktur keluli Adana Turkiye, pengeksport hangar keluli, kapasiti 25000 tan setahun",
      h1: "Kemudahan Adana & Warisan Kejuruteraan"
    },
    contact: {
      title: "Hubungi Kami & Meja Eksport Antarabangsa | STRUCTIVA®",
      description: "Berhubung terus dengan jurutera struktur kami di Adana untuk sebut harga rasmi dalam masa 24 jam.",
      keywords: "hubungi STRUCTIVA Turkiye, bahagian eksport bangunan keluli, perundingan kejuruteraan struktur",
      h1: "Meja Eksport Global & Hubungi"
    },
    rfq: {
      title: "Permintaan Sebut Harga Teknikal (RFQ) Dalam 24 Jam | STRUCTIVA®",
      description: "Hantar spesifikasi dimensi projek anda untuk semakan kebolehlaksanaan statik, BOM dan harga FOB/CIF.",
      keywords: "mohon sebut harga gudang keluli, borang RFQ hangar keluli, harga penghantaran CIF Port Klang Tanjung Pelepas",
      h1: "Permintaan Sebut Harga Projek Rasmi (RFQ)"
    }
  },

  vi: {
    home: {
      title: "Nhà Thép Vòm Không Cột & Chế Tạo Nhà Chứa Máy Bay | STRUCTIVA®",
      description: "Nhà sản xuất nhà thép vòm không cột giữa (9m-45m) đạt chuẩn EN 1090-2 EXC4 tại Adana, Thổ Nhĩ Kỳ. Xuất khẩu trực tiếp tới hơn 50 quốc gia qua Cảng Mersin.",
      keywords: "nhà thép vòm không cột, nhà thép tiền chế PEB, nhà chứa máy bay, kho nông sản kết cấu thép, mái che container, thép Galvalume Plus AZ180, EN 1090-2 EXC4",
      h1: "Nhà Thép Vòm Không Cột & Nhà Xưởng Công Nghiệp Nặng"
    },
    models: {
      title: "Các Mẫu Nhà Thép Vòm & Nhà Thép Tiền Chế PEB | STRUCTIVA®",
      description: "Dòng Q-Series, S-Series, P-Series, Mái che Container và Nhà công nghiệp nặng PEB. Nhịp свободный 9m-45m chịu bão 240 km/h.",
      keywords: "mẫu nhà thép tiền chế, nhà vòm Q-Series, nhà kho tường thẳng S-Series, mái vòm trên container, nhà xưởng PEB",
      h1: "Các Dòng Kết Cấu Thép Kỹ Thuật Cao"
    },
    sectors: {
      title: "Giải Pháp Công Nghiệp & Kho Chứa Hàng Rời | STRUCTIVA®",
      description: "Kết cấu thép không cột cho nông nghiệp, kho chứa ngũ cốc, hangar hàng không, khai khoáng và trung tâm logistics.",
      keywords: "kho chứa lúa mì ngũ cốc bằng thép, nhà chứa máy bay hangar, mái che bãi than khoáng sản, nhà kho logistics",
      h1: "Giải Pháp Theo Ngành Công Nghiệp"
    },
    engineering: {
      title: "Tiêu Chuẩn Kỹ Thuật Kết Cấu & Eurocode 3 | STRUCTIVA®",
      description: "Chứng nhận EN 1090-2 EXC4, dấu CE, tiêu chuẩn AISC 360-16 và hợp kim thép Galvalume Plus® AZ180 chống ăn mòn.",
      keywords: "chứng chỉ EN 1090-2 EXC4, thiết kế kết cấu thép Eurocode 3 và AISC 360-16, tôn hợp kim nhôm kẽm Galvalume Plus AZ180",
      h1: "Kỹ Thuật Kết Cấu Thép Chính Xác Tuyệt Đối"
    },
    configurator: {
      title: "Công Cụ Thiết Kế Nhà Thép 3D Trực Tuyến | STRUCTIVA®",
      description: "Tùy chỉnh khẩu độ, chiều dài và chiều cao trong 3D để tính diện tích, thể tích và số lượng container 40HC.",
      keywords: "cấu hình 3D nhà thép tiền chế, tính toán kích thước nhà xưởng, ước tính vận chuyển container 40HC",
      h1: "Trình Cấu Hình 3D Tham Số"
    },
    projects: {
      title: "Dự Án Quốc Tế & Công Trình Tiêu Biểu | STRUCTIVA®",
      description: "Hơn 500.000 m² nhà thép vòm và nhà xưởng công nghiệp đã bàn giao tại hơn 50 quốc gia trên thế giới.",
      keywords: "dự án kết cấu thép quốc tế, công trình nhà thép vòm tiêu biểu, hồ sơ năng lực STRUCTIVA",
      h1: "Những Công Trình Thúc Đẩy Nền Kinh Tế"
    },
    knowledge: {
      title: "Trung Tâm Kiến Thức Kỹ Thuật & Cẩm Nang Kết Cấu Thép | STRUCTIVA®",
      description: "Hướng dẫn quy hoạch nhà xưởng công nghiệp, so sánh PEB với thép truyền thống và cách lập hồ sơ mời thầu RFQ.",
      keywords: "cẩm nang thiết kế nhà xưởng thép, so sánh nhà thép tiền chế PEB, hướng dẫn chuẩn bị hồ sơ RFQ",
      h1: "Trung Tâm Kiến Thức Kỹ Thuật"
    },
    about: {
      title: "Về STRUCTIVA — Tổ Hợp Nhà Máy Tại Adana | STRUCTIVA®",
      description: "Công suất 25.000 tấn/năm tại Khu công nghiệp Adana, Thổ Nhĩ Kỳ, cách Cảng nước sâu Mersin 15 km.",
      keywords: "nhà máy kết cấu thép Adana Thổ Nhĩ Kỳ, xuất khẩu nhà thép tiền chế, công suất 25000 tấn năm",
      h1: "Nhà Máy Sản Xuất Adana & Di Sản Kỹ Thuật"
    },
    contact: {
      title: "Liên Hệ & Phòng Xuất Khẩu Quốc Tế | STRUCTIVA®",
      description: "Kết nối trực tiếp với kỹ sư kết cấu tại Adana để nhận thẩm tra sơ bộ và báo giá chính thức trong 24 giờ.",
      keywords: "liên hệ STRUCTIVA Thổ Nhĩ Kỳ, phòng xuất khẩu kết cấu thép, tư vấn kỹ thuật nhà xưởng",
      h1: "Phòng Xuất Khẩu Toàn Cầu & Liên Hệ"
    },
    rfq: {
      title: "Yêu Cầu Báo Giá Kỹ Thuật (RFQ) Trong 24 Giờ | STRUCTIVA®",
      description: "Gửi kích thước dự án để nhận tính toán kết cấu sơ bộ, bảng tiên lượng vật tư (BOM) và giá FOB/CIF.",
      keywords: "báo giá nhà thép tiền chế, mẫu RFQ nhà thép vòm, giá CIF Hải Phòng Cát Lái Đà Nẵng",
      h1: "Yêu Cầu Báo Giá Dự Án Chính Thức (RFQ)"
    }
  },

  th: {
    home: {
      title: "โครงสร้างเหล็กทรงโค้งไร้เสากลาง & โรงเก็บเครื่องบิน | STRUCTIVA®",
      description: "ผู้ผลิตอาคารเหล็กทรงโค้งไร้เสากลาง (9m-45m) มาตรฐาน EN 1090-2 EXC4 จากโรงงานอาดานา ตุรกี ส่งออกกว่า 50 ประเทศผ่านท่าเรือเมอร์ซิน",
      keywords: "โครงสร้างเหล็กทรงโค้งไร้เสากลาง, อาคารเหล็กสำเร็จรูป PEB, โรงเก็บเครื่องบิน, โกดังเก็บสินค้าเกษตร, หลังคาคลุมตู้คอนเทนเนอร์, Galvalume Plus AZ180",
      h1: "อาคารเหล็กทรงโค้งไร้เสากลางและโรงงานอุตสาหกรรมหนัก"
    },
    models: {
      title: "รุ่นอาคารเหล็กทรงโค้งและอาคารสำเร็จรูป PEB | STRUCTIVA®",
      description: "Q-Series, S-Series, P-Series, หลังคาตู้คอนเทนเนอร์ และอาคาร PEB ช่วงกว้างไร้เสา 9-45 เมตร ทนแรงลม 240 กม./ชม.",
      keywords: "รุ่นอาคารเหล็กสำเร็จรูป, Q-Series โกดังทรงโค้ง, S-Series ผนังตรง, หลังคาคลุมคอนเทนเนอร์, อาคารโรงงาน PEB",
      h1: "โมเดลวิศวกรรมโครงสร้างเหล็ก"
    },
    sectors: {
      title: "โซลูชันสำหรับภาคอุตสาหกรรมและคลังสินค้าเกษตร | STRUCTIVA®",
      description: "อาคารเหล็กไร้เสากลางสำหรับคลังเก็บธัญพืช เหมืองแร่ โรงซ่อมบำรุงอากาศยาน และศูนย์กระจายสินค้าโลจิสติกส์",
      keywords: "โกดังเก็บพืชผลทางการเกษตร, โรงเก็บเครื่องบินและเฮลิคอปเตอร์, อาคารคลุมกองแร่, คลังสินค้าโลจิสติกส์",
      h1: "โซลูชันโครงสร้างเหล็กตามกลุ่มอุตสาหกรรม"
    },
    engineering: {
      title: "มาตรฐานวิศวกรรมโครงสร้าง & Eurocode 3 | STRUCTIVA®",
      description: "รับรองมาตรฐาน EN 1090-2 EXC4, เครื่องหมาย CE, AISC 360-16 และเหล็กเคลือบ Galvalume Plus® AZ180 ป้องกันสนิม",
      keywords: "มาตรฐาน EN 1090-2 EXC4, การคำนวณโครงสร้าง Eurocode 3 และ AISC 360-16, เหล็กกัลวาลูมพลัส AZ180",
      h1: "วิศวกรรมโครงสร้างเหล็กความแม่นยำสูง"
    },
    configurator: {
      title: "เครื่องมือออกแบบอาคารเหล็ก 3 มิติ (3D Configurator) | STRUCTIVA®",
      description: "กำหนดความกว้าง ความยาว และความสูงในรูปแบบ 3D เพื่อคำนวณพื้นที่ ปริมาตร และจำนวนตู้คอนเทนเนอร์ 40HC ทันที",
      keywords: "ออกแบบโกดังเหล็ก 3D ออนไลน์, คำนวณขนาดโรงงานเหล็ก, ประมาณการขนส่งตู้คอนเทนเนอร์ 40HC",
      h1: "ระบบจำลองอาคาร 3D แบบพาราเมตริก"
    },
    projects: {
      title: "ผลงานโครงการระดับนานาชาติและกรณีศึกษา | STRUCTIVA®",
      description: "ผลงานก่อสร้างอาคารเหล็กและโรงเก็บเครื่องบินกว่า 500,000 ตร.ม. ในกว่า 50 ประเทศทั่วโลก",
      keywords: "ผลงานโครงการอาคารเหล็กระดับโลก, กรณีศึกษาโกดังไร้เสากลาง, พอร์ตโฟลิโอ STRUCTIVA",
      h1: "โครงสร้างเหล็กที่ขับเคลื่อนเศรษฐกิจโลก"
    },
    knowledge: {
      title: "ศูนย์ความรู้ด้านวิศวกรรมเหล็กและคู่มือเทคนิค | STRUCTIVA®",
      description: "คู่มือการวางแผนสร้างอาคารอุตสาหกรรม การเปรียบเทียบ PEB กับเหล็กทั่วไป และแนวทางการจัดทำเอกสาร RFQ",
      keywords: "คู่มือวางแผนสร้างโกดังเหล็ก, เปรียบเทียบอาคาร PEB กับโครงสร้างเหล็กทั่วไป, วิธีเตรียมเอกสารขอใบเสนอราคา RFQ",
      h1: "ศูนย์รวมความรู้ทางเทคนิคและวิศวกรรม"
    },
    about: {
      title: "เกี่ยวกับ STRUCTIVA — โรงงานผลิตเมืองอาดานา | STRUCTIVA®",
      description: "กำลังการผลิตเหล็กโครงสร้าง 25,000 ตันต่อปี ณ นิคมอุตสาหกรรมอาดานา ตุรกี ห่างจากท่าเรือเมอร์ซิน 15 กม.",
      keywords: "โรงงานผลิตโครงสร้างเหล็กอาดานา ตุรกี, ผู้ส่งออกอาคารเหล็กสำเร็จรูป, กำลังการผลิต 25000 ตันต่อปี",
      h1: "ฐานการผลิตอาดานาและมรดกทางวิศวกรรม"
    },
    contact: {
      title: "ติดต่อเรา & ฝ่ายส่งออกต่างประเทศ | STRUCTIVA®",
      description: "ติดต่อวิศวกรโครงสร้างของเราโดยตรงเพื่อรับการประเมินทางวิศวกรรมและใบเสนอราคาภายใน 24 ชั่วโมง",
      keywords: "ติดต่อ STRUCTIVA ตุรกี, ฝ่ายขายต่างประเทศอาคารเหล็ก, ปรึกษาวิศวกรโครงสร้าง",
      h1: "ฝ่ายส่งออกทั่วโลกและข้อมูลการติดต่อ"
    },
    rfq: {
      title: "ขอใบเสนอราคาทางเทคนิค (RFQ) ภายใน 24 ชั่วโมง | STRUCTIVA®",
      description: "ส่งขนาดอาคารและข้อกำหนดโครงการเพื่อรับรายการวัสดุ (BOM) และราคาขนส่ง FOB/CIF ท่าเรือแหลมฉบัง",
      keywords: "ขอใบเสนอราคาโกดังเหล็ก, แบบฟอร์ม RFQ อาคารสำเร็จรูป, ราคาส่งออก CIF แหลมฉบัง กรุงเทพ",
      h1: "แบบฟอร์มขอใบเสนอราคาโครงการอย่างเป็นทางการ (RFQ)"
    }
  }
};

// Localized SEO metadata for Knowledge Hub Articles
export const ARTICLE_SEO_REGISTRY: Record<string, Record<string, PageSEOMeta>> = {
  "how-to-plan-industrial-steel-building": {
    tr: {
      title: "Endüstriyel Çelik Bina Planlama Rehberi: Açıklık, Yükseklik ve Yükler | STRUCTIVA®",
      description: "Yatırımcılar ve satın alma yöneticileri için optimum kolonsuz açıklık, mahya yüksekliği, rüzgar/kar yükleri ve temel ankrajı planlama kılavuzu.",
      keywords: "endüstriyel çelik bina planlama, kolonsuz açıklık hesabı, çelik hangar rüzgar ve kar yükü, Eurocode 1 çelik yapı, çelik depo temel maliyeti",
      h1: "Endüstriyel Çelik Bina Nasıl Planlanır: Açıklık, Gabari ve Yük Faktörleri"
    },
    en: {
      title: "How to Plan an Industrial Steel Building: Span, Clearances & Load Factors | STRUCTIVA®",
      description: "Practical engineering guide for developers and procurement directors on optimal clear spans, ridge heights, and regional snow/wind load parameters.",
      keywords: "how to plan industrial steel building, clear span width calculation, wind and snow load steel hangar, Eurocode 1 AISC 360 planning guide",
      h1: "How to Plan an Industrial Steel Building: Span, Clearances & Load Factors"
    }
  },
  "peb-vs-conventional-structural-steel": {
    tr: {
      title: "Ön Üretimli Çelik (PEB) vs. Geleneksel Yapısal Çelik Karşılaştırması | STRUCTIVA®",
      description: "Fabrika üretimi cıvatalı PEB çelik kitleri ile şantiye kaynaklı geleneksel çeliğin maliyet, tonaj ve montaj hızı açısından teknik karşılaştırması.",
      keywords: "PEB vs geleneksel çelik yapı, ön üretimli çelik bina avantajları, değişken kesitli çelik kiriş, cıvatalı çelik montaj hızı, çelik tonaj tasarrufu",
      h1: "Ön Üretimli Çelik Binalar (PEB) ve Geleneksel Çelik Karşılaştırması"
    },
    en: {
      title: "Pre-Engineered Buildings (PEB) vs. Conventional Structural Steel | STRUCTIVA®",
      description: "Detailed comparison between pre-engineered factory-built steel kits and field-welded conventional steel frames in cost, lead time, and seismic ductility.",
      keywords: "PEB vs conventional structural steel, pre-engineered steel building cost savings, tapered built-up steel frame, bolt together vs field welded steel",
      h1: "Pre-Engineered Buildings (PEB) vs. Conventional Structural Steel"
    }
  },
  "how-to-prepare-structural-steel-rfq": {
    tr: {
      title: "Uluslararası Çelik Yapı Şartnamesi ve Teklif Talebi (RFQ) Hazırlama | STRUCTIVA®",
      description: "24 saat içinde kesin BOM ve rekabetçi FOB/CIF çelik bina fiyat teklifi almak için şartnamede bulunması gereken 5 temel mühendislik verisi.",
      keywords: "çelik yapı şartnamesi nasıl hazırlanır, çelik hangar RFQ kontrol listesi, uluslararası çelik bina ihale dosyası, FOB Mersin CIF teklif şartları",
      h1: "Uluslararası Çelik Yapı Şartnamesi ve Teklif Talebi (RFQ) Hazırlama"
    },
    en: {
      title: "How to Prepare an International Structural Steel RFQ & Specification | STRUCTIVA®",
      description: "What engineering data, site conditions, and accessory lists procurement managers must include to receive accurate 24-hour steel quotations.",
      keywords: "how to prepare structural steel RFQ, steel building procurement checklist, industrial hangar tender specification, FOB CIF steel building quote",
      h1: "How to Prepare an International Structural Steel RFQ & Specification"
    }
  },
  "galvalume-plus-corrosion-science": {
    tr: {
      title: "Galvalume Plus® AZ180 Metalürjisi: Korozyon Direnci ve Güneş Yansıtma | STRUCTIVA®",
      description: "%55 Alüminyum-Çinko alaşımının denizel ve endüstriyel ortamlarda standart galvanizli çeliğe göre 4-6 kat daha uzun ömürlü olmasının bilimsel analizi.",
      keywords: "Galvalume Plus AZ180 nedir, ASTM A792 alüminyum çinko kaplama, korozyona dayanıklı çelik hangar, %80 güneş yansıtan çatı sacı",
      h1: "Galvalume Plus® AZ180 Metalürjisi: Korozyon Direnci ve Isı Yansıtma"
    },
    en: {
      title: "Galvalume Plus® AZ180 Metallurgy: Corrosion Resistance & Solar Reflectance | STRUCTIVA®",
      description: "Why a 55% Aluminum-Zinc alloy outperforms conventional hot-dip galvanized steel by 4 to 6 times in harsh marine and industrial environments.",
      keywords: "Galvalume Plus AZ180 metallurgy, ASTM A792 55% Al-Zn alloy coating, corrosion resistant arch steel panel, solar reflective metal building roof",
      h1: "Galvalume Plus® AZ180 Metallurgy: Corrosion Resistance & Solar Reflectance"
    }
  }
};

/**
 * Universal safe localized SEO getter.
 * Supports both primary page keys ("home", "models", ...) and article slugs ("knowledge/...").
 * Returns targeted language SEO or falls back to English, then Turkish.
 */
export function getPageSEO(pageKey: string, lang: string = "tr"): PageSEOMeta {
  const normLang = (lang || "tr").toLowerCase().split("-")[0];
  const cleanKey = pageKey.replace(/^\/+/, "").replace(/\/+$/, "");

  // Check if this is a knowledge article slug
  if (cleanKey.startsWith("knowledge/")) {
    const articleSlug = cleanKey.replace("knowledge/", "");
    const articleEntry = ARTICLE_SEO_REGISTRY[articleSlug];
    if (articleEntry) {
      return articleEntry[normLang] || articleEntry["en"] || articleEntry["tr"];
    }
  }

  if (SEO_REGISTRY[normLang] && SEO_REGISTRY[normLang][cleanKey]) {
    return SEO_REGISTRY[normLang][cleanKey];
  }

  if (SEO_REGISTRY["en"] && SEO_REGISTRY["en"][cleanKey]) {
    return SEO_REGISTRY["en"][cleanKey];
  }

  if (SEO_REGISTRY["tr"] && SEO_REGISTRY["tr"][cleanKey]) {
    return SEO_REGISTRY["tr"][cleanKey];
  }

  return {
    title: "STRUCTIVA — Clear-Span Steel Structures & Hangars",
    description: "EN 1090-2 EXC4 certified clear-span arch steel hangars manufactured in Adana, Turkey.",
    keywords: "clear-span steel buildings, arch steel hangars, PEB steel structures, Galvalume Plus AZ180, EN 1090-2 EXC4, STRUCTIVA Adana",
    h1: "STRUCTIVA Engineered Steel Structures"
  };
}
