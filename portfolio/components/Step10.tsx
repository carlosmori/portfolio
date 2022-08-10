import Image from 'next/image'
import React from 'react'
import { useElementOnScreen } from '../hooks/useElementOnScreen'
import MagicFrog from '../public/Pictures/Magic/wizard-frog.svg'
import Meteorito from '../public/Pictures/Meteoritos/Meteorito-5.svg'
import ContactForm from './ContactForm'
import Magic from './Magic/Magic'
import ParallaxStarts from './ParallaxStars/ParallaxStars'

function Step10({ contactMeRef }) {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })
  return (
    <div
      className="z-20 flex h-[200vh] w-screen overflow-x-hidden overflow-y-hidden bg-black text-6xl"
      ref={containerRef}
    >
      <div
        className="relative flex w-full items-center justify-center"
        style={{}}
      >
        <div className="flex h-full w-full flex-col">
          <ParallaxStarts />
          {isVisible && <Magic isVisible={isVisible} />}
          <div className="absolute top-0 flex h-[50%] w-[100%] items-center justify-center ">
            <div
              className="absolute h-full w-full bg-contain bg-center bg-no-repeat opacity-50"
              style={{
                backgroundImage:
                  'url(/Pictures/Background/astroman-stars-high-quality-space-background-1038774.png)',
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
            <h1
              className={`${
                isVisible
                  ? 'pointer-events-none z-10 animate-fade-in cursor-default px-2 text-center text-2xl font-light md:px-0 md:text-5xl'
                  : 'hidden'
              }`}
            >
              Even Magic
            </h1>
            <div
              className={`absolute right-[20%] h-48 w-48 animate-super-floating md:top-[30%] md:left-[50%] md:h-72 md:w-72`}
              style={{
                filter: 'brightness(75%)',
              }}
            >
              <Image
                src={MagicFrog}
                alt="Picture of the Astronaut 3"
                className=""
                layout="responsive"
              />
            </div>
          </div>
          <div
            ref={contactMeRef}
            className="absolute top-[50%] flex h-[50%] w-[100%] items-center justify-center overflow-hidden"
          >
            <ContactForm />
          </div>
          <div
            className={`absolute h-32 w-32  animate-translate-out-of-bound md:h-72 md:w-72`}
            style={{
              bottom: `50%`,
              left: `-300px`,
              filter: 'brightness(25%)',
              animationDuration: '20s',
            }}
          >
            <Image
              src={Meteorito}
              alt="Picture of the Astronaut 3"
              className=""
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step10
