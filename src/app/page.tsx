import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import BreedShowcase from "@/components/BreedShowcase";
import FarmFeatures from "@/components/FarmFeatures";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-24">
        <Hero />
      </div>
      <Stats />
      <BreedShowcase />
      <FarmFeatures />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  )
}
