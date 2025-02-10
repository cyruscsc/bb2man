import { Carousel } from './components/carousel'
import { AppWrapper, Footer, Header } from './components/core'
import { Timeline } from './components/timeline'
import { events } from './data'

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Timeline />
      <Carousel />
      <Footer />
    </AppWrapper>
  )
}

export default App
