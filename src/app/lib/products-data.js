

export const categories = [
  {
    slug: "forming-machine",
    name: "Forming Machine",
    shortDesc: "Bag & pouch forming machines — the core of every packaging line.",
    longDesc:
      "Explore OYANG forming machine categories and quickly find the right production solution for roll fed paper bags, sheet fed box bags, nonwoven bags, flexible pouches and paper forming products.",
    color: "#ff7a18",
    image: "/images/hero.jpg",
    stats: [
      { value: "5", label: "Main Categories" },
      { value: "25+", label: "Machine Models" },
      { value: "200+", label: "R&D Engineers" },
      { value: "80+", label: "Bilingual Service Engineers" },
    ],
    features: [
      { title: "Full-Chain Forming Solutions", desc: "From paper bags and nonwoven bags to flexible pouches and paper products, OYANG covers multiple forming processes." },
      { title: "Precision CNC Manufacturing", desc: "MAZAK flexible production lines and Okuma systems support high-precision processing of key machine components." },
      { title: "Engineering-Based Selection", desc: "Machine configuration is recommended according to bag type, material, size range, output and automation requirements." },
      { title: "Global Service Support", desc: "80+ bilingual after-sales engineers provide online support, installation guidance, training and spare parts service." },
    ],
    faqs: [
      { q: "Which forming machine should I choose for shopping bags?", a: "For paper shopping bags, start with the roll fed paper bag or sheet fed box bag category. For reusable supermarket bags, choose nonwoven bag making. The final model depends on bag size, handle type, material and target output." },
      { q: "What's the difference between roll fed and sheet fed paper bag machines?", a: "Roll fed machines use paper rolls for high-volume square bottom, SOS and handle bags. Sheet fed machines use sheet paper, designed for premium non-crease box bags used in luxury retail, gift, wine and fashion packaging." },
      { q: "Can OYANG provide a complete production line instead of a single machine?", a: "Yes. OYANG provides full-chain and turnkey solutions — forming machines, printing, post-press converting, auxiliary equipment, packing, palletizing and intelligent factory planning." },
      { q: "What information should I provide before requesting a recommendation?", a: "Your target product type, material, size range, required output, automation level, available workshop space and sample pictures or drawings if available." },
    ],
    lines: [
      {
        slug: "nonwoven-bag-making-machine",
        name: "Nonwoven Bag Making Machine",
        shortDesc: "Supermarket · Eco bags · Takeaway",
        longDesc: "From flat D-cut bags to fully automated box bag factories — 12+ models across two series: Nonwoven Box Bag (3D structured, 60–100 pcs/min) and Nonwoven Flat Bag (D-cut, T-shirt, drawstring, carry handle, suit cover — up to 360 pcs/min).",
        image: "/images/product2.jpg",
        stats: [
          { value: "12+", label: "Models" },
          { value: "40–360", label: "pcs/min" },
          { value: "≤5‰", label: "Defect Leak Rate" },
          { value: "20yr", label: "Experience" },
        ],
        bagTypesProduced: [
          "Takeaway Box Bag", "Cake Bag", "D-Cut Bag", "T-Shirt Bag", "Fashion Shopping Bag",
          "Hot Foil Box Bag", "Carry Handle Bag", "Glitter Film Bag", "Drawstring Bag",
          "Embossed Box Bag", "Suit Cover Bag", "Aluminum Film Bag", "PLA Eco Bag", "Insulated Bag",
        ],
        process: [
          { step: "01", title: "Roll Feeding", desc: "Auto-tension unwinding, ±0.5mm edge correction." },
          { step: "02", title: "Folding", desc: "Servo-controlled fold with real-time bag-mouth correction." },
          { step: "03", title: "Indirect Tape Application", desc: "Saves ¥100,000+/year vs. full-width continuous tape (from OYANG 18)." },
          { step: "04", title: "Handle Attachment", desc: "Auto-fed, auto-centered ±0.5mm precision." },
          { step: "05", title: "Box Forming", desc: "3D structure formed by bottom-opening mold. Auto mold change on SMART-19+." },
          { step: "06", title: "Ultrasonic Sealing", desc: "2× stronger bond vs. traditional heat seal. No glue, no thread." },
          { step: "07", title: "AI Vision Inspection", desc: "Scans every bag for handle, glue & seal defects (from OYANG 19)." },
          { step: "08", title: "Auto Defect Rejection", desc: "Defective bags auto-ejected instantly (from OYANG 19)." },
          { step: "09", title: "Robotic Auto Picking", desc: "Robotic arm picks every qualified bag at full speed (from OYANG 20)." },
          { step: "10", title: "Auto Bundling", desc: "Auto-counted & strapped into preset bundles (from OYANG 20)." },
          { step: "11", title: "Auto Case Erecting & Packing", desc: "Cartons auto-erected and filled — zero manual handling (TECH-26 only)." },
          { step: "12", title: "Auto Sealing & Palletizing", desc: "Sealed cartons stacked onto pallets automatically (TECH-26 only)." },
        ],
        videoChannel: "https://www.youtube.com/@oyang.packaging",
        models: [
          { slug: "oyang-16s", name: "OYANG 16S — Foundation Model", shortDesc: "Full servo, auto handle centering, auto bag-mouth correction.", specs: { "Speed": "60–80 pcs/min", "Factory Space": "~70 m²" } },
          { slug: "oyang-18", name: "OYANG 18 — Indirect Tape Applicator", shortDesc: "Saves ¥100,000+/year vs. full-width continuous tape.", specs: { "Speed": "80–100 pcs/min" } },
          { slug: "oyang-19", name: "OYANG 19 — AI Vision + Auto Rejection", shortDesc: "Indirect tape + vision inspection + auto rejection.", specs: { "Speed": "80–100 pcs/min", "Defect Leak Rate": "≤5‰" } },
          { slug: "oyang-20", name: "OYANG 20 — Robotic Bundling", shortDesc: "Vision + auto rejection + robotic bundling + line linkage.", specs: { "Speed": "80–90 pcs/min", "Workers Saved": "2/shift" } },
          { slug: "smart-19", name: "SMART 19 — Auto Mold Change", shortDesc: "Indirect tape + one-key auto mold change.", specs: { "Speed": "90–100 pcs/min" } },
          { slug: "tech-23", name: "TECH 23 — Full Smart Line", shortDesc: "Vision + auto reject + robotic bundle + line linkage + auto mold change.", specs: { "Speed": "90–100 pcs/min", "Workers Saved": "16/line" } },
          { slug: "tech-25", name: "TECH 25 — Full Smart Line", shortDesc: "With M-fold Bottom + Auto Handle Flipping", specs: { "Speed": "90–100 pcs/min", "Workers Saved": "16/line" } },
          { slug: "tech-26", name: "TECH 26 — Full Factory Automation", shortDesc: "Auto case erecting, packing, sealing & palletizing.", specs: { "Speed": "90–100 pcs/min", "Workers Saved": "16+/line" } },
          // { slug: "xc700-800", name: "XC700 / XC800", shortDesc: "D-Cut, drawstring, carry handle & T-shirt bag machine.", specs: { "Speed": "40–100 pcs/min" } },
          // { slug: "xb700-800", name: "XB700 / XB800 — 5-in-1 Multifunctional", shortDesc: "D-cut, drawstring, T-shirt, carry handle & box bag (flip-bottom).", specs: { "Speed": "40–100 pcs/min", "Bag Types": "5 (all)" } },
          // { slug: "cp700-800", name: "CP700 / CP800", shortDesc: "W-Cut / T-shirt bag specialist — highest output.", specs: { "Speed": "60–360 pcs/min (1/2/3 channel)" } },
          // { slug: "xg1200", name: "XG1200", shortDesc: "Suit cover & pearl cotton insulated bag machine with inline sewing.", specs: { "Speed": "10–14 m/min" } },
        ],
        faqs: [
          { q: "Which nonwoven bag machine should I choose for my bag type?", a: "D-cut/flat/drawstring bags → C700/C800. W-cut/T-shirt bags → CP700/CP800. Carry handle bags → XC/XB 700/800. Premium box bags → OYANG 16S through TECH-26 (by automation level). Suit cover/garment bags → XG1200." },
          { q: "What is the difference between a flat bag machine and a box bag machine?", a: "A regular machine makes flat bags, D-cut, T-shirt and drawstring bags. A box bag machine makes 3D structured bags with side gussets and a flat bottom — better capacity and load-bearing, used for food delivery, supermarkets and fashion." },
          { q: "Does the machine support online handle sealing?", a: "Yes — XC700/800 & XB700/800 have inline handle sealing; OYANG 16S+ box bag models have automatic handle centering with touchscreen adjustment; XG1200 combines handle sealing with inline sewing for a double-lock bond." },
          { q: "What is the warranty policy?", a: "All machines include a 1-year warranty from installation sign-off, with free part replacement for non-human-caused damage, plus a free spare parts list shipped with every machine." },
        ],
      },
      {
        slug: "roll-fed-paper-bag-making-machine",
        name: "Roll Fed Paper Bag Machine",
        shortDesc: "Food · Shopping · Retail",
        longDesc: "Automatic handle paper bags, flat handle bags, SOS square bottom bags, V-bottom food bags and high-speed fixed-size paper bag production lines.",
        image: "/images/hero.jpg",
        stats: [
          { value: "2 min", label: "Auto Size Change (TECH-18)" },
          { value: "180–220", label: "bags/min (SMART-17)" },
          { value: "350–600", label: "pcs/min (SG600)" },
          { value: "Turnkey", label: "Automation Ready" },
        ],
        bagTypesProduced: [
          "V-Bottom Food Bag", "Kraft SOS Paper Bag", "Printed SOS Paper Bag",
          "Twisted Handle Shopping Bag", "Flat Handle Shopping Bag", "Window Paper Bag",
        ],
        process: [
          { step: "01", title: "Handle Rope Feeding", desc: "Rope or flat handle material enters the handle unit." },
          { step: "02", title: "Handle Making", desc: "Handle material is formed, cut and prepared." },
          { step: "03", title: "Handle Attaching", desc: "The formed handle is transferred and attached." },
          { step: "04", title: "Paper Roll Feeding", desc: "Roll paper is unwound and fed into the main machine." },
          { step: "05", title: "Web Guiding", desc: "Corrects paper web deviation in real time." },
          { step: "06", title: "Optional Units", desc: "+P patch, +W window, +D double layer or +T printing units." },
          { step: "07", title: "Glue Application", desc: "Glue is applied to handle, side or bottom areas." },
          { step: "08", title: "Tube Forming", desc: "Paper is folded through the forming template." },
          { step: "09", title: "Cutting", desc: "The paper tube is cut according to bag length." },
          { step: "10", title: "Bottom Opening", desc: "The cut paper tube bottom is opened." },
          { step: "11", title: "Bottom Forming", desc: "The bottom is folded and sealed into final shape." },
          { step: "12", title: "Stacking & Counting", desc: "Finished bags are delivered, stacked and counted." },
        ],
        videos: [
          { title: "TECH-18 Auto Size Change Paper Bag Machine Introduction", url: "https://youtu.be/sVtMD0NGR0g" },
          { title: "Automatic Cartoning & Palletizing Function Display", url: "https://youtu.be/Ticp5bg8ODU" },
          { title: "TECH-18 Automatic Size Change Function Video", url: "https://youtu.be/G7F_xOaky8g" },
          { title: "SMART-17 High-Speed Single/Double Cup Paper Bag Machine", url: "https://youtu.be/pk_0sHBwido" },
          { title: "SMART-17 AS Flat Handle Inline Fold-In Working Video", url: "https://youtu.be/9KXtf67FuZE" },
          { title: "OYANG 16A Twisted/Flat Rope Handle Paper Bag Machine", url: "https://youtu.be/A68gKs9eH6I" },
          { title: "OYANG 16B with 4-Color Inline Printing", url: "https://youtu.be/sGRsiz82lRc" },
          { title: "SG600 High-Speed Paper Bag Machine Introduction", url: "https://youtu.be/K8p5VHMcu5c" },
        ],
        models: [
          { slug: "tech-18-auto-size-change-paper-bag-machine", name: "TECH 18 Auto Size Change Paper Bag Machine", shortDesc: "2-minute automatic size change for short-run, multi-size orders.", specs: { "Size Change": "2 minutes (auto)" } },
          { slug: "smart-17-auto-high-speed-paper-bag-production-line", name: "SMART 17 High-Speed Paper Bag Production Line", shortDesc: "Large-volume handle bag orders with auto stacking, bundling, cartoning and palletizing.", specs: { "Speed": "180–220 pcs/min" } },
          { slug: "smart-17-as-automatic-flat-handle-paper-bag-machine", name: "SMART 17 AS Flat Handle Paper Bag Machine", shortDesc: "Inline fold-in flat handle bags for retail, takeaway and shopping.", specs: {} },
          { slug: "oyang-16a-full-auto-twisted-flat-rope-handle-paper-bag-machine", name: "OYANG 16A Twisted & Flat Rope Handle Machine", shortDesc: "For shopping, fashion, bakery and takeaway handle bags.", specs: {} },
          { slug: "oyang-16b-semi-automatic-sos-paper-bag-machine", name: "OYANG 16B Semi-Automatic SOS Paper Bag Machine", shortDesc: "SOS bags without handles. Optional +P patch, +W window, +D double layer, +T printing.", specs: {} },
          { slug: "oyang-16c-v-bottom-sharp-bottom-paper-bag-machine", name: "OYANG 16C V-Bottom Paper Bag Machine", shortDesc: "V-bottom bags for bread, snacks, bakery, fast food and takeaway.", specs: {} },
          { slug: "sg600-high-speed-sos-paper-bag-machine-with-inline-printing", name: "SG600 High-Speed SOS Paper Bag Machine", shortDesc: "Single-specification large-volume SOS bags with inline printing.", specs: { "Speed": "350–600 pcs/min" } },
        ],
        faqs: [
          { q: "What materials are suitable?", a: "Kraft paper, white kraft, coated paper, greaseproof paper and white cardboard. Food-grade paper available for food packaging applications." },
          { q: "Can the machine work with inline printing?", a: "Yes — some models support 2, 4 or 6-color inline printing units, reducing handling steps for customers who need printed bags in one continuous process." },
          { q: "Can one machine produce different bag sizes?", a: "Depends on the model — some support a wide size range, others (like SG600) are fixed-spec high-speed machines. TECH-18 offers 2-minute auto size change for frequent small-batch orders." },
          { q: "What information should I provide before choosing a machine?", a: "Bag type, bag size, paper material, paper GSM, required speed, whether printing/handles are needed, and your target application — samples or drawings help most." },
        ],
      },
      {
        slug: "sheet-fed-box-bag-making-machine",
        name: "Sheet Fed Box Bag Machine",
        shortDesc: "Gift · Luxury · Apparel · Tobacco & Alcohol",
        longDesc: "Premium non-crease box paper bags for luxury retail, gift, wine, fashion, tea, cosmetics and high-end brand packaging — no visible waist crease line, no inner bottom board, no manual rope threading.",
        image: "/images/product3.jpg",
        stats: [
          { value: "30–45", label: "pcs/min" },
          { value: "180–300g", label: "Sheet Paper Weight" },
          { value: "30 min", label: "Size Changeover" },
          { value: "2", label: "Operators" },
        ],
        bagTypesProduced: ["Luxury Retail Bag", "Gift Bag", "Wine & Spirits Bag", "Fashion & Apparel Bag", "Tea Gift Bag", "Cosmetics Bag"],
        process: [
          { step: "01", title: "Parameter Setup", desc: "Touchscreen control for quick bag size and production parameter setting." },
          { step: "02", title: "Paper Feeding", desc: "Precision automatic sheet feeding supports stable continuous production." },
          { step: "03", title: "Auto Gluing", desc: "Water-based hot glue application for stable bonding." },
          { step: "04", title: "Auto Paper Folding", desc: "Automatic folding prepares the sheet for U-wrap box bag forming." },
          { step: "05", title: "Auto Handle Attaching", desc: "Inline rope handle making and attaching replaces manual threading." },
          { step: "06", title: "3D Box Forming", desc: "U-wrap forming creates a one-piece integrated box bag structure." },
          { step: "07", title: "Auto Inspection", desc: "Fault detection supports alarm and pause for safer production." },
          { step: "08", title: "Auto Stacking", desc: "Finished bags are automatically stacked for efficient output." },
        ],
        models: [
          {
            slug: "great-4-0-supreme-sheet-fed-non-crease-paper-bag-machine",
            name: "GREAT 4.0 Supreme Sheet Fed Non-Crease Paper Bag Machine",
            shortDesc: "Auto rope handle attaching, U-wrap forming, no inner bottom board, 30-min size changeover.",
            specs: { "Speed": "30–45 pcs/min (2,000–2,500 pcs/hr)", "Paper Weight": "180–300 gsm", "Bag Width": "240–500 mm", "Bag Height": "240–450 mm", "Load Capacity": "20+ kg" },
          },
        ],
        faqs: [
          { q: "What does \"non-crease\" mean for paper bags?", a: "No visible horizontal crease line on the front and back surfaces of the finished bag — improves appearance for luxury, gift, wine and premium retail bags." },
          { q: "Why doesn't it need an inner bottom board?", a: "Integrated forming and optimized structure design allow the bag bottom to form firmly without an inner bottom board." },
          { q: "How strong is the finished bag?", a: "With water-based hot glue bonding, the finished bag can achieve a load capacity of over 20 kg under suitable material and production conditions." },
          { q: "Can printing or riveting functions be added?", a: "Yes — printing and riveting functions can be added as optional configurations according to production requirements." },
        ],
      },
      {
        slug: "flexible-pouch-making-machine",
        name: "Flexible Pouch Machine",
        shortDesc: "Drink · Pet food · Pharma · Daily care",
        longDesc: "7 models covering 3-side seal, stand-up, zipper, center seal, quad seal and flat bottom box pouch production for laminated film packaging.",
        image: "/images/product4.jpg",
        stats: [
          { value: "7", label: "Models" },
          { value: "300 CPM", label: "Max Speed" },
          { value: "1300 mm", label: "Max Film Width" },
          { value: "PLC+Servo", label: "Control System" },
        ],
        bagTypesProduced: ["3-Side Seal Pouch", "Stand-Up Pouch (Doypack)", "Zipper Pouch", "Stand-Up Zipper Pouch", "Center Seal Pouch", "Center Seal Gusset Pouch", "Quad Seal Pouch", "Flat Bottom Box Pouch"],
        applications: ["Food & Snacks", "Coffee & Tea", "Pet Food", "Daily Chemical", "Personal Care", "Healthcare"],
        process: [
          { step: "01", title: "Film Feeding", desc: "Main film and gusset film unwinding." },
          { step: "02", title: "Gusset Forming", desc: "Side gusset and bottom insert forming." },
          { step: "03", title: "Longitudinal Seal", desc: "Side sealing for quad seal structure." },
          { step: "04", title: "Cross & Spot Seal", desc: "Bottom, cross and spot heat sealing." },
          { step: "05", title: "Cutting", desc: "Accurate fixed-length pouch cutting." },
          { step: "06", title: "Pouch Output", desc: "Finished flat bottom or quad seal pouch." },
        ],
        models: [
          { slug: "oyang-650s-high-speed-3-side-seal-pouch-making-machine", name: "OYANG 650S — 3-Side Seal Pouch Machine", shortDesc: "Standard 3-side seal sachet / flat pouch production.", specs: { "Speed": "300 CPM", "Max Film Width": "1300mm", "Servo Axes": "2 AC Servo", "Weight": "5.9 t" } },
          { slug: "oyang-650sl-high-speed-zipper-pouch-making-machine", name: "OYANG 650SL — Zipper Pouch Machine", shortDesc: "3-side seal zipper and resealable flat pouch.", specs: { "Speed": "240 CPM", "Max Film Width": "1200mm", "Servo Axes": "3 AC Servo", "Weight": "8.2 t" } },
          { slug: "oyang-650sz-high-speed-stand-up-pouch-making-machine", name: "OYANG 650SZ — Stand-Up Pouch Machine", shortDesc: "Doypack / stand-up pouch without zipper.", specs: { "Speed": "240 CPM", "Max Film Width": "1200mm", "Servo Axes": "3 AC Servo", "Weight": "7.0 t" } },
          { slug: "oyang-650szl-high-speed-stand-up-zipper-pouch-making-machine", name: "OYANG 650SZL — Stand-Up Zipper Pouch Machine", shortDesc: "Resealable doypack production.", specs: { "Speed": "200 CPM", "Max Film Width": "1200mm", "Servo Axes": "4 AC Servo", "Weight": "9.5 t" } },
          { slug: "oyang-650szll-multi-function-pouch-making-machine", name: "OYANG 650SZLL — Multi-Function Pouch Machine", shortDesc: "Flexible switching between 3-side seal, stand-up and zipper pouches.", specs: { "Speed": "Up to 300 CPM", "Max Film Width": "1300mm", "Servo Axes": "4 AC Servo", "Weight": "10.2 t" } },
          { slug: "oyang-650z-high-speed-center-seal-pouch-making-machine", name: "OYANG 650Z — Center Seal Pouch Machine", shortDesc: "Center seal, back seal, folding and gusset pouch production.", specs: { "Speed": "240 CPM", "Max Film Width": "1300mm", "Servo Axes": "3 AC Servo", "Weight": "8.9 t" } },
          { slug: "oyang-650qsb-flat-bottom-pouch-making-machine", name: "OYANG 650QSB — Flat Bottom Pouch Machine", shortDesc: "Flat bottom box, quad seal and 8-side seal pouches — coffee, pet food, premium packaging.", specs: { "Speed": "120 CPM", "Max Film Width": "1300mm", "Servo Axes": "6 AC Servo", "Weight": "16.8 t" } },
        ],
        faqs: [
          { q: "Which model is best for coffee, tea or pet food packaging?", a: "650QSB (flat bottom, high-end shelf presence), 650SZL (resealable stand-up zipper for snacks/treats/beans), or 650SZ (cost-effective doypack for liquid/powder products)." },
          { q: "What film materials are compatible?", a: "BOPP/CPP, PET/PE, aluminum foil composite film, kraft paper laminated film, nylon composite film, and select biodegradable/eco-friendly films." },
          { q: "Can one machine produce multiple pouch types?", a: "Yes — OYANG 650SZLL is the multi-function model, producing 3-side seal, stand-up and zipper pouches on one platform." },
          { q: "What is the delivery time?", a: "Standard lead time is generally 60–90 days after deposit payment, depending on model, configuration and production schedule." },
        ],
      },
     {
        slug: "paper-forming-machine",
        name: "Paper Forming Machine",
        shortDesc: "Cutlery · Plates · Eco hanger",
        longDesc: "Eco-friendly paper forming and sealing solutions supporting food-service and paper product packaging applications.",
        image: "/images/product5.jpg",
        models: [
          { slug: "oyang-8-350-multi-layer-laminating-die-cutting-machine", name: "OYANG 8-350 Multi-Layer Laminating & Die Cutting Machine", shortDesc: "Multi-layer laminating and die cutting for paper forming products.", specs: {} },
          { slug: "oyang-9-350-paper-forming-sealing-machine", name: "OYANG 9-350 Paper Forming & Sealing Machine", shortDesc: "Forming and sealing solution for eco-friendly paper products.", specs: {} },
        ],
      },
    ],
  },

  {
    slug: "printing",
    name: "Printing",
    shortDesc: "Rotogravure, flexographic and screen printing for every substrate.",
    longDesc:
      "Three printing technologies — Rotogravure, Flexographic and Screen Printing — covering flexible packaging film, paper rolls, nonwoven fabric and carton pre-printing. From entry-level to flagship, OYANG provides the right printing machine for every production scale.",
    color: "#135CA1",
    image: "/images/product2.jpg",
    stats: [
      { value: "3", label: "Printing Technologies" },
      { value: "10+", label: "Machine Models" },
      { value: "400 m/min", label: "Max Speed (Gravure)" },
      { value: "14", label: "Colors Max (Gravure)" },
    ],
    features: [
      { title: "±0.05mm Register Accuracy", desc: "All ELS rotogravure models achieve automatic register accuracy with full closed-loop tension control." },
      { title: "Every Substrate Covered", desc: "BOPP, PET, CPP, NY, aluminum foil, kraft paper, nonwoven and woven fabric — one manufacturer for every material." },
      { title: "1-Year Warranty", desc: "All machines include a 1-year warranty from installation sign-off, with free replacement parts for non-human-caused failures." },
      { title: "80+ Bilingual Engineers", desc: "Global service with local offices in India and Russia ensure fast response in key markets." },
    ],
    faqs: [
      { q: "What printing machines does OYANG offer?", a: "Three technology series: Rotogravure (EASYPRINT 3.0, HONOR 3.5, HONOR 3.5 PLUS, HONOR 4.0), Flexographic (YTB stack type, YTC CI type, FE unit-type inline), and Screen Printing (ONL-12010 I single color, ONL-12010 II double color)." },
      { q: "How do I choose between rotogravure, flexo and screen printing?", a: "Choose rotogravure for high-quality multi-color flexible packaging film at high speed. Choose flexographic for paper, film or nonwoven roll printing with 2–6 colors. Choose screen printing for 1–2 color logo printing on PP nonwoven fabric before bag making." },
      { q: "Can OYANG printing machines connect with bag making machines?", a: "Yes — the printing machine first prints the roll material, then the printed roll is sent to paper bag, nonwoven bag or flexible packaging converting machines. OYANG can recommend a matching full production line." },
      { q: "Are all OYANG printing machines CE certified?", a: "Yes. All printing machines are CE certified and manufactured under ISO9001 standards. OYANG Group holds 280+ patents and has been producing packaging machinery since 2006." },
    ],
    lines: [
      {
        slug: "rotogravure-printing-machine",
        name: "Rotogravure Printing",
        shortDesc: "High-speed · Flexible film",
        longDesc: "4 models from entry-level to flagship — covering 220–400 m/min production speeds, ±0.05mm register accuracy and up to 1,350mm print width.",
        image: "/images/hero.jpg",
        models: [
          { slug: "easyprint-3-0-els-rotogravure-printing-machine", name: "EASYPRINT 3.0 ELS", shortDesc: "Cost-effective entry-level gravure press for sampling and short runs.", specs: { "Speed": "220 m/min", "Print Width": "1,050mm", "Colors": "5–11" } },
          { slug: "honor-3-5-els-rotogravure-printing-machine", name: "HONOR 3.5 ELS", shortDesc: "Balanced performance for mid-scale converters with wider substrate range.", specs: { "Speed": "300 m/min", "Print Width": "1,350mm", "Colors": "5–11" } },
          { slug: "honor-3-5-plus-els-rotogravure-printing-machine", name: "HONOR 3.5 PLUS ELS", shortDesc: "75mm nodular iron frame, fully enclosed ink trough — bridges mid and flagship.", specs: { "Speed": "350 m/min", "Print Width": "1,350mm", "Colors": "5–12" } },
          { slug: "honor-4-0-els-rotogravure-printing-machine", name: "HONOR 4.0 ELS", shortDesc: "Flagship gravure press — B&R ELS, 3,000-recipe memory, 15–20% energy saving.", specs: { "Speed": "400 m/min", "Print Width": "1,350mm", "Colors": "5–14", "Register Accuracy": "±0.05mm" } },
        ],
      },
      {
        slug: "flexographic-printing-machine",
        name: "Flexographic Printing",
        shortDesc: "Paper · Nonwoven · Eco ink",
        longDesc: "Stack type, CI type and unit-type inline flexo machines for paper, film, nonwoven fabric, woven fabric, foil and composite packaging materials.",
        image: "/images/product3.jpg",
        models: [
          { slug: "oyang-ytb-series-2-4-6-color-stack-flexo-printing-machine", name: "YTB Series 2/4/6-Color Stack Flexo", shortDesc: "Roll-to-roll stack flexo for paper, film, nonwoven, woven fabric and foil.", specs: { "Colors": "2/4/6", "Speed": "50–80 m/min", "Max Width": "1200mm" } },
          { slug: "oyang-ytc-41200-4-color-ci-flexo-printing-machine", name: "YTC-41200 4-Color CI Flexo", shortDesc: "High-speed central impression flexo for paper bags and nonwoven shopping bags.", specs: { "Colors": "4", "Speed": "250 m/min", "Print Width": "1160mm" } },
          { slug: "oyang-ytc-61200-6-color-ci-flexo-printing-machine", name: "YTC-61200 6-Color CI Flexo", shortDesc: "6-color CI flexo for richer packaging graphics and complex brand colors.", specs: { "Colors": "6", "Speed": "150 m/min", "Print Width": "1160mm" } },
          { slug: "oyang-fe-series-unit-type-inline-flexo-printing-machine", name: "FE Series Unit-Type Inline Flexo", shortDesc: "Medium-width inline flexo for packaging paper, board and carton pre-printing.", specs: { "Web Width": "720–1820mm", "Speed": "200–240 m/min" } },
        ],
      },
      {
        slug: "screen-printing-machine",
        name: "Screen Printing",
        shortDesc: "Nonwoven bags · Spot color",
        longDesc: "ONL-12010 series roll-to-roll screen printing machines for single and double-color printing on PP nonwoven fabric rolls before bag making.",
        image: "/images/product4.jpg",
        models: [
          { slug: "single-color-roll-to-roll-nonwoven-screen-printing-machine", name: "ONL-12010 I Single Color Screen Printing", shortDesc: "One printing unit + one drying unit for single-color nonwoven printing.", specs: { "Speed": "1,800–3,000 m/h", "Power": "42 kW", "Weight": "3,500 kg" } },
          { slug: "double-color-roll-to-roll-nonwoven-screen-printing-machine", name: "ONL-12010 II Double Color Screen Printing", shortDesc: "Two printing units complete two-color printing in a single continuous pass.", specs: { "Speed": "1,500–2,200 m/h", "Power": "85 kW", "Weight": "6,000 kg" } },
        ],
      },
    ],
  },

  {
    slug: "post-press-converting",
    name: "Post-Press & Converting",
    shortDesc: "Die cutting, lamination and finishing for premium packaging.",
    longDesc:
      "From lamination to flute laminating to die cutting & hot foil stamping — OYANG delivers a complete post-press solution for luxury packaging, food cartons, corrugated boxes and flexible pouches. One supplier, full chain.",
    color: "#809783",
    image: "/images/product3.jpg",
    stats: [
      { value: "3", label: "Machine Categories" },
      { value: "13,000+", label: "Sheets/hr Max Speed" },
      { value: "500 m/min", label: "Max Lamination Speed" },
      { value: "±0.075mm", label: "Die Cutting Accuracy" },
    ],
    features: [
      { title: "Card-to-Card & Card-to-Flute", desc: "One machine, no changeover — the WHL flute laminating series bonds surface paper to board at up to 13,000 sheets/hr." },
      { title: "Zero VOC Option Available", desc: "ONL-LA450 solvent-free lamination uses reactive PU adhesive that cures at room temperature — no drying oven needed." },
      { title: "±0.075mm Registration", desc: "Industry-leading die cutting accuracy across 4 series and 14 models, from 1050mm to 1650mm sheet width." },
      { title: "80–100% Higher Output", desc: "Duomatic FSS dual-unit machines integrate stamping, cutting and stripping into a single pass." },
    ],
    faqs: [
      { q: "What does \"post-press & converting\" mean in packaging?", a: "All finishing processes applied after printing: lamination, flute laminating (bonding surface paper to board), die cutting, hot foil stamping and embossing. OYANG covers all of these in one product range." },
      { q: "What's the difference between roll-to-roll and flute lamination?", a: "Roll-to-roll bonds flexible film layers for pouches and nonwoven bags. Flute laminating bonds a printed sheet onto corrugated or solid board — used for packaging boxes and retail cartons." },
      { q: "Which machine do I need for luxury gift box production?", a: "Typical workflow: flute laminating (WHL series) to bond printed paper onto board, followed by die cutting with hot foil stamping (Profoil SF) or embossing (Easyrobust SSR)." },
      { q: "Does the solvent-free lamination machine need a drying oven?", a: "No. The ONL-LA450 uses reactive PU adhesive that cures at room temperature — no drying oven, no solvent evaporation, no exhaust system required." },
    ],
    lines: [
      {
        slug: "flatbed-die-cutting-machine",
        name: "Flatbed Die Cutting",
        shortDesc: "Stripping · Embossing · Foiling",
        longDesc: "Four series covering die cutting only, die cutting + embossing, hot foil stamping + die cutting, and dual-unit configurations — from 1050mm to 1650mm sheet width.",
        image: "/images/hero.jpg",
        models: [
          { slug: "easycut-flatbed-die-cutting-stripping", name: "Easycut SS Series", shortDesc: "Die cutting + stripping across 5 sheet-width models.", specs: { "Speed": "Up to 8,500 sh/hr", "Sizes": "1050 / 1180 / 1300 / 1500 / 1650" } },
          { slug: "easyrobust-flatbed-die-cutting-stripping-embossing", name: "Easyrobust SSR Series", shortDesc: "Adds embossing capability across 3 models.", specs: { "Pressure": "600 Ton", "Sizes": "1050 / 1180 / 1300" } },
          { slug: "profoil-flatbed-die-cutting-hot-stamping", name: "Profoil SF Series", shortDesc: "Hot foil stamping + die cutting across 4 models.", specs: { "Sizes": "1050 / 1180 / 1300 / 1500" } },
          { slug: "duoprocess-dual-unit-flatbed-hot-stamping", name: "Duomatic FSS Series", shortDesc: "Dual-unit: stamp + cut + strip in one pass, 80–100% more output.", specs: { "Sizes": "2105 / 2118" } },
        ],
      },
      {
        slug: "roll-to-roll-lamination",
        name: "Roll to Roll Lamination",
        shortDesc: "BOPP · Matte · Gloss",
        longDesc: "Three lamination technologies — Extrusion Coating, Solvent-Free PU and Dry Laminating — covering nonwoven bag lines, flexible pouches and food/pharma barrier films.",
        image: "/images/product2.jpg",
        models: [
          { slug: "extrusion-coating-lamination-machine", name: "Extrusion Coating & Lamination", shortDesc: "PE/PP resin coating for nonwoven bag lines.", specs: {} },
          { slug: "solvent-free-lamination-machine", name: "ONL-LA450 Solvent-Free", shortDesc: "Zero VOC, no drying oven, Mizar Tech.", specs: { "Speed": "500 m/min" } },
          { slug: "dry-laminating-machine", name: "ON-DL-3125F Dry Laminating", shortDesc: "For BOPP, PET and aluminum foil structures.", specs: { "Speed": "450 m/min" } },
        ],
      },
      {
        slug: "flute-laminating-machine",
        name: "Flute Laminating Machine",
        shortDesc: "Box · Rigid board",
        longDesc: "The WHL series bonds printed surface paper onto corrugated board or solid cardboard at up to 13,000 sheets/hr with ±1mm accuracy.",
        image: "/images/product5.jpg",
        models: [
          { slug: "automatic-flute-laminating-machine-with-flipflop-stacker", name: "WHL Series Automatic Flute Laminating Machine", shortDesc: "Card-to-card and card-to-flute in one machine, MES-ready with Profinet port.", specs: { "Speed": "13,000 sheets/hr", "Accuracy": "±1mm", "Job Storage": "100+" } },
        ],
      },
    ],
  },

  {
    slug: "auxiliary-equipment",
    name: "Auxiliary Equipment",
    shortDesc: "Slitting, sealing and finishing equipment for every production line.",
    longDesc:
      "Complete auxiliary machinery for every OYANG production line — nonwoven bag, paper bag, flexible pouch and paper forming. From upstream slitting and printing to downstream packing and palletizing.",
    color: "#9D5FC8",
    image: "/images/product4.jpg",
    stats: [
      { value: "4", label: "Production Lines Covered" },
      { value: "20+", label: "Auxiliary Machine Models" },
      { value: "80+", label: "Bilingual After-Sales Engineers" },
      { value: "CE", label: "& ISO9001 Certified" },
    ],
    features: [
      { title: "Built for OYANG Main Machines", desc: "Every auxiliary machine interfaces directly with OYANG bag making and forming machines — guaranteed compatibility, no custom adapters." },
      { title: "One Supplier, Full Responsibility", desc: "From upstream slitting to downstream packing, OYANG supplies the complete lineup — single point of contact for installation and support." },
      { title: "MAZAK CNC Precision", desc: "Core components machined on Japanese MAZAK & Okuma CNC centers — the same $30M precision manufacturing standard for every machine." },
      { title: "1-Year Warranty + Free Spare Parts List", desc: "All machines include 1-year warranty from installation sign-off, with a free spare parts list shipped with every machine." },
    ],
    faqs: [
      { q: "What is auxiliary equipment and why do I need it?", a: "Upstream and downstream machines that support the main bag making machine — slitting, handle making, printing, punching, bundling and packing. Without the right auxiliary machines, your main machine can't run at full efficiency." },
      { q: "Which auxiliary machines do I need for a paper bag line?", a: "A paper roll slitting machine (ONL-SL), a twisted rope making machine (ONL-TW1/TW2), a rope rewinding machine (ONL-RE), and a handle pasting machine (ONL-HRA or ONL-HFA)." },
      { q: "Can I buy auxiliary machines without a main bag making machine?", a: "Yes. OYANG auxiliary machines are available as standalone purchases — many customers upgrade existing lines by adding handle pasting, bundling or slitting machines." },
      { q: "Are OYANG auxiliary machines compatible with non-OYANG main machines?", a: "Most are, since they're modular and built to standard industry specs. Share your existing machine's model and specifications and our engineers will advise on compatibility." },
    ],
    lines: [
      {
        slug: "paper-bag-auxiliary-equipment",
        name: "Paper Bag Auxiliary",
        shortDesc: "Slitter · Handle pasting · Rope",
        longDesc: "Paper roll slitting, twisted rope making, rope rewinding and fully automatic flat or round rope handle pasting — a complete auxiliary chain with zero manual labor.",
        image: "/images/hero.jpg",
        models: [
          { slug: "paper-roll-slitting-machine-onl-sl", name: "Paper Roll Slitting Machine ONL-SL1300/1600/1800", shortDesc: "Slit paper rolls to the correct width.", specs: { "Max Width": "1800mm" } },
          { slug: "twisted-paper-rope-making-machine", name: "Twisted Paper Rope Making Machine ONL-TW1/TW2", shortDesc: "Single or double station rope making.", specs: { "Speed": "10–25 m/min" } },
          { slug: "paper-rope-rewinding-machine-onl-re", name: "Paper Rope Rewinding Machine ONL-RE", shortDesc: "Rewinds small coils into large reels.", specs: { "Speed": "80–150 m/min" } },
          { slug: "automatic-flat-paper-handle-pasting-machine-onl-hfa", name: "Flat Handle Pasting Machine ONL-HFA", shortDesc: "Makes & pastes flat handles.", specs: { "Speed": "35–43 pcs/min" } },
          { slug: "automatic-round-rope-paper-handle-pasting-machine-onl-hra", name: "Round Rope Handle Pasting Machine ONL-HRA", shortDesc: "Makes & pastes round rope handles.", specs: { "Speed": "33–43 pcs/min" } },
        ],
      },
      {
        slug: "nonwoven-bag-auxiliary-equipment",
        name: "Nonwoven Bag Auxiliary",
        shortDesc: "Sealing · Punching · Embossing",
        longDesc: "From PP spunbond fabric production through slitting, ultrasonic cutting, handle sealing, punching and lace sewing to automatic bundling and packing — 9 machines covering the complete chain.",
        image: "/images/product2.jpg",
        models: [
          { slug: "pp-spunbond-nonwoven-fabric-production-machine", name: "PP Spunbond Fabric Machine AW-SMS", shortDesc: "Upstream PP granules to fabric rolls.", specs: {} },
          { slug: "nonwoven-fabric-slitting-machine-oyang15-xe1800", name: "Nonwoven Fabric Slitting Machine OYANG15-XE1800", shortDesc: "Slits fabric rolls to width.", specs: { "Max Width": "1800mm" } },
          { slug: "nonwoven-ultrasonic-cross-cutting-machine-oyang15-h", name: "Ultrasonic Cross Cutting Machine OYANG15-H", shortDesc: "Cuts and seals fabric edges.", specs: { "Speed": "20–120 cuts/min" } },
          { slug: "automatic-soft-handle-ultrasonic-sealing-machine", name: "Soft Handle Sealing Machine OYANG15-G/F700", shortDesc: "Seals soft loop handles.", specs: { "Speed": "10–30 pcs/min" } },
          { slug: "automatic-bag-packing-line-onl-dsc300", name: "Automatic Bag Packing Line ONL-DSC300", shortDesc: "Full-auto count, stack and box.", specs: {} },
        ],
      },
      {
        slug: "flexible-pouch-auxiliary",
        name: "Flexible Pouch Auxiliary",
        shortDesc: "Film slitter · Coating",
        longDesc: "High-speed film and label slitting machine for BOPP, PET, PVC and composite films — the essential upstream auxiliary for any flexible pouch line. More equipment being added.",
        image: "/images/product3.jpg",
        models: [
          { slug: "high-speed-film-label-slitting-machine-onl-sl", name: "High-Speed Film & Label Slitting Machine ONL-SL F1300/F1600", shortDesc: "Slits jumbo film rolls to width for BOPP, PET, PVC and composite films.", specs: { "Speed": "80–400 m/min", "Max Width": "1600mm" } },
        ],
      },
      {
        slug: "paper-forming-auxiliary",
        name: "Paper Forming Auxiliary",
        shortDesc: "Slitting · Packing",
        longDesc: "Paper roll slitting, inline flexo printing and automatic packing for paper cutlery production lines — from raw paper roll to individually packed eco-friendly cutlery sets.",
        image: "/images/product5.jpg",
        models: [
          { slug: "product-packing-machine-ds500", name: "Product Packing Machine ONL-DS500", shortDesc: "Auto-packs paper cutlery sets into 3-side seal H-shape bags.", specs: { "Speed": "40–150 pks/min" } },
        ],
      },
    ],
  },

  {
    slug: "raw-material",
    name: "Raw Material",
    shortDesc: "Paper, nonwoven fabric and flexible film rolls sourced for your production.",
    longDesc:
      "Kraft paper, non-woven fabric and flexible film rolls — all precisely matched to OYANG bag making machines. One supplier, full material chain, zero compatibility issues.",
    color: "#BC0019",
    image: "/images/product5.jpg",
    stats: [
      { value: "3", label: "Material Types" },
      { value: "100%", label: "Machine Compatible" },
      { value: "FSC", label: "Certified Paper" },
      { value: "GRS", label: "RPET Certified" },
    ],
    features: [
      { title: "Perfect Compatibility", desc: "Materials are spec-matched to OYANG machine GSM, width and core diameter requirements." },
      { title: "Eco-Certified Options", desc: "FSC-certified paper, GRS-certified RPET fabric — meeting EU & US sustainability requirements." },
      { title: "Food Grade Available", desc: "FDA / SGS certified food-grade paper and film for direct food contact packaging applications." },
      { title: "Global Delivery", desc: "Consolidated shipping with your machine order — or standalone material supply to your factory." },
    ],
    faqs: [
      { q: "Do I need to buy materials from OYANG if I purchase a machine?", a: "No, it's not mandatory — OYANG machines work with standard market materials. But sourcing from OYANG ensures perfect GSM, width and core-diameter compatibility, reducing setup time and material waste." },
      { q: "What's the difference between Brown Kraft and White Kraft paper?", a: "Brown Kraft is unbleached — maximum strength, natural look, lower cost, ideal for fast food and grocery bags. White Kraft is bleached — clean surface perfect for full-color printing, preferred for fashion retail and pharmaceutical packaging." },
      { q: "What is RPET non-woven fabric?", a: "Made from 100% recycled plastic bottles, RPET supports GRS certification — required by major retailers like Walmart, Tesco and IKEA for private-label reusable bags. Also has higher tensile strength than standard PP non-woven." },
      { q: "Can materials be shipped together with my machine order?", a: "Yes — we can consolidate your machine and initial material supply into a single container shipment, significantly reducing total freight cost." },
    ],
    lines: [
      {
        slug: "paper-rolls",
        name: "Paper Rolls",
        shortDesc: "Kraft · Coated · White",
        longDesc: "Brown & white kraft paper in 30–300 GSM. Essential for shopping bags, SOS bags, food bags and luxury boutique bags. FSC certified, food-grade options available.",
        image: "/images/hero.jpg",
        models: [],
      },
      {
        slug: "non-woven-fabric-rolls",
        name: "Non-woven Fabric Rolls",
        shortDesc: "PP Spunbond · Laminated",
        longDesc: "PP Spunbond & RPET fabric in 30–120 GSM. For box bags, D-cut bags, T-shirt bags and drawstring bags. RPET supports GRS certification for EU/US premium retail markets.",
        image: "/images/product2.jpg",
        models: [],
      },
      {
        slug: "flexible-film-rolls",
        name: "Flexible Film Rolls",
        shortDesc: "BOPP · PET · Alu-foil",
        longDesc: "BOPP, OPP, CPP and PET films in single-layer and laminated structures. For 3-side seal pouches, stand-up pouches, flat bottom pouches and retort packaging.",
        image: "/images/product3.jpg",
        models: [],
      },
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