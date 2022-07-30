import Image from 'next/image'
import React from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import AstronautPic2 from '../public/Pictures/Astronauts/Astronaut-2.svg'
import AstronautPic3 from '../public/Pictures/Astronauts/Astronaut-3.svg'
import MeteoritoPic3 from '../public/Pictures/Meteoritos/Meteorito-3.svg'
import Planet3Pic from '../public/Pictures/Planets/Planet-3.svg'
import UfoPic1 from '../public/Pictures/Ufo/Ufo-1.svg'

function Step4() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })
  return (
    <div
      className="flex h-[200vh] w-screen text-center text-6xl"
      ref={containerRef}
    >
      <div className="relative w-full ">
        <h1
          className={`${
            isVisible
              ? 'sticky top-1/2 animate-fade-in px-2 text-2xl md:px-0 md:text-5xl'
              : 'hidden'
          }`}
          style={{
            animationDuration: '1.5s',
          }}
        >
          Remain Still
        </h1>
      </div>
      <div className="relative w-full bg-black">
        {/* <div className="absolute top-[0%] right-[10%]">
          <Image
            src={AstronautPic2}
            alt="Picture of the Astronaut 2"
            className=""
            width={300}
            height={300}
          />
        </div> */}
        <div className="absolute top-[10%] right-[40%]">
          <Image
            src={Planet3Pic}
            alt="Picture of the Planet 3"
            className=""
            width={300}
            height={300}
          />
        </div>
        <div className="absolute top-[50%] right-[30%]">
          <Image
            src={UfoPic1}
            alt="Picture of the Ufo 1"
            className=""
            width={300}
            height={300}
          />
        </div>
        {/* <div className="absolute top-[80%] right-[50%]">
          <Image
            src={MeteoritoPic3}
            alt="Picture of the Meteorito 3"
            className=""
            width={250}
            height={250}
          />
        </div> */}
      </div>
    </div>
  )
}

export default Step4
