import { Carousel } from './components/carousel'
import { AppWrapper, Footer } from './components/core'
import { Timeline } from './components/timeline'
import { events } from './data'

const App = () => {
  return (
    <AppWrapper>
      <Timeline events={events} />
      {/* <Carousel events={events} /> */}
      <Footer />
    </AppWrapper>
  )
}

export default App
