import { Link } from 'react-router-dom'
import { PATH_PAGE } from 'shared/lib'

export function NotFoundPage() {
  return (
    <section className='section s-404'>
      <div className='container'>
        <div className='container text-center'>
          <h2 className='mb-30'>Page not found</h2>
          <p>Sorry, we couldn’t find the page you’re looking for.</p>
          <div className='mt-50'>
            <Link to={PATH_PAGE.root}>Go back home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
