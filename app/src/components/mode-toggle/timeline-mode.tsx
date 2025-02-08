import { ChartNoAxesGantt } from 'lucide-react'
import { useMode } from '../hooks'

const TimelineMode = () => {
  const { mode } = useMode()

  return (
    <div
      className={`mode-toggle-icon-container left ${mode === 'timeline' ? 'opacity-100 delay-300' : 'opacity-0'} `}
    >
      <ChartNoAxesGantt className='mode-toggle-icon' />
    </div>
  )
}

export default TimelineMode
