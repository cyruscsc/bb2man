import { ReactNode } from 'react'

interface TimelineContainerProps {
  children: ReactNode
}

const TimelineContainer = ({ children }: TimelineContainerProps) => {
  return <div className='timeline-container'>{children}</div>
}

export default TimelineContainer
