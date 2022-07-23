import React, { useRef, useState } from 'react'
import Welcome from './Welcome'

function Main() {
  const [activateHorizontalScroll, setActivateHorizontalScroll] =
    useState(false)
  const [activateVerticalScroll, setActivateVerticalScroll] = useState(false)

  const prevScrollY = useRef(0)
  const mainContainerRef = useRef(null)
  const firstHorizontalContainerRef: any = useRef(null)
  const firstHorizontalContainerChildRef: any = useRef(null)

  const onScrollMain = (e: any) => {
    const currentScrollY = e.target.scrollTop
    prevScrollY.current = currentScrollY
    if (firstHorizontalContainerRef.current) {
    }
    setActivateHorizontalScroll(
      currentScrollY == firstHorizontalContainerRef.current.offsetHeight
    )
  }
  const onScrollHorizontal = (e: any) => {
    // update this variable when increasing childs
    const amountOfElementsInContainer = 3
    const currentScrollY = e.target.scrollTop
    prevScrollY.current = currentScrollY
    setActivateVerticalScroll(
      currentScrollY ===
        firstHorizontalContainerRef.current.offsetWidth *
          (amountOfElementsInContainer - 1)
    )
  }
  return (
    <main
      className="no-scrollbar relative h-screen w-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden"
      ref={mainContainerRef}
      onScroll={onScrollMain}
    >
      <div className="h-screen">
        <Welcome />
      </div>
      <div
        className="relative h-screen w-screen"
        ref={firstHorizontalContainerRef}
      >
        <div
          className={`outer-wrapper no-scrollbar absolute h-[100vw] w-[100vh] bg-black ${
            activateHorizontalScroll ? 'overflow-y-scroll' : 'overflow-y-hidden'
          }`}
          style={{
            transform: 'rotate(-90deg) translateX(-100vh)',
            transformOrigin: 'top left',
            overflowX: 'hidden',
          }}
          onScroll={onScrollHorizontal}
        >
          <div
            className="wrapper flex h-[100vh] w-[300vw] flex-row flex-wrap"
            style={{
              transform: 'rotate(90deg) translateY(-100vh)',
              transformOrigin: 'top left',
            }}
            ref={firstHorizontalContainerChildRef}
          >
            <div className="content-1 h-screen w-screen bg-blue-600"></div>
            <div className="content-2 h-screen w-screen bg-green-600"></div>
            <div className="content-3 h-screen w-screen bg-yellow-600"></div>
            <div
              className={`absolute h-screen w-screen bg-fuchsia-800`}
              style={{ right: '0' }}
            >
              <div
                className={`no-scrollbar h-screen w-[100vw] ${
                  activateVerticalScroll
                    ? 'overflow-y-scroll'
                    : 'overflow-y-hidden'
                }`}
              >
                <div className="content-1 h-screen w-screen bg-red-600"></div>
                <div className="content-2 bg-white-600 h-screen w-screen"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
