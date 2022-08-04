import Image from 'next/image'
import React from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import FemaleAstronaut from '../public/Pictures/Astronauts/Astronaut-Female-Looking.svg'
import Saturn from '../public/Pictures/Planets/Saturn.svg'
import MeteoritoPic7 from '../public/Pictures/Meteoritos/Meteorito-7.svg'
import Alien from '../public/Pictures/Ufo/alien-arms.svg'
import UfoPic1 from '../public/Pictures/Ufo/Ufo-1.svg'

function Step4() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  })
  return (
    <div
      className="flex h-[200vh] w-screen text-center text-6xl"
      ref={containerRef}
    >
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
          className="absolute top-[25%] right-[10%] h-36 w-36 md:top-[30%] md:left-[35%] md:h-72	md:w-72"
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
          Remain Still
        </h1>
      </div>
    </div>
  )
}

export default Step4
