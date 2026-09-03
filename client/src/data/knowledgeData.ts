export interface ArticleItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  relatedServices: string[];
  image: string;
}

export const KNOWLEDGE_ARTICLES: ArticleItem[] = [
  {
    slug: "how-to-plan-industrial-steel-building",
    title: "How to Plan an Industrial Steel Building: Span, Clearances & Load Factors",
    category: "Planning & Engineering",
    readTime: "6 min read",
    publishedDate: "2026-02-15",
    summary: "A practical guide for developers and procurement directors on establishing optimal clear spans, ridge heights, column grids, and regional snow/wind load parameters.",
    keyTakeaways: [
      "Clear-span arches eliminate interior columns, giving 100% unrestricted forklift and crane maneuverability.",
      "Local wind velocity (up to 240 km/h) and snow drifts dictate panel gauge and arch radius.",
      "Pre-planning slab ground anchoring reduces civil foundation expenditure by up to 25%."
    ],
    relatedServices: ["Q-Series Clear-Span", "S-Series Straight Wall", "Engineering & Static Analysis"],
    image: "/images/arched-steel-hangar-hd.jpg",
    content: [
      "Planning an industrial steel structure requires balancing operational efficiency, regulatory compliance, and total lifecycle investment. The first critical decision is determining whether your operations require an unobstructed clear span or if interior columns are acceptable.",
      "Clear-span structures, such as arched Quonset systems and rigid portal frames, transfer vertical and lateral loads along the perimeter foundation. For warehousing, aircraft maintenance, and bulk material stockpiling, removing interior columns prevents traffic bottlenecks and maximizes cubic storage volume.",
      "Design wind load must reflect the specific terrain category, coastal proximity, and elevation. At STRUCTIVA's Adana engineering center, all calculations comply with Eurocode 1 (EN 1991-1-4) and AISC 360-16, ensuring structures comfortably survive hurricane-force gusts up to 240 km/h.",
      "Before finalizing procurement, verify your local soil bearing capacity. Steel arch buildings distribute weight continuously along perimeter footings or grade beams, which often requires simpler foundations compared to the concentrated point loads of heavy tilt-up concrete."
    ]
  },
  {
    slug: "peb-vs-conventional-structural-steel",
    title: "Pre-Engineered Buildings (PEB) vs. Conventional Structural Steel",
    category: "Technical Comparison",
    readTime: "5 min read",
    publishedDate: "2026-02-20",
    summary: "Detailed comparison between pre-engineered factory-built steel kits and field-welded conventional steel frames in cost, lead time, and seismic ductility.",
    keyTakeaways: [
      "PEB systems save 30% to 40% in project completion time compared to field-welded steel.",
      "Tapered built-up sections use steel only where bending moments require it, reducing total tonnage by 20%.",
      "Factory bolt-hole precision guarantees zero on-site cutting or hot-work welding permits."
    ],
    relatedServices: ["Pre-Engineered Buildings (PEB)", "Industrial Factories", "Heavy Fabrication"],
    image: "/images/global-project.jpg",
    content: [
      "For decades, conventional structural steel—fabricated from standard hot-rolled I-beams and channels—was the default choice for heavy industrial facilities. However, Pre-Engineered Buildings (PEBs) have revolutionized international commercial construction.",
      "In a conventional structure, members have uniform cross-sections along their entire length regardless of actual stress distribution. PEB frames utilize custom tapered plates that mirror the moment diagram—thickest at knee joints where stresses peak, and tapering toward low-stress zones. This optimization cuts structural weight by 20% to 30% without sacrificing safety.",
      "Furthermore, all connections in a modern PEB are pre-punched for high-tensile Grade 8.8 or 10.9 structural bolts. Assembly proceeds rapidly on-site with standard mobile cranes and torque wrenches, avoiding the high costs and inspection delays of certified field welders.",
      "STRUCTIVA manufactures PEB and arch hybrid systems in Adana under certified EN 1090-2 Execution Class 4 standards, pre-inspecting all joints with ultrasonic and magnetic particle testing before container dispatch."
    ]
  },
  {
    slug: "how-to-prepare-structural-steel-rfq",
    title: "How to Prepare an International Structural Steel RFQ & Specification",
    category: "Procurement & Commercial",
    readTime: "7 min read",
    publishedDate: "2026-02-28",
    summary: "What engineering data, site conditions, and accessory lists procurement managers must include to receive accurate, fast, and competitive steel quotations.",
    keyTakeaways: [
      "Provide precise site coordinates to determine statutory wind, seismic, and snow codes.",
      "Specify required door clear openings (width × clearance) early to incorporate portal framing.",
      "Request Incoterms (FOB or CIF) aligned with port handling capabilities."
    ],
    relatedServices: ["Request a Quote (RFQ)", "Turnkey Engineering", "International Shipping"],
    image: "/images/engineering-detail.jpg",
    content: [
      "An ambiguous Request for Quotation (RFQ) leads to conservative safety assumptions, inflated pricing, or costly change orders later in the project lifecycle. Providing structured engineering criteria enables STRUCTIVA to furnish a razor-sharp, competitive proposal within 24 hours.",
      "Key technical parameters to define include: (1) Clear Span (width from inside to inside of cladding), (2) Building Length and Bay Spacing, (3) Eave and Ridge Clearances, (4) Specific operational equipment such as bridge cranes, HVAC ducting, or suspended conveyor systems.",
      "Cladding specification is equally important. Specify whether uninsulated Galvalume Plus® arch panels suffice (ideal for bulk storage and hangars) or if fiberglass blanket insulation (R-13 to R-30) or insulated sandwich panels are required for climate-controlled warehousing.",
      "Finally, note any specialized port delivery requirements. STRUCTIVA loads all kits in flat-pack fashion into 40HC containers at our Adana facility for direct Mediterranean seaport transfer to destination ports globally."
    ]
  },
  {
    slug: "galvalume-plus-corrosion-science",
    title: "Galvalume Plus® AZ180 Metallurgy: Corrosion Resistance & Solar Reflectance",
    category: "Materials & Metallurgy",
    readTime: "5 min read",
    publishedDate: "2026-03-01",
    summary: "Why a 55% Aluminum-Zinc alloy outperforms conventional hot-dip galvanized steel by 4 to 6 times in harsh marine and industrial environments.",
    keyTakeaways: [
      "55% Aluminum, 43.4% Zinc, and 1.6% Silicon barrier coating creates self-healing sacrificial galvanic protection.",
      "40–50 year lifespan without requiring re-painting or maintenance.",
      "High thermal reflectivity bounces back 80% of solar radiation, cooling interior work zones."
    ],
    relatedServices: ["Galvalume Plus Panels", "Mining & Chemical Enclosures", "Coastal Facilities"],
    image: "/images/hero-arch-structure.jpg",
    content: [
      "Galvalume Plus® (ASTM A792 / AZ180) is the global benchmark for heavy-duty metal roofing and arched structural building panels. Unlike conventional galvanized steel which relies purely on zinc, Galvalume combines the barrier longevity of aluminum with the sacrificial protection of zinc.",
      "When exposed to corrosive atmospheres—such as coastal sea-salt spray, agricultural ammonia, or mining chemical dust—the aluminum portion forms an impenetrable microscopic oxide film. If the panel is scratched or drilled, the adjacent zinc corrodes preferentially to protect the exposed core steel.",
      "Independent salt-spray tests prove Galvalume Plus lasts four to six times longer than standard G90 galvanized sheets in aggressive environments, allowing STRUCTIVA to offer comprehensive 40-to-50-year material warranties.",
      "An additional advantage is thermal efficiency: the bright spangled surface reflects up to 80% of solar infrared rays, dramatically reducing heat gain inside hangars and grain silos in hot arid climates."
    ]
  }
];
