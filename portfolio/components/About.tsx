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
  const shouldDisplayAboutMe = () => {
    // If we are scrolling in at least 33% of the About Page I should Start displaying the item
    return scrollY > (aboutContainerRef.current?.offsetTop * 2) / 3 - width
  }
  const shouldElementBeFixedInTheMiddleOfThePage = () => {
    // Check if the element surpases half of the viewport width
    return (
      ((aboutContainerRef.current?.offsetTop * 2) / 3) * -1 + scrollY >
      viewportWidth / 2 - width / 2
    )
  }
  const getHalfOfTheViewportCordenates = () => {
    // returns the middle of the viewport width amount in pixels
    return `${viewportWidth / 2 - width / 2}px`
  }
  const hideElement = () => {
    // Hides the element with a negative left position
    return `-${width}px`
  }
  const keepScrollingRight = () => {
    return `${
      ((aboutContainerRef.current?.offsetTop * 2) / 3) * -1 + scrollY
    }px`
  }
  const shouldDisplayAboutMeDescription = () => {
    return (
      ((aboutContainerRef.current?.offsetTop * 2) / 3) * -1 + scrollY >
      viewportWidth / 2 - width
    )
  }
  useEffect(() => {
    console.log(`scrollY equals:`)
    console.log(scrollY)
    console.log(`aboutContainerRef.current?.offsetTop equals:`)
    console.log(aboutContainerRef.current?.offsetTop)
  }, [scrollY])
  return (
    <div
      ref={aboutContainerRef}
      className={`relative flex min-h-screen w-screen flex-col items-center justify-center text-center`}
    >
      <h2
        ref={aboutH1Ref}
        className={`absolute top-[25%] -left-[-${width}px] from-neutral-400 font-oswald text-6xl tracking-widest opacity-5 md:text-9xl`}
        style={{
          left: shouldDisplayAboutMe()
            ? shouldElementBeFixedInTheMiddleOfThePage()
              ? getHalfOfTheViewportCordenates()
              : keepScrollingRight()
            : hideElement(),
        }}
      >
        ABOUT ME
      </h2>
      <div
        className={`text-md text-center  font-sans text-2xl ${
          shouldDisplayAboutMeDescription()
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
