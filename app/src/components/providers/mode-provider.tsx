import { ReactNode, useEffect, useState } from 'react'
import { Mode } from '../../types'
import { ModeContext } from '../../contexts'

interface ModeProviderProps {
  children: ReactNode
}

const ModeProvider = ({ children }: ModeProviderProps) => {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem('mode')

    if (savedMode && (savedMode === 'timeline' || savedMode === 'carousel')) {
      return savedMode
    }

    return 'timeline'
  })

  useEffect(() => {
    localStorage.setItem('mode', mode)
  }, [mode])

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider
