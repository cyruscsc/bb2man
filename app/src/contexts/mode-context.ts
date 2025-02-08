import { createContext, Dispatch, SetStateAction } from 'react'
import { Mode } from '../types'

interface ModeContextProps {
  mode: Mode
  setMode: Dispatch<SetStateAction<Mode>>
}

const ModeContext = createContext<ModeContextProps | undefined>(
  undefined
)

export default ModeContext