import { Event } from '../../../types'

interface CardProps {
  event: Event
  position: 'left' | 'right'
}

const TimelineCard = ({ event, position }: CardProps) => {
  return (
    <li className='timeline-card-outer'>
      <div className='timeline-pointer'></div>
      <div className={`timeline-card ${position}`}>
        <div className='timeline-card-header'>
          <h2 className='timeline-card-date'>{event.date}</h2>
          <h2 className='timeline-card-title'>{event.title}</h2>
        </div>
        <p className='timeline-card-description'>{event.content}</p>
      </div>
    </li>
  )
}

export default TimelineCard
