'use client';

import { Button } from '@nextui-org/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const images = [
  {
    src: '/images/img1.jpg',
    alt: 'Farm view 1',
  },
  {
    src: '/images/img2.jpg',
    alt: 'Farm view 2',
  },
];

// Pre-split text
const text1 = 'Welcome'.split('');
const text2 = 'To'.split('');
const text3 = "Vicky's".split('');
const text4 = 'Farm'.split('');

// DelayedText Component
function DelayedText({ text, baseDelay }: { text: string[]; baseDelay: number }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <span>
      {text.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: isMounted ? baseDelay + index * 0.1 : 0,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures client-side mounting
  }, []);

  // Automatic image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-brown-400">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 bg-brown-400">
        {isMounted && (
          <AnimatePresence mode="sync">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                fill
                className="object-cover brightness-30"
                priority
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6Nzg2OjEwRUZGSVNWW1xbN0FbYV5dZVNbW1v/2wBDARUXFx4aHR4eHVtTODNTW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </motion.div>
          </AnimatePresence>
        )}
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-8"
        >
          <h1
            className={`text-3xl sm:text-3xl lg:text-4xl pb-12 font-bold text-white overflow-hidden tracking-wide ${playfair.className}`}
          >
            <DelayedText text={text1} baseDelay={0} />
            {' '}
            <DelayedText text={text2} baseDelay={text1.length * 0.1} />
            {' '}
            <DelayedText text={text3} baseDelay={(text1.length + text2.length) * 0.1} />
            {' '}
            <DelayedText text={text4} baseDelay={(text1.length + text2.length + text3.length) * 0.1} />
          </h1>
          <p className="text-lg text-gray-200 pt-20 leading-relaxed whitespace-nowrap">
            Experience the finest quality poultry breeds, expertly raised with care and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              as={Link}
              href="/breeds"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
            >
              Explore Breeds
            </Button>
            <Button
              as={Link}
              href="/about"
              size="lg"
              variant="bordered"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      {isMounted && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentImage === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
