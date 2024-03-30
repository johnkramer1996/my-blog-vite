import { baseApi } from 'shared/api'
import { Product } from '../models/product.model'
import { ProductDto } from '../dtos/product.dto'
import { productMapper } from '../mappers/product.mapper'
import { productRoutes } from './product.routes'

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchProducts: build.query<Product[], void>({
      query: () => ({ url: productRoutes.FETCH_POSTS }),
      transformResponse: (response: ProductDto[]) => response.map(productMapper),
    }),
    fetchProductById: build.query<Product, { productId: string }>({
      query: ({ productId }) => ({ url: productRoutes.FETCH_POST_BY_ID(productId) }),
      transformResponse: productMapper,
    }),
  }),
})

export const { useFetchProductsQuery, useFetchProductByIdQuery } = productApi
