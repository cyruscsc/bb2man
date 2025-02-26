import { Error, ScrollFromBottom, Spinner } from '../core'
import { FirstMoment, ThisMoment } from '../moments'
import {
  TimelineAxis,
  TimelineCard,
  TimelineContainer,
  TimelineContent,
  TimelineWrapper,
} from '.'
import { useEvents } from '../hooks'

const Timeline = () => {
  const { events, isLoading, error } = useEvents()

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <Error error={error} />
  }

  if (events.length < 2) {
    return <Error error='Add more events to continue' />
  }

  return (
    <TimelineWrapper>
      <FirstMoment event={events[0]} />
      <TimelineContainer>
        <TimelineAxis />
        <TimelineContent>
          {events.slice(1).map((event, index) => (
            <TimelineCard
              key={event.id}
              event={event}
              position={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </TimelineContent>
      </TimelineContainer>
      <ThisMoment firstDay={events[0].date} />
      <ScrollFromBottom />
    </TimelineWrapper>
  )
}

export default Timeline
