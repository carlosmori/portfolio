import React, { useEffect, useRef } from 'react'
import { createNoise3D } from 'simplex-noise'
import { V2, MouseTrailMagic } from './class1.js'
function Magic() {
  const canvasRef = useRef()
  const ctx = canvasRef.current?.getContext('2d')
  const noise = createNoise3D()

  //   const animate = useCallback(
  //     (time) => {
  //       ctx.clearRect(0, 0, width, height)
  //       updateEmitter(emitter, mouse)
  //       requestRef.current = requestAnimationFrame(animate)
  //     },
  //     [width, height, ctx, emitter, mouse]
  //   )
  //   const handlePointerMove = (e: any) => {
  //     setMouse(new V2(e.x, e.y))
  //   }
  //   useEffect(() => {
  //     window.addEventListener('mousemove', handlePointerMove)
  //     window.addEventListener('touchmove', handlePointerMove)

  //     return () => {
  //       window.removeEventListener('mousemove', handlePointerMove)
  //       window.removeEventListener('touchmove', handlePointerMove)
  //     }
  //   }, [])
  useEffect(() => {
    if (ctx !== undefined) {
      MouseTrailMagic(canvasRef.current, ctx, noise)
    }
  }, [ctx, noise])
  return (
    <div className="h-full w-full">
      <canvas className="h-full w-full" ref={canvasRef}></canvas>
    </div>
  )
}

export default Magic
