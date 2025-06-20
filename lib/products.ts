export interface Product {
  id: number
  name: string
  price: number
  priceText: string
  originalPrice?: string
  rating: number
  image: string
  category: string
  description: string
  brand: string
  inStock: boolean
  features: string[]
  soldCount: string
  reviews?: number
  specifications?: Record<string, string>
  usage?: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Adengo Xtra 465ml",
    price: 2185,
    priceText: "Rs. 2,185",
    originalPrice: "Rs. 2,615",
    rating: 4.5,
    image: "/images/products/adengo-xtra.jpg",
    category: "pesticides",
    description:
      "Advanced herbicide for effective weed control in corn and other crops. Pre and post-emergence application with long-lasting results.",
    brand: "Bayer",
    inStock: true,
    features: ["Pre & post emergence", "Broad spectrum", "Long lasting", "Corn specialist"],
    soldCount: "145 Sold",
    reviews: 145,
    specifications: {
      "Active Ingredient": "Isoxaflutole + Thiencarbazone-methyl",
      Formulation: "Oil Dispersion (OD)",
      "Pack Size": "465ml",
      "Application Rate": "465ml per acre",
      PHI: "90 days",
    },
    usage: "Apply 465ml per acre as pre-emergence or early post-emergence spray in maize.",
  },
  {
    id: 2,
    name: "Green Gold Fertilizer",
    price: 1800,
    priceText: "Rs. 1,800",
    originalPrice: "Rs. 2,230",
    rating: 4.6,
    image: "/images/products/green-gold-fertilizer.jpg",
    category: "fertilizers",
    description:
      "Premium organic fertilizer that enhances soil fertility and promotes healthy plant growth. Rich in essential nutrients and organic matter.",
    brand: "Green Gold",
    inStock: true,
    features: ["100% organic composition", "Improves soil structure", "Slow-release nutrients", "Safe for all crops"],
    soldCount: "63 Sold",
    reviews: 63,
    specifications: {
      Type: "Organic Fertilizer",
      "NPK Ratio": "10-5-8",
      "Pack Size": "25kg, 50kg",
      "Application Rate": "200-300kg per acre",
      "Shelf Life": "2 years",
    },
    usage: "Apply 200-300kg per acre during soil preparation. Mix well with soil and water thoroughly.",
  },
  {
    id: 3,
    name: "Regent 80wg Insecticide",
    price: 1199,
    priceText: "Rs. 1,199",
    originalPrice: "Rs. 1,629",
    rating: 4.8,
    image: "/images/products/regent-80wg.jpg",
    category: "pesticides",
    description:
      "Systemic insecticide for control of termites, aphids and other soil and foliar pests with excellent residual activity.",
    brand: "BASF",
    inStock: true,
    features: ["Systemic action", "Soil & foliar pests", "Termite control", "Long residual"],
    soldCount: "2149 Sold",
    reviews: 2149,
    specifications: {
      "Active Ingredient": "Fipronil",
      Formulation: "Water Dispersible Granules",
      "Pack Size": "100g, 250g",
      "Application Rate": "100-150g per acre",
      PHI: "21 days",
    },
    usage: "Apply as soil drench or foliar spray. Mix with water and apply evenly.",
  },
  {
    id: 4,
    name: "Silikalzium 1kg",
    price: 1645,
    priceText: "Rs. 1,645",
    originalPrice: "Rs. 2,075",
    rating: 4.4,
    image: "/images/products/silikalzium.jpg",
    category: "fertilizers",
    description:
      "Silicon and calcium supplement for stronger plant structure and enhanced disease resistance in all crops.",
    brand: "AgriTech",
    inStock: true,
    features: ["Silicon supplement", "Disease resistance", "Plant strength", "Stress tolerance"],
    soldCount: "92 Sold",
    reviews: 92,
    specifications: {
      "Silicon Content": "25%",
      "Calcium Content": "15%",
      "Pack Size": "1kg, 2kg",
      "Application Rate": "2-3kg per acre",
      Solubility: "Water soluble",
    },
    usage: "Dissolve in water and apply as foliar spray or soil application.",
  },
  {
    id: 5,
    name: "Vita Humate 1Kg",
    price: 595,
    priceText: "Rs. 595",
    originalPrice: "Rs. 1,025",
    rating: 4.3,
    image: "/images/products/vita-humate.jpg",
    category: "organic",
    description:
      "Organic humic acid supplement for improved nutrient uptake and soil conditioning with natural growth promotion.",
    brand: "Vita",
    inStock: true,
    features: ["Humic acid", "Nutrient uptake", "Soil conditioner", "Natural growth"],
    soldCount: "14 Sold",
    reviews: 14,
    specifications: {
      "Humic Acid": "85%",
      "Fulvic Acid": "10%",
      "Pack Size": "1kg",
      "Application Rate": "1-2kg per acre",
      pH: "8-10",
    },
    usage: "Mix with water and apply to soil or as foliar spray for best results.",
  },
  {
    id: 6,
    name: "Natural Gypsum",
    price: 895,
    priceText: "Rs. 895",
    originalPrice: "Rs. 1,325",
    rating: 4.2,
    image: "/images/products/natural-gypsum.jpg",
    category: "fertilizers",
    description:
      "Natural gypsum for soil structure improvement and calcium-sulfur nutrition with pH balancing properties.",
    brand: "Natural",
    inStock: true,
    features: ["Soil structure", "Calcium sulfur", "Natural source", "pH balance"],
    soldCount: "220 Sold",
    reviews: 220,
    specifications: {
      "Calcium Sulfate": "95%",
      Calcium: "23%",
      Sulfur: "18%",
      "Pack Size": "50kg",
      "Application Rate": "200-400kg per acre",
    },
    usage: "Apply to soil before planting or during land preparation.",
  },
  {
    id: 7,
    name: "Martha 1kg Fungicide",
    price: 1295,
    priceText: "Rs. 1,295",
    originalPrice: "Rs. 1,725",
    rating: 4.5,
    image: "/images/products/martha-fungicide.jpg",
    category: "pesticides",
    description:
      "Broad spectrum fungicide for control of various fungal diseases in crops with preventive and curative action.",
    brand: "Martha",
    inStock: true,
    features: ["Broad spectrum", "Fungal control", "Preventive action", "Curative effect"],
    soldCount: "203 Sold",
    reviews: 203,
    specifications: {
      "Active Ingredient": "Mancozeb",
      Formulation: "Wettable Powder",
      "Pack Size": "1kg",
      "Application Rate": "2-3kg per acre",
      PHI: "7 days",
    },
    usage: "Mix with water and spray on affected plants. Repeat as needed.",
  },
  {
    id: 8,
    name: "Rhizophos Bio Fertilizer",
    price: 1595,
    priceText: "Rs. 1,595",
    originalPrice: "Rs. 2,025",
    rating: 4.7,
    image: "/images/products/rhizophos-bio.jpg",
    category: "organic",
    description:
      "Phosphorus solubilizing bacteria for enhanced phosphorus availability to plants and improved root development.",
    brand: "Bio Tech",
    inStock: true,
    features: ["Bio fertilizer", "Phosphorus solubilizing", "Root development", "Eco-friendly"],
    soldCount: "2037 Sold",
    reviews: 2037,
    specifications: {
      "Bacterial Count": "10^8 CFU/g",
      Carrier: "Peat based",
      "Pack Size": "1kg",
      "Application Rate": "2-3kg per acre",
      "Shelf Life": "18 months",
    },
    usage: "Mix with seeds or apply to soil before sowing for best results.",
  },
  {
    id: 9,
    name: "Bhakkar Star Cotton Seeds",
    price: 7550,
    priceText: "Rs. 7,550",
    originalPrice: "Rs. 7,980",
    rating: 4.6,
    image: "/images/products/bhakkar-star-cotton.jpg",
    category: "seeds",
    description:
      "High yielding cotton variety with excellent fiber quality and superior disease resistance for commercial farming.",
    brand: "Bhakkar",
    inStock: true,
    features: ["High yield", "Quality fiber", "Disease resistant", "Commercial grade"],
    soldCount: "38 Sold",
    reviews: 38,
    specifications: {
      Variety: "Bt Cotton",
      Maturity: "160-170 days",
      "Yield Potential": "40-50 maunds/acre",
      "Fiber Length": "28-30mm",
      "Pack Size": "500g",
    },
    usage: "Sow at recommended spacing with proper irrigation and fertilization.",
  },
  {
    id: 10,
    name: "Cardinal 80wg Insecticide",
    price: 635,
    priceText: "Rs. 635",
    originalPrice: "Rs. 1,065",
    rating: 4.3,
    image: "/images/products/cardinal-80wg.jpg",
    category: "pesticides",
    description:
      "Effective insecticide for control of sucking and chewing pests in various crops with quick knockdown effect.",
    brand: "Cardinal",
    inStock: true,
    features: ["Sucking pests", "Chewing pests", "Multi-crop", "Quick action"],
    soldCount: "446 Sold",
    reviews: 446,
    specifications: {
      "Active Ingredient": "Acetamiprid",
      Formulation: "Water Dispersible Granules",
      "Pack Size": "100g",
      "Application Rate": "100-150g per acre",
      PHI: "3 days",
    },
    usage: "Mix with water and spray on affected crops. Use recommended dosage.",
  },
  {
    id: 11,
    name: "Rhodes Grass Seeds",
    price: 4895,
    priceText: "Rs. 4,895",
    originalPrice: "Rs. 5,325",
    rating: 4.5,
    image: "/images/products/rhodes-grass-seeds.jpg",
    category: "seeds",
    description:
      "High quality Rhodes grass seeds for fodder production and pasture establishment with excellent germination rate.",
    brand: "Pasture Pro",
    inStock: true,
    features: ["Fodder grass", "High quality", "Pasture establishment", "High germination"],
    soldCount: "106 Sold",
    reviews: 106,
    specifications: {
      Variety: "Chloris gayana",
      Germination: "85%+",
      Purity: "98%",
      "Pack Size": "25kg",
      "Seeding Rate": "8-10kg per acre",
    },
    usage: "Prepare seedbed well and sow at recommended rate with adequate moisture.",
  },
  {
    id: 12,
    name: "Basmati 515 Seeds",
    price: 3980,
    priceText: "Rs. 3,980",
    originalPrice: "Rs. 4,410",
    rating: 4.5,
    image: "/images/products/basmati-515-seeds.jpg",
    category: "seeds",
    description:
      "Premium basmati rice variety with excellent aroma and grain quality, perfect for commercial cultivation.",
    brand: "Basmati",
    inStock: true,
    features: ["Premium basmati", "Excellent aroma", "Quality grain", "High market value"],
    soldCount: "166 Sold",
    reviews: 166,
    specifications: {
      Variety: "Super Basmati",
      Maturity: "125-130 days",
      Yield: "25-30 maunds/acre",
      "Grain Length": "6-7mm",
      "Pack Size": "25kg",
    },
    usage: "Transplant 25-30 days old seedlings with proper water management.",
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (!category) return products
  return products.filter((product) => product.category === category)
}

export function searchProducts(query: string, category?: string): Product[] {
  let filtered = products

  if (category) {
    filtered = filtered.filter((product) => product.category === category)
  }

  if (query) {
    const searchTerm = query.toLowerCase()
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm),
    )
  }

  return filtered
}

export const categories = [
  {
    id: "pesticides",
    name: "Pesticides",
    icon: "🐛",
    count: products.filter((p) => p.category === "pesticides").length,
  },
  {
    id: "fertilizers",
    name: "Fertilizers",
    icon: "🌱",
    count: products.filter((p) => p.category === "fertilizers").length,
  },
  { id: "seeds", name: "Seeds", icon: "🌾", count: products.filter((p) => p.category === "seeds").length },
  {
    id: "organic",
    name: "Organic Products",
    icon: "🍃",
    count: products.filter((p) => p.category === "organic").length,
  },
  { id: "machinery", name: "Machinery", icon: "🚜", count: 0 },
  { id: "hybrid-seeds", name: "Hybrid Seeds", icon: "🧬", count: 0 },
]
