import { ReactNode } from 'react'
import { useMode } from '../hooks'

interface CarouselWrapperProps {
  children: ReactNode
}

const CarouselWrapper = ({ children }: CarouselWrapperProps) => {
  const { mode } = useMode()

  return (
    <div className={`carousel-outer ${mode === 'carousel' ? 'show' : 'hide'}`}>
      <div className='carousel-wrapper'>{children}</div>
    </div>
  )
}

export default CarouselWrapper
