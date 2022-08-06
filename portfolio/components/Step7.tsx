import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import AstronautWatchingPic from '../public/Pictures/Astronauts/Astronaut-watching.svg'
import PlanetPic4 from '../public/Pictures/Planets/Planet-4.svg'
import PlanetPic5 from '../public/Pictures/Planets/Planet-5.svg'
import MeteoritoPic1 from '../public/Pictures/Meteoritos/Meteorito-1.svg'
import MeteoritoPic2 from '../public/Pictures/Meteoritos/Meteorito-2.png'
import MeteoritoPic6 from '../public/Pictures/Meteoritos/Meteorito-6.svg'

function Step7({
  prevScrollY,
  prevScrollX,
  parentOffSetTop,
  amountOfVerticalElements,
}) {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })
  const [
    percentageOfTheComponentScrolledY,
    setPercentageOfTheComponentScrolledY,
  ] = useState(0)
  const [
    percentageOfTheComponentScrolledX,
    setPercentageOfTheComponentScrolledX,
  ] = useState(0)
  const astronautRef: any = useRef()
  useEffect(() => {
    setPercentageOfTheComponentScrolledY(
      ((prevScrollY * 100) / parentOffSetTop - 90) * 10
    )
  }, [prevScrollY, parentOffSetTop])
  useEffect(() => {
    setPercentageOfTheComponentScrolledX(
      (prevScrollX * 100) / containerRef.current.offsetWidth
    )
  }, [prevScrollX, containerRef])
  return (
    <div
      className="flex h-screen w-screen overflow-x-hidden overflow-y-hidden  text-6xl"
      ref={containerRef}
    >
      <div
        className="relative flex w-full items-center justify-center"
        style={{}}
      >
        <h1
          className={`sticky top-1/2 z-10 px-2 text-center text-2xl md:px-0 md:text-5xl
          ${isVisible ? ' animate-fade-in' : 'animate-fade-out'}`}
          style={{
            animationDuration: '0.5s',
          }}
          // style={{
          //   animationDuration: '1.5s',
          //   backgroundImage: 'url(/gifs/blue.gif)',
          //   WebkitBackgroundClip: 'text',
          //   color: 'transparent',
          //   backgroundPosition: 'right',
          // }}
        >
          In Different Directions
        </h1>
        <div
          className={`top absolute h-56 w-56 md:h-96 md:w-96`}
          ref={astronautRef}
          style={{
            transform: `scale(${percentageOfTheComponentScrolledY / 60})`,
            top: `calc(40% + ${percentageOfTheComponentScrolledY / 10}%)`,
            right: `calc(50% - ${astronautRef?.current?.offsetWidth / 2}px)`,
            filter: 'brightness(55%)',
          }}
        >
          <Image
            src={AstronautWatchingPic}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

export default Step7
