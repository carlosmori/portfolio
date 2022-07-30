import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import AstronautPic3 from '../public/Pictures/Astronauts/Astronaut-3.svg'
import PlanetPic4 from '../public/Pictures/Planets/Planet-4.svg'
import PlanetPic5 from '../public/Pictures/Planets/Planet-5.svg'
import MeteoritoPic1 from '../public/Pictures/Meteoritos/Meteorito-1.svg'
import MeteoritoPic2 from '../public/Pictures/Meteoritos/Meteorito-2.png'
import MeteoritoPic6 from '../public/Pictures/Meteoritos/Meteorito-6.svg'

function Step6({ currentScrollY }) {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })
  const [offSetTop, setOffSetTop] = useState(0)
  useEffect(() => {
    setOffSetTop((currentScrollY * 100) / containerRef.current.offsetTop - 100)
  }, [currentScrollY, containerRef])
  return (
    <div className="flex h-[200vh] w-screen text-6xl " ref={containerRef}>
      <div className="relative w-full">
        <h1
          className={`${
            isVisible
              ? 'sticky top-1/2 z-10 animate-fade-in px-2 text-center text-2xl md:px-0 md:text-5xl'
              : 'hidden'
          }`}
          style={{
            animationDuration: '1.5s',
          }}
        >
          Sometimes they Spin
        </h1>
        <div
          className={`absolute left-[5%] h-32 w-32 animate-rotate md:h-96 md:w-96`}
          style={{
            top: `calc(20% - ${offSetTop * 5}%)`,
            left: `calc(5% + ${offSetTop * 5}%)`,
            animationDuration: '20s',
          }}
        >
          <Image
            src={MeteoritoPic1}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
        <div
          className={`absolute right-[5%] h-32 w-32 animate-rotate md:h-96 md:w-96`}
          style={{
            top: `calc(50% - ${offSetTop * 4}%)`,
            right: `calc(5% + ${offSetTop * 5}%)`,
            animationDuration: '15s',
          }}
        >
          <Image
            src={MeteoritoPic2}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
        <div
          className={`absolute right-[50%] h-32 w-32 animate-rotate md:h-96 md:w-96`}
          style={{
            top: `calc(80% - ${offSetTop * 2}%)`,
            right: `calc(80% - ${offSetTop * 5}%)`,
            animationDuration: '10s',
          }}
        >
          <Image
            src={MeteoritoPic6}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

export default Step6
