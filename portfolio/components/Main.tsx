import React, { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import FancyButton from './FancyButton'
import Step1 from './Step1'
import Step10 from './Step10'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'
import Step7 from './Step7'
import Step8 from './Step8'
import Step9 from './Step9'
import Welcome from './Welcome'

function Main() {
  const [activateHorizontalScroll, setActivateHorizontalScroll] =
    useState(false)
  const [activateVerticalScroll, setActivateVerticalScroll] = useState(false)

  const [prevScrollY, setPrevScrollY] = useState(0)
  const [prevScrollX, setPrevScrollX] = useState(0)
  const mainContainerRef: any = useRef()
  const mainHorizontalContainerRef: any = useRef()
  const secondaryVerticalContainerRef: any = useRef()
  const firstHorizontalContainerRef: any = useRef()
  const firstHorizontalContainerChildRef: any = useRef()
  const [activateMainOverflow, setActivateMainOverflow] = useState(true)
  const amountOfVerticalElements = 11
  const contactMeRef: any = useRef()
  const onScrollMain = (e: any) => {
    const currentScrollY = e.target.scrollTop
    setPrevScrollY(currentScrollY)
    setActivateHorizontalScroll(
      currentScrollY ==
        firstHorizontalContainerRef?.current?.offsetHeight *
          amountOfVerticalElements
    )
  }
  const scrollTo = () => {
    contactMeRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const [height, width] = useWindowSize()
  useEffect(() => {
    setActivateMainOverflow(false)
    secondaryVerticalContainerRef.current.scrollTo(0, 0)
    mainHorizontalContainerRef.current.scrollTo(0, 0)
    mainContainerRef.current.scroll(0, 0)
    setActivateMainOverflow(true)
  }, [height, width])
  const onScrollHorizontal = (e: any) => {
    // !update this variable when increasing childs
    const amountOfElementsInHorizontalContainer = 5
    const currentScrollX = e.target.scrollTop
    setPrevScrollX(currentScrollX)
    setActivateVerticalScroll(
      currentScrollX ===
        firstHorizontalContainerRef?.current?.offsetWidth *
          (amountOfElementsInHorizontalContainer - 1)
    )
  }
  return (
    <main
      className={`no-scrollbar relative h-screen w-screen snap-y snap-mandatory bg-black font-kanit font-light ${
        activateMainOverflow
          ? 'overflow-y-auto overflow-x-hidden'
          : 'overflow-auto'
      }`}
      ref={mainContainerRef}
      onScroll={onScrollMain}
    >
      <div className="absolute top-0 right-0">
        <FancyButton callback={scrollTo} text="About Me" />
      </div>
      <Welcome />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 currentScrollY={prevScrollY} />
      <Step6 currentScrollY={prevScrollY} />
      <div
        className="relative h-screen w-screen"
        ref={firstHorizontalContainerRef}
      >
        <div
          className={`outer-wrapper no-scrollbar absolute h-[100vw] w-[100vh] ${
            activateHorizontalScroll ? 'overflow-y-scroll' : 'overflow-y-hidden'
          }`}
          style={{
            transform: 'rotate(-90deg) translateX(-100vh)',
            transformOrigin: 'top left',
            overflowX: 'hidden',
          }}
          onScroll={onScrollHorizontal}
          ref={mainHorizontalContainerRef}
        >
          <div
            className="wrapper flex h-[100vh] w-[500vw] flex-row flex-wrap"
            style={{
              transform: 'rotate(90deg) translateY(-100vh)',
              transformOrigin: 'top left',
            }}
            ref={firstHorizontalContainerChildRef}
          >
            <Step7
              prevScrollY={prevScrollY}
              parentOffSetTop={
                firstHorizontalContainerRef?.current?.offsetHeight *
                amountOfVerticalElements
              }
            />
            <Step8 prevScrollX={prevScrollX} />
            <Step9 />
            <div
              className={`absolute z-10 h-full w-screen`}
              style={{ right: '0' }}
            >
              <div
                className={`no-scrollbar h-screen w-[100vw] ${
                  activateVerticalScroll
                    ? 'overflow-y-scroll'
                    : 'overflow-y-hidden'
                }`}
                ref={secondaryVerticalContainerRef}
              >
                <Step10 contactMeRef={contactMeRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
