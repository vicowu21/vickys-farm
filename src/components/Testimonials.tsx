'use client'

import { Card, CardBody, Avatar } from "@nextui-org/react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "John Smith",
    role: "Poultry Farmer",
    content: "The quality of breeds from Vicky's Farm is exceptional. Their Rhode Island Reds have consistently outperformed our expectations in egg production.",
    image: "/images/testimonials/avatar1.svg"
  },
  {
    name: "Sarah Johnson",
    role: "Farm Manager",
    content: "Their expert guidance and support have been invaluable. The Plymouth Rocks we purchased are thriving, and the ongoing consultation is excellent.",
    image: "/images/testimonials/avatar2.svg"
  },
  {
    name: "Michael Chen",
    role: "Agricultural Consultant",
    content: "I've recommended Vicky's Farm to many clients. Their commitment to quality and sustainable practices sets them apart in the industry.",
    image: "/images/testimonials/avatar3.svg"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-default-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-semibold mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold mb-6">What Our Clients Say</h3>
          <p className="text-default-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their experience with Vicky&apos;s Farm.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card 
                className="h-full"
                isHoverable
              >
                <CardBody className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    className="mb-6"
                  >
                    <svg
                      className="w-10 h-10 text-primary opacity-20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </motion.div>
                  <p className="text-default-600 mb-6">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <Avatar
                      className="flex-shrink-0"
                      size="lg"
                      src={testimonial.image}
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-default-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
