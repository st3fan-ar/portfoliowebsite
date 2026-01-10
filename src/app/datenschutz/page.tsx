import Link from 'next/link'

export const metadata = {
  title: 'Datenschutzerklärung - Stefan Marquardt',
  description: 'Datenschutzerklärung und Informationen zum Datenschutz',
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          ← Zurück zur Startseite
        </Link>

        <div className="bg-[var(--bg-secondary)]/50 border border-[#e5e4dc] rounded-2xl p-8 md:p-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-[var(--text-primary)]">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-[var(--text-secondary)]">
            {/* Einleitung */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">Allgemeine Hinweise</h3>
              <p className="leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
                Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </section>

            {/* Datenerfassung */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                2. Datenerfassung auf dieser Website
              </h2>
              
              <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </h3>
              <p className="leading-relaxed mb-6">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">
                Wie erfassen wir Ihre Daten?
              </h3>
              <p className="leading-relaxed mb-6">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. 
                um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="leading-relaxed mb-6">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder 
                Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">
                Wofür nutzen wir Ihre Daten?
              </h3>
              <p className="leading-relaxed mb-6">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h3>
              <p className="leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
                haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das 
                Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
                zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p className="leading-relaxed mt-4">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              </p>
            </section>

            {/* Verantwortliche Stelle */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                3. Hinweis zur verantwortlichen Stelle
              </h2>
              <p className="leading-relaxed mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-[var(--bg-primary)] border border-[#e5e4dc] rounded-lg p-6">
                <p className="leading-relaxed">
                  <strong className="text-[var(--text-primary)]">Stefan Marquardt</strong><br />
                  Hauptstraße 51<br />
                  86707 Kühlenthal<br /><br />
                  E-Mail: <a href="mailto:stefanmichael.marquardt@gmail.com" className="text-[var(--accent)] hover:underline">stefanmichael.marquardt@gmail.com</a>
                </p>
              </div>
              <p className="leading-relaxed mt-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
                über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) 
                entscheidet.
              </p>
            </section>

            {/* Hosting */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                4. Hosting
              </h2>
              <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">Vercel</h3>
              <p className="leading-relaxed mb-4">
                Diese Website wird gehostet bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
              </p>
              <p className="leading-relaxed mb-4">
                Details entnehmen Sie der Datenschutzerklärung von Vercel: 
                <a 
                  href="https://vercel.com/legal/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline ml-1"
                >
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
              <p className="leading-relaxed">
                Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein 
                berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
              </p>
            </section>

            {/* Kontaktaufnahme */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                5. Kontaktaufnahme
              </h2>
              <p className="leading-relaxed mb-4">
                Die Kontaktaufnahme erfolgt über externe Plattformen (LinkedIn) oder direkt per E-Mail. Dabei werden 
                keine personenbezogenen Daten auf dieser Website gespeichert oder verarbeitet.
              </p>
              <p className="leading-relaxed mb-4">
                <strong>LinkedIn:</strong><br />
                Bei Kontaktaufnahme über LinkedIn gelten die Datenschutzbestimmungen von LinkedIn: 
                <a 
                  href="https://www.linkedin.com/legal/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline ml-1"
                >
                  https://www.linkedin.com/legal/privacy-policy
                </a>
              </p>
              <p className="leading-relaxed">
                <strong>E-Mail-Kontakt:</strong><br />
                Bei direkter E-Mail-Kommunikation werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall 
                von Anschlussfragen gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO 
                (Vertragsanbahnung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Diese Daten werden nicht 
                ohne Ihre Einwilligung weitergegeben und nach abgeschlossener Bearbeitung gelöscht, sofern keine 
                gesetzlichen Aufbewahrungspflichten bestehen.
              </p>
            </section>

            {/* SSL/TLS Verschlüsselung */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                6. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum 
                Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. 
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des 
                Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="leading-relaxed mt-4">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, 
                nicht von Dritten mitgelesen werden.
              </p>
            </section>

            {/* Server-Log-Dateien */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                7. Server-Log-Dateien
              </h2>
              <p className="leading-relaxed mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="leading-relaxed mb-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
              <p className="leading-relaxed">
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber 
                hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner 
                Website - hierzu müssen die Server-Log-Files erfasst werden.
              </p>
            </section>

            {/* Ihre Rechte */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                8. Ihre Rechte
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-[var(--text-primary)]">Auskunftsrecht</h3>
                  <p className="leading-relaxed">
                    Sie haben das Recht, jederzeit von uns unentgeltliche Auskunft über die zu Ihrer Person 
                    gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der 
                    Datenverarbeitung zu erhalten.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-[var(--text-primary)]">Berichtigung, Löschung und Sperrung</h3>
                  <p className="leading-relaxed">
                    Sie haben jederzeit das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung 
                    Ihrer personenbezogenen Daten im Rahmen der gesetzlichen Vorgaben.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-[var(--text-primary)]">Widerspruchsrecht</h3>
                  <p className="leading-relaxed">
                    Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 
                    lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die 
                    Verarbeitung Ihrer personenbezogenen Daten einzulegen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-[var(--text-primary)]">Widerruf Ihrer Einwilligung</h3>
                  <p className="leading-relaxed">
                    Sofern die Verarbeitung Ihrer personenbezogenen Daten auf einer erteilten Einwilligung beruht, 
                    haben Sie jederzeit das Recht, Ihre Einwilligung zu widerrufen. Die Rechtmäßigkeit der bis zum 
                    Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-[var(--text-primary)]">Beschwerderecht</h3>
                  <p className="leading-relaxed">
                    Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer 
                    personenbezogenen Daten durch uns zu beschweren.
                  </p>
                </div>
              </div>
            </section>

            {/* Stand der Datenschutzerklärung */}
            <section className="bg-[var(--bg-primary)] border border-[#e5e4dc] rounded-lg p-6">
              <h2 className="font-heading text-2xl font-bold mb-4 text-[var(--text-primary)]">
                Stand der Datenschutzerklärung
              </h2>
              <p className="leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand <strong>Januar 2026</strong>.
              </p>
              <p className="leading-relaxed mt-2 text-sm">
                <strong>Hinweis:</strong> Durch die Weiterentwicklung unserer Website oder aufgrund geänderter 
                gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
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
                href="/impressum" 
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
