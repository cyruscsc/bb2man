import { createContext } from 'react'
import { Event } from '../types'

interface EventsContextProps {
  events: Event[]
  isLoading: boolean
  error: string | null
}

const EventsContext = createContext<EventsContextProps | undefined>(undefined)

export default EventsContext
