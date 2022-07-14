import React from 'react'

function Welcome() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="inline-block w-fit -rotate-1 transform animate-fade-in-scaled-up-wiggle font-fancy text-6xl md:text-9xl">
        Charly Mori
      </h1>
      <p className="pl-0 pt-2 text-lg md:pl-20  md:text-2xl">
        <text className="animate-pulse ">Frontend Developer </text>
        <text className="inline-block  animate-smooth-wiggle">Developer</text>
      </p>
    </div>
  )
}

export default Welcome
