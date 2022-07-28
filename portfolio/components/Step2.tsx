import React from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'

function Step2() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })
  return (
    <div className="content-1 flex h-screen w-screen items-center justify-center px-2 text-center text-3xl md:px-0 md:text-5xl">
      <div className="" ref={containerRef}>
        {/* <h1>{isVisible ? 'Im Here' : 'Im not here'}</h1> */}
        {isVisible && (
          <h1
            className="animate-fade-in font-kanit"
            style={{
              animationDuration: '1.5s',
            }}
          >
            Where we will bring modernity to web
          </h1>
        )}
      </div>
    </div>
  )
}

export default Step2
