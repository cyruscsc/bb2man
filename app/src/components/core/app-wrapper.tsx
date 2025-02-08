import { ReactNode } from 'react'

interface AppWrapperProps {
  children: ReactNode
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return <div className='app-wrapper'>{children}</div>
}

export default AppWrapper
