import { ScrollFromBottom } from './components/etc'
import {
  Timeline,
  TimelineCard,
  TimelineContainer,
  TimelineContent,
} from './components/timeline'
import { data } from './data'

const App = () => {
  return (
    <div className='bg-background text-text min-h-screen'>
      <TimelineContainer>
        <Timeline />
        <TimelineContent>
          {data.map((event, index) => (
            <TimelineCard
              key={index}
              {...event}
              position={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </TimelineContent>
      </TimelineContainer>
      <ScrollFromBottom />
    </div>
  )
}

export default App
