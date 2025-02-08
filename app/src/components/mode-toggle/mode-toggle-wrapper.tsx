import { ReactNode } from 'react'
import { useMode } from '../hooks'

interface ModeToggleWrapperProps {
  children: ReactNode
}

const ModeToggleWrapper = ({ children }: ModeToggleWrapperProps) => {
  const { mode, setMode } = useMode()

  const toggleMode = () => {
    setMode(mode === 'timeline' ? 'carousel' : 'timeline')
  }

  return (
    <div className='mode-toggle-wrapper' onClick={toggleMode}>
      {children}
    </div>
  )
}

export default ModeToggleWrapper
