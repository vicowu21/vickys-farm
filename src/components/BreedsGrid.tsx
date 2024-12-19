'use client'

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { motion } from "framer-motion"
import Link from "next/link"

const breeds = [
  {
    name: "Rhode Island Red",
    description: "Known for their excellent egg laying abilities and friendly temperament.",
    image: "/images/rhode-island-red.jpg",
    category: "Dual Purpose",
    traits: ["Excellent Layers", "Friendly", "Hardy"],
    slug: "rhode-island-red"
  },
  {
    name: "Plymouth Rock",
    description: "A classic American breed that's great for both meat and eggs.",
    image: "/images/plymouth-rock.jpg",
    category: "Dual Purpose",
    traits: ["Good Layers", "Docile", "Cold Hardy"],
    slug: "plymouth-rock"
  },
  {
    name: "Leghorn",
    description: "Prolific layers of white eggs, known for their efficiency.",
    image: "/images/leghorn.jpg",
    category: "Egg Layer",
    traits: ["Excellent Layers", "Active", "Heat Tolerant"],
    slug: "leghorn"
  },
  {
    name: "Orpington",
    description: "Gentle giants known for their friendly nature and good egg production.",
    image: "/images/orpington.jpg",
    category: "Dual Purpose",
    traits: ["Good Layers", "Very Friendly", "Good Mothers"],
    slug: "orpington"
  },
  {
    name: "Wyandotte",
    description: "Beautiful and practical, great for both eggs and meat.",
    image: "/images/wyandotte.jpg",
    category: "Dual Purpose",
    traits: ["Good Layers", "Calm", "Winter Hardy"],
    slug: "wyandotte"
  },
  {
    name: "Sussex",
    description: "Excellent foragers with a calm disposition.",
    image: "/images/sussex.jpg",
    category: "Dual Purpose",
    traits: ["Good Layers", "Friendly", "Good Foragers"],
    slug: "sussex"
  }
]

export default function BreedsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {breeds.map((breed, index) => (
        <motion.div
          key={breed.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/breeds/${breed.slug}`}>
            <Card className="h-full bg-white/5 backdrop-blur-sm border border-white/20 hover:border-brown-400/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <CardBody className="p-0">
                <Image
                  alt={breed.name}
                  className="object-cover w-full h-50"
                  src={breed.image}
                  radius="none"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-brown-800 dark:text-brown-200">{breed.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{breed.description}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-brown-100 dark:bg-brown-900 text-brown-800 dark:text-brown-200 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                      {breed.category}
                    </span>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="gap-2 flex-wrap">
                {breed.traits.map((trait) => (
                  <span
                    key={trait}
                    className="inline-block bg-brown-50 dark:bg-brown-800/50 text-brown-600 dark:text-brown-300 rounded-full px-2 py-1 text-xs"
                  >
                    {trait}
                  </span>
                ))}
              </CardFooter>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
