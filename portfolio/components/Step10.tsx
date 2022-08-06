import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'

import Magic from './Magic/Magic'
import ParallaxStarts from './ParallaxStars/ParallaxStars'
import ShootingStars from './ShootingStars/ShootingStars'
import Test from './Test'

function Step10({}) {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })
  return (
    <div
      className="z-20 flex h-[200vh] w-screen overflow-x-hidden overflow-y-hidden bg-black text-6xl"
      ref={containerRef}
    >
      <div
        className="relative flex w-full items-center justify-center"
        style={{}}
      >
        <div className="flex h-full w-full flex-col">
          <ParallaxStarts />
          {/* <ParallaxStarts /> */}
          {isVisible && <Magic isVisible={isVisible} />}
          <div className="absolute top-0 flex h-[50%] w-[100%] items-center justify-center ">
            <div
              className="absolute h-full w-full bg-contain bg-center bg-no-repeat opacity-50"
              style={{
                backgroundImage:
                  'url(/Pictures/Background/astroman-stars-high-quality-space-background-1038774.png)',
              }}
            >
              <div
                className="absolute top-0 left-0 z-10 h-full w-full"
                style={{
                  'background-color': 'black', // Old browsers
                  background:
                    'linear-gradient(to right, rgba(0,0,0,1) 0%,rgb(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)',
                }}
              ></div>
            </div>
            <h1
              className={`${
                isVisible
                  ? 'pointer-events-none z-0 animate-fade-in cursor-default px-2 text-center text-2xl font-light md:px-0 md:text-5xl'
                  : 'hidden'
              }`}
            >
              Even Magic
            </h1>
          </div>
          <div className="absolute top-[50%] flex h-[50%] w-[100%] items-center justify-center">
            <h1
              className={`${
                isVisible
                  ? 'pointer-events-none z-0 animate-fade-in cursor-default px-2 text-center text-2xl font-light md:px-0 md:text-5xl'
                  : 'hidden'
              }`}
            >
              Contact Me
            </h1>
          </div>
          {/* <div className="pointer-events-none absolute top-[50%] flex h-[50%] w-[100%] items-center justify-center">
            <ContactForm />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Step10
