import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import HandReachingAstronaut from '../public/Pictures/Astronauts/handReachAstronaut.svg'
import PlanetPic4 from '../public/Pictures/Planets/Saturn2.svg'
import PlanetPic5 from '../public/Pictures/Planets/neptune.svg'
import Ufo1 from '../public/Pictures/Ufo/Ufo-1.svg'
import MeteoritoPic2 from '../public/Pictures/Meteoritos/Meteorito-2.png'
import Diamond from '../public/Pictures/Diamonds/Diamond2.png'
import ParallaxStarts from './ParallaxStars/ParallaxStars'

function Step8({
  prevScrollY,
  prevScrollX,
  parentOffSetTop,
  amountOfVerticalElements,
}) {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  })
  const [
    percentageOfTheComponentScrolledX,
    setPercentageOfTheComponentScrolledX,
  ] = useState(0)
  useEffect(() => {
    const percentageOfComponentScrolled =
      ((prevScrollX - containerRef.current.offsetLeft) * 100) /
      containerRef.current.offsetWidth
    setPercentageOfTheComponentScrolledX(percentageOfComponentScrolled)
  }, [containerRef, prevScrollX])
  return (
    <div
      className="relative flex h-screen w-[150vw] overflow-x-hidden overflow-y-hidden  text-6xl"
      ref={containerRef}
    >
      <div
        className="relative flex w-full items-center justify-center"
        style={{}}
      >
        <div
          className="absolute top-0 left-0 z-20 h-full w-full"
          style={{
            'background-color': 'black', // Old browsers
            background:
              'linear-gradient(to right, rgba(0,0,0,1) 0%,rgb(0,0,0,0) 50%)',
          }}
        ></div>
        <ParallaxStarts />
        <h1
          className={`sticky top-1/2 z-10 px-2 text-center text-2xl md:px-0 md:text-5xl
          ${isVisible ? ' animate-fade-in' : 'animate-fade-out'}`}
          style={{
            animationDuration: '0.5s',
          }}
        >
          Meteorites, Planets Ramble
        </h1>
        <div
          className={`absolute left-0 top-0 h-32 w-32 animate-rotate md:h-32 md:w-32`}
          style={{
            top: `calc(20% + ${percentageOfTheComponentScrolledX * 1.3}%)`,
            // top: `calc(0% - ${prevScrollX / 30}%`,
            left: `calc(20% + ${percentageOfTheComponentScrolledX * 1.3}%)`,
            animationDuration: '50s',
            filter: 'brightness(85%)',
          }}
        >
          <Image
            src={Diamond}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
        <div
          className={`absolute z-10 h-32 w-32 md:h-64 md:w-64`}
          style={{
            top: `calc(0% + ${percentageOfTheComponentScrolledX}%)`,
            left: `calc(10% + ${percentageOfTheComponentScrolledX}%)`,
            animationDuration: '20s',
          }}
        >
          <Image
            src={HandReachingAstronaut}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
        <div
          className={`absolute h-32 w-32 animate-rotate md:h-52 md:w-52`}
          style={{
            top: `calc(0% + ${percentageOfTheComponentScrolledX}%)`,
            left: `calc(100% - ${percentageOfTheComponentScrolledX}%)`,
            animationDuration: '20s',
            filter: 'brightness(85%)',
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
          className={`absolute h-32 w-32 animate-rotate md:h-52 md:w-52`}
          style={{
            top: `calc(0% + ${percentageOfTheComponentScrolledX}%)`,
            left: `calc(100% - ${percentageOfTheComponentScrolledX}%)`,
            animationDuration: '20s',
            filter: 'brightness(85%)',
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
          className={`absolute h-32 w-32 md:h-72 md:w-72`}
          style={{
            top: `calc(10%)`,
            left: `calc(50% - ${percentageOfTheComponentScrolledX * 0.2}%)`,
            animationDuration: '20s',
            filter: 'brightness(85%)',
          }}
        >
          <Image
            src={PlanetPic5}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
        <div
          className={`absolute h-32 w-32 md:h-56 md:w-56`}
          style={{
            bottom: `calc(30% + ${percentageOfTheComponentScrolledX * 0.5}%)`,
            right: `5%`,
            animationDuration: '20s',
            filter: 'brightness(55%)',
          }}
        >
          <Image
            src={Ufo1}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

export default Step8
