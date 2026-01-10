import Link from 'next/link'

export const metadata = {
  title: 'Impressum - Stefan Marquardt',
  description: 'Impressum und rechtliche Angaben',
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          ← Back to Home
        </Link>

        <div className="bg-[var(--bg-secondary)]/50 border border-[#e5e4dc] rounded-2xl p-8 md:p-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-[var(--text-primary)]">
            Impressum
          </h1>

          <div className="space-y-8 text-[var(--text-secondary)]">
            {/* Angaben gemäß § 5 TMG */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="leading-relaxed">
                <strong className="text-[var(--text-primary)]">Stefan Marquardt</strong><br />
                Hauptstraße 51<br />
                86707 Kühlenthal
              </p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                Kontakt
              </h2>
              <p className="leading-relaxed">
                E-Mail: <a href="mailto:[DEINE-EMAIL]" className="text-[var(--accent)] hover:underline">stefanmichael.marquardt@gmail.com</a><br />
                Telefon: <span className="text-[var(--text-primary)]">0174 8167621</span>
              </p>
            </section>

            {/* Verbraucherstreitbeilegung */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                EU-Streitschlichtung
              </h2>
              <p className="leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="leading-relaxed mt-4">
                Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Haftung für Inhalte */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                Haftung für Inhalte
              </h2>
              <p className="leading-relaxed">
                Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="leading-relaxed mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                Haftung für Links
              </h2>
              <p className="leading-relaxed">
                Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. 
                Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="leading-relaxed mt-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige 
                Links umgehend entfernen.
              </p>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                Urheberrecht
              </h2>
              <p className="leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors 
                bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                Gebrauch gestattet.
              </p>
              <p className="leading-relaxed mt-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie 
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden 
                Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 pt-8 border-t border-[#e5e4dc]">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/" 
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                Startseite
              </Link>
              <span className="text-[var(--text-secondary)]">•</span>
              <Link 
                href="/datenschutz" 
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
