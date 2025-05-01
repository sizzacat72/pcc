'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnimatedNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="nav-toggle" onClick={() => setOpen(!open)}>Menu</button>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul>
              <li>Home</li>
              <li>Gallery</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
