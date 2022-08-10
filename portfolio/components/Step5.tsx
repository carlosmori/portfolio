import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import AstronautPic3 from '../public/Pictures/Astronauts/Astronaut-3.svg'
import PlanetPic4 from '../public/Pictures/Planets/Planet-4.svg'
import PlanetPic5 from '../public/Pictures/Planets/Planet-5.svg'
import MeteoritoPic4 from '../public/Pictures/Meteoritos/Meteorito-4.svg'
import MeteoritoPic5 from '../public/Pictures/Meteoritos/Meteorito-5.svg'
import SpaceRocket from '../public/Pictures/Ufo/spaceRocket.svg'
import ParallaxStarts from './ParallaxStars/ParallaxStars'

function Step5({ currentScrollY }: any) {
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
      <ParallaxStarts smallStars={20} mediumStars={5} bigStars={3} />
      <div className="relative w-full">
        <h1
          className={`sticky top-1/2 z-10 px-2 text-center text-2xl md:px-0 md:text-5xl ${
            isVisible ? ' animate-fade-in' : 'animate-fade-out'
          }`}
          style={{
            animationDuration: '0.5s',
          }}
        >
          In That Case They Ramble...
        </h1>
        <div
          className="absolute left-[15%] h-32 w-32 md:left-[30%] md:h-72 md:w-72"
          style={{
            top: `calc(80% - ${offSetTop * 2}%)`,
            animationDuration: '40s',
            filter: 'brightness(65%)',
          }}
        >
          <Image
            src={SpaceRocket}
            alt="Picture of the Planet 5"
            className=""
            layout="responsive"
          />
        </div>
      </div>
      <div className="relative w-full	">
        <div
          className={`absolute top-[10%] right-[30%] block h-40 w-40 md:right-[50%] md:h-80 md:w-80`}
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
            layout="responsive"
          />
        </div>
        <div
          className={`absolute right-[5%] h-32 w-32 md:h-96 md:w-96`}
          style={{
            top: `calc(20% - ${offSetTop * 2}%)`,
            filter: 'brightness(75%)',
          }}
        >
          <Image
            src={AstronautPic3}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>

        <div
          className="absolute h-6 w-6 animate-rotate md:h-14	md:w-14"
          style={{
            top: `calc(50% + ${offSetTop * 1}%)`,
            right: `calc(50% - ${offSetTop * 0.9}%)`,
            animationDuration: '10s',
            filter: 'brightness(45%)',
          }}
        >
          <Image
            src={MeteoritoPic5}
            alt="Picture of the Meteorito 5"
            className=""
            layout="responsive"
          />
        </div>
        <div
          className="absolute animate-rotate"
          style={{
            top: `calc(32% + ${offSetTop * 1}%)`,
            right: `calc(35% - ${offSetTop * 1.8}%)`,
            animationDuration: '10s',
            filter: 'brightness(45%)',
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
            filter: 'brightness(55%)',
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
            filter: 'brightness(50%)',
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
          className="absolute z-10 h-12 w-12 animate-rotate md:h-32 md:w-32"
          style={{
            top: `calc(40% + ${offSetTop * 1}%)`,
            right: `calc(50% - ${offSetTop * 0.9}%)`,
            animationDuration: '10s',
            filter: 'brightness(55%)',
          }}
        >
          <Image
            src={MeteoritoPic5}
            alt="Picture of the Meteorito 5"
            layout="responsive"
          />
        </div>
        <div
          className="meteorito absolute h-12 w-12 md:h-36 md:w-36"
          style={{
            top: `calc(-50% + ${offSetTop * 12 > 100 ? 100 : offSetTop * 15}%)`,
            right: `calc(70% - ${
              offSetTop * 12 > offSetTop * 12 ? 100 : offSetTop * 12
            }%)`,
            filter: 'brightness(85%)',
          }}
        >
          <Image
            src={MeteoritoPic4}
            alt="Picture of the Meteorito 4"
            layout="responsive"
          />
        </div>
        <div
          className="absolute top-[90%] right-[40%] animate-rotate"
          style={{
            top: `calc(50% + ${offSetTop * 1.5}%)`,
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
