'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

export default function FloatingElement({ src, index }: { src: string; index: number }) {
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(el.current, {
      y: 'random(-100, 100)',
      x: 'random(-100, 100)',
      rotation: 'random(-15, 15)',
      duration: 20,
      ease: 'none',
      repeat: -1,
      yoyo: true,
      delay: index * 0.2,
    })
  }, [index])

  return (
    <div ref={el} className="floating-element" style={{ zIndex: 1 }}>
      <Image src={src} alt="rug" width={300} height={200} className="floating-image" />
    </div>
  )
}
