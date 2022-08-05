import React, { useCallback, useState } from 'react'
function ParallaxStarts() {
  const randomIntFromInterval = useCallback((min, max) => {
    const precision = 100 // 2 decimals
    const randomnum =
      Math.floor(
        Math.random() * (100 * precision - 1 * precision) + 1 * precision
      ) /
      (1 * precision)

    // min and max included
    return randomnum
  }, [])
  const [arrayOfStars, setArrayOfStars] = useState(
    Array(450)
      .fill({})
      .map((el) => {
        return {
          top: randomIntFromInterval(1, 100),
          left: randomIntFromInterval(1, 100),
        }
      })
  )
  return (
    <div className="star-wrapper absolute h-full w-full">
      {[...arrayOfStars].slice(0, 200).map((el, index) => (
        <div
          key={index}
          className="absolute h-px w-px animate-floating rounded-full bg-white"
          style={{
            top: `${el.top}%`,
            left: `${el.left}%`,
          }}
        ></div>
      ))}
      {[...arrayOfStars].slice(200, 350).map((el, index) => (
        <div
          key={index}
          className="absolute h-0.5 w-0.5 animate-floating rounded-full bg-white"
          style={{
            top: `${el.top}%`,
            left: `${el.left}%`,
          }}
        ></div>
      ))}
      {[...arrayOfStars].slice(350, 450).map((el, index) => (
        <div
          key={index}
          className="absolute h-1 w-1 animate-floating rounded-full bg-white"
          style={{
            top: `${el.top}%`,
            left: `${el.left}%`,
            boxShadow: '0px 0px 20px 2px white',
            filter: 'brightness(95%)',
          }}
        ></div>
      ))}
    </div>
  )
}

export default ParallaxStarts
