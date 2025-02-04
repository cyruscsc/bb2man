import { ReactNode } from 'react'

interface TimelineContentProps {
  children: ReactNode
}

const TimelineContent = ({ children }: TimelineContentProps) => {
  return <ul className='timeline-content'>{children}</ul>
}

export default TimelineContent
