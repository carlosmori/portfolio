import React, { useEffect, useRef, useState } from 'react'
import Welcome from './Welcome'

function Main() {
  const [activateHorizontalScroll, setActivateHorizontalScroll] =
    useState(false)
  const [scrollY, setScrollY] = useState(0)
  const prevScrollY = useRef(0)
  const mainRef = useRef(null)
  const [goingUp, setGoingUp] = useState(false)

  const onScroll = (e: any) => {
    const currentScrollY = e.target.scrollTop
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false)
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true)
    }
    prevScrollY.current = currentScrollY
    console.log(`currentScrollY === mainRef.current.offsetHeight equals:`)
    console.log(currentScrollY, mainRef.current.offsetHeight)
    setActivateHorizontalScroll(currentScrollY >= mainRef.current.offsetHeight)
  }
  useEffect(() => {
    console.log(`mainRef.current equals:`)
    console.log(mainRef.current.offsetHeight)
  }, [mainRef.current])
  return (
    <main
      className="relative snap-y snap-mandatory overflow-x-hidden overflow-y-scroll"
      ref={mainRef}
      onScroll={onScroll}
      style={
        {
          // overflowY: 'scroll',
          // scrollSnapType: 'y mandatory',
        }
      }
    >
      <div
        style={{
          height: '100vh',
          scrollSnapAlign: 'start',
          overflow: 'hidden',
        }}
      >
        <Welcome />
      </div>
      <div
        className={`outer-wrapper no-scrollbar absolute h-[100vw] w-[100vh] bg-black ${
          activateHorizontalScroll ? 'overflow-y-scroll' : 'overflow-y-hidden'
        }`}
        style={{
          transform: 'rotate(-90deg) translateX(-100vh)',
          transformOrigin: 'top left',
          //   overflowY: activateHorizontalScroll ? 'scroll' : 'hidden',
          overflowX: 'hidden',
          scrollSnapAlign: 'start',
        }}
      >
        <div
          className="wrapper flex w-[400vw] flex-row"
          style={{
            transform: 'rotate(90deg) translateY(-100vh)',
            transformOrigin: 'top left',
          }}
        >
          <div className="content-1 h-screen w-screen bg-blue-600"></div>
          <div className="content-2 h-screen w-screen bg-green-600"></div>
          <div className="content-3 h-screen w-screen bg-yellow-600"></div>
          <div className="content-4 h-[200vh] w-screen bg-red-600"></div>
        </div>
      </div>
    </main>
  )
}

export default Main
