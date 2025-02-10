import { useState } from 'react'
import {
  CarouselCard,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselCardWrapper,
  CarouselWrapper,
} from '.'
import { useEvents } from '../hooks'
import { Error, Spinner } from '../core'

const Carousel = () => {
  const { events, isLoading, error } = useEvents()
  const [activeIndex, setActiveIndex] = useState(0)

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <Error error={error} />
  }

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
