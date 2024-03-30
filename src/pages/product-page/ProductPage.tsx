import { useFetchProductByIdQuery } from 'entities/product'
import { useNavigate, useParams } from 'react-router-dom'
import { errorHandler } from 'shared/lib/error-handler'
import { Preloader } from 'shared/ui'

export const ProductPage = () => {
  const { productId } = useParams() as { productId: string }
  const productState = useFetchProductByIdQuery({ productId })
  const navigate = useNavigate()

  if (productState.isLoading) return <Preloader />

  if (!productState.isSuccess) return errorHandler(productState.error)

  const { data: product } = productState

  const back = () => navigate(-1)

  return (
    <>
      <section className='section s-product'>
        <div className='container'>
          <h2>{product.name}</h2>

          <div className='mt-50'>
            <button onClick={back}>Go back back</button>
          </div>
        </div>
      </section>
    </>
  )
}
