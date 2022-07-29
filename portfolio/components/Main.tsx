import React, { useRef, useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'
import Step7 from './Step7'
import Welcome from './Welcome'

function Main() {
  const [activateHorizontalScroll, setActivateHorizontalScroll] =
    useState(false)
  const [activateVerticalScroll, setActivateVerticalScroll] = useState(false)

  const [prevScrollY, setPrevScrollY] = useState(0)
  const mainContainerRef = useRef(null)
  const firstHorizontalContainerRef: any = useRef(null)
  const firstHorizontalContainerChildRef: any = useRef(null)

  const onScrollMain = (e: any) => {
    const currentScrollY = e.target.scrollTop
    setPrevScrollY(currentScrollY)
    // console.log(`prevScrollY.current equals:`)
    // console.log(prevScrollY.current)
    // console.log(`currentScrollY,  equals:`)
    // console.log(
    //   currentScrollY,
    //   firstHorizontalContainerRef?.current?.offsetHeight
    // )
    // !3 corresponds to the amount of vertical elements
    setActivateHorizontalScroll(
      currentScrollY == firstHorizontalContainerRef?.current?.offsetHeight * 3
    )
  }
  const onScrollHorizontal = (e: any) => {
    // !update this variable when increasing childs
    const amountOfElementsInContainer = 3
    const currentScrollY = e.target.scrollTop
    setPrevScrollY(currentScrollY)
    setActivateVerticalScroll(
      currentScrollY ===
        firstHorizontalContainerRef?.current?.offsetWidth *
          (amountOfElementsInContainer - 1)
    )
  }
  return (
    <main
      className="no-scrollbar relative h-screen w-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden bg-black font-kanit"
      ref={mainContainerRef}
      onScroll={onScrollMain}
    >
      <div className="h-screen">
        <Welcome />
      </div>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 currentScrollY={prevScrollY} />
      <Step6 currentScrollY={prevScrollY} />
      <Step7 currentScrollY={prevScrollY} />
      {/* <div
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
            <Step3 />
            <Step3 />
            <Step3 />
            <div
              className={`absolute h-screen w-screen`}
              style={{ right: '0' }}
            >
              <div
                className={`no-scrollbar h-screen w-[100vw] ${
                  activateVerticalScroll
                    ? 'overflow-y-scroll'
                    : 'overflow-y-hidden'
                }`}
              >
                <Step4 />
                <Step5 />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  )
}

export default Main
