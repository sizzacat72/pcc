'use client'

import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.id = 'custom-cursor'
    Object.assign(cursor.style, {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: 'black',
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: 9999,
      transform: 'translate(-50%, -50%)',
      transition: 'transform 0.1s ease-out',
    })
    document.body.appendChild(cursor)

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.removeChild(cursor)
    }
  }, [])

  return null
}
