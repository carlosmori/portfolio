import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import HandReachingAstronaut from '../public/Pictures/Astronauts/handReachAstronaut.svg'
import PlanetPic4 from '../public/Pictures/Planets/red.svg'
import PlanetPic5 from '../public/Pictures/Planets/neptune.svg'
import Ufo1 from '../public/Pictures/Ufo/Ufo-1.svg'
import MeteoritoPic2 from '../public/Pictures/Meteoritos/Meteorito-2.png'
import MeteoritoPic5 from '../public/Pictures/Meteoritos/Meteorito-5.svg'
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
            background:
              'linear-gradient(to right, rgba(0,0,0,1) 0%,rgb(0,0,0,0) 50%)',
          }}
        ></div>
        <ParallaxStarts smallStars={100} mediumStars={70} bigStars={30} />
        <h1
          className={`sticky top-1/2 z-10 px-2 text-center text-2xl md:px-0 md:text-5xl
          ${isVisible ? ' animate-fade-in' : 'animate-fade-out'}`}
          style={{
            animationDuration: '0.5s',
          }}
        >
          So Close...
        </h1>
        {/* Diamond */}
        <div
          className={`absolute left-0 top-0 h-32 w-32 animate-super-floating md:h-24 md:w-24`}
          style={{
            top: `calc(25% + ${percentageOfTheComponentScrolledX * 1.7}%)`,
            // top: `calc(0% - ${prevScrollX / 30}%`,
            left: `calc(25% + ${percentageOfTheComponentScrolledX * 1.3}%)`,
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
        {/* Astronaut */}
        <div
          className={`absolute h-32 w-32 md:h-64 md:w-64`}
          style={{
            top: `calc(0% + ${percentageOfTheComponentScrolledX * 1.4}%)`,
            left: `calc(10% + ${percentageOfTheComponentScrolledX}%)`,
            animationDuration: '20s',
            filter: 'brightness(85%)',
          }}
        >
          <Image
            src={HandReachingAstronaut}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
        {/* <div
          className={`absolute h-32 w-32 animate-rotate md:h-12 md:w-12`}
          style={{
            top: `calc(50% - ${percentageOfTheComponentScrolledX}%)`,
            left: `calc(10% + ${percentageOfTheComponentScrolledX}%)`,
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
        </div> */}
        <div
          className={`absolute h-32 w-32 animate-rotate md:h-52 md:w-52`}
          style={{
            top: `calc(0% + ${percentageOfTheComponentScrolledX}%)`,
            left: `calc(100% - ${percentageOfTheComponentScrolledX}%)`,
            animationDuration: '20s',
            filter: 'brightness(45%)',
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
            filter: 'brightness(15%)',
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
            filter: 'brightness(45%)',
          }}
        >
          <Image
            src={PlanetPic4}
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
        <div
          className={`absolute h-32 w-32 animate-rotate md:h-8 md:w-8`}
          style={{
            top: `calc(110% - ${percentageOfTheComponentScrolledX * 2}%)`,
            left: `calc(87% - ${percentageOfTheComponentScrolledX}%)`,
            animationDuration: '20s',
            filter: 'brightness(25%)',
          }}
        >
          <Image
            src={MeteoritoPic5}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
        <div
          className={`absolute h-32 w-32 animate-rotate md:h-6 md:w-6`}
          style={{
            top: `calc(120% - ${percentageOfTheComponentScrolledX * 2.5}%)`,
            left: `calc(85% - ${percentageOfTheComponentScrolledX}%)`,
            animationDuration: '20s',
            filter: 'brightness(25%)',
          }}
        >
          <Image
            src={MeteoritoPic5}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
        <div
          className={`absolute h-32 w-32 animate-rotate md:h-12 md:w-12`}
          style={{
            top: `calc(115% - ${percentageOfTheComponentScrolledX * 3}%)`,
            left: `calc(90% - ${percentageOfTheComponentScrolledX}%)`,
            animationDuration: '20s',
            filter: 'brightness(25%)',
          }}
        >
          <Image
            src={MeteoritoPic5}
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
