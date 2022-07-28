import React from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'

function Step1() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })
  return (
    <div className="content-1 flex h-screen w-screen items-center justify-center text-center text-3xl md:text-5xl">
      <div className="" ref={containerRef}>
        {isVisible && (
          <h1
            className="animate-fade-in font-kanit"
            style={{
              animationDuration: '1.5s',
            }}
          >
            Join me on a Space Adventure.
          </h1>
        )}
      </div>
    </div>
  )
}

export default Step1
