import { Link } from 'react-router-dom'
import { Product } from '../../models/product.model'
import { PATH_PAGE } from 'shared/lib'

type Props = {
  product: Product
}

export const ProductCart = (props: Props) => {
  const { product } = props

  const to = PATH_PAGE.products.product(product.id)

  return (
    <div className='col-lg-4 col-12'>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <Link to={to}>Show more</Link>
    </div>
  )
}
