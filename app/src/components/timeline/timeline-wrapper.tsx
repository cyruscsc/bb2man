import { ReactNode } from 'react'
import { useMode } from '../hooks'

interface TimelineWrapperProps {
  children: ReactNode
}

const TimelineWrapper = ({ children }: TimelineWrapperProps) => {
  const { mode } = useMode()

  return (
    <div className={`timeline-outer ${mode === 'timeline' ? 'show' : 'hide'}`}>
      <div className='timeline-wrapper'>{children}</div>
    </div>
  )
}

export default TimelineWrapper
