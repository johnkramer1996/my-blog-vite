import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseQueryWithReauth'
import { PRODUCT_TAG } from './tags'

export const baseApi = createApi({
  tagTypes: [PRODUCT_TAG],
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
