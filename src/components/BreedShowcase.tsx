'use client'

import { Card, CardBody, CardFooter, Button } from "@nextui-org/react"
import { motion } from "framer-motion"
import { breeds } from "@/lib/data/breeds"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function BreedShowcase() {
  return (
    <section className="py-24 bg-default-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-semibold mb-4">Our Premium Breeds</h2>
          <h3 className="text-4xl font-bold mb-6">Discover Our Selection</h3>
          <p className="text-default-600 max-w-2xl mx-auto">
            We take pride in raising the finest poultry breeds, each selected for their unique characteristics and superior quality.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {breeds.map((breed) => (
            <motion.div key={breed.id} variants={item}>
              <Card className="h-full">
                <CardBody className="overflow-visible p-0">
                  <motion.div
                    className="w-full aspect-square bg-default-100 rounded-t-xl flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      className="w-32 h-32 text-primary opacity-80"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                      <path d="M2 17L12 22L22 17" />
                      <path d="M2 12L12 17L22 12" />
                    </svg>
                  </motion.div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{breed.name}</h4>
                    <p className="text-default-600 text-sm mb-4">{breed.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-default-500">Egg Production</span>
                        <span className="font-medium">{breed.characteristics.eggProduction}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-default-500">Temperament</span>
                        <span className="font-medium">{breed.characteristics.temperament}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-default-500">Disease Resistance</span>
                        <span className="font-medium">{breed.stats.diseaseResistance}</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="p-6 pt-0">
                  <Button
                    className="w-full"
                    color="primary"
                    variant="flat"
                    endContent={
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    }
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
