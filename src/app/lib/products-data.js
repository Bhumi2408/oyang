/**
 * Single source of truth for the entire product catalog.
 * Structure: Category → Product Line (sub-category) → Model (individual machine)
 *
 * URL pattern:
 *   /products                                  → all categories
 *   /products/[category]                       → product lines within category
 *   /products/[category]/[line]                → models within that line
 *   /products/[category]/[line]/[model]        → full model detail page
 *
 * To add a new model, find its line below and push into `models`.
 * To add a new line, push into the category's `lines` array.
 */

export const categories = [
  {
    slug: "forming-machine",
    name: "Forming Machine",
    shortDesc: "Bag & pouch forming machines — the core of every packaging line.",
    longDesc:
      "OYANG's Forming Machine range covers everything from nonwoven and paper bag lines to flexible pouch and paper forming equipment — the machines that turn raw material rolls into finished bags, pouches and tableware.",
    color: "#ff7a18",
    image: "/images/products/forming-machines.png",
    lines: [
      {
        slug: "nonwoven-bag-making-machine",
        name: "Nonwoven Bag Making Machine",
        shortDesc: "Supermarket · Eco bags · Takeaway",
        longDesc:
          "D-cut bags, T-shirt bags, box bags, handle bags and fully automatic nonwoven box bag production lines. Speed range: 60–360 pcs/min.",
        image: "/images/product2.jpg",
        models: [
          {
            slug: "tech-26",
            name: "TECH 26 Intelligent Production Line",
            shortDesc: "Full-line automation: auto case erecting, packing, sealing & palletizing.",
            specs: { "Speed": "90–100 pcs/min", "Automation": "Full-line, zero manual intervention" },
          },
          {
            slug: "tech-23",
            name: "TECH 23 — Auto Mold Change in 90s",
            shortDesc: "Vision inspection, auto rejection, robotic bundling, line linkage.",
            specs: { "Speed": "90–100 pcs/min", "Mold Change": "90 seconds" },
          },
        ],
      },
      {
        slug: "roll-fed-paper-bag-making-machine",
        name: "Roll Fed Paper Bag Machine",
        shortDesc: "Food · Shopping · Retail",
        longDesc:
          "Twisted handle, flat handle, SOS, V-bottom and high-speed paper bag production lines. Up to 600 pcs/min.",
        image: "/images/hero.jpg",
        models: [
          {
            slug: "tech-18-auto-size-change-paper-bag-machine",
            name: "TECH 18 Auto Size Change Paper Bag Machine",
            shortDesc: "Industry-only 2-minute size change vs. 6 hours on traditional machines.",
            specs: { "Speed": "150 pcs/min", "Size Change": "2 minutes (auto)" },
          },
          {
            slug: "smart-17-auto-high-speed-paper-bag-production-line",
            name: "SMART 17 High-Speed Paper Bag Production Line",
            shortDesc: "Auto stacking, bundling, boxing & palletizing. Daily output 200,000+.",
            specs: { "Speed": "180–220 pcs/min", "Daily Output": "200,000+ bags" },
          },
          {
            slug: "sg600-high-speed-sos-paper-bag-machine-with-inline-printing",
            name: "SG600 High-Speed SOS Paper Bag Machine",
            shortDesc: "Dedicated high-volume SOS paper bag production with inline flexo printing.",
            specs: { "Speed": "Up to 600 pcs/min", "Printing": "Inline flexo" },
          },
        ],
      },
      {
        slug: "sheet-fed-box-bag-making-machine",
        name: "Sheet Fed Box Bag Machine",
        shortDesc: "Gift · Luxury · Apparel · Tobacco & Alcohol",
        longDesc: "Non-crease sheet fed machines for premium gift, luxury and apparel box bags.",
        image: "/images/product3.jpg",
        models: [
          {
            slug: "great-4-0-supreme-sheet-fed-non-crease-paper-bag-machine",
            name: "Great 4.0 Supreme Sheet Fed Non-Crease Paper Bag Machine",
            shortDesc: "Auto rope threading, 30-min size change, no crease line.",
            specs: { "Speed": "2,000–2,500 pcs/hr", "Size Change": "30 minutes" },
          },
        ],
      },
      {
        slug: "flexible-pouch-making-machine",
        name: "Flexible Pouch Machine",
        shortDesc: "Drink · Pet food · Pharma · Daily care",
        longDesc: "3-side seal, stand-up, zipper, flat bottom and multi-function pouch making machines. Up to 240 CPM.",
        image: "/images/product4.jpg",
        models: [
          {
            slug: "oyang-650szll-multi-function-pouch-making-machine",
            name: "OYANG 650SZLL Multi-Function Pouch Machine",
            shortDesc: "3-side seal + stand-up + zipper pouches on one platform.",
            specs: { "Speed": "Up to 240 CPM", "Pouch Types": "3-side seal, stand-up, zipper" },
          },
          {
            slug: "oyang-650qsb-flat-bottom-pouch-making-machine",
            name: "OYANG 650QSB Flat Bottom Pouch Machine",
            shortDesc: "For flat bottom, box pouch and 8-side seal pouches — coffee, pet food, premium packaging.",
            specs: { "Pouch Types": "Flat bottom, box pouch, 8-side seal" },
          },
        ],
      },
      {
        slug: "paper-forming-machine",
        name: "Paper Forming Machine",
        shortDesc: "Cutlery · Plates · Eco hanger",
        longDesc: "China's first & only manufacturer of degradable, recyclable paper cutlery forming lines.",
        image: "/images/product5.jpg",
        models: [],
      },
    ],
  },
  {
    slug: "printing",
    name: "Printing",
    shortDesc: "Rotogravure, flexographic and screen printing for every substrate.",
    longDesc:
      "High-precision printing machinery for film, paper and nonwoven substrates — from ultra-fast rotogravure lines to flexible unit-type flexo presses.",
    color: "#135CA1",
    image: "/images/products/printing-machine.png",
    lines: [
      {
        slug: "rotogravure-printing-machine",
        name: "Rotogravure Printing",
        shortDesc: "High-speed · Flexible film",
        longDesc: "Ultra-precision gravure printing for flexible packaging film, up to 400 m/min.",
        image: "/images/hero.jpg",
        models: [
          {
            slug: "honor-4-0-els-rotogravure-printing-machine",
            name: "HONOR 4.0 ELS Rotogravure Printing Machine",
            shortDesc: "Ultra-precision gravure printing for flexible packaging.",
            specs: { "Speed": "400 m/min", "Register Accuracy": "±0.05mm" },
          },
        ],
      },
      {
        slug: "flexographic-printing-machine",
        name: "Flexographic Printing",
        shortDesc: "Paper · Nonwoven · Eco ink",
        longDesc: "Stack-type, CI-type and unit-type inline flexo printing machines for paper and nonwoven substrates.",
        image: "/images/product3.jpg",
        models: [],
      },
      {
        slug: "screen-printing-machine",
        name: "Screen Printing",
        shortDesc: "Nonwoven bags · Spot color",
        longDesc: "Single and double color roll-to-roll nonwoven screen printing machines.",
        image: "/images/product4.jpg",
        models: [],
      },
    ],
  },
  {
    slug: "post-press-converting",
    name: "Post-Press & Converting",
    shortDesc: "Die cutting, lamination and finishing for premium packaging.",
    longDesc:
      "Flatbed die cutting, hot stamping, lamination and flute laminating machines that give packaging its final, premium finish.",
    color: "#809783",
    image: "/images/products/post-press.png",
    lines: [
      {
        slug: "flatbed-die-cutting-machine",
        name: "Flatbed Die Cutting",
        shortDesc: "Stripping · Embossing · Foiling",
        longDesc: "Flatbed die cutting, stripping, embossing and hot stamping machines across multiple format sizes.",
        image: "/images/hero.jpg",
        models: [],
      },
      {
        slug: "roll-to-roll-lamination",
        name: "Roll to Roll Lamination",
        shortDesc: "BOPP · Matte · Gloss",
        longDesc: "Extrusion coating, dry laminating and solvent-free lamination machines.",
        image: "/images/product2.jpg",
        models: [],
      },
      {
        slug: "flute-laminating-machine",
        name: "Flute Laminating Machine",
        shortDesc: "Box · Rigid board",
        longDesc: "Automatic flute laminating machines with flip-flop stacker for corrugated board.",
        image: "/images/product5.jpg",
        models: [],
      },
    ],
  },
  {
    slug: "auxiliary-equipment",
    name: "Auxiliary Equipment",
    shortDesc: "Slitting, sealing and finishing equipment for every production line.",
    longDesc:
      "Auxiliary machines that complete your production line — slitters, handle pasting units, sealers, punchers and coaters.",
    color: "#9D5FC8",
    image: "/images/products/auxiliary.png",
    lines: [
      { slug: "paper-bag-auxiliary-equipment", name: "Paper Bag Auxiliary", shortDesc: "Slitter · Handle pasting · Rope", longDesc: "Slitting, handle pasting and rope-attachment auxiliary machines for paper bag lines.", image: "/images/hero.jpg", models: [] },
      { slug: "nonwoven-bag-auxiliary-equipment", name: "Nonwoven Bag Auxiliary", shortDesc: "Sealing · Punching · Embossing", longDesc: "Sealing, punching and embossing auxiliary equipment for nonwoven bag lines.", image: "/images/product2.jpg", models: [] },
      { slug: "flexible-pouch-auxiliary", name: "Flexible Pouch Auxiliary", shortDesc: "Film slitter · Coating", longDesc: "Film slitting and coating auxiliary equipment for pouch production.", image: "/images/product3.jpg", models: [] },
      { slug: "paper-forming-auxiliary", name: "Paper Forming Auxiliary", shortDesc: "Slitting · Packing", longDesc: "Slitting and packing auxiliary machines for paper forming lines.", image: "/images/product5.jpg", models: [] },
    ],
  },
  {
    slug: "raw-material",
    name: "Raw Material",
    shortDesc: "Paper, nonwoven fabric and flexible film rolls sourced for your production.",
    longDesc:
      "OYANG supplies the raw material rolls — paper, nonwoven fabric and flexible film — that feed directly into our machines.",
    color: "#BC0019",
    image: "/solutions/materials/non-woven-fabric-rolls.png",
    lines: [
      { slug: "paper-rolls", name: "Paper Rolls", shortDesc: "Kraft · Coated · White", longDesc: "Kraft, coated and white paper rolls for bag and packaging production.", image: "/images/hero.jpg", models: [] },
      { slug: "non-woven-fabric-rolls", name: "Non-woven Fabric Rolls", shortDesc: "PP Spunbond · Laminated", longDesc: "PP spunbond and laminated nonwoven fabric rolls.", image: "/images/product2.jpg", models: [] },
      { slug: "flexible-film-rolls", name: "Flexible Film Rolls", shortDesc: "BOPP · PET · Alu-foil", longDesc: "BOPP, PET and aluminum-foil flexible film rolls for pouch and printing applications.", image: "/images/product3.jpg", models: [] },
    ],
  },
];

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug) || null;
}

export function getLine(categorySlug, lineSlug) {
  const category = getCategory(categorySlug);
  if (!category) return { category: null, line: null };
  const line = category.lines.find((l) => l.slug === lineSlug) || null;
  return { category, line };
}

export function getModel(categorySlug, lineSlug, modelSlug) {
  const { category, line } = getLine(categorySlug, lineSlug);
  if (!line) return { category, line: null, model: null };
  const model = line.models.find((m) => m.slug === modelSlug) || null;
  return { category, line, model };
}