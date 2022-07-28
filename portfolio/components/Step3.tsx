import React from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import Image from 'next/image'
import AstronautPic1 from '../public/Pictures/Astronauts/Astronaut-1.svg'
import MeteoritoPic1 from '../public/Pictures/Meteoritos/Meteorito-1.svg'
import MeteoritoPic2 from '../public/Pictures/Meteoritos/Meteorito-2.png'
import PlanetPic1 from '../public/Pictures/Planets/Planet-1.svg'

function Step3() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })
  return (
    <div className="flex h-[200vh] w-screen text-6xl" ref={containerRef}>
      <div className="relative w-full">
        <h1
          className={`${
            isVisible
              ? 'sticky top-1/2 animate-fade-in px-2 text-center text-2xl md:px-0 md:text-5xl'
              : 'hidden'
          }`}
          style={{
            animationDuration: '1.5s',
          }}
        >
          Static Scrolling is boring
        </h1>
      </div>
      <div className="relative w-full ">
        <div className="absolute top-[30%] right-[10%]">
          <Image
            src={AstronautPic1}
            alt="Picture of the Astronaut 1"
            className=""
            width={300}
            height={300}
          />
        </div>
        <div className="absolute top-[45%] right-[20%]">
          <Image
            src={MeteoritoPic1}
            alt="Picture of the Meteorito 1"
            className=""
            width={200}
            height={200}
          />
        </div>
        <div className="absolute top-[65%] right-[70%]">
          <Image
            src={MeteoritoPic2}
            alt="Picture of the Meteorito 2"
            className=""
            width={150}
            height={150}
          />
        </div>
        <div className="absolute top-[80%] right-[10%]">
          <Image
            src={PlanetPic1}
            alt="Picture of the Planet 1"
            className=""
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  )
}

export default Step3
