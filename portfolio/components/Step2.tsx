import Image from 'next/image'
import React, { useRef } from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import AstronautFemale from '../public/Pictures/Astronauts/AstronautFemale.svg'

function Step2() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '20%',
    threshold: 1,
  })
  const astronautRef: any = useRef()
  return (
    <div className="content-1 flex h-screen w-screen items-center justify-center px-2 text-center text-3xl md:px-0 md:text-5xl">
      <div
        className={`flex flex-col items-center justify-center opacity-0 ${
          isVisible ? 'animate-fade-in' : 'animate-fade-out'
        }`}
        style={{
          animationDuration: '0.5s',
        }}
        ref={containerRef}
      >
        <h1
          className={`z-10 px-2 text-center text-2xl md:px-0 md:text-5xl
          `}
        >
          Where we will progressively bring modernity to web
        </h1>
        <div
          ref={astronautRef}
          className={`absolute mt-10 h-52 w-52 md:h-96 md:w-96`}
          style={{
            filter: 'brightness(30%)',
            // transform: `scale(${percentageOfTheComponentScrolledY / 60})`,
            // top: `calc(40% + ${percentageOfTheComponentScrolledY / 10}%)`,
            right: `calc(50% - ${astronautRef?.current?.offsetWidth / 2}px)`,
          }}
        >
          <Image
            src={AstronautFemale}
            alt="Picture of the Astronaut Female"
            className=""
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

export default Step2
