/**
 * STRUCTIVA — Centralized Multilingual SEO & GEO Registry
 * Provides localized titles, meta descriptions, and keywords for all 30 languages.
 */

export interface PageSEOMeta {
  title: string;
  description: string;
  keywords?: string;
  h1?: string;
}

// Complete SEO metadata by language and page key
const SEO_REGISTRY: Record<string, Record<string, PageSEOMeta>> = {
  tr: {
    home: {
      title: "Kolonsuz Kemer Çelik Yapı & Hangar İmalatı | STRUCTIVA® Adana",
      description: "Adana fabrikamızda EN 1090-2 EXC4 sertifikalı, 9m-45m kolonsuz açıklık kemer çelik hangarlar üretiyoruz. Mersin Limanı'na 15 km mesafede flat-pack konteyner ihracatı.",
      h1: "Kolonsuz Kemerli Çelik Yapılar & Ağır Sanayi Hangarları"
    },
    models: {
      title: "Kemerli ve PEB Çelik Yapı Modelleri | STRUCTIVA®",
      description: "Q-Series, S-Series, P-Series, Konteyner Üstü Kanopi ve Ağır Sanayi PEB çelik binalar. 9m-45m kolonsuz net açıklık, 240 km/h rüzgar dayanımı.",
      h1: "Ön Mühendislikli Çelik Yapı ve Hangar Modelleri"
    },
    sectors: {
      title: "Endüstriyel Sektör Çözümleri & Depolama | STRUCTIVA®",
      description: "Tarım, madencilik, havacılık hangarları, lojistik antrepolar ve ağır sanayi için kolonsuz açık açıklıklı çelik yapı çözümleri.",
      h1: "Sektörel Çelik Yapı ve Depolama Sistemleri"
    },
    engineering: {
      title: "Yapısal Çelik Mühendisliği & Standartlar | STRUCTIVA®",
      description: "EN 1090-2 EXC4, CE işareti, AISC 360-16 ve Galvalume Plus® AZ180 metalürjisi. 240 km/h rüzgar ve sismik dayanım analizleri.",
      h1: "Sıfır Toleranslı Yapısal Çelik Mühendisliği"
    },
    configurator: {
      title: "3D Parametrik Çelik Yapı Konfigüratörü | STRUCTIVA®",
      description: "Genişlik, uzunluk ve yükseklik belirleyerek anlık taban alanı, hacim ve 40HC konteyner lojistik hesabını 3D modelle görselleştirin.",
      h1: "İnteraktif 3D Çelik Yapı Konfigüratörü"
    },
    projects: {
      title: "Uluslararası Referanslar & Tamamlanan Projeler | STRUCTIVA®",
      description: "50'den fazla ülkede kurulan çöl sıcağına ve yoğun kar yüklerine dayanıklı kemer çelik hangar ve antrepo projelerimiz.",
      h1: "Ekonomileri Harekete Geçiren Çelik Yapılar"
    },
    knowledge: {
      title: "Çelik Mühendislik Bilgi Merkezi & Rehberler | STRUCTIVA®",
      description: "Çelik bina planlama rehberleri, PEB vs konvansiyonel çelik karşılaştırmaları ve uluslararası RFQ hazırlama kılavuzları.",
      h1: "Teknik Bilgi Merkezi & Mühendislik Kılavuzları"
    },
    about: {
      title: "Hakkımızda & Adana Üretim Tesisleri | STRUCTIVA®",
      description: "Adana Organize Sanayi Bölgesi'nde yıllık 25.000 ton kapasiteli entegre tesislerimizde uluslararası standartlarda cıvatalı çelik yapılar üretiyoruz.",
      h1: "Structiva Tesisleri Adana & Mühendislik Mirasımız"
    },
    contact: {
      title: "İletişim & Global İhracat Masası | STRUCTIVA®",
      description: "Adana mühendislik merkezimiz ve ihracat direktörlüğümüz ile iletişime geçin. 24 saat içinde statik fizibilite ve resmi teklif mektubu alın.",
      h1: "Global İhracat Masası & İletişim"
    },
    rfq: {
      title: "Resmi Teknik Şartname & Fiyat Teklifi (RFQ) | STRUCTIVA®",
      description: "Arsa ölçülerinizi, hedef açıklık ve yükseklik değerlerinizi girerek 24 saat içinde malzeme dökümü (BOM) ve FOB/CIF fiyat teklifi alın.",
      h1: "Teknik Şartname ve Proje Teklif Talebi (RFQ)"
    }
  },

  en: {
    home: {
      title: "Clear-Span Arch Steel Buildings & Hangar Manufacturing | STRUCTIVA®",
      description: "Manufacturer of EN 1090-2 EXC4 certified clear-span arch steel hangars (9m-45m). Located in Adana, 15 km from Mersin International Deep-Water Container Port. Direct export to 50+ countries.",
      h1: "Clear-Span Arch Steel Buildings & Industrial Hangars"
    },
    models: {
      title: "Arched & Pre-Engineered Steel Building Models | STRUCTIVA®",
      description: "Explore Q-Series, S-Series, P-Series, Container Canopies and Heavy PEB steel structures. Clear-span widths from 9m to 45m with certified 240 km/h wind resistance.",
      h1: "Engineered Clear-Span Steel Models"
    },
    sectors: {
      title: "Industrial Sector Applications & Bulk Storage | STRUCTIVA®",
      description: "Engineered steel structures for agriculture, mining stockpiles, aviation hangars, logistics distribution centers, and heavy manufacturing.",
      h1: "Industrial Sector Solutions"
    },
    engineering: {
      title: "Structural Steel Engineering Standards & Quality | STRUCTIVA®",
      description: "EN 1090-2 Execution Class 4, CE marking, AISC 360-16, and Galvalume Plus® AZ180 metallurgy engineered for 240 km/h wind resilience and seismic safety.",
      h1: "Zero-Tolerance Structural Engineering"
    },
    configurator: {
      title: "3D Interactive Steel Building Configurator | STRUCTIVA®",
      description: "Specify clear span, building length, and peak height to compute real-time floor area, usable volume and container shipping counts in interactive 3D.",
      h1: "Parametric 3D Building Configurator"
    },
    projects: {
      title: "International Steel Building Case Studies & Projects | STRUCTIVA®",
      description: "Review international completed industrial projects, clear-span hangars, logistics campuses, and bulk storage facilities manufactured at Structiva Tesisleri Adana.",
      h1: "Structures That Move Economies"
    },
    knowledge: {
      title: "Steel Structure Knowledge Center & Technical Guides | STRUCTIVA®",
      description: "Technical guides, structural steel planning rules, PEB vs conventional comparisons, and procurement specifications by STRUCTIVA Adana engineers.",
      h1: "Knowledge Hub & Engineering Whitepapers"
    },
    about: {
      title: "About STRUCTIVA — Structiva Tesisleri Adana & Global Heritage | STRUCTIVA®",
      description: "Operating from its 25,000 MT capacity integrated steel fabrication hub in Adana, STRUCTIVA delivers certified structural steel buildings and PEB kits globally.",
      h1: "Structiva Facilities Adana & Engineering Heritage"
    },
    contact: {
      title: "Contact STRUCTIVA Global Export & Engineering Desk | STRUCTIVA®",
      description: "Connect directly with STRUCTIVA Adana structural engineers and sales directors for custom building quotes, CAD specifications, and container shipping schedules.",
      h1: "Global Export & Engineering Desk"
    },
    rfq: {
      title: "Request a Technical Quotation (RFQ) | STRUCTIVA® Steel Structures",
      description: "Submit your structural steel project specifications, clear span dimensions, and site requirements for an official engineering review and commercial quote within 24 hours.",
      h1: "Request an Official Project Quotation (RFQ)"
    }
  },

  de: {
    home: {
      title: "Säulenfreie Bogen-Stahlhallen & Hangars | STRUCTIVA® Adana",
      description: "Hersteller von EN 1090-2 EXC4 zertifizierten säulenfreien Bogenschuppen (9m-45m). Standort Adana, 15 km vom Tiefseehafen Mersin. Direkter Export in über 50 Länder.",
      h1: "Säulenfreie Bogen-Stahlgebäude & Industriehallen"
    },
    models: {
      title: "Bogenhallen & PEB Stahlbau-Modelle | STRUCTIVA®",
      description: "Q-Serie, S-Serie, P-Serie, Container-Überdachungen und schwere Industriehallen. 9m bis 45m Spannweite ohne Zwischensäulen, 240 km/h windzertifiziert.",
      h1: "Ingenieurmäßige Stahlbau-Modelle"
    },
    sectors: {
      title: "Industriezweige & Schüttgutlagerung | STRUCTIVA®",
      description: "Säulenfreie Stahlhallen für Landwirtschaft, Bergbau, Flugzeughangars, Logistikzentren und Schwerindustrie.",
      h1: "Industrielle Branchenlösungen"
    },
    engineering: {
      title: "Stahlbau-Ingenieurwesen & Normen | STRUCTIVA®",
      description: "Zertifiziert nach EN 1090-2 EXC4, CE-Kennzeichnung, AISC 360-16 und Galvalume Plus® AZ180 Legierungsstahl mit 240 km/h Windfestigkeit.",
      h1: "Präzisions-Stahlbauingenieurwesen"
    },
    configurator: {
      title: "3D Stahlhallen-Konfigurator | STRUCTIVA®",
      description: "Konfigurieren Sie Spannweite, Länge und Höhe mit interaktiver 3D-Vorschau und Echtzeit-Berechnung der Containerfracht.",
      h1: "Interaktiver 3D-Konfigurator"
    },
    projects: {
      title: "Internationale Stahlbauprojekte & Referenzen | STRUCTIVA®",
      description: "Über 50 Länder weltweit: Entdecken Sie erfolgreich realisierte Bogenhallen, Getreidelager und Logistikzentren aus Adana.",
      h1: "Weltweit bewährte Referenzprojekte"
    },
    knowledge: {
      title: "Stahlbau-Wissenszentrum & Fachartikel | STRUCTIVA®",
      description: "Praxisleitfäden zu Hallenplanung, PEB-Vergleich, Schnee- und Windlasten sowie Ausschreibungen von STRUCTIVA Ingenieuren.",
      h1: "Wissenszentrum & Technische Leitfäden"
    },
    about: {
      title: "Über STRUCTIVA & Werk Adana | STRUCTIVA®",
      description: "Modernste automatisierte CNC-Fertigung in Adana (AOSB), Türkei. 25.000 Tonnen Jahreskapazität und weltweiter Export.",
      h1: "Structiva Werke Adana & Ingenieurstradition"
    },
    contact: {
      title: "Kontakt & Internationaler Exportdesk | STRUCTIVA®",
      description: "Sprechen Sie direkt mit unseren Tragwerksplanern in Adana. Erhalten Sie innerhalb von 24 Stunden eine statische Vorprüfung und ein Angebot.",
      h1: "Globaler Exportdesk & Kontakt"
    },
    rfq: {
      title: "Technisches Angebot (RFQ) Anfordern | STRUCTIVA®",
      description: "Geben Sie Ihre Projektdaten ein und erhalten Sie innerhalb von 24 Stunden eine prüffähige statische Vorberechnung und ein Frachtangebot.",
      h1: "Projekt- und Preisanfrage (RFQ)"
    }
  },

  fr: {
    home: {
      title: "Hangars Métalliques en Voûte Autoportante Sans Colonne | STRUCTIVA®",
      description: "Fabricant de hangars arqués sans colonnes intérieures de 9m à 45m certifiés EN 1090-2 EXC4. Usine à Adana, à 15 km du port de Mersin. Exportation dans plus de 50 pays.",
      h1: "Bâtiments Métalliques Arqués Sans Colonne & Hangars Industriels"
    },
    models: {
      title: "Modèles de Hangars et Bâtiments en Acier PEB | STRUCTIVA®",
      description: "Découvrez la Série Q, Série S, Série P, abris de conteneurs et bâtiments industriels PEB. Portées libres de 9 à 45 m résistant à 240 km/h de vent.",
      h1: "Modèles d'Ingénierie Métallique"
    },
    sectors: {
      title: "Applications Industrielles & Stockage de Vrac | STRUCTIVA®",
      description: "Structures en acier sans piliers pour l'agriculture, l'exploitation minière, les hangars d'aviation et la logistique internationale.",
      h1: "Solutions par Secteur d'Activité"
    },
    engineering: {
      title: "Normes d'Ingénierie Structurale & Qualité | STRUCTIVA®",
      description: "Conforme EN 1090-2 EXC4, marquage CE, AISC 360-16 et alliage Galvalume Plus® AZ180 pour une protection anticorrosion de 50 ans.",
      h1: "Ingénierie Métallique de Précision"
    },
    configurator: {
      title: "Configurateur 3D de Bâtiment en Acier | STRUCTIVA®",
      description: "Définissez la portée libre, la longueur et la hauteur pour visualiser la géométrie 3D et calculer le nombre de conteneurs maritimes 40HC.",
      h1: "Configurateur Paramétrique 3D"
    },
    projects: {
      title: "Études de Cas & Projets Internationaux | STRUCTIVA®",
      description: "Consultez nos réalisations de hangars arqués et d'entrepôts industriels exportés dans plus de 50 pays depuis Adana, Turquie.",
      h1: "Des Structures qui Soutiennent l'Économie"
    },
    knowledge: {
      title: "Centre de Connaissances & Guides Techniques | STRUCTIVA®",
      description: "Guides pratiques sur la conception de hangars, comparaison PEB vs charpente soudée et préparation d'appels d'offres internationaux.",
      h1: "Centre de Ressources Techniques"
    },
    about: {
      title: "À Propos de STRUCTIVA — Usines d'Adana | STRUCTIVA®",
      description: "Implanté dans la zone industrielle d'Adana avec une capacité de 25 000 tonnes/an, STRUCTIVA conçoit et expédie des kits boulonnés dans le monde entier.",
      h1: "Sites de Production d'Adana & Savoir-Faire"
    },
    contact: {
      title: "Contact & Pôle d'Exportation International | STRUCTIVA®",
      description: "Échangez directement avec nos ingénieurs à Adana pour vos projets de hangars industriels. Devis sous 24h.",
      h1: "Pôle Export & Contact Ingénierie"
    },
    rfq: {
      title: "Demande de Devis Technique (RFQ) | STRUCTIVA®",
      description: "Soumettez les dimensions et spécifications de votre projet pour recevoir une étude statique préliminaire et un devis commercial sous 24 heures.",
      h1: "Demande d'Offre de Prix Officielle (RFQ)"
    }
  },

  es: {
    home: {
      title: "Hangares y Estructuras Metálicas de Acero sin Columnas | STRUCTIVA®",
      description: "Fabricación de hangares arqueados de acero sin columnas intermedias (9m a 45m). Planta en Adana, a 15 km del Puerto de Mersin. Exportación a más de 50 países.",
      h1: "Estructuras Arqueadas de Acero sin Columnas & Hangares"
    },
    models: {
      title: "Modelos de Naves y Hangares de Acero PEB | STRUCTIVA®",
      description: "Serie Q, Serie S, Serie P, techos sobre contenedores y naves industriales PEB. Luces libres de 9m a 45m certificadas para vientos de 240 km/h.",
      h1: "Modelos de Estructuras de Acero"
    },
    sectors: {
      title: "Sectores Industriales y Almacenamiento | STRUCTIVA®",
      description: "Estructuras de acero sin columnas interiores para agricultura, minería, hangares de aviación, logística y manufactura pesada.",
      h1: "Soluciones por Sector Industrial"
    },
    engineering: {
      title: "Ingeniería Estructural & Normas Internacionales | STRUCTIVA®",
      description: "Certificación EN 1090-2 EXC4, marcado CE, AISC 360-16 y aleación Galvalume Plus® AZ180 con garantía anticorrosión de 50 años.",
      h1: "Ingeniería Estructural de Cero Tolerancia"
    },
    configurator: {
      title: "Configurador 3D de Estructuras de Acero | STRUCTIVA®",
      description: "Calcule en tiempo real la superficie, el volumen y la logística en contenedores 40HC con nuestro configurador interactivo 3D.",
      h1: "Configurador 3D Paramétrico"
    },
    projects: {
      title: "Proyectos Internacionales y Casos de Éxito | STRUCTIVA®",
      description: "Hangares y almacenes industriales instalados en más de 50 países, diseñados para resistir huracanes y cargas extremas de nieve.",
      h1: "Estructuras que Impulsan Economías"
    },
    knowledge: {
      title: "Centro de Conocimiento y Guías Técnicas | STRUCTIVA®",
      description: "Guías sobre planificación de naves industriales, comparación PEB vs acero convencional y preparación de licitaciones RFQ.",
      h1: "Centro de Conocimiento Técnico"
    },
    about: {
      title: "Acerca de STRUCTIVA — Fábrica de Adana | STRUCTIVA®",
      description: "Capacidad de 25.000 toneladas métricas anuales en Adana, Turquía. Conexión marítima directa para entregas flat-pack a nivel mundial.",
      h1: "Instalaciones de Adana y Tradición de Ingeniería"
    },
    contact: {
      title: "Contacto & Departamento de Exportación Global | STRUCTIVA®",
      description: "Comuníquese con nuestros ingenieros estructurales en Adana. Reciba un estudio de viabilidad y cotización formal en 24 horas.",
      h1: "Contacto y Ventas Internacionales"
    },
    rfq: {
      title: "Solicitud de Cotización Técnica (RFQ) | STRUCTIVA®",
      description: "Envíe las dimensiones y requisitos de su nave para recibir una propuesta técnica preliminar y cotización FOB/CIF en 24 horas.",
      h1: "Solicitud de Cotización Formal (RFQ)"
    }
  },

  ar: {
    home: {
      title: "هياكل حديدية مقوسة ومستودعات بدون أعمدة | STRUCTIVA® تركيا",
      description: "تصنيع هناجر ومستودعات فولاذية مقوسة بدون أعمدة داخلية من 9 إلى 45 متراً. مصنعنا في أضنة يبعد 15 كم عن ميناء مرسين. تصدير مباشر إلى أكثر من 50 دولة.",
      h1: "مباني فولاذية مقوسة خالية من الأعمدة وهناجر صناعية كبرى"
    },
    models: {
      title: "نماذج الهناجر والمباني الفولاذية مسبقة الصنع | STRUCTIVA®",
      description: "استكشف الفئة Q، الفئة S، مظلات الحاويات والمباني الصناعية PEB. بحور حرة من 9 إلى 45 متراً ومقاومة رياح حتى 240 كم/ساعة.",
      h1: "نماذج الهياكل الحديدية الهندسية"
    },
    sectors: {
      title: "حلول القطاعات الصناعية وتخزين الحبوب والمناجم | STRUCTIVA®",
      description: "هياكل حديدية خالية من الأعمدة للقطاع الزراعي، الصوامع، حظائر الطائرات ومستودعات اللوجستيات الكبرى.",
      h1: "حلول القطاعات والتخزين الاستراتيجي"
    },
    engineering: {
      title: "معايير الهندسة الإنشائية الفولاذية والجودة | STRUCTIVA®",
      description: "مطابقة EN 1090-2 EXC4 وعلامة CE ومواصفات AISC 360-16 وفولاذ Galvalume Plus® المقاوم للتآكل لمدة تصل إلى 50 عاماً.",
      h1: "هندسة إنشائية بدقة متناهية"
    },
    configurator: {
      title: "محدد القياسات التفاعلي ثلاثي الأبعاد 3D | STRUCTIVA®",
      description: "حدد العرض والطول والارتفاع لحساب المساحة والحجم وحاويات الشحن البحرية 40HC بنموذج 3D تفاعلي فوري.",
      h1: "أداة تكوين المباني ثلاثية الأبعاد"
    },
    projects: {
      title: "المشاريع الدولية وسجل الإنجازات العالمية | STRUCTIVA®",
      description: "مشاريع هناجر ومستودعات عملاقة منجزة في أكثر من 50 دولة مصممة لتحمل حرارة الصحراء والثلوج الكثيفة.",
      h1: "هياكل فولاذية تدعم الاقتصادات"
    },
    knowledge: {
      title: "مركز المعرفة الإنشائية والأدلة الفنية | STRUCTIVA®",
      description: "أدلة هندسية وتخطيطية للمباني الفولاذية ومقارنات PEB وسبل إعداد مناقصات الشراء الدولية.",
      h1: "مركز المعرفة والأبحاث الهندسية"
    },
    about: {
      title: "عن ستروكتيفا — مجمع مصانع أضنة الهندسي | STRUCTIVA®",
      description: "طاقة إنتاجية سنوية 25,000 طن متري في أضنة، تركيا. شحن بحري سريع عبر موانئ البحر الأبيض المتوسط.",
      h1: "مصانع ستروكتيفا في أضنة وتاريخنا الهندسي"
    },
    contact: {
      title: "الاتصال ومكتب التصدير الدولي المباشر | STRUCTIVA®",
      description: "تواصل مباشرة مع مهندسينا الإنشائيين في أضنة للحصول على دراسة استاتيكية وعرض أسعار رسمي خلال 24 ساعة.",
      h1: "مكتب التصدير الدولي والاتصال"
    },
    rfq: {
      title: "طلب عرض سعر ومواصفات فنية (RFQ) | STRUCTIVA®",
      description: "أرسل أبعاد مشروعك ومتطلبات الموقع للحصول على دراسة جدوى هندسية وعرض أسعار تجاري FOB أو CIF خلال 24 ساعة.",
      h1: "طلب عرض سعر رسمي للمشروع (RFQ)"
    }
  },

  ru: {
    home: {
      title: "Арочные бескаркасные ангары из стали | STRUCTIVA® Адана",
      description: "Производство арочных стальных ангаров без промежуточных колонн шириной от 9 до 45 метров. Завод в Адане, 15 км от порта Мерсин. Экспорт в 50+ стран мира.",
      h1: "Стальные арочные сооружения без колонн и промышленные ангары"
    },
    models: {
      title: "Модели стальных арочных ангаров и PEB зданий | STRUCTIVA®",
      description: "Серии Q, S, P, навесы на контейнеры и быстровозводимые промышленные здания. Пролеты до 45 метров, ветровая стойкость 240 км/ч.",
      h1: "Инженерные модели стальных сооружений"
    },
    sectors: {
      title: "Отраслевые решения и склады сыпучих грузов | STRUCTIVA®",
      description: "Стальные конструкции без внутренних опор для сельского хозяйства, зернохранилищ, горной добычи, авиационных ангаров и логистики.",
      h1: "Отраслевые решения для промышленности"
    },
    engineering: {
      title: "Стандарты проектирования и качество металлоконструкций | STRUCTIVA®",
      description: "Сертификация EN 1090-2 EXC4, маркировка CE, нормы AISC 360-16 и сталь Galvalume Plus® AZ180 с гарантией от коррозии до 50 лет.",
      h1: "Прецизионное проектирование стальных конструкций"
    },
    configurator: {
      title: "3D Конфигуратор стальных зданий | STRUCTIVA®",
      description: "Задайте ширину, длину и высоту ангара для мгновенного расчета площади, объема и необходимого количества контейнеров 40HC.",
      h1: "Интерактивный 3D конфигуратор зданий"
    },
    projects: {
      title: "Международные реализованные проекты и портфолио | STRUCTIVA®",
      description: "Промышленные ангары и склады, возведенные в более чем 50 странах мира, устойчивые к ураганным ветрам и снеговым нагрузкам.",
      h1: "Сооружения, двигающие экономику"
    },
    knowledge: {
      title: "Центр инженерных знаний и руководства | STRUCTIVA®",
      description: "Технические статьи о проектировании ангаров, сравнении PEB с традиционным прокатом и правилах составления RFQ.",
      h1: "Центр знаний и технические руководства"
    },
    about: {
      title: "О компании STRUCTIVA — Завод в Адане | STRUCTIVA®",
      description: "Собственный производственный комплекс мощностью 25 000 тонн в год в Адане, Турция. Быстрая морская логистика через порт Мерсин.",
      h1: "Завод STRUCTIVA в Адане и инженерные традиции"
    },
    contact: {
      title: "Контакты и международный экспортный отдел | STRUCTIVA®",
      description: "Свяжитесь напрямую с нашими инженерами-проектировщиками в Адане. Расчет проекта и коммерческое предложение за 24 часа.",
      h1: "Международный экспортный отдел и контакты"
    },
    rfq: {
      title: "Запрос технического расчета и стоимости (RFQ) | STRUCTIVA®",
      description: "Отправьте габариты здания и назначение объекта для получения предварительного статического расчета и цен FOB/CIF в течение 24 часов.",
      h1: "Запрос официального коммерческого предложения (RFQ)"
    }
  },

  az: {
    home: {
      title: "Sütunsuz Tağ Polad Konstruksiya və Anqar İstehsalı | STRUCTIVA®",
      description: "Adana zavodumuzda EN 1090-2 EXC4 sertifikatlı, 9m-45m sütunsuz tağ polad anqarlar istehsal edirik. Mersin Limanı vasitəsilə 50-dən çox ölkəyə ixrac.",
      h1: "Sütunsuz Tağvari Polad Konstruksiyalar və Anqarlar"
    },
    models: {
      title: "Tağvari və PEB Polad Konstruksiya Modelləri | STRUCTIVA®",
      description: "Q-Series, S-Series, P-Series və konteyner üstü kanopilər. 9m-dən 45m-ə qədər sütunsuz aşırım, 240 km/saat külək davamlılığı.",
      h1: "Mühəndislik Polad Modelləri"
    },
    sectors: {
      title: "Sənaye Sahələri və Anbar Həlləri | STRUCTIVA®",
      description: "Kənd təsərrüfatı, mədənçilik, aviasiya anqarları və logistika mərkəzləri üçün sütunsuz polad konstruksiyalar.",
      h1: "Sahəvi Polad Həlləri"
    },
    engineering: {
      title: "Struktur Polad Mühəndisliyi və Standartlar | STRUCTIVA®",
      description: "EN 1090-2 EXC4, CE nişanı, AISC 360-16 və Galvalume Plus® AZ180 metallurgiyası.",
      h1: "Sıfır Tolerantlı Polad Mühəndisliyi"
    },
    configurator: {
      title: "3D Polad Bina Konfiquratoru | STRUCTIVA®",
      description: "En, uzunluq və hündürlüyü təyin edərək sahə, həcm və konteyner sayını 3D modeldə hesablayın.",
      h1: "3D Parametrik Konfiqurator"
    },
    projects: {
      title: "Beynəlxalq Layihələr və İstinadlar | STRUCTIVA®",
      description: "50-dən çox ölkədə qurulan anqar və anbar layihələrimiz.",
      h1: "İqtisadiyyatı İrəli Aparan Konstruksiyalar"
    },
    knowledge: {
      title: "Polad Konstruksiya Məlumat Mərkəzi | STRUCTIVA®",
      description: "Polad bina planlaşdırma qaydaları və texniki məqalələr.",
      h1: "Texniki Məlumat Mərkəzi"
    },
    about: {
      title: "Haqqımızda — Adana Zavodu | STRUCTIVA®",
      description: "İldə 25.000 ton istehsal gücünə malik Adana kompleksimiz və beynəlxalq ixracat.",
      h1: "Adana İstehsalat Kompleksi və İrs"
    },
    contact: {
      title: "Əlaqə & Qlobal İxrac Şöbəsi | STRUCTIVA®",
      description: "Adana mühəndislik ofisimizlə əlaqə saxlayın və 24 saat ərzində təklif alın.",
      h1: "Qlobal İxrac Masası və Əlaqə"
    },
    rfq: {
      title: "Rəsmi Qiymət Təklifi (RFQ) Tələbi | STRUCTIVA®",
      description: "Layihə ölçülərini daxil edərək 24 saat ərzində texniki və kommersiya təklifi əldə edin.",
      h1: "Rəsmi Layihə Təklifi Tələbi"
    }
  },

  it: {
    home: {
      title: "Capannoni ad Arco in Acciaio Senza Colonne | STRUCTIVA® Adana",
      description: "Produttore di capannoni metallici autoportanti senza colonne (9m-45m) certificati EN 1090-2 EXC4. Export diretto verso oltre 50 paesi via Porto di Mersin.",
      h1: "Strutture ad Arco in Acciaio Senza Colonne & Hangar Industriali"
    },
    models: {
      title: "Modelli di Capannoni e Strutture in Acciaio PEB | STRUCTIVA®",
      description: "Serie Q, Serie S, Serie P, coperture per container e capannoni industriali. Luci libere fino a 45m e resistenza al vento di 240 km/h.",
      h1: "Modelli di Ingegneria per Capannoni in Acciaio"
    },
    sectors: {
      title: "Settori Industriali & Stoccaggio Merci | STRUCTIVA®",
      description: "Soluzioni in acciaio per agricoltura, stoccaggio cereali, hangar aeronautici, logistica e manifattura pesante.",
      h1: "Soluzioni per Settore Industriale"
    },
    engineering: {
      title: "Ingegneria Strutturale & Norme Eurocodice 3 | STRUCTIVA®",
      description: "Certificati EN 1090-2 EXC4, marcatura CE, AISC 360-16 e acciaio Galvalume Plus® AZ180 con garanzia anticorrosione.",
      h1: "Ingegneria Strutturale di Precisione"
    },
    configurator: {
      title: "Configuratore 3D di Capannoni in Acciaio | STRUCTIVA®",
      description: "Calcola in 3D interattivo superficie, cubatura e conteggio container marittimi 40HC con scheda tecnica istantanea.",
      h1: "Configuratore Parametrico 3D"
    },
    projects: {
      title: "Progetti Internazionali & Referenze Mondiali | STRUCTIVA®",
      description: "Oltre 500.000 m² di capannoni in acciaio forniti in oltre 50 paesi nel mondo.",
      h1: "Strutture che Guidano le Economie"
    },
    knowledge: {
      title: "Centro Tecnico & Guide di Ingegneria in Acciaio | STRUCTIVA®",
      description: "Guide di progettazione per capannoni industriali, analisi PEB vs carpenteria tradizionale e redazione di capitolati RFQ.",
      h1: "Centro di Conoscenza e Guide Tecniche"
    },
    about: {
      title: "Chi Siamo — Stabilimenti di Produzione Adana | STRUCTIVA®",
      description: "Capacità produttiva di 25.000 tonnellate annue ad Adana (Turchia). Logistica marittima diretta tramite il porto di Mersin.",
      h1: "Stabilimenti di Adana e Tradizione Ingegneristica"
    },
    contact: {
      title: "Contatti & Ufficio Export Globale | STRUCTIVA®",
      description: "Contatta i nostri ingegneri ad Adana. Ricevi studio di fattibilità statica e quotazione formale entro 24 ore.",
      h1: "Ufficio Export Internazionale & Contatti"
    },
    rfq: {
      title: "Richiesta di Preventivo Tecnico (RFQ) in 24 Ore | STRUCTIVA®",
      description: "Invia i parametri del tuo progetto per una verifica ingegneristica, distinta base (BOM) e quotazione FOB/CIF in 24h.",
      h1: "Richiesta di Offerta Formale (RFQ)"
    }
  },

  pt: {
    home: {
      title: "Galpões Metálicos em Arco Sem Colunas Intermediárias | STRUCTIVA®",
      description: "Fabricação de galpões em arco autoportantes de 9m a 45m de vão livre certificados EN 1090-2 EXC4. Exportação direta para 50+ países via Porto de Mersin.",
      h1: "Estruturas de Aço em Arco Sem Colunas & Hangares"
    },
    models: {
      title: "Modelos de Galpões e Prédios de Aço PEB | STRUCTIVA®",
      description: "Série Q, Série S, Série P, coberturas de contêineres e galpões PEB pesados. Vãos livres de 9m a 45m com resistência a ventos de 240 km/h.",
      h1: "Modelos Estruturais de Engenharia"
    },
    sectors: {
      title: "Aplicações Industriais e Armazenamento a Granel | STRUCTIVA®",
      description: "Estruturas de aço sem pilares para agronegócio, silos de grãos, hangares de aviação e logística integrada.",
      h1: "Soluções por Setor Industrial"
    },
    engineering: {
      title: "Engenharia Estrutural & Padrões Eurocode 3 | STRUCTIVA®",
      description: "Certificação EN 1090-2 EXC4, marcação CE, AISC 360-16 e liga Galvalume Plus® AZ180 com durabilidade superior a 40 anos.",
      h1: "Engenharia Estrutural de Precisão"
    },
    configurator: {
      title: "Configurador 3D de Galpões de Aço | STRUCTIVA®",
      description: "Configure vão livre, comprimento e altura em 3D interativo com cálculo de cubagem de transporte em contêineres 40HC.",
      h1: "Configurador 3D Paramétrico"
    },
    projects: {
      title: "Projetos Internacionais e Instalações Globais | STRUCTIVA®",
      description: "Casos de sucesso de galpões e armazéns industriais entregues em mais de 50 países.",
      h1: "Estruturas que Impulsionam Economias"
    },
    knowledge: {
      title: "Central de Conhecimento Técnico & Guias de Engenharia | STRUCTIVA®",
      description: "Artigos técnicos sobre projeto de galpões, comparativo PEB vs estruturas soldadas e especificações de compra.",
      h1: "Centro de Conhecimento Técnico"
    },
    about: {
      title: "Sobre a STRUCTIVA — Fábrica em Adana | STRUCTIVA®",
      description: "Complexo fabril de 25.000 toneladas/ano em Adana, Turquia, a 15 km do Porto de Mersin.",
      h1: "Instalações de Adana e Tradição em Engenharia"
    },
    contact: {
      title: "Contato & Departamento de Exportação Global | STRUCTIVA®",
      description: "Fale diretamente com nossa equipe de engenharia e receba sua proposta formal em 24 horas.",
      h1: "Departamento de Exportação Global"
    },
    rfq: {
      title: "Solicitação de Cotação Técnica (RFQ) em 24h | STRUCTIVA®",
      description: "Envie as especificações do seu galpão para receber estudo preliminar e orçamento FOB/CIF em 24 horas.",
      h1: "Solicitação de Cotação Formal (RFQ)"
    }
  },

  nl: {
    home: {
      title: "Kolomvrije Boogloodsen & Stalen Hallen | STRUCTIVA® Adana",
      description: "Fabrikant van EN 1090-2 EXC4 gecertificeerde kolomvrije boogloodsen (9m-45m). Gelegen in Adana, 15 km van de diepzeehaven Mersin. Export naar 50+ landen.",
      h1: "Kolomvrije Boogloodsen & Industriële Stalen Gebouwen"
    },
    models: {
      title: "Modellen voor Boog- en Systeembouwhallen (PEB) | STRUCTIVA®",
      description: "Q-Serie, S-Serie, P-Serie en containeroverkappingen. Vrije overspanningen van 9m tot 45m met 240 km/h windbestendigheid.",
      h1: "Ingenieurmatige Staalbouw Modellen"
    },
    sectors: {
      title: "Industriële Sectoren & Bulkopslag | STRUCTIVA®",
      description: "Kolomvrije staalconstructies voor landbouw, graanopslag, vliegtuighangars en logistieke distributiecentra.",
      h1: "Sectorgerichte Oplossingen"
    },
    engineering: {
      title: "Constructieve Ingenieursnormen & Eurocode 3 | STRUCTIVA®",
      description: "EN 1090-2 EXC4, CE-markering, AISC 360-16 en Galvalume Plus® AZ180 met 40-50 jaar onderhoudsvrije levensduur.",
      h1: "Precisie Staalbouw Engineering"
    },
    configurator: {
      title: "3D Staalbouw Configurator | STRUCTIVA®",
      description: "Bereken realtime vloeroppervlak, volume en 40HC zeecontainerplanning in interactieve 3D.",
      h1: "Interactieve 3D Configurator"
    },
    projects: {
      title: "Internationale Referentieprojecten | STRUCTIVA®",
      description: "Succesvol gerealiseerde industriële hallen en opslagloodsen in meer dan 50 landen wereldwijd.",
      h1: "Bewezen Internationale Projecten"
    },
    knowledge: {
      title: "Technisch Kenniscentrum & Staalbouw Gidsen | STRUCTIVA®",
      description: "Deskundige gidsen over halontwerp, PEB-vergelijkingen en internationale aanbestedingen.",
      h1: "Technisch Kenniscentrum"
    },
    about: {
      title: "Over STRUCTIVA — Productiefaciliteiten Adana | STRUCTIVA®",
      description: "Geïntegreerde staalverwerkingscapaciteit van 25.000 ton per jaar in Adana, Turkije.",
      h1: "Fabriek Adana & Staalbouw Traditie"
    },
    contact: {
      title: "Contact & Internationale Exportdesk | STRUCTIVA®",
      description: "Direct contact met constructeurs in Adana. Binnen 24 uur een statische haalbaarheidstoets en offerte.",
      h1: "Internationale Exportdesk"
    },
    rfq: {
      title: "Offerteaanvraag (RFQ) Binnen 24 Uur | STRUCTIVA®",
      description: "Dien uw afmetingen in en ontvang binnen 24 uur een gedetailleerde materiaallijst (BOM) en vrachtofferte.",
      h1: "Officiële Projectaanvraag (RFQ)"
    }
  },

  pl: {
    home: {
      title: "Łukowe Hale Stalowe Bez Słupów Wewnętrznych | STRUCTIVA®",
      description: "Producent certyfikowanych wg EN 1090-2 EXC4 samonośnych hal łukowych (9m-45m). Fabryka w Adanie, 15 km od portu Mersin. Eksport do 50+ krajów.",
      h1: "Samonośne Łukowe Hale Stalowe & Hangary Przemysłowe"
    },
    models: {
      title: "Modele Hal Łukowych i Konstrukcji Stalowych PEB | STRUCTIVA®",
      description: "Seria Q, Seria S, Seria P i zadaszenia kontenerowe. Rozpiętości od 9m do 45m z odpornością na wiatr do 240 km/h.",
      h1: "Modele Konstrukcyjne Hal Stalowych"
    },
    sectors: {
      title: "Zastosowania Przemysłowe i Magazyny Masowe | STRUCTIVA®",
      description: "Hale bez podpór wewnętrznych dla rolnictwa, magazynowania zbóż, hangarów lotniczych i logistyki.",
      h1: "Rozwiązania dla Przemysłu i Rolnictwa"
    },
    engineering: {
      title: "Inżynieria Konstrukcyjna & Normy Eurokod 3 | STRUCTIVA®",
      description: "Zgodność z EN 1090-2 EXC4, znak CE, AISC 360-16 i stal Galvalume Plus® AZ180 o 40-50 letniej trwałości.",
      h1: "Precyzyjna Inżynieria Konstrukcji Stalowych"
    },
    configurator: {
      title: "Interaktywny Konfigurator Hal 3D | STRUCTIVA®",
      description: "Zaprojektuj halę w 3D, sprawdź kubaturę i liczbę kontenerów morskich 40HC z natychmiastowym eksportem specyfikacji.",
      h1: "Parametryczny Konfigurator 3D"
    },
    projects: {
      title: "Międzynarodowe Realizacje i Projekty | STRUCTIVA®",
      description: "Ponad 500 000 m² hal dostarczonych do ponad 50 krajów na całym świecie.",
      h1: "Konstrukcje, Które Budują Gospodarkę"
    },
    knowledge: {
      title: "Baza Wiedzy Inżynieryjnej & Poradniki | STRUCTIVA®",
      description: "Praktyczne poradniki dotyczące projektowania hal, porównanie PEB ze stalą tradycyjną i przygotowanie zapytań RFQ.",
      h1: "Baza Wiedzy Technicznej"
    },
    about: {
      title: "O Firmie STRUCTIVA — Zakład w Adanie | STRUCTIVA®",
      description: "Zdolność produkcyjna 25 000 ton rocznie w Adanie, Turcja, przy strategicznym węźle portowym Mersin.",
      h1: "Zakłady w Adanie i Tradycja Inżynieryjna"
    },
    contact: {
      title: "Kontakt i Dział Eksportu Globalnego | STRUCTIVA®",
      description: "Skontaktuj się z naszymi inżynierami i otrzymaj kalkulację oraz ofertę w ciągu 24 godzin.",
      h1: "Dział Eksportu Globalnego"
    },
    rfq: {
      title: "Zapytanie Ofertowe (RFQ) w 24 Godziny | STRUCTIVA®",
      description: "Prześlij wymiary i wymagania obiektu, aby otrzymać bezpłatną kalkulację statyczną i wycenę FOB/CIF w 24h.",
      h1: "Zapytanie o Wycenę Projektu (RFQ)"
    }
  },

  ro: {
    home: {
      title: "Hale Metalice Arcuite Fără Stâlpi Intermediari | STRUCTIVA®",
      description: "Producător de hangare arcuite din oțel fără stâlpi interiori (9m-45m) certificate EN 1090-2 EXC4. Livrare directă în peste 50 de țări prin Portul Mersin.",
      h1: "Hale Metalice Arcuite Autoportante & Hangare Industriale"
    },
    models: {
      title: "Modele de Hale Arcuite și Structuri Metalice PEB | STRUCTIVA®",
      description: "Seria Q, Seria S, Seria P și acoperișuri peste containere. Deschideri libere 9m-45m și rezistență la vânt de 240 km/h.",
      h1: "Modele de Structuri Metalice"
    },
    sectors: {
      title: "Aplicații Industriale & Depozitare Vrac | STRUCTIVA®",
      description: "Structuri metalice autoportante pentru agricultură, silozuri de cereale, hangare aviatice și centre logistice.",
      h1: "Soluții pe Sectoare Industriale"
    },
    engineering: {
      title: "Inginerie Structurală & Standarde Eurocode 3 | STRUCTIVA®",
      description: "Certificare EN 1090-2 EXC4, marcaj CE, AISC 360-16 și aliaj Galvalume Plus® AZ180 rezistent la coroziune.",
      h1: "Inginerie Structurală de Înaltă Precizie"
    },
    configurator: {
      title: "Configurator 3D de Hale Metalice | STRUCTIVA®",
      description: "Calculați în 3D suprafața, volumul util și optimizarea containerelor maritime 40HC cu fișă tehnică PDF.",
      h1: "Configurator Parametric 3D"
    },
    projects: {
      title: "Proiecte Internaționale & Referințe Globale | STRUCTIVA®",
      description: "Peste 500.000 m² de structuri metalice livrate în peste 50 de țări din întreaga lume.",
      h1: "Structuri Care Susțin Economia"
    },
    knowledge: {
      title: "Centru de Cunoștințe Tehnice & Ghiduri de Inginerie | STRUCTIVA®",
      description: "Ghiduri practice de proiectare a halelor, comparativ PEB vs profile laminate și proceduri de achiziție.",
      h1: "Centru de Resurse Tehnice"
    },
    about: {
      title: "Despre STRUCTIVA — Fabrica din Adana | STRUCTIVA®",
      description: "Capacitate de 25.000 tone/an în Adana, Turcia, la 15 km de Portul Internațional Mersin.",
      h1: "Fabricile din Adana și Tradiția Tehnică"
    },
    contact: {
      title: "Contact & Biroul de Export Internațional | STRUCTIVA®",
      description: "Discutați direct cu inginerii noștri din Adana și obțineți oferta tehnică în 24 de ore.",
      h1: "Birou de Export Internațional"
    },
    rfq: {
      title: "Cerere de Ofertă Tehnică (RFQ) în 24h | STRUCTIVA®",
      description: "Trimiteți dimensiunile proiectului pentru un calcul preliminar și o cotație fermă FOB/CIF în 24 de ore.",
      h1: "Cerere de Ofertă Oficială (RFQ)"
    }
  },

  zh: {
    home: {
      title: "无立柱拱形钢结构与机库制造 | STRUCTIVA® 土耳其阿达纳",
      description: "土耳其阿达纳工厂专业制造EN 1090-2 EXC4认证的9米至45米无柱净跨拱形钢结构机库与重工业厂房。距梅尔辛深水港仅15公里，直接出口至50多个国家。",
      h1: "无立柱拱形钢结构与重工业机库制造"
    },
    models: {
      title: "拱形与预制轻钢结构建筑型号 | STRUCTIVA®",
      description: "Q系列全拱、S系列直墙拱顶、P系列人字屋脊及集装箱顶棚。净跨9至45米，经抗240公里/小时飓风风压验算。",
      h1: "预制工程钢结构建筑系列"
    },
    sectors: {
      title: "工业行业应用与大宗散料仓储 | STRUCTIVA®",
      description: "适用于农业粮食仓储、矿业堆场封闭、航空维修机库及大型现代化物流仓储中转中心。",
      h1: "多行业专用钢结构方案"
    },
    engineering: {
      title: "结构工程标准与欧洲规范Eurocode 3 | STRUCTIVA®",
      description: "EN 1090-2 EXC4最高制造等级、CE认证、AISC 360-16标准及ASTM A792 Galvalume Plus® AZ180超耐蚀镀铝锌合金。",
      h1: "高精度结构钢工程标准"
    },
    configurator: {
      title: "3D交互式钢结构参数化配置器 | STRUCTIVA®",
      description: "实时调整跨度、长度与脊高，即时预览3D模型并计算40尺高柜海运装柜量与技术参数表。",
      h1: "3D参数化建筑配置器"
    },
    projects: {
      title: "全球工程业绩与国际案例研究 | STRUCTIVA®",
      description: "在欧洲、中东、非洲及中亚50多个国家成功交付超过50万平方米无立柱钢结构项目。",
      h1: "赋能全球经济的钢结构工程"
    },
    knowledge: {
      title: "钢结构工程技术知识中心与设计指南 | STRUCTIVA®",
      description: "工业钢结构规划指南、预制钢结构(PEB)与传统焊接型钢对比白皮书及国际采购规范。",
      h1: "技术知识中心与设计手册"
    },
    about: {
      title: "关于STRUCTIVA — 阿达纳智造基地 | STRUCTIVA®",
      description: "年产25,000吨高精度结构钢，阿达纳自动化工厂依托梅尔辛港提供全球海运快速直达服务。",
      h1: "阿达纳现代化制造基地与工程底蕴"
    },
    contact: {
      title: "联系我们 & 全球出口工程部 | STRUCTIVA®",
      description: "直接对接阿达纳结构工程师与外贸团队，24小时内获取受力分析复核与正式报价函。",
      h1: "全球出口贸易与工程咨询部"
    },
    rfq: {
      title: "24小时官方技术方案与报价申请(RFQ) | STRUCTIVA®",
      description: "提交建筑尺寸及建设地风雪荷载要求，24小时内获得完整物料清单(BOM)及FOB/CIF离岸到港报价。",
      h1: "官方项目询价申请 (RFQ)"
    }
  },

  ja: {
    home: {
      title: "無柱アーチ型鉄骨造・大型格納庫製造 | STRUCTIVA® トルコ・アダナ",
      description: "アダナ工場にてEN 1090-2 EXC4認証の9m〜45m無柱スパンアーチ型鉄骨格納庫・倉庫を製造。メルシン国際コンテナ港から世界50カ国以上へ直送。",
      h1: "無柱アーチ型鉄骨建造物＆大型産業用ハンガー"
    },
    models: {
      title: "アーチ型＆システム建築鉄骨モデル | STRUCTIVA®",
      description: "Qシリーズ（完全アーチ）、Sシリーズ（直壁アーチ）、Pシリーズ（切妻）。風速240km/hに耐える高強度設計。",
      h1: "設計済エンジニアリング鉄骨モデル"
    },
    sectors: {
      title: "産業分野別ソリューション＆大型倉庫 | STRUCTIVA®",
      description: "農業用穀物倉庫、鉱山資材置場、航空機ハンガー、物流ハブ向けの内部無柱大空間。",
      h1: "産業分野別クリアスパン構造"
    },
    engineering: {
      title: "構造工学基準・ユーロコード3適合 | STRUCTIVA®",
      description: "EN 1090-2 EXC4、CEマーク、AISC 360-16、ASTM A792 Galvalume Plus® AZ180高耐食性合金鋼材。",
      h1: "ゼロトレランス構造エンジニアリング"
    },
    configurator: {
      title: "3D鉄骨建築コンフィギュレーター | STRUCTIVA®",
      description: "幅・長さ・高さを3Dで直感操作し、床面積、有効容積、40HC海上コンテナ積載数を即座に算出。",
      h1: "3Dパラメトリック設計ツール"
    },
    projects: {
      title: "世界50カ国以上の納入実績・施工事例 | STRUCTIVA®",
      description: "過酷な砂漠気候から豪雪地帯まで、世界各地で稼働する50万m²以上の施工実績。",
      h1: "世界経済を支える鉄骨建造物"
    },
    knowledge: {
      title: "鉄骨エンジニアリング技術ナレッジハブ | STRUCTIVA®",
      description: "産業用建物の計画指針、PEBと従来工法の比較、海外調達RFQ仕様書の作成ガイド。",
      h1: "技術ナレッジハブ＆技術ホワイトペーパー"
    },
    about: {
      title: "STRUCTIVAについて — アダナ製造拠点 | STRUCTIVA®",
      description: "年間25,000トンの加工能力を誇るアダナ最新鋭工場とエンジニアリングの歴史。",
      h1: "アダナ製造施設とエンジニアリングの歩み"
    },
    contact: {
      title: "お問い合わせ＆グローバル輸出窓口 | STRUCTIVA®",
      description: "アダナ本社の構造エンジニアに直接相談可能。24時間以内に予備構造計算と見積もりを提供。",
      h1: "グローバル輸出デスク＆お問い合わせ"
    },
    rfq: {
      title: "24時間正式技術見積依頼 (RFQ) | STRUCTIVA®",
      description: "プロジェクト寸法と建設地条件を入力するだけで、24時間以内に資材明细(BOM)とFOB/CIF見積書を発行。",
      h1: "正式見積依頼フォーム (RFQ)"
    }
  },

  hi: {
    home: {
      title: "बिना खंभों वाले मेहराबदार स्टील हैंगर व औद्योगिक भवन | STRUCTIVA®",
      description: "अदाना, तुर्की स्थित कारखाने में EN 1090-2 EXC4 प्रमाणित 9m से 45m तक क्लियर-स्पैन स्टील हैंगर का निर्माण। 50+ देशों में सीधा निर्यात।",
      h1: "कॉलम-मुक्त आर्च स्टील बिल्डिंग और औद्योगिक हैंगर"
    },
    models: {
      title: "आर्च और प्री-इंजीनियर्ड स्टील बिल्डिंग मॉडल | STRUCTIVA®",
      description: "Q-सीरीज़, S-सीरीज़, P-सीरीज़ और कंटेनर शेल्टर। बिना आंतरिक खंभों के 45m तक चौड़ाई और 240 किमी/घंटा हवा प्रतिरोध।",
      h1: "इंजीनियर्ड स्टील बिल्डिंग मॉडल"
    },
    sectors: {
      title: "कृषि, उड्डयन, खनन और रसद के लिए स्टील समाधान | STRUCTIVA®",
      description: "अनाज भंडारण, विमान हैंगर, खनन स्टॉकपाइल और बड़े वेयरहाउस के लिए बाधा रहित आंतरिक स्थान।",
      h1: "औद्योगिक क्षेत्र समाधान"
    },
    engineering: {
      title: "संरचनात्मक इंजीनियरिंग मानक व यूरोकोड 3 | STRUCTIVA®",
      description: "EN 1090-2 EXC4, CE मार्क, AISC 360-16 और गैलवाल्यूम प्लस® AZ180 मिश्र धातु द्वारा 50 साल का संक्षारण संरक्षण।",
      h1: "सटीक संरचनात्मक इंजीनियरिंग"
    },
    configurator: {
      title: "3D स्टील बिल्डिंग विन्यासकर्ता | STRUCTIVA®",
      description: "3D मॉडल में भवन की चौड़ाई, लंबाई व ऊंचाई दर्ज करें और 40HC समुद्री कंटेनर की सटीक संख्या जानें।",
      h1: "पैरामीट्रिक 3D विन्यासकर्ता"
    },
    projects: {
      title: "अंतर्राष्ट्रीय परियोजनाएं और वैश्विक संदर्भ | STRUCTIVA®",
      description: "दुनिया भर के 50 से अधिक देशों में 500,000 वर्ग मीटर से अधिक स्थापित स्टील संरचनाएं।",
      h1: "अर्थव्यवस्था को गति देने वाली संरचनाएं"
    },
    knowledge: {
      title: "स्टील इंजीनियरिंग तकनीकी ज्ञान केंद्र | STRUCTIVA®",
      description: "औद्योगिक भवनों की योजना, पीईबी बनाम पारंपरिक स्टील तुलना और अंतर्राष्ट्रीय खरीद गाइड।",
      h1: "तकनीकी ज्ञान केंद्र और श्वेतपत्र"
    },
    about: {
      title: "STRUCTIVA के बारे में — अदाना विनिर्माण संयंत्र | STRUCTIVA®",
      description: "तुर्की के अदाना में वार्षिक 25,000 मीट्रिक टन निर्माण क्षमता और मर्सिन बंदरगाह से त्वरित समुद्री रसद।",
      h1: "अदाना सुविधाएं और इंजीनियरिंग विरासत"
    },
    contact: {
      title: "संपर्क और वैश्विक निर्यात विभाग | STRUCTIVA®",
      description: "अदाना इंजीनियरों से सीधे संपर्क करें और 24 घंटे के भीतर तकनीकी प्रस्ताव प्राप्त करें।",
      h1: "वैश्विक निर्यात और संपर्क डेस्क"
    },
    rfq: {
      title: "24 घंटे में आधिकारिक मूल्य उद्धरण (RFQ) प्राप्त करें | STRUCTIVA®",
      description: "परियोजना का आकार बताएं और 24 घंटे में सामग्री बिल (BOM) तथा FOB/CIF मूल्य उद्धरण पाएं।",
      h1: "आधिकारिक परियोजना उद्धरण अनुरोध (RFQ)"
    }
  },

  uk: {
    home: {
      title: "Безколонні арочні сталеві ангари та склади | STRUCTIVA® Адана",
      description: "Виробництво арочних сталевих ангарів без внутрішніх колон (9м-45м) за стандартом EN 1090-2 EXC4. Експорт у 50+ країн світу через порт Мерсін.",
      h1: "Сталеві арочні споруди без колон та промислові ангари"
    },
    models: {
      title: "Моделі сталевих арочних та PEB будівель | STRUCTIVA®",
      description: "Серії Q, S, P та накриття для контейнерів. Прогони до 45м, стійкість до ураганного вітру 240 км/год.",
      h1: "Інженерні моделі сталевих конструкцій"
    },
    sectors: {
      title: "Рішення для агросектору, складів та промисловості | STRUCTIVA®",
      description: "Сталеві конструкції без внутрішніх опор для зберігання зерна, ангарів авіації та логістичних терміналів.",
      h1: "Галузеві рішення для промисловості"
    },
    engineering: {
      title: "Інженерні стандарти, статичні розрахунки та Єврокод 3 | STRUCTIVA®",
      description: "Сертифікація EN 1090-2 EXC4, маркування CE, AISC 360-16 та сплав Galvalume Plus® AZ180.",
      h1: "Високоточне проєктування металоконструкцій"
    },
    configurator: {
      title: "Інтерактивний 3D конфігуратор сталевих будівель | STRUCTIVA®",
      description: "Задайте параметри будівлі та отримайте розрахунок об'єму морських контейнерів 40HC у 3D.",
      h1: "Параметричний 3D конфігуратор"
    },
    projects: {
      title: "Міжнародні реалізовані проекти та об'єкти | STRUCTIVA®",
      description: "Понад 500 000 м² змонтованих сталевих споруд у більш ніж 50 країнах світу.",
      h1: "Споруди, що підтримують економіку"
    },
    knowledge: {
      title: "База інженерних знань та технічні посібники | STRUCTIVA®",
      description: "Посібники з проєктування ангарів, порівняння PEB та класичного металопрокату.",
      h1: "Центр знань та інженерні посібники"
    },
    about: {
      title: "Про компанію STRUCTIVA — Завод в Адані | STRUCTIVA®",
      description: "Виробничий комплекс потужністю 25 000 тонн на рік в Адані, Туреччина.",
      h1: "Завод STRUCTIVA в Адані та інженерна спадщина"
    },
    contact: {
      title: "Контакти та міжнародний експортний відділ | STRUCTIVA®",
      description: "Зв'яжіться з нашими інженерами в Адані та отримайте розрахунок за 24 години.",
      h1: "Міжнародний експортний відділ та контакти"
    },
    rfq: {
      title: "Запит комерційної пропозиції (RFQ) за 24 години | STRUCTIVA®",
      description: "Надішліть розміри споруди та отримайте специфікацію матеріалів і вартість доставки FOB/CIF.",
      h1: "Офіційний запит комерційної пропозиції (RFQ)"
    }
  }
};

/**
 * Universal safe localized SEO getter.
 * Returns targeted language SEO or falls back to English, then Turkish.
 */
export function getPageSEO(pageKey: string, lang: string = "tr"): PageSEOMeta {
  const normLang = (lang || "tr").toLowerCase().split("-")[0];
  
  if (SEO_REGISTRY[normLang] && SEO_REGISTRY[normLang][pageKey]) {
    return SEO_REGISTRY[normLang][pageKey];
  }

  if (SEO_REGISTRY["en"] && SEO_REGISTRY["en"][pageKey]) {
    return SEO_REGISTRY["en"][pageKey];
  }

  if (SEO_REGISTRY["tr"] && SEO_REGISTRY["tr"][pageKey]) {
    return SEO_REGISTRY["tr"][pageKey];
  }

  return {
    title: "STRUCTIVA — Clear-Span Steel Structures & Hangars",
    description: "EN 1090-2 EXC4 certified clear-span arch steel hangars manufactured in Adana, Turkey.",
    h1: "STRUCTIVA Engineered Steel Structures"
  };
}
