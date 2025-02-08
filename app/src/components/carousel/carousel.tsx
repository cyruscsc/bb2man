import { useState } from 'react'
import {
  CarouselCard,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselCardWrapper,
  CarouselWrapper,
} from '.'
import { Event } from '../../../types'

interface CarouselProps {
  events: Event[]
}

const Carousel = ({ events }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <CarouselWrapper>
      <CarouselPrevButton
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <CarouselCardWrapper>
        {events.map((event, index) => (
          <CarouselCard
            key={event.id}
            event={event}
            index={index}
            activeIndex={activeIndex}
          />
        ))}
      </CarouselCardWrapper>
      <CarouselNextButton
        cardsLength={events.length}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </CarouselWrapper>
  )
}

export default Carousel
