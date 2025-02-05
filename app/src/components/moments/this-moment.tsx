interface ThisMomentProps {
  firstDay: string
}

const ThisMoment = ({ firstDay }: ThisMomentProps) => {
  const first = new Date(firstDay)
  const today = new Date()
  const days = ~~((today.getTime() - first.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className='moment'>
      <div className='moment-header'>
        <h2 className='moment-date'>{today.toISOString().split('T')[0]}</h2>
        <h2 className='moment-title'>{days} days</h2>
      </div>
      <p className='moment-description'>since our first day together</p>
    </div>
  )
}

export default ThisMoment
