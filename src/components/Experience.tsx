'use client'

export default function Experience() {
  const questOnePositions = [
    {
      title: 'Team Lead Power Electronics',
      period: 'April 2023 – Present',
      description: `As Team Lead Power Electronics, I lead by empowering my engineering team to push the boundaries of industrial 
      hydrogen technology. I build an environment where my engineers collaborate effectively with cross-functional partners, develop 
      patent-protected innovations, and grow professionally. My leadership combines strategic vision for technical roadmaps with 
      hands-on mentorship, enabling to master complex challenges in DC grid integration and multi-MW power electronics. I believe great 
      engineering leadership means creating clarity, removing obstacles, and developing people - not just delivering projects.`,
      tags: ['Leadership', 'System Architecture', 'Empowering', 'DC Networks', 'Innovation'],
    },
    {
      title: 'Chief Engineer',
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
      period: 'May 2019 – March 2021',
      description: `My work focused on the development of busbar solutions for MW-class PEM electrolyzers with particular 
      emphasis on current carrying and thermal management. I designed and implemented hybrid thyristor-IGBT rectifier topologies 
      that achieve an efficiency of over 96% in the load range of 20-100%. Additionally, I was responsible for the design of 
      transformers up to 2500kVA for industrial electrolysis plants, thereby laying the foundation for scalable power electronics 
      components in hydrogen production systems.`,
      tags: ['Rectifier Design', 'Busbar Systems', 'Transformer Engineering', 'Efficiency Optimization'],
    },
  ]

  const earlyCareerPositions = [
    {
      title: 'Test Engineer',
      company: 'Grünbeck AG',
      industry: 'Water Treatment Technology',
      period: 'Sep 2018 – May 2019',
      description: 'Conducted performance validation and quality assurance testing for industrial water treatment systems, with focus on prototype testing and development of custom test benches for product validation.',
      tags: ['Testing', 'Prototyping', 'Quality Assurance'],
    },
    {
      title: 'Electrical Technician',
      company: 'Stadtwerke Augsburg',
      industry: 'Municipal Utility',
      period: 'Feb 2014 – Jul 2015',
      description: 'Building automation and electrical infrastructure installation for commercial and industrial facilities, including public buildings such as town halls and schools.',
      tags: ['Building Automation', 'Infrastructure', 'Public Facilities'],
    },
  ]

  return (
    <section id="experience" className="py-32 px-6 bg-[var(--bg-secondary)]/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-5xl font-bold mb-16 text-center text-[var(--text-primary)]">
          Professional <span className="gradient-text">Experience</span>
        </h2>

        {/* Quest One Header - no line */}
        <div className="mb-1">
          <h3 className="font-heading text-3xl font-bold text-[var(--text-primary)]">
            Quest One GmbH | H-TEC SYSTEMS
          </h3>
          <p className="text-[var(--text-secondary)] text-sm mt-2">Augsburg, Germany</p>
        </div>

        {/* Timeline Container - line starts here */}
        <div className="relative pl-8">
          {/* Main Vertical Timeline Line */}
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-[var(--accent)]" />

          {/* Quest One Positions */}
          <div className="space-y-10">
            {questOnePositions.map((position, index) => (
              <div key={index} className="relative group">
                {/* Position Dot - cuts through the line */}
                <div className="absolute -left-7 top-6 w-5 h-5 rounded-full bg-[var(--accent)] border-[3px] border-[var(--bg-secondary)] group-hover:scale-125 transition-all duration-200 z-10" />
                
                {/* Content - hover highlights entire block */}
                <div className="py-3 pr-4 rounded-lg group-hover:bg-[var(--bg-primary)] transition-all duration-200">
                  
                  
                  {/* Title */}
                  <h4 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-0 group-hover:text-[var(--accent)] transition-colors duration-200">
                    {position.title}
                  </h4>

                {/* Period - small text */}
                  <p className="text-[var(--text-secondary)] text-sm mb-3 group-hover:text-[var(--accent)] transition-colors duration-200">
                    {position.period}
                  </p>


                  {/* Description */}
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4 whitespace-pre-line">
                    {position.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {position.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[var(--bg-secondary)] border border-[#e5e4dc] px-3 py-1 rounded-full text-xs text-[var(--text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

{/* Early Career Header */}
          <div className="mt-5 mb-1 pl-0">
            <h3 className="font-heading text-3xl font-bold text-[var(--text-primary)]/70">
              Early Career
            </h3>
          </div>

        {/* Timeline Container early career- line starts here */}
        <div className="relative pl-8">
          {/* Main Vertical Timeline Line */}
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-[var(--accent)]" />

          {/* Early Career Positions */}
          <div className="space-y-8">
            {earlyCareerPositions.map((position, index) => (
              <div key={index} className="relative group">
                {/* Position Dot - smaller and lighter, cuts through line */}
                <div className="absolute -left-7 top-6 w-5 h-5 rounded-full bg-[var(--accent)] border-[3px] border-[var(--bg-secondary)] group-hover:scale-125 transition-all duration-200 z-10" />
                
                {/* Content - hover highlights entire block */}
                <div className="py-2 pr-4 rounded-lg group-hover:bg-[var(--bg-primary)]/50 transition-all duration-200">
                  {/* Period */}
                  <p className="text-[var(--text-secondary)] text-sm mb-1">
                    {position.period}
                  </p>
                  
                  {/* Title & Company */}
                  <h4 className="font-heading text-xl font-bold text-[var(--text-primary)]/80 group-hover:text-[var(--text-primary)] transition-colors duration-200">
                    {position.title}
                  </h4>
                  <p className="text-[var(--accent)]/70 text-sm font-medium mb-3">
                    {position.company} · {position.industry}
                  </p>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)]/80 leading-relaxed text-sm mb-3">
                    {position.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {position.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[var(--bg-secondary)]/50 border border-[#e5e4dc]/50 px-2 py-0.5 rounded-full text-xs text-[var(--text-secondary)]/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
