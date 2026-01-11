'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Subheading 1*/}
          <p className="font-heading text-2xl md:text-4xl text-[var(--text-primary)]">
            Stefan
            <br />
          </p>

          {/* Main Heading */}
          <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 leading-tight text-[var(--text-primary)]">
            Marquardt
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 leading-relaxed">
            Leading Teams in Renewable Energy
            <br />
          </p>

          {/* Focus Areas */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-12">
            {[
              'Engineering Leadership',
              'DC Network Integration',
              'Power Electronics',
              'High-Current Systems',
              'Hydrogen Technology',
            ].map((area, index) => (
              <span
                key={index}
                className="bg-[var(--bg-secondary)] border border-[#e5e4dc] px-4 py-2 rounded-lg text-sm text-[var(--text-secondary)] font-medium"
              >
                {area}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#about"
              className="bg-[var(--accent)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--accent-subtle)] transition-all duration-200"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium inline-flex items-center gap-2"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
