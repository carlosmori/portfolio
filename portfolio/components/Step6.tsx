import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import Saturn2 from '../public/Pictures/Planets/Saturn2.svg'
import MeteoritoPic1 from '../public/Pictures/Meteoritos/Meteorito-1.svg'
import MeteoritoPic2 from '../public/Pictures/Meteoritos/Meteorito-2.png'
import MeteoritoPic6 from '../public/Pictures/Meteoritos/Meteorito-6.svg'
import ParallaxStarts from './ParallaxStars/ParallaxStars'

function Step6({ currentScrollY }: any) {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  })
  const [offSetTop, setOffSetTop] = useState(0)
  useEffect(() => {
    setOffSetTop((currentScrollY * 100) / containerRef.current.offsetTop - 100)
  }, [currentScrollY, containerRef])
  return (
    <div
      className="relative flex h-[200vh] w-screen text-6xl "
      ref={containerRef}
    >
      <ParallaxStarts smallStars={25} mediumStars={10} bigStars={5} />
      <div className="relative w-full">
        <h1
          className={`sticky top-1/2  z-30 px-2 text-center text-2xl md:px-0 md:text-5xl ${
            isVisible ? ' animate-fade-in' : 'animate-fade-out'
          }`}
          style={{
            animationDuration: '0.5s',
          }}
        >
          In The Same Direction?
        </h1>

        <div
          className={`absolute left-[5%] h-32 w-32 animate-rotate md:h-72 md:w-72`}
          style={{
            top: `calc(20% - ${offSetTop * 5}%)`,
            left: `calc(5% + ${offSetTop * 5}%)`,
            animationDuration: '20s',
            filter: 'brightness(85%)',
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
            filter: 'brightness(55%)',
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
          className={`absolute right-[50%] h-32 w-32 animate-rotate md:h-64 md:w-64`}
          style={{
            top: `calc(80% - ${offSetTop * 2}%)`,
            right: `calc(80% - ${offSetTop * 5}%)`,
            animationDuration: '10s',
            filter: 'brightness(65%)',
          }}
        >
          <Image
            src={MeteoritoPic6}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
        <div
          className={`absolute right-[5%] z-20 h-56 w-56 md:h-96 md:w-96`}
          style={{
            top: `calc(30% + ${offSetTop * 2}%)`,
            animationDuration: '20s',
            filter: 'brightness(85%)',
          }}
        >
          <Image
            src={Saturn2}
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
