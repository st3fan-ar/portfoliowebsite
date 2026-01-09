'use client'

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-5xl font-bold mb-12 text-center text-[var(--text-primary)]">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
          <p>
            As Team Lead Power Electronics, I am responsible for the efficient, safe, and grid-compliant 
            integration of PEM electrolyzers into electrical power grids.
          </p>
          
          <p>
          My areas of interest are the design and development of scalable system architectures, the 
          application of cutting-edge power electronic solutions, and the technical leadership of 
          interdisciplinary engineering teams. In doing so, I integrate strategic and systemic thinking 
          with my deep knowledge of DC system architectures and DC grid integration.
          </p>
          
          <p>
            Having developed DC grid architectures for multi-MW PEM electrolyzers for a number of years, 
            I offer technical proficiency and system comprehension for challenging engineering problems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-[#e5e4dc]">
          <div className="text-center">
            <h3 className="text-[var(--text-primary)] font-semibold mb-2">Location</h3>
            <p className="text-sm text-[var(--text-secondary)]">Augsburg, Germany</p>
          </div>
          <div className="text-center border-l border-[#e5e4dc] pl-6">
            <h3 className="text-[var(--text-primary)] font-semibold mb-2">Focus</h3>
            <p className="text-sm text-[var(--text-secondary)]">Leadership in Renewable Energy</p>
          </div>
          <div className="text-center border-l border-[#e5e4dc] pl-6">
            <h3 className="text-[var(--text-primary)] font-semibold mb-2">Specialization</h3>
            <p className="text-sm text-[var(--text-secondary)]">DC-Systems</p>
          </div>
          <div className="text-center border-l border-[#e5e4dc] pl-6">
            <h3 className="text-[var(--text-primary)] font-semibold mb-2">Industry</h3>
            <p className="text-sm text-[var(--text-secondary)]">Green Hydrogen</p>
          </div>
        </div>
      </div>
    </section>
  )
}
