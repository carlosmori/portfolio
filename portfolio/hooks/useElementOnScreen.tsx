import { useEffect, useRef, useState } from 'react'

export const useElementOnScreen = (options: any): any => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = (entries: any) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    const currentRef = containerRef.current
    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [containerRef, options])

  return [containerRef, isVisible]
}
