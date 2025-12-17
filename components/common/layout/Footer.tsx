import Link from 'next/link'
import { BaseComponentProps } from '@/types'

interface FooterProps extends BaseComponentProps {
  // Add footer-specific props as needed
}

export default function Footer({ className }: FooterProps) {
  const quickLinks = [
    { name: 'About Us', href: '/pages/about' },
    { name: 'Community Hub', href: '/pages/community' },
    { name: 'Upcoming Events', href: '/pages/events' },
    { name: 'Our Courses', href: '/pages/courses' },
    { name: 'Career Services', href: '/pages/contacts' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'FAQs', href: '#' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' },
  ]

  return (
    <footer className={`bg-primary-dark text-white mt-auto ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-md py-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl mb-xl">
          {/* Left Column - Logo and Mission */}
          <div className="space-y-md">
            <Link href="/" className="flex items-center gap-sm">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-primary-dark font-bold text-xl">I</span>
              </div>
            </Link>
            <p className="text-white/90 text-sm leading-relaxed">
              International Students Talent Hub is dedicated to empowering international students to
              learn essential skills, participate in valuable events, and secure meaningful
              employment opportunities globally.
            </p>
            <p className="text-white/70 text-xs">
              © {new Date().getFullYear()} International Students Talent Hub. All rights reserved.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-md">Quick Links</h3>
            <ul className="space-y-sm">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Connect */}
          <div>
            <h3 className="font-bold text-lg mb-md">Connect</h3>
            <div className="flex gap-md">
              {socialLinks.map(social => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-white/90 hover:text-accent transition-colors text-2xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - Legal Links */}
        <div className="border-t border-white/20 pt-md flex flex-col md:flex-row justify-between items-center gap-md">
          <div className="text-white/70 text-xs flex items-center gap-1">
            Made with <span className="text-accent">❤️</span>{' '}
            <span className="text-accent">Vercel</span>
          </div>
          <div className="flex gap-md">
            {legalLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-accent transition-colors text-xs"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
