import React from 'react'

function Welcome() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover text-center"
      style={
        {
          // backgroundImage:
          //   'url(/Pictures/Background/astroman-stars-high-quality-space-background-1038774.png)',
        }
      }
    >
      <div
        className="box relative flex flex-col justify-center"
        style={
          {
            // width: '250px',
            // height: '250px',
          }
        }
      >
        <div
          className="title relative flex h-16 w-full items-center md:h-36"
          style={{}}
        >
          <span
            className="absolute flex w-0 animate-horizontal-bar"
            style={{
              background: '#ffcb00',
              height: 'inherit',
            }}
          ></span>
          <h1
            className="relative flex animate-fade-in items-baseline font-fancy text-6xl opacity-0 md:text-9xl"
            style={{
              animationDelay: '1.6s',
              animationFillMode: 'forwards',
            }}
          >
            Charlie Mori
            <span
              className="absolute h-0 w-0 animate-pop-in rounded-full "
              style={{
                background: '#ffcb00',
                animationDelay: '2s',
                marginLeft: '5px',
                marginTop: '-10px',
                bottom: '13px',
                right: '-12px',
              }}
            ></span>
          </h1>
        </div>
        <div className="role">
          <div className="block"></div>
          <p
            className="animate-fade-in text-xl md:text-2xl"
            style={{
              opacity: 0,
              animationDelay: '2s',
              animationFillMode: 'forwards',
            }}
          >
            Frontend Dev | Digital Nomad
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
