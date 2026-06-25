import { Star, Quote } from 'lucide-react'
import Tilt from '../components/Tilt'
import { Section, Container, SectionHeading, Reveal } from './ui'

const ITEMS = [
  {
    name: 'Daniel R.',
    role: 'Investor · UAE',
    initials: 'DR',
    chip: 'from-sky-400 to-blue-600',
    quote:
      'Brinx made crypto mining effortless. The AI handles everything and I just watch my dashboard grow every single day.',
  },
  {
    name: 'Sofia M.',
    role: 'Trader · Spain',
    initials: 'SM',
    chip: 'from-amber-300 to-amber-500',
    quote:
      'Transparent, fast USDT withdrawals and real-time analytics. Finally a platform I can actually trust with my money.',
  },
  {
    name: 'Arjun P.',
    role: 'Entrepreneur · India',
    initials: 'AP',
    chip: 'from-emerald-400 to-teal-600',
    quote:
      'The automated trading engine is seriously impressive. Set up in minutes and it runs 24/7. Highly recommended.',
  },
]

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-elevated/40">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Trusted Worldwide"
            title="What our investors"
            highlight="are saying"
            subtitle="Join thousands of people building digital wealth with Brinx."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ITEMS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <Tilt max={6}>
                <div className="card card-hover relative h-full p-7">
                  <Quote size={40} className="absolute right-6 top-6 text-ink/[0.06]" />
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">“{t.quote}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.chip} text-sm font-bold text-white`}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
