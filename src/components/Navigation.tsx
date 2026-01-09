'use client'

interface NavigationProps {
  scrolled?: boolean
}

export default function Navigation({ scrolled = false }: NavigationProps) {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md shadow-lg border-b border-[#e5e4dc]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center">
          <img src="/logo.svg" alt="Stefan" className="h-8" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="border border-[var(--accent)] text-[var(--accent)] px-5 py-2 rounded-lg font-medium text-sm hover:bg-[var(--accent)] hover:text-white transition-all duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
