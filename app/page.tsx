'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Home() {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Lenis smooth scrolling setup
    const lenis = new Lenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // GSAP animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    })

    tl.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out' }
    )
    .fromTo(
      paragraphRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
      "-=1"
    )
    .fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'expo.out' },
      "-=0.8"
    )

    return () => {
      lenis.destroy()
      ScrollTrigger.kill()
    }
  }, [])

  return (
    <main
      ref={containerRef}
      style={{
        minHeight: '200vh',
        padding: '6rem 4rem',
        fontFamily: 'sans-serif',
        background: 'linear-gradient(180deg, #f2f2f2, #fff)',
        color: '#111',
      }}
    >
      <h1
        ref={headingRef}
        style={{
          fontSize: '4rem',
          marginBottom: '1.5rem',
          letterSpacing: '-0.05em',
          fontWeight: 700,
        }}
      >
        Perfect Cut Collaboration
      </h1>
      <p
        ref={paragraphRef}
        style={{
          fontSize: '1.5rem',
          maxWidth: '40rem',
          lineHeight: 1.6,
          color: '#444',
        }}
      >
        This site is fully animated using GSAP and scroll-synced with Lenis. The content animates
        smoothly as you scroll, thanks to Next.js App Router, with blazing-fast static export via Netlify.
      </p>
      <div style={{ marginTop: '4rem', maxWidth: '800px' }}>
        <Image
          ref={imageRef}
          src="/rugs/rug4.jpeg"
          alt="Featured Rug"
          width={800}
          height={500}
          style={{
            borderRadius: '2rem',
            boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </div>
    </main>
  )
}


