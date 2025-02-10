import { useContext } from 'react'
import { EventsContext } from '../../contexts'

const useEvents = () => {
  const context = useContext(EventsContext)

  if (!context) {
    throw new Error('useEvents must be used within a EventsProvider')
  }

  return context
}

export default useEvents
