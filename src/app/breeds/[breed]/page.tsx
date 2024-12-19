import BreedDetail from '@/components/BreedDetail'

const breedDetails = {
  "rhode-island-red": {
    name: "Rhode Island Red",
    description: "Known for their excellent egg laying abilities and friendly temperament.",
    image: "/images/rhode-island-red.jpg",
    category: "Dual Purpose",
    traits: ["Excellent Layers", "Friendly", "Hardy"],
    detailedInfo: {
      origin: "United States - Rhode Island",
      eggProduction: "250-300 eggs per year",
      eggColor: "Brown",
      weight: "Hens: 6.5 lbs / Roosters: 8.5 lbs",
      temperament: "Friendly, docile, and adaptable",
      features: [
        "Excellent egg layers",
        "Good meat production",
        "Hardy in various climates",
        "Friendly disposition",
        "Good foraging ability"
      ]
    }
  },
  "plymouth-rock": {
    name: "Plymouth Rock",
    description: "A classic American breed that's great for both meat and eggs.",
    image: "/images/plymouth-rock.jpg",
    category: "Dual Purpose",
    traits: ["Good Layers", "Docile", "Cold Hardy"],
    detailedInfo: {
      origin: "United States",
      eggProduction: "200-280 eggs per year",
      eggColor: "Brown",
      weight: "Hens: 7.5 lbs / Roosters: 9.5 lbs",
      temperament: "Calm, friendly, and easy to handle",
      features: [
        "Consistent egg production",
        "Excellent meat quality",
        "Winter hardy",
        "Good mothers",
        "Adaptable to confinement or free range"
      ]
    }
  },
  "leghorn": {
    name: "Leghorn",
    description: "Prolific layers of white eggs, known for their efficiency.",
    image: "/images/leghorn.jpg",
    category: "Egg Layer",
    traits: ["Excellent Layers", "Active", "Heat Tolerant"],
    detailedInfo: {
      origin: "Italy - Tuscany",
      eggProduction: "280-320 eggs per year",
      eggColor: "White",
      weight: "Hens: 4.5 lbs / Roosters: 6 lbs",
      temperament: "Active, flighty, independent",
      features: [
        "Exceptional egg laying",
        "Feed efficient",
        "Heat tolerant",
        "Low maintenance",
        "Excellent foragers"
      ]
    }
  },
  "orpington": {
    name: "Orpington",
    description: "Gentle giants known for their friendly nature and good egg production.",
    image: "/images/orpington.jpg",
    category: "Dual Purpose",
    traits: ["Good Layers", "Very Friendly", "Good Mothers"],
    detailedInfo: {
      origin: "England - Kent",
      eggProduction: "200-280 eggs per year",
      eggColor: "Brown",
      weight: "Hens: 8 lbs / Roosters: 10 lbs",
      temperament: "Exceptionally calm and friendly",
      features: [
        "Good egg production",
        "Excellent meat quality",
        "Great mothers",
        "Cold hardy",
        "Docile personality"
      ]
    }
  },
  "wyandotte": {
    name: "Wyandotte",
    description: "Beautiful and practical, great for both eggs and meat.",
    image: "/images/wyandotte.jpg",
    category: "Dual Purpose",
    traits: ["Good Layers", "Calm", "Winter Hardy"],
    detailedInfo: {
      origin: "United States",
      eggProduction: "200-240 eggs per year",
      eggColor: "Brown",
      weight: "Hens: 6.5 lbs / Roosters: 8.5 lbs",
      temperament: "Docile and easy to handle",
      features: [
        "Consistent egg laying",
        "Good meat production",
        "Winter hardy",
        "Beautiful plumage",
        "Good brooders"
      ]
    }
  },
  "sussex": {
    name: "Sussex",
    description: "Excellent foragers with a calm disposition.",
    image: "/images/sussex.jpg",
    category: "Dual Purpose",
    traits: ["Good Layers", "Friendly", "Good Foragers"],
    detailedInfo: {
      origin: "England - Sussex",
      eggProduction: "240-260 eggs per year",
      eggColor: "Brown",
      weight: "Hens: 7 lbs / Roosters: 9 lbs",
      temperament: "Calm and friendly",
      features: [
        "Reliable egg layers",
        "Quality meat production",
        "Excellent foragers",
        "Adaptable to various conditions",
        "Good mothers"
      ]
    }
  }
}

export default async function BreedPage({ params }:{params: Promise<{breed:string}>}) {
  const resolvedParams = await params
  const breedSlug = resolvedParams.breed
  const breed = breedDetails[breedSlug as keyof typeof breedDetails]

  if (!breed) {
    return <div>Breed not found</div>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <BreedDetail breed={breed} />
      </div>
    </main>
  )
}
