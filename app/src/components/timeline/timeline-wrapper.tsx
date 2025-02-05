import { ReactNode } from 'react'

interface TimelineWrapperProps {
  children: ReactNode
}

const TimelineWrapper = ({ children }: TimelineWrapperProps) => {
  return <div className='timeline-wrapper'>{children}</div>
}

export default TimelineWrapper
