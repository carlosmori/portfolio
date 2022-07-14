import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

function About() {
  const [scrollY, setScrollY] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    setViewportWidth(window.innerWidth)
    console.log(`window.innerWidth equals:`)
    console.log(window.innerWidth)
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const [boolean, setBoolean] = useState(false)
  const aboutH1Ref = useRef(null)
  const aboutContainerRef = useRef(null)
  const ref = useRef(null)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    setWidth(aboutH1Ref.current.offsetWidth)
    setHeight(aboutH1Ref.current.offsetHeight)
  }, [])
  setTimeout(() => {
    setBoolean(true)
  }, 2000)
  useEffect(() => {
    console.log(`aboutContainerRef equals:`)
    console.log(aboutContainerRef.current.offsetTop)
    console.log(`scrollY equals:`)
    console.log(scrollY)
  }, [aboutContainerRef.current, scrollY])
  return (
    <div
      ref={aboutContainerRef}
      className="relative flex min-h-screen flex-col items-center justify-center text-center"
    >
      <h2
        ref={aboutH1Ref}
        className={`absolute top-[25%] -left-[-${width}px] from-neutral-400 font-oswald text-6xl tracking-widest opacity-5 md:text-9xl`}
        style={{
          left:
            scrollY > (aboutContainerRef.current?.offsetTop * 2) / 3 - width
              ? ((aboutContainerRef.current?.offsetTop * 2) / 3) * -1 +
                  scrollY >
                viewportWidth / 2 - width / 2
                ? `${viewportWidth / 2 - width / 2}px`
                : `${
                    ((aboutContainerRef.current?.offsetTop * 2) / 3) * -1 +
                    scrollY
                  }px`
              : `-${width}px`,
        }}
      >
        ABOUT ME
      </h2>
      <div
        className={`text-md text-center  font-sans text-2xl ${
          ((aboutContainerRef.current?.offsetTop * 2) / 3) * -1 + scrollY >
          viewportWidth / 2 - width
            ? 'animate-fade-in'
            : 'animate-fast-fade-out opacity-0'
        }`}
      >
        <p className="mt-2 md:py-2">Fullstack Javascript Developer.</p>
        <p className="mt-2 md:py-2">
          7 years working on the whole Javascript Ecosystem.
        </p>
        <p className="mt-2 md:py-2">Specialized in Frontend Development.</p>
        <p className="mt-2 md:py-2">Passionate about UX/UI.</p>
      </div>
    </div>
  )
}

export default About
