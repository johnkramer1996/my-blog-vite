import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
  const navigate = useNavigate()
  const back = () => navigate(-1)

  return (
    <section className='section s-error'>
      <div className='container'>
        <div className='container text-center'>
          <h1 className='h1 section-title'>Error page</h1>
          <div className='mt-50'>
            <button onClick={back}>Go back back</button>
          </div>
        </div>
      </div>
    </section>
  )
}
