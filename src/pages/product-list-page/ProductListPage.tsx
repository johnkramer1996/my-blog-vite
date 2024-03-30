import { ProductCart, useFetchProductsQuery } from 'entities/product'
import { Preloader } from 'shared/ui'

export const ProductListPage = () => {
  const { data: products = [], ...productsState } = useFetchProductsQuery()

  if (productsState.isLoading) return <Preloader />

  return (
    <section className='section s-products'>
      <div className='container'>
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
