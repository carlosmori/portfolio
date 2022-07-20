import React, { useEffect, useRef, useState } from 'react'
import Welcome from './Welcome'

function Main() {
  const [activateHorizontalScroll, setActivateHorizontalScroll] =
    useState(false)
  const [scrollY, setScrollY] = useState(0)
  const prevScrollY = useRef(0)
  const mainRef = useRef(null)
  const horizontalContainerRef = useRef(null)
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
    console.log(currentScrollY, horizontalContainerRef.current.offsetHeight)
    setActivateHorizontalScroll(
      currentScrollY == horizontalContainerRef.current.offsetHeight
    )
  }
  useEffect(() => {
    console.log(`horizontalContainerRef equals:`)
    console.log(horizontalContainerRef.current.offsetHeight)
  }, [mainRef.current])
  return (
    <main
      className="relative h-screen w-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden"
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
          //   overflow: 'hidden',
        }}
      >
        <Welcome />
      </div>
      <div className="relative h-screen w-screen" ref={horizontalContainerRef}>
        <div
          className={`outer-wrapper absolute h-[100vw] w-[100vh] bg-black ${
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
            className="wrapper flex h-[100vh] w-[300vw] flex-row flex-wrap"
            style={{
              transform: 'rotate(90deg) translateY(-100vh)',
              transformOrigin: 'top left',
            }}
          >
            <div className="content-1 h-screen w-screen bg-blue-600"></div>
            <div className="content-2 h-screen w-screen bg-green-600"></div>
            <div className="content-3 h-screen w-screen bg-yellow-600"></div>
            {/* <div className="content-3 h-screen w-screen bg-yellow-600"></div>
          <div className="content-4 h-[200vh] w-screen bg-red-600"></div> */}
            <div
              className="absolute h-screen w-screen bg-fuchsia-800"
              style={{ right: '0' }}
            >
              <div className="h-screen w-[100vw] overflow-auto">
                <div className="content-1 h-screen w-screen bg-red-600"></div>
                <div className="content-2 bg-white-600 h-screen w-screen"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative h-screen w-screen bg-fuchsia-800"></div> */}
    </main>
  )
}

export default Main
