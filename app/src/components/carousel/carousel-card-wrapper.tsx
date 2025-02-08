import { ReactNode } from 'react'

interface CarouselCardWrapperProps {
  children: ReactNode
}

const CarouselCardWrapper = ({ children }: CarouselCardWrapperProps) => {
  return <div className='carousel-card-wrapper'>{children}</div>
}

export default CarouselCardWrapper
