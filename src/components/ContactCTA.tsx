'use client'

import { Button } from "@nextui-org/react"
import { motion } from "framer-motion"
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-brown-800 to-brown-900">
      {/* Grain overlay */}
      <div className="absolute inset-0 bg-[url('/images/grain.svg')] opacity-20" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Start Your Poultry Journey?
          </h2>
          <p className="text-lg text-brown-200">
            Let&apos;s discuss how we can help you build a successful poultry farm.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            as={Link}
            href="/contact"
            className="bg-white hover:bg-brown-50 text-brown-900 font-semibold text-lg px-8 py-6"
            size="lg"
            variant="solid"
          >
            Contact Us
          </Button>

          <Button
            as={Link}
            href="/services"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
            size="lg"
            variant="bordered"
          >
            View Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
