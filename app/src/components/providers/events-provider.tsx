import { ReactNode, useEffect, useState } from 'react'
import { EventsContext } from '../../contexts'
import { APIRespone, Event } from '../../types'
import { API_TOKEN } from '../../config'
import axios, { AxiosError } from 'axios'

interface EventsProviderProps {
  children: ReactNode
}

const EventsProvider = ({ children }: EventsProviderProps) => {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const base_url = import.meta.env.VITE_API_BASE_URL
        const token = API_TOKEN

        if (!token) {
          throw new Error('API token not found in environment variables')
        }

        const response = await axios.get<APIRespone>(`${base_url}/events`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

        setEvents(response.data.data)
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(
            error.response?.data?.message ||
              'An error occurred while fetching events'
          )
        } else {
          setError('An unexpected error occurred')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return (
    <EventsContext.Provider value={{ events, isLoading, error }}>
      {children}
    </EventsContext.Provider>
  )
}

export default EventsProvider
