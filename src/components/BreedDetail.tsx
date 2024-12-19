'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { ArrowLeft } from 'lucide-react'

type BreedDetailProps = {
  breed: {
    name: string
    description: string
    image: string
    category: string
    traits: string[]
    detailedInfo: {
      origin: string
      eggProduction: string
      eggColor: string
      weight: string
      temperament: string
      features: string[]
    }
  }
}

export default function BreedDetail({ breed }: BreedDetailProps) {
  return (
    <>
      <div className="mb-8">
        <Button
          as={Link}
          href="/breeds"
          variant="light"
          className="text-brown-600 dark:text-brown-300"
          startContent={<ArrowLeft className="w-4 h-4" />}
        >
          Back to Breeds
        </Button>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <div className="relative h-[400px] lg:h-[600px]">
          <Image
            src={breed.image}
            alt={breed.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-brown-800 dark:text-brown-200 italic">
              {breed.name}
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {breed.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brown-50 dark:bg-brown-900/50 p-4 rounded-lg">
                <h3 className="font-semibold text-brown-800 dark:text-brown-200">Origin</h3>
                <p className="text-gray-600 dark:text-gray-300">{breed.detailedInfo.origin}</p>
              </div>
              <div className="bg-brown-50 dark:bg-brown-900/50 p-4 rounded-lg">
                <h3 className="font-semibold text-brown-800 dark:text-brown-200">Egg Production</h3>
                <p className="text-gray-600 dark:text-gray-300">{breed.detailedInfo.eggProduction}</p>
              </div>
              <div className="bg-brown-50 dark:bg-brown-900/50 p-4 rounded-lg">
                <h3 className="font-semibold text-brown-800 dark:text-brown-200">Egg Color</h3>
                <p className="text-gray-600 dark:text-gray-300">{breed.detailedInfo.eggColor}</p>
              </div>
              <div className="bg-brown-50 dark:bg-brown-900/50 p-4 rounded-lg">
                <h3 className="font-semibold text-brown-800 dark:text-brown-200">Weight</h3>
                <p className="text-gray-600 dark:text-gray-300">{breed.detailedInfo.weight}</p>
              </div>
            </div>

            <div className="bg-brown-50 dark:bg-brown-900/50 p-4 rounded-lg">
              <h3 className="font-semibold text-brown-800 dark:text-brown-200">Temperament</h3>
              <p className="text-gray-600 dark:text-gray-300">{breed.detailedInfo.temperament}</p>
            </div>

            <div>
              <h3 className="font-semibold text-brown-800 dark:text-brown-200 mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {breed.detailedInfo.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
