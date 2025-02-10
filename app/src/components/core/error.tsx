interface ErrorProps {
  error: string
}

const Error = ({ error }: ErrorProps) => {
  return (
    <div className='error-container'>
      <p className='error'>{error}</p>
    </div>
  )
}

export default Error
