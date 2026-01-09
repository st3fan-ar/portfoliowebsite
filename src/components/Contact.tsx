'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // WICHTIG: Ersetze YOUR_FORM_ID mit deiner Formspree Form ID
      const response = await fetch('https://formspree.io/f/xkoowrwr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-5xl font-bold mb-6 text-[var(--text-primary)]">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Interested in discussing engineering leadership, power electronics challenges, or collaboration opportunities? 
            I'm always open to meaningful conversations about innovation in energy technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[var(--bg-secondary)]/50 border border-[#e5e4dc] rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-bold mb-6 text-[var(--text-primary)]">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[var(--bg-primary)] border border-[#e5e4dc] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[var(--bg-primary)] border border-[#e5e4dc] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[var(--bg-primary)] border border-[#e5e4dc] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-[var(--bg-primary)] border border-[#e5e4dc] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[var(--accent)] text-white py-4 rounded-lg font-medium hover:bg-[var(--accent-subtle)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm text-center">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-600 text-sm text-center">
                  ✗ Something went wrong. Please try again or contact me via LinkedIn.
                </p>
              )}
            </form>
          </div>

{/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[var(--bg-secondary)]/50 border border-[#e5e4dc] rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-bold mb-6 text-[var(--text-primary)]">
                Other Ways to Connect
              </h3>
   
              <div className="space-y-6">
                <a 
                  href="https://linkedin.com/in/stefanmarquardt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-lg flex items-center justify-center text-[var(--accent)] flex-shrink-0 group-hover:bg-[var(--accent)]/20 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">LinkedIn</h4>
                    <p className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors text-sm">
                      Connect on LinkedIn
                    </p>
                  </div>
                </a>

                <a 
                  href="https://maps.app.goo.gl/SBAgdg2Vo6zLi1XU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-lg flex items-center justify-center text-[var(--accent)] flex-shrink-0 group-hover:bg-[var(--accent)]/20 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">Location</h4>
                    <p className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors text-sm">
                      Augsburg, Germany
                    </p>
                  </div>
                </a>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  )
}