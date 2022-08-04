import React, { useEffect, useRef } from 'react'

function Test(isVisible) {
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    console.log('Mounted')

    return () => {
      console.log('UnMounted')
      mounted.current = false
    }
  }, [])
  return <div>Test</div>
}

export default Test
