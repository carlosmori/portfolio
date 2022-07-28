import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import AstronautPic3 from '../public/Pictures/Astronauts/Astronaut-3.svg'
import PlanetPic4 from '../public/Pictures/Planets/Planet-4.svg'
import PlanetPic5 from '../public/Pictures/Planets/Planet-5.svg'
import MeteoritoPic4 from '../public/Pictures/Meteoritos/Meteorito-4.svg'
import MeteoritoPic5 from '../public/Pictures/Meteoritos/Meteorito-5.svg'

function Step5({ currentScrollY }) {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })
  const [offSetTop, setOffSetTop] = useState(0)
  const ref = useRef()
  useEffect(() => {
    console.log(`currentScrollY`)
    console.log(currentScrollY)
    console.log(`containerRef.current.offsetTop equals:`)
    console.log(containerRef.current.offsetTop)
    console.log(`top value: `)
    console.log((currentScrollY * 100) / containerRef.current.offsetTop - 100)

    setOffSetTop((currentScrollY * 100) / containerRef.current.offsetTop - 100)
  }, [currentScrollY, containerRef])
  return (
    <div className="flex h-[200vh] w-screen text-6xl " ref={containerRef}>
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
          Do you?
        </h1>
      </div>
      <div className="relative w-full bg-black">
        <div
          className={`absolute right-[5%]`}
          style={{
            top: `calc(20% - ${offSetTop * 2}%)`,
          }}
        >
          <Image
            src={AstronautPic3}
            alt="Picture of the Astronaut 3"
            className=""
            width={400}
            height={400}
          />
        </div>
        <div
          className={`absolute top-[10%] right-[50%] block`}
          style={{
            top: `calc(5% - ${offSetTop * 0.9}%)`,
            animationFillMode: 'backwards',
            animationDuration: '2s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
          }}
        >
          <Image
            src={PlanetPic4}
            alt="Picture of the Planet 4"
            className=""
            width={300}
            height={300}
          />
        </div>
        <div
          className="absolute right-3"
          style={{
            top: `calc(-50% + ${offSetTop * 15}%)`,
            right: `calc(70% - ${offSetTop * 10}%)`,
          }}
        >
          <Image
            src={MeteoritoPic4}
            alt="Picture of the Meteorito 4"
            width={150}
            height={150}
          />
        </div>
        <div
          className="absolute animate-rotate"
          style={{
            top: `calc(50% + ${offSetTop * 1}%)`,
            right: `calc(50% - ${offSetTop * 0.9}%)`,
            animationDuration: '10s',
          }}
        >
          <Image
            src={MeteoritoPic5}
            alt="Picture of the Meteorito 5"
            className=""
            width={50}
            height={50}
          />
        </div>
        {/* <div
          className="absolute animate-rotate"
          style={{
            top: `calc(40% + ${offSetTop * 1}%)`,
            right: `calc(50% - ${offSetTop * 0.6}%)`,
            animationDuration: '10s',
          }}
        >
          <Image
            src={MeteoritoPic5}
            alt="Picture of the Meteorito 5"
            className=""
            width={10}
            height={10}
          />
        </div> */}
        <div
          className="absolute animate-rotate"
          style={{
            top: `calc(32% + ${offSetTop * 1}%)`,
            right: `calc(35% - ${offSetTop * 1.8}%)`,
            animationDuration: '10s',
          }}
        >
          <Image
            src={MeteoritoPic5}
            alt="Picture of the Meteorito 5"
            className=""
            width={10}
            height={10}
          />
        </div>
        <div
          className="absolute animate-rotate"
          style={{
            top: `calc(30% + ${offSetTop * 1}%)`,
            right: `calc(38% - ${offSetTop * 0.7}%)`,
            animationDuration: '10s',
          }}
        >
          <Image
            src={MeteoritoPic5}
            alt="Picture of the Meteorito 5"
            className=""
            width={10}
            height={10}
          />
        </div>
        <div
          className="absolute animate-rotate"
          style={{
            top: `calc(27% + ${offSetTop * 1}%)`,
            right: `calc(36% - ${offSetTop * 0.9}%)`,
            animationDuration: '10s',
          }}
        >
          <Image
            src={MeteoritoPic5}
            alt="Picture of the Meteorito 5"
            className=""
            width={10}
            height={10}
          />
        </div>
        <div
          className="absolute animate-rotate"
          style={{
            top: `calc(40% + ${offSetTop * 1}%)`,
            right: `calc(50% - ${offSetTop * 0.9}%)`,
            animationDuration: '10s',
          }}
        >
          <Image
            src={MeteoritoPic5}
            alt="Picture of the Meteorito 5"
            className=""
            width={100}
            height={100}
          />
        </div>
        <div
          className="absolute top-[90%] right-[40%] animate-rotate"
          style={{
            top: `calc(90% - ${offSetTop * 1}%)`,
            animationDuration: '40s',
          }}
        >
          <Image
            src={PlanetPic5}
            alt="Picture of the Planet 5"
            className=""
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  )
}

export default Step5
