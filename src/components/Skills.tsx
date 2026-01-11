'use client'

export default function Skills() {
  const competencies = [
    {
      title: 'Leadership',
      description: 'Building and scaling the Power Electronics discipline through strategic leadership, team development, and innovation promotion',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Team Development',
      description: 'Building and leading interdisciplinary engineering teams across multiple locations and disciplines',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Innovation & IP',
      description: 'Development of patent-protected solutions for PEM electrolyzers',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Technical Excellence',
      description: 'Development of comprehensive system architectures and monitoring solutions for electrolyzer plants',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-5xl font-bold mb-16 text-center text-[var(--text-primary)]">
          Core <span className="gradient-text">Competencies</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="bg-[var(--bg-secondary)]/50 border border-[#e5e4dc] rounded-2xl p-8 card-hover group"
            >
              <div className="w-14 h-14 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-xl flex items-center justify-center text-[var(--accent)] mb-6">
                {competency.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3 text-[var(--text-primary)]">{competency.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{competency.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
