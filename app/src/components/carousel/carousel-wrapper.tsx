import { ReactNode } from 'react'

interface CarouselWrapperProps {
  children: ReactNode
}

const CarouselWrapper = ({ children }: CarouselWrapperProps) => {
  return (
    <div className='carousel-outer'>
      <div className='carousel-wrapper'>{children}</div>
    </div>
  )
}

export default CarouselWrapper
