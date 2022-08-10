import React, { useEffect, useRef } from 'react'
import { createNoise3D } from 'simplex-noise'
import { MouseTrailMagic } from './class1.js'
function Magic({ isVisible }: any) {
  const canvasRef: any = useRef()
  const ctx = useRef()
  const noise = createNoise3D()
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])
  useEffect(() => {
    if (!ctx.current && isVisible) {
      ctx.current = canvasRef.current.getContext('2d')
    }
  }, [isVisible])

  useEffect(() => {
    if (
      ctx.current !== undefined &&
      window.innerHeight &&
      window.innerWidth &&
      isVisible
    ) {
      console.log(window.innerHeight)
      MouseTrailMagic(canvasRef.current, ctx.current, noise, mounted.current)
    }
  }, [ctx, isVisible])
  return (
    <div className="z-20">
      <canvas className="z-20 h-full w-full" ref={canvasRef}></canvas>
    </div>
  )
}

export default Magic
