import BreedsGrid from '@/components/BreedsGrid'

export default function BreedsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-medium tracking-tight text-brown-800 dark:text-brown-200 sm:text-6xl italic">
            Our Premium Breeds
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover our selection of high-quality poultry breeds, each carefully raised with dedication and expertise.
          </p>
        </div>
        <BreedsGrid />
      </div>
    </main>
  )
}
