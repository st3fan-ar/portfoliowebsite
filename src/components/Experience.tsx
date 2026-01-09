'use client'

export default function Experience() {
  const experiences = [
    {
      title: 'Team Lead Power Electronics',
      company: 'Quest One GmbH | H-TEC SYSTEMS',
      location: 'Augsburg, Germany',
      period: 'April 2023 – Present',
      description: `As Team Lead Power Electronics, I lead by empowering my engineering team to push the boundaries of industrial 
      hydrogen technology. I build an environment where my engineers collaborate effectively with cross-functional partners, develop 
      patent-protected innovations, and grow professionally. My leadership combines strategic vision for technical roadmaps with 
      hands-on mentorship, enabling  to master complex challenges in DC grid integration and multi-MW power electronics. I believe great 
      engineering leadership means creating clarity, removing obstacles, and developing people - not just delivering projects.`,
      tags: ['Leadership', 'System Architecture', 'Empowering', 'DC Networks', 'Innovation'],
    },
    {
      title: 'Chief Engineer',
      company: 'Quest One GmbH | H-TEC SYSTEMS',
      location: 'Augsburg, Germany',
      period: 'April 2021 – March 2023',
      description: `In this role, I led a matrix organization across Mechanical Design, Process Engineering, Documentation, 
      and Software for the 350kW PEM electrolyzer platform ME100. Additionally, I developed modular infeed cabinets 
      in two power classes (100kVAr and 50kVAr) with active harmonic filtering and reactive power compensation that 
      ensure industrial grid compliance. 

      By optimizing the system and developing a service concept with a ticket system using Microsoft's Power Platform, 
      I was able to increase availability drastically. The coordination of technical interfaces between all engineering 
      disciplines was central to the project's success.`,
      tags: ['Matrix Leadership', 'Grid Compliance', 'Active Filtering', 'Innovation'],
    },
    {
      title: 'R&D Electrical Engineer',
      company: 'Quest One GmbH | H-TEC SYSTEMS',
      location: 'Augsburg, Germany',
      period: 'May 2019 – March 2021',
      description: `My work focused on the development of busbar solutions for MW-class PEM electrolyzers with particular 
      emphasis on current carrying and thermal management. I designed and implemented hybrid thyristor-IGBT rectifier topologies 
      that achieve an efficiency of over 96% in the load range of 20-100%. Additionally, I was responsible for the design of 
      transformers up to 2500kVA for industrial electrolysis plants, thereby laying the foundation for scalable power electronics 
      components in hydrogen production systems.`,
      tags: ['Rectifier Design', 'Busbar Systems', 'Transformer Engineering', 'Efficiency Optimization'],
    },
  ]

  return (
    <section id="experience" className="py-32 px-6 bg-[var(--bg-secondary)]/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-5xl font-bold mb-16 text-center text-[var(--text-primary)]">
          Professional <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[var(--bg-primary)] border border-[#e5e4dc] rounded-2xl p-8 card-hover"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-[var(--accent)] font-medium text-lg mb-1">{exp.company}</p>
                    <p className="text-[var(--text-secondary)] text-sm">{exp.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 px-4 py-2 rounded-lg text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[var(--bg-secondary)] border border-[#e5e4dc] px-3 py-1 rounded-full text-xs text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
