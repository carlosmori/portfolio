import React, { useRef, useState } from 'react'
import Step1 from './Step1'
import Step10 from './Step10'
import Step11 from './Step11'
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
  const mainContainerRef = useRef(null)
  const firstHorizontalContainerRef: any = useRef(null)
  const firstHorizontalContainerChildRef: any = useRef(null)
  const amountOfVerticalElements = 11
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
    // console.log(` currentScrollY equals:`)
    // console.log(currentScrollY)
    // console.log(` equals:`)
    // console.log(
    //   firstHorizontalContainerRef?.current?.offsetHeight *
    //     amountOfVerticalElements
    // )
    setActivateHorizontalScroll(
      currentScrollY ==
        firstHorizontalContainerRef?.current?.offsetHeight *
          amountOfVerticalElements
    )
  }
  const onScrollHorizontal = (e: any) => {
    // !update this variable when increasing childs
    const amountOfElementsInHorizontalContainer = 4
    const currentScrollX = e.target.scrollTop
    setPrevScrollX(currentScrollX)
    // console.log(`firstHorizontalContainerRef.current equals:`)
    // console.log(firstHorizontalContainerRef.current)
    // console.log(`currentScrollY equals:`)
    // console.log(currentScrollY)
    setActivateVerticalScroll(
      currentScrollX ===
        firstHorizontalContainerRef?.current?.offsetWidth *
          (amountOfElementsInHorizontalContainer - 1)
    )
  }
  return (
    <main
      className="no-scrollbar relative h-screen w-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden bg-black font-kanit font-light"
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
      <div
        className="relative h-screen w-screen bg-blue-500"
        ref={firstHorizontalContainerRef}
      >
        <div
          className={`outer-wrapper no-scrollbar absolute h-[100vw] w-[100vh] bg-green-200 ${
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
            className="wrapper flex h-[100vh] w-[400vw] flex-row flex-wrap"
            style={{
              transform: 'rotate(90deg) translateY(-100vh)',
              transformOrigin: 'top left',
            }}
            ref={firstHorizontalContainerChildRef}
          >
            <Step7
              prevScrollY={prevScrollY}
              prevScrollX={prevScrollX}
              parentOffSetTop={
                firstHorizontalContainerRef?.current?.offsetHeight *
                amountOfVerticalElements
              }
              amountOfVerticalElements={amountOfVerticalElements}
            />
            <Step8
              prevScrollY={prevScrollY}
              prevScrollX={prevScrollX}
              parentOffSetTop={
                firstHorizontalContainerRef?.current?.offsetHeight *
                amountOfVerticalElements
              }
              amountOfVerticalElements={amountOfVerticalElements}
            />
            <Step9
              prevScrollY={prevScrollY}
              prevScrollX={prevScrollX}
              parentOffSetTop={
                firstHorizontalContainerRef?.current?.offsetHeight *
                amountOfVerticalElements
              }
              amountOfVerticalElements={amountOfVerticalElements}
            />
            <div className="h-screen w-screen bg-blue-500"></div>
            <div
              className={`absolute z-10 h-screen w-screen`}
              style={{ right: '0' }}
            >
              <div
                className={`no-scrollbar h-screen w-[100vw] ${
                  activateVerticalScroll
                    ? 'overflow-y-scroll'
                    : 'overflow-y-hidden'
                }`}
              >
                <Step10
                  prevScrollY={prevScrollY}
                  prevScrollX={prevScrollX}
                  parentOffSetTop={
                    firstHorizontalContainerRef?.current?.offsetHeight *
                    amountOfVerticalElements
                  }
                  amountOfVerticalElements={amountOfVerticalElements}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
