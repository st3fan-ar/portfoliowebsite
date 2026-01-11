'use client'

export default function Contact() {
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

        {/* LinkedIn Contact Card */}
        <div className="max-w-2xl mx-auto">
          <a
            href="https://linkedin.com/in/stefanmarquardt"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[var(--bg-secondary)]/50 border border-[#e5e4dc] rounded-2xl p-10 card-hover group"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* LinkedIn Icon */}
              <div className="w-20 h-20 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-2xl flex items-center justify-center text-[var(--accent)] flex-shrink-0 group-hover:bg-[var(--accent)]/20 transition-all group-hover:scale-105">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-3xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  Connect on LinkedIn
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  The best way to reach me for professional inquiries, networking, or collaboration opportunities.
                  I typically respond within 24-48 hours.
                </p>
                <div className="inline-flex items-center gap-2 text-[var(--accent)] font-medium group-hover:gap-3 transition-all">
                  <span>Visit my LinkedIn profile</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Location Info */}
        <div className="mt-12">
          <a
            href="https://maps.app.goo.gl/SBAgdg2Vo6zLi1XU7"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[var(--bg-secondary)]/50 border border-[#e5e4dc] rounded-2xl p-10 card-hover group max-w-2xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Location Icon */}
              <div className="w-20 h-20 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-2xl flex items-center justify-center text-[var(--accent)] flex-shrink-0 group-hover:bg-[var(--accent)]/20 transition-all group-hover:scale-105">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-3xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  Location
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Based in Augsburg, Germany.
                </p>
                <div className="inline-flex items-center gap-2 text-[var(--accent)] font-medium group-hover:gap-3 transition-all">
                  <span>View on Google Maps</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
