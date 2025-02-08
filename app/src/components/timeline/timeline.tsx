import { Event } from '../../../types'
import { ScrollFromBottom } from '../core'
import { FirstMoment, ThisMoment } from '../moments'
import {
  TimelineAxis,
  TimelineCard,
  TimelineContainer,
  TimelineContent,
  TimelineWrapper,
} from '.'

interface TimelineProps {
  events: Event[]
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <TimelineWrapper>
      <FirstMoment event={events[0]} />
      <TimelineContainer>
        <TimelineAxis />
        <TimelineContent>
          {events.map((event, index) => (
            <TimelineCard
              key={index}
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
