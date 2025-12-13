import { BaseComponentProps } from '@/types'

interface FooterProps extends BaseComponentProps {
  // Add footer-specific props as needed
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`border-t border-border bg-gra mt-auto ${className || ''}`}>
      <div className="max-w-7xl py-lg">
        <p className="text-center text-text-secondary text-sm">
          © {new Date().getFullYear()} ISTH. All rights reserved.
        </p>
      </div>
    </footer>
  )
}