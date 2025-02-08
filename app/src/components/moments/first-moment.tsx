import { Event } from '../../../types'

interface FirstMomentProps {
  event: Event
}

const FirstMoment = ({ event }: FirstMomentProps) => {
  return (
    <div className='moment'>
      <div className='moment-header'>
        <h2 className='moment-date'>{event.date}</h2>
        <h2 className='moment-title'>{event.title}</h2>
      </div>
      <p className='moment-description'>{event.content}</p>
    </div>
  )
}

export default FirstMoment
