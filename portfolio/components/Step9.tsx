import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import ParallaxStarts from './ParallaxStars/ParallaxStars'
import ShootingStars from './ShootingStars/ShootingStars'
import MagicCat from '../public/Pictures/Magic/wizard-cat-color-stroke-by-Vexels.svg'

function Step9({
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
    percentageOfTheComponentScrolledY,
    setPercentageOfTheComponentScrolledY,
  ] = useState(0)
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
      className="flex h-screen w-[150vw] overflow-x-hidden overflow-y-hidden text-6xl"
      ref={containerRef}
    >
      <div
        className="relative flex w-full items-center justify-center"
        style={{}}
      >
        <ParallaxStarts />
        <ShootingStars />
        <h1
          className={`sticky top-1/2 z-10 px-2 text-center text-2xl md:px-0 md:text-5xl
           ${isVisible ? ' animate-fade-in' : 'animate-fade-out'}`}
          style={{
            animationDuration: '0.5s',
          }}
        >
          We Can Find Anything in Space...
        </h1>
        <div
          className="absolute h-full w-full bg-contain bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: 'url(/Pictures/Background/galaxy.png)',
          }}
        >
          <div
            className="absolute top-0 left-0 z-10 h-full w-full bg-black"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,1) 0%,rgb(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)',
            }}
          ></div>
        </div>
        {/* <div
          className={`absolute h-32 w-32 animate-super-floating md:h-72 md:w-72`}
          style={{
            bottom: `10%`,
            left: `30%`,
            filter: 'brightness(85%)',
          }}
        >
          <Image
            src={MagicFrog}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div> */}
        <div
          className={`absolute right-[10%] h-32 w-32 animate-super-floating md:top-[30%] md:right-[30%] md:h-72 md:w-72`}
          style={{
            // bottom: `10%`,
            // left: `70%`,
            filter: 'brightness(55%)',
          }}
        >
          <Image
            src={MagicCat}
            alt="Picture of the Astronaut 3"
            className=""
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

export default Step9
