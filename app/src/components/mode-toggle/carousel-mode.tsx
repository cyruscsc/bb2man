import { GalleryVertical } from 'lucide-react'
import { useMode } from '../hooks'

const CarouselMode = () => {
  const { mode } = useMode()

  return (
    <div
      className={`mode-toggle-icon-container right ${mode === 'timeline' ? 'opacity-0' : 'opacity-100 delay-300'} `}
    >
      <GalleryVertical className='mode-toggle-icon' />
    </div>
  )
}

export default CarouselMode
