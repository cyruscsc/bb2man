import { Carousel } from './components/carousel'
import { Footer, ScrollFromBottom } from './components/core'
import { FirstMoment, ThisMoment } from './components/moments'
import {
  Timeline,
  TimelineCard,
  TimelineContainer,
  TimelineContent,
  TimelineWrapper,
} from './components/timeline'
import { events, firstMoment } from './data'

const App = () => {
  return (
    <div className='bg-background text-text min-h-screen'>
      <TimelineWrapper>
        {/* <FirstMoment {...firstMoment} />
        <TimelineContainer>
          <Timeline />
          <TimelineContent>
            {events.map((event, index) => (
              <TimelineCard
                key={index}
                {...event}
                position={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </TimelineContent>
        </TimelineContainer>
        <ThisMoment firstDay={firstMoment.date} /> */}
        <Carousel events={events} />
        <ScrollFromBottom />
      </TimelineWrapper>
      <Footer />
    </div>
  )
}

export default App
