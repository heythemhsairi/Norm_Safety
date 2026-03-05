import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/motion/Reveal'

const mockups = [
  { src: '/assets/mockup-1.png', label: 'Wall Sign' },
  { src: '/assets/mockup-2.png', label: 'Corporate ID' },
  { src: '/assets/mockup-3.png', label: 'Stationery' },
  { src: '/assets/mockup-4.png', label: 'Mobile App Icon' },
  { src: '/assets/mockup-5.png', label: 'Pin Badge' },
]

function MockupCard({ m, index, onOpen }: { m: typeof mockups[0]; index: number; onOpen: (i: number) => void }) {
  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-2xl bg-bg ring-1 ring-border transition-transform duration-300 hover:-translate-y-1"
      onClick={() => onOpen(index)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={m.src}
          alt={m.label}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="px-4 py-3">
        <p className="text-xs font-medium text-text-muted">{m.label}</p>
      </div>
    </div>
  )
}

function Lightbox({ selected, onClose }: { selected: number | null; onClose: () => void }) {
  useEffect(() => {
    if (selected === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected, onClose])

  return createPortal(
    <AnimatePresence>
      {selected !== null && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={mockups[selected].src}
              alt={mockups[selected].label}
              className="max-h-[80vh] w-full object-contain"
            />
            <div className="flex items-center justify-between px-5 py-3">
              <p className="text-sm font-medium text-text">{mockups[selected].label}</p>
              <button
                onClick={onClose}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:bg-bg hover:text-text"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default function MockupsSection() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="context" className="slide bg-white">
      <div className="mx-auto w-full max-w-5xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Brand in Context
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            Real-World Applications
          </h2>
        </Reveal>
        {/* Top row: 2 large cards */}
        <div className="mb-4 grid gap-4 grid-cols-2">
          {mockups.slice(0, 2).map((m, i) => (
            <Reveal key={m.label} delay={0.15 + i * 0.08}>
              <MockupCard m={m} index={i} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
        {/* Bottom row: 3 smaller cards */}
        <div className="grid gap-4 grid-cols-3">
          {mockups.slice(2).map((m, i) => (
            <Reveal key={m.label} delay={0.3 + i * 0.08}>
              <MockupCard m={m} index={i + 2} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox selected={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
