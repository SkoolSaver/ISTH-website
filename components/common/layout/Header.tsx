'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BaseComponentProps } from '@/types'

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

  return (
    <header className={`bg-primary-dark sticky top-0 z-50 ${className || ''}`}>
      <nav className="max-w-7xl mx-auto px-md py-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-sm hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <span className="text-primary-dark font-bold text-xl">I</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-lg">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-accent transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-accent transition-colors"
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
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-accent transition-colors font-medium py-xs"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
