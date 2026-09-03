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
