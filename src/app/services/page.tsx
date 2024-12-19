import Image from 'next/image'
import Link from 'next/link'
import { 
  MdOutlineHealthAndSafety, 
  MdOutlinePets, 
  MdOutlineAgriculture, 
  MdOutlineSchool,
  MdOutlineAnalytics,
  MdOutlineSupport 
} from 'react-icons/md'

export default function ServicesPage() {
  const services = [
    {
      icon: <MdOutlineHealthAndSafety className="text-white text-3xl" />,
      title: "Health Management",
      description: "Comprehensive healthcare solutions for your poultry farm.",
      features: [
        "Regular health check-ups and monitoring",
        "Vaccination programs and disease prevention",
        "Emergency veterinary support",
        "Health record maintenance"
      ],
      color: "bg-brown-600"
    },
    {
      icon: <MdOutlinePets className="text-white text-3xl" />,
      title: "Breed Selection",
      description: "Expert guidance in choosing the perfect breeds for your farm.",
      features: [
        "Breed compatibility assessment",
        "Climate-specific recommendations",
        "Production goal alignment",
        "Genetic quality assurance"
      ],
      color: "bg-brown-500"
    },
    {
      icon: <MdOutlineAgriculture className="text-white text-3xl" />,
      title: "Farm Management",
      description: "Complete farm setup and operational solutions.",
      features: [
        "Housing design and optimization",
        "Feed management programs",
        "Environmental control systems",
        "Waste management solutions"
      ],
      color: "bg-brown-600"
    },
    {
      icon: <MdOutlineSchool className="text-white text-3xl" />,
      title: "Training & Education",
      description: "Comprehensive training programs for modern poultry farming.",
      features: [
        "Hands-on farming workshops",
        "Best practices training",
        "Staff development programs",
        "Regular knowledge updates"
      ],
      color: "bg-brown-500"
    },
    {
      icon: <MdOutlineAnalytics className="text-white text-3xl" />,
      title: "Performance Analytics",
      description: "Data-driven insights for farm optimization.",
      features: [
        "Production metrics tracking",
        "Growth rate analysis",
        "Feed conversion monitoring",
        "Profitability assessment"
      ],
      color: "bg-brown-600"
    },
    {
      icon: <MdOutlineSupport className="text-white text-3xl" />,
      title: "Ongoing Support",
      description: "Continuous assistance for your farming success.",
      features: [
        "24/7 technical support",
        "Regular consultations",
        "Problem-solving assistance",
        "Market guidance"
      ],
      color: "bg-brown-500"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-brown-50 to-brown-100">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full bg-brown-700">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/services-hero.jpg"
          alt="Vicky's Farm Services"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-center max-w-2xl">
            Comprehensive solutions for modern poultry farming
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`${service.color} p-6`}>
                <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-brown-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-brown-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brown-800">Ready to Get Started?</h2>
            <p className="text-lg text-brown-700 mb-8">
              Contact us today to discuss how we can help optimize your poultry farming operations.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-brown-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brown-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-brown-800 text-center">Why Choose Our Services?</h2>
          <div className="prose prose-lg mx-auto text-brown-700">
            <p>
              At Vicky&apos;s Farm, we bring together decades of experience in poultry farming with modern
              technological solutions. Our comprehensive service packages are designed to address every
              aspect of your farming operation, ensuring optimal results and sustainable growth.
            </p>
            <p className="mt-4">
              Whether you&apos;re just starting out or looking to optimize an existing operation, our team
              of experts is here to support your success. We pride ourselves on providing personalized
              solutions that meet your specific needs and goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
