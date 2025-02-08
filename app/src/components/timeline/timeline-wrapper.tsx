import { ReactNode } from 'react'

interface TimelineWrapperProps {
  children: ReactNode
}

const TimelineWrapper = ({ children }: TimelineWrapperProps) => {
  return (
    <div className='timeline-outer'>
      <div className='timeline-wrapper'>{children}</div>
    </div>
  )
}

export default TimelineWrapper
