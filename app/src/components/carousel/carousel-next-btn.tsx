import { Dispatch, SetStateAction } from 'react'
import { ChevronDown } from 'lucide-react'

interface CarouselNextButtonProps {
  cardsLength: number
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

const CarouselNextButton = ({
  cardsLength,
  activeIndex,
  setActiveIndex,
}: CarouselNextButtonProps) => {
  const goToNext = () => {
    setActiveIndex((prev) => (prev < cardsLength - 1 ? prev + 1 : prev))
  }
  return (
    <button
      onClick={goToNext}
      disabled={activeIndex === cardsLength - 1}
      className='carousel-btn next'
    >
      <ChevronDown className='carousel-btn-icon' />
    </button>
  )
}

export default CarouselNextButton
