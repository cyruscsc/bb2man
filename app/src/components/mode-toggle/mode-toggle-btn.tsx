import { useMode } from '../hooks'

const ModeToggleButton = () => {
  const { mode } = useMode()

  return (
    <div
      className={`mode-toggle-btn ${mode === 'timeline' ? 'translate-x-9' : 'translate-x-1'} `}
    />
  )
}

export default ModeToggleButton
