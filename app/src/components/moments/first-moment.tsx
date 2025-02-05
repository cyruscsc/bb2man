interface FirstMomentProps {
  date: string
  title: string
  description: string
}

const FirstMoment = ({ date, title, description }: FirstMomentProps) => {
  return (
    <div className='moment'>
      <div className='moment-header'>
        <h2 className='moment-date'>{date}</h2>
        <h2 className='moment-title'>{title}</h2>
      </div>
      <p className='moment-description'>{description}</p>
    </div>
  )
}

export default FirstMoment
