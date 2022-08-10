import React from 'react'

function ContactForm() {
  return (
    <div
      className="relative flex h-[90%] w-[90%] flex-col items-center justify-center p-4 md:w-[45%] md:p-16"
      style={{
        backgroundColor: '#000000ba',
      }}
    >
      <div
        className="h-36 w-36 animate-super-floating rounded-full md:h-48 md:w-48"
        style={{
          backgroundImage: 'url(/ProfilePhotos/perfil3.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          pointerEvents: 'none',
          border: '1px solid white',
        }}
      ></div>

      <h1
        className="mt-6 animate-floating font-fancy text-5xl md:text-6xl"
        style={{
          backgroundImage: 'url(/gifs/fusion.gif)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          backgroundPosition: 'center',
        }}
      >
        Charlie Mori
      </h1>
      <div className="mt-8 flex flex-col items-center justify-center text-center text-xl md:text-2xl">
        <p
          className="animate-floating py-2 font-normal"
          style={{
            backgroundImage: 'url(/gifs/fire2.gif)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            backgroundPosition: 'left',
          }}
        >
          Fullstack Javascript Dev for 5+ Years.
        </p>
        <p className="animate-floating py-2">
          Specialized in Frontend Development.
        </p>
        <p className="animate-floating py-2">
          Digital Nomad - Currently based in Australia.
        </p>
        <p className="animate-floating py-2">Great communication skills.</p>
        <a
          className="z-50 w-fit animate-floating cursor-pointer"
          style={{
            backgroundImage: 'url(/gifs/fusion.gif)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            backgroundPosition: 'center',
            borderBottom: '1px solid #9e68d7',
          }}
          href="https://linktr.ee/charliemori"
          target="_blank"
          rel="noreferrer"
        >
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default ContactForm
