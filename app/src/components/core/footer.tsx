import lover from '../../assests/lover.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={lover} alt='lover' className='footer-icon' />
      <p className='footer-text'>To my valentine</p>
      <p className='footer-copyright'>© 2025 Cyrus Chan. All rights reserved.</p>
    </footer>
  )
}

export default Footer
