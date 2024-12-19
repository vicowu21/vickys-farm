import Image from 'next/image'
import { FaLeaf, FaHeart, FaFeather } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brown-50 to-brown-100">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full bg-brown-700">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/farm-hero.jpg"
          alt="Vicky's Farm"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Vicky&apos;s Farm</h1>
          <p className="text-xl text-center max-w-2xl">
            Where passion for poultry meets sustainable farming practices
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-brown-800">Our Mission</h2>
          <p className="text-lg text-brown-700 leading-relaxed">
            At Vicky&apos;s Farm, we&apos;re dedicated to revolutionizing poultry farming through sustainable practices,
            exceptional care for our birds, and education for the farming community. Our commitment to quality
            and animal welfare sets new standards in the industry.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brown-800">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-brown-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown-800">Sustainability</h3>
              <p className="text-brown-700">
                Implementing eco-friendly practices and responsible resource management
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-brown-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brown-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown-800">Animal Welfare</h3>
              <p className="text-brown-700">
                Prioritizing the health and well-being of every bird in our care
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-brown-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFeather className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown-800">Innovation</h3>
              <p className="text-brown-700">
                Embracing modern techniques while respecting traditional farming wisdom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 container mx-auto px-4 bg-brown-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-brown-800 text-center">Our Story</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-brown-700 leading-relaxed">
              Founded with a vision to create a sustainable and ethical poultry farming operation,
              Vicky&apos;s Farm has grown from humble beginnings into a leading example of modern
              agricultural excellence. Our journey is marked by continuous learning, adaptation
              of best practices, and a deep commitment to our community.
            </p>
            <p className="text-brown-700 leading-relaxed mt-4">
              Today, we&apos;re proud to be at the forefront of poultry farming innovation,
              offering comprehensive resources and support to both seasoned farmers and
              newcomers to the industry. Our dedication to excellence shows in everything
              we do, from breed selection to feed management and health care practices.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 