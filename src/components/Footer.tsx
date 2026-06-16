export default function Footer() {
  const cols = [
    { h: 'The Model', items: ['AI & Analytics', 'GCC Enablement', 'Talent & Staffing'] },
    { h: 'Capabilities', items: ['ERP & CRM', 'Cloud & Data', 'Cybersecurity', 'Managed Services'] },
    { h: 'Company', items: ['About', 'Partners', 'Careers', 'Contact'] },
  ]
  return (
    <footer className="bg-paper2 border-t border-ink/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 pt-20 pb-10">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 mb-16">
          <div>
            <img src={`${import.meta.env.BASE_URL}mjc-logo.png`} alt="MJC GlobalTech" className="h-7 w-auto mb-5" />
            <p className="text-ink/55 text-sm max-w-[280px]">
              AI-powered transformation, built inside Global Capability Centers and run by the people
              who staff them. Delivered across India and the UK.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h6 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink mb-5">{c.h}</h6>
              {c.items.map((it) => (
                <a key={it} href="#" className="block text-ink/55 text-sm mb-3 hover:text-brand-red transition-colors">
                  {it}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-ink/10 pt-6 flex flex-wrap justify-between gap-3 font-mono text-xs text-ink/45">
          <span>© 2026 MJC GlobalTech</span>
          <span>From pilot to production.</span>
        </div>
      </div>
    </footer>
  )
}
