import { CSSProperties } from 'react'
import { Event } from '../../../types'

interface CarouselCardProps {
  event: Event
  index: number
  activeIndex: number
}

const CarouselCard = ({ event, index, activeIndex }: CarouselCardProps) => {
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex

    // Base styles for all cards
    const baseStyle = {
      transform: `translateY(${diff * 35}%) scale(${1 - Math.abs(diff) * 0.1})`,
      opacity: 1 - Math.abs(diff) * 0.5,
      zIndex: 10 - Math.abs(diff),
    }

    // Only show 1 card before and after the active card
    if (Math.abs(diff) > 1) {
      return { ...baseStyle, opacity: 0, pointerEvents: 'none' }
    }

    return baseStyle
  }
  return (
    <div
      key={event.id}
      className='carousel-card-outer'
      style={getCardStyle(index) as CSSProperties}
    >
      <div className='carousel-card'>
        <div className='carousel-card-header'>
          <h3 className='carousel-card-date'>{event.date}</h3>
          <h3 className='carousel-card-title'>{event.title}</h3>
        </div>
        <p className='carousel-card-content'>{event.content}</p>
      </div>
    </div>
  )
}

export default CarouselCard
