'use client'

import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react"
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation'
import { MessageCircle } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Breeds", href: "/breeds" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
  ]

  return (
    <NextUINavbar
      className="fixed top-0 w-full bg-background/70 backdrop-blur-md border-b border-brown-200/20 z-50"
      maxWidth="full"
      position="sticky"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <NavbarBrand>
            <Link href="/" className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-brown-800 dark:text-brown-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 6c0-3.314-2.686-6-6-6S0 2.686 0 6c0 2.165 1.151 4.06 2.878 5.118C3.625 17.399 8.597 22 14.5 22c4.69 0 8.5-3.81 8.5-8.5 0-3.314-2.686-6-6-6s-6 2.686-6 6" />
              </svg>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-bold text-xl text-brown-800 dark:text-brown-200"
              >
                Vicky&apos;s Farm
              </motion.p>
            </Link>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex gap-6" justify="center">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <NavbarItem key={item.name}>
                  <Link
                    className={`relative italic text-brown-800 dark:text-brown-200 font-medium hover:text-brown-600 dark:hover:text-brown-300 transition-colors group outline-none ${isActive ? 'text-brown-600 dark:text-brown-300' : ''}`}
                    href={item.href}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-brown-600  italic transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </Link>
                </NavbarItem>
              )
            })}
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem>
              <Button
                as={Link}
                href="/contact"
                size="sm"
                className="group outline-none"
              >
                <MessageCircle className="w-8 h-8 outline-brown-600 hover:fill-brown-600 " />
              </Button>
            </NavbarItem>
          </NavbarContent>
        </div>
      </div>
    </NextUINavbar>
  )
}
