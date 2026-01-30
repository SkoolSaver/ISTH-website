'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { useSWRConfig } from 'swr'
import { BaseComponentProps } from '@/types'
import { useAuth } from '@/lib/AuthContext'
import { PREFETCH_MAP } from '@/lib/swr/fetchers'

interface HeaderProps extends BaseComponentProps {
  // Add header-specific props as needed
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/pages/about' },
  { name: 'Our Community', href: '/pages/community' },
  { name: 'Events', href: '/pages/events' },
  { name: 'Courses', href: '/pages/courses' },
  { name: 'Contact Us', href: '/pages/contacts' },
  { name: 'Jobs Board', href: '/pages/jobs' },
]

export default function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { isLoggedIn, isAuthReady } = useAuth()

  useEffect(() => setMounted(true), [])

  // Close mobile menu when route changes (e.g. after clicking a nav link)
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const showDashboard = isAuthReady && isLoggedIn
  const { mutate } = useSWRConfig()

  const handlePrefetch = useCallback(
    (href: string) => {
      const config = PREFETCH_MAP[href]
      if (config) {
        config.fetcher().then(data => mutate(config.key, data, { revalidate: false })).catch(() => {})
      }
    },
    [mutate]
  )

  // Hydration fix: Only apply pathname-dependent (active) styling after mount.
  // Before mount, server and client render identical neutral classes.
  const getNavLinkClassName = (href: string, extra?: string) =>
    [
      'transition-colors font-medium cursor-pointer whitespace-nowrap',
      mounted && pathname === href ? 'text-accent-light' : 'text-white hover:text-accent-light',
      extra,
    ]
      .filter(Boolean)
      .join(' ')

  return (
    <header className={`bg-primary-dark sticky top-0 z-50 ${className || ''}`}>
      <nav className="max-w-7xl mx-auto px-lg py-md" suppressHydrationWarning>
        <div className="flex items-center justify-between">
          {/* Logo - use plain img (not next/image) inside Link to avoid hydration mismatch from Image wrapper */}
          <Link
            href="/"
            className="md:hidden flex items-center gap-xs hover:opacity-95 transition-opacity"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ISTH.png" alt="ISTH Logo" width={120} height={40} className="h-10 w-auto" />
            <span className="whitespace-nowrap text-white text-sm font-bold">
              INTERNATIONAL STUDENTS
              <br />
              TALENT HUB
            </span>
          </Link>
          <Link
            href="/"
            className="hidden md:flex md:items-center md:gap-sm hover:opacity-95 transition-opacity"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ISTH.png"
              alt="ISTH Logo"
              width={200}
              height={100}
              className="h-12 w-auto transition-opacity"
            />
            <span className="whitespace-nowrap text-white text-md font-bold">
              INTERNATIONAL STUDENTS
              <br />
              TALENT HUB
            </span>
          </Link>

          {/* Desktop Navigation - always same structure, use hidden class for auth-based visibility */}
          <div className="hidden md:flex items-center gap-lg overflow-x-auto flex-shrink min-w-0">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={getNavLinkClassName(item.href, showDashboard ? 'hidden' : undefined)}
                onMouseEnter={() => handlePrefetch(item.href)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/pages/admin"
              className={getNavLinkClassName('/pages/admin', showDashboard ? undefined : 'hidden')}
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-white hover:text-accent-light transition-colors p-2 -m-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
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
                  className={getNavLinkClassName(
                    item.href,
                    ['py-xs', showDashboard ? 'hidden' : null].filter(Boolean).join(' ')
                  )}
                  onMouseEnter={() => handlePrefetch(item.href)}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/pages/admin"
                className={getNavLinkClassName(
                  '/pages/admin',
                  ['py-xs', showDashboard ? null : 'hidden'].filter(Boolean).join(' ')
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
