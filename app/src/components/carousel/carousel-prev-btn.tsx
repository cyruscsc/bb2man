import { Dispatch, SetStateAction } from 'react'
import { ChevronUp } from 'lucide-react'

interface CarouselPrevButtonProps {
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

const CarouselPrevButton = ({
  activeIndex,
  setActiveIndex,
}: CarouselPrevButtonProps) => {
  const goToPrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }
  return (
    <button
      onClick={goToPrevious}
      disabled={activeIndex === 0}
      className='carousel-btn prev'
    >
      <ChevronUp className='carousel-btn-icon' />
    </button>
  )
}

export default CarouselPrevButton
