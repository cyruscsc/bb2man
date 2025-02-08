import { useEffect, useRef } from 'react'

const ScrollFromBottom = () => {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return <div ref={bottomRef}></div>
}

export default ScrollFromBottom
