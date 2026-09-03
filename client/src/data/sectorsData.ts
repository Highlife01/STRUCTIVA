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
