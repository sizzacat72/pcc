'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const rugs = [
  { src: '/rugs/rug1.jpeg', title: 'Rug 1', description: 'Handwoven Persian rug from Tabriz.', layer: 'near' },
  { src: '/rugs/rug2.jpeg', title: 'Rug 2', description: 'Antique tribal rug with geometric patterns.', layer: 'mid' },
  { src: '/rugs/rug3.jpeg', title: 'Rug 3', description: 'Floral motif rug with gold accents.', layer: 'far' },
  { src: '/rugs/rug4.jpeg', title: 'Rug 4', description: 'Silk and wool blend from Isfahan.', layer: 'mid' },
  { src: '/rugs/rug5.jpeg', title: 'Rug 5', description: 'Muted tones with modern abstract form.', layer: 'near' },
  { src: '/rugs/rug6.jpeg', title: 'Rug 6', description: 'Classic red Persian rug with medallion.', layer: 'far' },
  { src: '/rugs/rug7.jpeg', title: 'Rug 7', description: 'Blue and ivory with floral vine border.', layer: 'mid' },
  { src: '/rugs/GUPLOT.jpeg', title: 'GUPLOT', description: 'Dreamlike banner drop-in.', layer: 'far' },
  { src: '/rugs/INTRO.jpeg', title: 'INTRO', description: 'The moment it begins.', layer: 'near' },
  { src: '/rugs/METRO.jpeg', title: 'METRO', description: 'Subsurface mobility aesthetic.', layer: 'mid' },
  { src: '/rugs/AIGOD.jpeg', title: 'AIGOD', description: 'Generated divinity fragment.', layer: 'mid' }
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nearRef = useRef<HTMLDivElement>(null)
  const midRef = useRef<HTMLDivElement>(null)
  const farRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const animateLayer = (ref: React.RefObject<HTMLDivElement>, speed: number) => {
      if (!ref.current) return
      gsap.to(ref.current, {
        x: () => `-=${ref.current!.scrollWidth / speed}`,
        ease: 'none',
        duration: 100,
        repeat: -1
      })
    }

    animateLayer(nearRef, 1.2)
    animateLayer(midRef, 2.5)
    animateLayer(farRef, 4)
  }, [])

  return (
    <main ref={containerRef} className="relative bg-white min-h-screen overflow-hidden font-mono text-blue-700 font-bold">
      {/* Splash Screen */}
      <section className="fixed top-0 left-0 w-full h-full bg-black text-white z-50 flex items-center justify-center text-4xl font-bold">
        Perfect Cut Collaboration
      </section>

      {/* Parallax Header */}
      <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-blue-700 text-5xl font-bold z-10 uppercase tracking-widest pointer-events-none">
        Perfect Cut Gallery
      </h1>

      {/* Layers */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden">
        {[{ ref: farRef, name: 'far' }, { ref: midRef, name: 'mid' }, { ref: nearRef, name: 'near' }].map(layer => (
          <div
            key={layer.name}
            ref={layer.ref}
            className="flex gap-20 absolute left-0 top-1/2 -translate-y-1/2 px-80"
          >
            {Array.from({ length: 2 }).flatMap(() =>
              rugs
                .filter(r => r.layer === layer.name)
                .map((rug, i) => (
                  <Link href={`/rug/${i}`} key={i + rug.title}>
                    <div
                      className="rug relative w-40 h-40 flex-shrink-0 will-change-transform transform hover:scale-125 transition-transform duration-300 group"
                      style={{
                        filter: 'blur(1.5px)',
                        transformStyle: 'preserve-3d',
                        zIndex: 100 - i
                      }}
                    >
                      <Image
                        src={rug.src}
                        alt={rug.title}
                        fill
                        loading="lazy"
                        className="object-cover rounded-full shadow-2xl"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-70 text-black p-2 text-xs rounded-xl flex flex-col justify-center items-center">
                        <strong className="hover:underline hover:scale-105 transition-transform">{rug.title}</strong>
                        <p className="text-center hover:text-gray-600 transition-colors">{rug.description}</p>
                      </div>
                    </div>
                  </Link>
                ))
            )}
          </div>
        ))}
      </div>

      {/* Manifesto Section */}
      <section className="mt-screen bg-white text-black px-10 py-40 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Perfect Cut Collab</h2>
        <p className="max-w-3xl mx-auto text-lg">Perfect Cut Collaboration: ever-oscillating archive of aesthetic provocations.</p>
      </section>

      {/* Product Grid Placeholder */}
      <section className="bg-gray-100 py-20 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white shadow-xl rounded-2xl p-4 hover:scale-[1.02] transition-transform">
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Artifact #{i + 1}</h3>
            <p className="text-sm text-gray-600">Definitive swag.</p>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className="bg-black text-white text-center px-10 py-40">
        <h2 className="text-4xl font-bold mb-6">Perfect Cut Collab</h2>
        <p className="max-w-2xl mx-auto text-gray-400">We never mass produce.</p>
      </section>
    </main>
  )
}
