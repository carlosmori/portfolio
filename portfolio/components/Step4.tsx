import Image from 'next/image'
import React from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import FemaleAstronaut from '../public/Pictures/Astronauts/Astronaut-Female-Looking.svg'
import Saturn from '../public/Pictures/Planets/Saturn.svg'
import Alien from '../public/Pictures/Ufo/alien-arms.svg'
import ParallaxStarts from './ParallaxStars/ParallaxStars'

function Step4() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  })
  return (
    <div
      className="relative flex h-[200vh] w-screen text-center text-6xl"
      ref={containerRef}
    >
      <ParallaxStarts smallStars={7} mediumStars={3} bigStars={2} />

      <div className="relative w-full">
        <div
          className="absolute top-[30%] left-[0%] h-56 w-56 md:top-[40%] md:left-[5%] md:h-96	md:w-96"
          style={{
            filter: 'brightness(85%)',
          }}
        >
          <Image
            src={FemaleAstronaut}
            alt="Picture of the Female Astronaut"
            className=""
            layout="responsive"
          />
        </div>
        <div
          className="absolute top-[35%] left-[60%] h-28 w-28 md:top-[50%] md:left-[35%] md:h-52	md:w-52"
          style={{
            filter: 'brightness(85%)',
          }}
        >
          <Image
            src={Alien}
            alt="Picture of the Alien 1"
            className=""
            layout="responsive"
          />
        </div>
      </div>

      <div className="relative w-full ">
        <div
          className="absolute top-[25%] right-[10%] h-36 w-36 animate-super-floating md:top-[30%] md:left-[35%] md:h-72	md:w-72"
          style={{
            filter: 'brightness(85%)',
          }}
        >
          <Image
            src={Saturn}
            alt="Picture of Saturn 1"
            className=""
            layout="responsive"
          />
        </div>
        <h1
          className={`sticky top-1/2 px-2 text-center text-2xl md:px-0 md:text-5xl ${
            isVisible ? ' animate-fade-in' : 'animate-fade-out'
          }`}
          style={{
            animationDuration: '0.5s',
          }}
        >
          Unless Gravity Pulls Them
        </h1>
      </div>
    </div>
  )
}

export default Step4
