'use client'

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/stefanmarquardt',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:stefanmichael.marquardt@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-[var(--bg-secondary)]/50 border-t border-[#e5e4dc] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo centered */}
        <div className="flex justify-center mb-8">
          <img 
            src="/footer-logo.svg" 
            alt="Stefan Logo" 
            className="h-16 opacity-90"
            onError={(e) => {
              // Fallback if logo doesn't exist yet
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        {/* Copyright left, Social right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-[#e5e4dc]">
          {/* Copyright */}
          <div className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Stefan. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
