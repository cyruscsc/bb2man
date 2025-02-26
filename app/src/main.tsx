import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EventsProvider, ModeProvider } from './components/providers'
import './styles/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModeProvider>
      <EventsProvider>
        <App />
      </EventsProvider>
    </ModeProvider>
  </StrictMode>
)
