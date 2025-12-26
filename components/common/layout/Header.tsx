'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BaseComponentProps } from '@/types'
import { useAuth } from '@/lib/AuthContext'

interface HeaderProps extends BaseComponentProps {
  // Add header-specific props as needed
}

const navigation = [
  { name: 'About Us', href: '/pages/about' },
  { name: 'Our Community', href: '/pages/community' },
  { name: 'Events', href: '/pages/events' },
  { name: 'Courses', href: '/pages/courses' },
  { name: 'Contact Us', href: '/pages/contacts' },
]

export default function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isLoggedIn } = useAuth()

  return (
    <header className={`bg-primary-dark sticky top-0 z-50 ${className || ''}`}>
      <nav className="max-w-7xl mx-auto px-lg py-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-95 transition-opacity">
            {/* Mobile Logo - visible only on mobile */}
            <div className="md:hidden flex items-center gap-xs">
              <Image
                src="/ISTH.png"
                alt="ISTH Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <div className="whitespace-nowrap">
                <div className="text-white text-sm font-bold">
                  <div>INTERNATIONAL STUDENTS</div>
                  <div>TALENT HUB</div>
                </div>
              </div>
            </div>
            {/* Desktop/Tablet Logo - visible on md and above */}
            <div className="hidden md:flex md:items-center md:gap-sm group">
              <Image
                src="/ISTH.png"
                alt="ISTH Logo"
                width={200}
                height={100}
                className="h-12 w-auto transition-opacity"
                priority
              />
              <div className="whitespace-nowrap">
                <div className="text-white text-md font-bold">
                  <div>INTERNATIONAL STUDENTS</div>
                  <div>TALENT HUB</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-lg">
            {!isLoggedIn ? (
              navigation.map(item => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-colors font-medium ${
                      isActive ? 'text-accent-dark' : 'text-white hover:text-accent-dark'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })
            ) : (
              <Link
                href="/pages/admin"
                className={`transition-colors font-medium ${
                  pathname === '/pages/admin' ? 'text-accent-dark' : 'text-white hover:text-accent-dark'
                }`}
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-accent-dark transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-md pt-md border-t border-white/20">
            <div className="flex flex-col gap-md">
              {!isLoggedIn ? (
                navigation.map(item => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`transition-colors font-medium py-xs ${
                        isActive ? 'text-accent-dark' : 'text-white hover:text-accent'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                })
              ) : (
                <Link
                  href="/pages/admin"
                  className={`transition-colors font-medium py-xs ${
                    pathname === '/pages/admin' ? 'text-accent-dark' : 'text-white hover:text-accent'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
