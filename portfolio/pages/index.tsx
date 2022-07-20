import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import About from '../components/About'
import Parallax from '../components/Parallax'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  const ref = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY)
  //   }
  //   handleScroll()
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])
  useEffect(() => {
    console.log(`ref.current.offsetTop equals:`)
    console.log(ref.current?.offsetTop)
    console.log(`scrollY equals:`)
    console.log(scrollY)
  }, [ref.current?.offsetTop, scrollY])
  return (
    <div>
      <Head key="head">
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="no-scrollbar relative h-[100vh]"
        style={{
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          scrollbarWidth: 'none',
          // ::-webkit-scrollbar {display:none;}

          // // -ms-overflow-style: 'none',
          // '::-webkit-scrollbar': {
          //   display: none,
          // },
        }}
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
        {/* <div
          className="relative h-screen w-[400vw]"
          style={{
            scrollSnapAlign: 'start',
            overflow: 'hidden',
          }}
        > */}
        <div
          className="outer-wrapper no-scrollbar absolute h-[100vw] w-[100vh] bg-black"
          style={{
            transform: 'rotate(-90deg) translateX(-100vh)',
            transformOrigin: 'top left',
            overflowY: 'scroll',
            overflowX: 'hidden',
            // scrollSnapType: 'y mandatory',
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
            <div
              className="content-1 h-screen w-screen bg-blue-600"
              // style={{ scrollSnapAlign: 'start' }}
            ></div>
            <div
              className="content-2 h-screen w-screen bg-green-600"
              // style={{ scrollSnapAlign: 'start' }}
            ></div>
            <div
              className="content-3 h-screen w-screen bg-yellow-600"
              // style={{ scrollSnapAlign: 'start' }}
            ></div>
            <div
              className="content-4 h-screen w-screen bg-red-600"
              // style={{ scrollSnapAlign: 'start' }}
            ></div>
          </div>
        </div>
        {/* </div> */}
        {/* <div className={`relative h-[200vh]`} ref={ref}>
          <div
            className={`h-screen w-[200vw] 
            ${scrollY >= ref.current?.offsetTop && ``}
              `}
          >
            <div className="flex">
              <div className="flex h-screen w-screen items-center justify-center bg-gray-500">
                <h1>Bloque 1</h1>
              </div>
              <div className="flex h-screen w-screen items-center justify-center bg-gray-200">
                <h1>Bloque 2</h1>
              </div>
            </div>
            <About />
            <Parallax />
          </div>
        </div> */}
      </main>
    </div>
  )
}

export default Home
