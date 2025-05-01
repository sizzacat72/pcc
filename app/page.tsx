'use client'

import { useEffect } from 'react'
import FloatingElement from '../components/FloatingElement'
import AnimatedNav from '../components/AnimatedNav'
import CustomCursor from '../components/CustomCursor'
import Lenis from 'lenis'
import gsap from 'gsap'
import '../styles/globals.css'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <>
      <CustomCursor />
      <AnimatedNav />
      <main className="main">
        <h1 className="title">Perfect Cut Collaboration</h1>
        <p className="subtitle">A floating gallery of handpicked rugs</p>

        <FloatingElement src="/rugs/rug1.jpeg" index={0} />
        <FloatingElement src="/rugs/rug2.jpeg" index={1} />
        <FloatingElement src="/rugs/rug3.jpeg" index={2} />
        <FloatingElement src="/rugs/rug4.jpeg" index={3} />
        <FloatingElement src="/rugs/rug5.jpeg" index={4} />
        <FloatingElement src="/rugs/rug6.jpeg" index={5} />
        <FloatingElement src="/rugs/rug7.jpeg" index={6} />
      </main>
    </>
  )
}