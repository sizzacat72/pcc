'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main style={{ padding: "4rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Perfect Cut Collaboration</h1>
      <p style={{ fontSize: "1.5rem", color: "#555" }}>
        Welcome to the site. It's blazing fast, fully static, and ready to go.
      </p>
    </main>
  )
}

