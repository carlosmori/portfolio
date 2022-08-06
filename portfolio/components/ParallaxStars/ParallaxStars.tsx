import React, { useCallback, useState } from 'react'
function ParallaxStarts({
  smallStars = 200,
  mediumStars = 150,
  bigStars = 100,
}) {
  const randomIntFromInterval = useCallback(() => {
    const precision = 100 // 2 decimals
    const randomnum =
      Math.floor(
        Math.random() * (100 * precision - 1 * precision) + 1 * precision
      ) /
      (1 * precision)

    // min and max included
    return randomnum
  }, [])

  const [arraySmallStars] = useState(
    Array(smallStars)
      .fill({})
      .map(() => {
        return {
          top: randomIntFromInterval(),
          left: randomIntFromInterval(),
          width: '1px',
          height: '1px',
        }
      })
  )
  const [arrayMediumStars] = useState(
    Array(mediumStars)
      .fill({})
      .map(() => {
        return {
          top: randomIntFromInterval(),
          left: randomIntFromInterval(),
          width: '1px',
          height: '1px',
        }
      })
  )
  const [arrayBigStars] = useState(
    Array(bigStars)
      .fill({})
      .map(() => {
        return {
          top: randomIntFromInterval(),
          left: randomIntFromInterval(),
          width: '1px',
          height: '1px',
        }
      })
  )
  return (
    <div className="star-wrapper absolute h-full w-full">
      {arraySmallStars.map((el, index) => (
        <div
          key={index}
          className="absolute h-px w-px rounded-full bg-white"
          style={{
            top: `${el.top}%`,
            left: `${el.left}%`,
          }}
        ></div>
      ))}
      {arrayMediumStars.map((el, index) => (
        <div
          key={index}
          className="absolute h-0.5 w-0.5 rounded-full bg-white"
          style={{
            top: `${el.top}%`,
            left: `${el.left}%`,
          }}
        ></div>
      ))}
      {arrayBigStars.map((el, index) => (
        <div
          key={index}
          className="absolute h-1 w-1 rounded-full bg-white"
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
