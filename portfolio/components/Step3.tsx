import React from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import Image from 'next/image'
import AstronautPic1 from '../public/Pictures/Astronauts/Astronaut-1.svg'
import MeteoritoPic2 from '../public/Pictures/Meteoritos/Meteorito-2.png'
import Meteorito5 from '../public/Pictures/Meteoritos/Meteorito-5.svg'
import ParallaxStarts from './ParallaxStars/ParallaxStars'

function Step3() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  })
  return (
    <div
      className="relative flex h-[200vh] w-screen text-6xl"
      ref={containerRef}
    >
      <ParallaxStarts smallStars={3} mediumStars={1} bigStars={1} />
      <div className="relative w-full">
        <h1
          className={`sticky top-1/2 px-2 text-center text-2xl md:px-0 md:text-5xl ${
            isVisible ? ' animate-fade-in' : 'animate-fade-out'
          }`}
          style={{
            animationDuration: '0.5s',
          }}
        >
          Things in Space Remain Still...
        </h1>
      </div>
      <div className="relative w-full ">
        <div
          className="absolute top-[45%] right-[5%] h-52 w-52 animate-super-floating md:right-[15%] md:top-[52%] md:h-96	md:w-96"
          style={{
            filter: 'brightness(45%)',
          }}
        >
          <Image
            priority
            src={AstronautPic1}
            alt="Picture of the Astronaut 1"
            className=""
            layout="responsive"
          />
        </div>
        <div
          className="absolute top-[75%] right-[50%] h-16 w-16 animate-super-floating md:top-[90%] md:right-[50%] md:h-20	md:w-20"
          style={{
            filter: 'brightness(45%)',
          }}
        >
          <Image
            priority
            src={MeteoritoPic2}
            alt="Picture of the Meteorito 2"
            layout="responsive"
          />
        </div>
        <div
          className="absolute top-[100%] right-[10%] h-16 w-16 animate-super-floating md:right-[10%] md:top-[100%] md:h-32 md:w-32"
          style={{
            filter: 'brightness(45%)',
          }}
        >
          <Image
            priority
            src={Meteorito5}
            alt="Picture of the Planet 1"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

export default Step3
