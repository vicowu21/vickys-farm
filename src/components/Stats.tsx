'use client'

import { Card } from "@nextui-org/react"
import { motion } from "framer-motion"
import { farmStats } from "@/lib/data/farm-stats"

const stats = [
  { 
    label: "Total Breeds",
    value: farmStats.overview.totalBreeds,
    prefix: "",
    suffix: "+"
  },
  { 
    label: "Years Experience",
    value: farmStats.overview.yearsExperience,
    prefix: "",
    suffix: "+"
  },
  { 
    label: "Monthly Egg Production",
    value: farmStats.production.monthlyEggProduction,
    prefix: "",
    suffix: ""
  },
  { 
    label: "Success Rate",
    value: farmStats.overview.successRate,
    prefix: "",
    suffix: "%"
  },
]

export default function Stats() {
  return (
    <section className="py-24 bg-default-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-semibold mb-4">Our Impact</h2>
          <h3 className="text-4xl font-bold mb-6">Farm Statistics</h3>
          <p className="text-default-600 max-w-2xl mx-auto">
            Our commitment to excellence reflects in our numbers. See how we&apos;ve grown and the impact we&apos;ve made in the poultry farming industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.prefix}{stat.value}{stat.suffix}
                </motion.h3>
                <p className="text-default-600">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-full"
          >
            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-4">Sustainability Metrics</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-default-500 text-sm">Solar Powered</p>
                  <p className="font-semibold">{farmStats.sustainability.solarPowered}</p>
                </div>
                <div>
                  <p className="text-default-500 text-sm">Waste Recycling</p>
                  <p className="font-semibold">{farmStats.sustainability.wasteRecycling}</p>
                </div>
                <div>
                  <p className="text-default-500 text-sm">Organic Feed</p>
                  <p className="font-semibold">{farmStats.sustainability.organicFeed}</p>
                </div>
                <div>
                  <p className="text-default-500 text-sm">Rainwater Harvesting</p>
                  <p className="font-semibold">{farmStats.sustainability.rainwaterHarvesting}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
