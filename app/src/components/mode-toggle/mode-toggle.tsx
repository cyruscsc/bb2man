import {
  CarouselMode,
  ModeToggleButton,
  ModeToggleWrapper,
  TimelineMode,
} from '.'

const ModeToggle = () => {
  return (
    <ModeToggleWrapper>
      <ModeToggleButton />
      <TimelineMode />
      <CarouselMode />
    </ModeToggleWrapper>
  )
}

export default ModeToggle
