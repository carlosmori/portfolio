import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center text-center">
      <Head key="head">
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className=" inline-block -rotate-3 transform animate-fade-in-scaled-up-wiggle font-fancy text-6xl">
          Charly Mori
        </h1>
        <p className="ml-0 mt-2 text-xl  md:ml-20">
          <text className="animate-pulse">Fullstack Javascript </text>
          {/* <div className="h-4 w-3 animate-spin-slow bg-black"></div> */}
          <text className="">Developer</text>
        </p>
      </main>
    </div>
  )
}

export default Home
