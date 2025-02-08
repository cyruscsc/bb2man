interface CardProps {
  date: string
  title: string
  description: string
  position: 'left' | 'right'
}

const TimelineCard = ({ date, title, description, position }: CardProps) => {
  return (
    <li className='timeline-card-outer'>
      <div className='timeline-pointer'></div>
      <div className={`timeline-card ${position}`}>
        <div className='timeline-card-header'>
          <h2 className='timeline-card-date'>{date}</h2>
          <h2 className='timeline-card-title'>{title}</h2>
        </div>
        <p className='timeline-card-description'>{description}</p>
      </div>
    </li>
  )
}

export default TimelineCard
