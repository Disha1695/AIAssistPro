import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Section, Container, SectionHeading, Reveal } from './ui'

const FAQS = [
  {
    q: 'What exactly is Brinx?',
    a: 'Brinx is an AI-powered crypto mining and trading platform. Our intelligent systems automatically mine and trade digital assets for you, around the clock.',
  },
  {
    q: 'How do I get started?',
    a: 'Create your account, fund your wallet securely with USDT (BEP20), and the AI engine immediately starts working — mining and trading on your behalf.',
  },
  {
    q: 'Is my investment safe?',
    a: 'Absolutely. We use offline cold storage, bank-grade AES-256 encryption, two-factor authentication and full on-chain transparency to keep your funds protected.',
  },
  {
    q: 'Which network and currency do you support?',
    a: 'All deposits and withdrawals are processed in USDT on the BEP20 (BNB Smart Chain) network — making transactions fast, secure and low-cost.',
  },
  {
    q: 'Can I withdraw my earnings anytime?',
    a: 'Yes. You can track your performance live on your dashboard and request withdrawals conveniently whenever you like.',
  },
  {
    q: 'Do I need any technical or trading experience?',
    a: 'Not at all. Brinx is fully automated — no mining hardware, no complex setup and no trading experience required. The AI does all the work.',
  },
]

function Item({ faq, open, onClick }) {
  return (
    <div className="card overflow-hidden">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold text-ink">{faq.q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-brand transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <Section id="faq" className="bg-app">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="FAQ"
            title="Frequently asked"
            highlight="questions"
            subtitle="Everything you need to know before you start with Brinx."
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <Item faq={faq} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
