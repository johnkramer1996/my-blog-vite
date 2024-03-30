import { HttpResponse, delay, http } from 'msw'
import { db } from './db'
import { config } from 'shared/lib'

export const productsHandlers = [
  // http.get(`${config.API_ENDPOINT}/products`, async ({ request }) => {
  //   const url = new URL(request.url)
  //   console.log(url)

  //   const productIds = url.searchParams.getAll('id')

  //   const products = db.product.findMany({
  //     where: { id: { in: productIds } },
  //   })
  //   await delay(config.API_DELAY)
  //   return HttpResponse.json(products)
  // }),
  http.get(`${config.API_ENDPOINT}/products`, async () => {
    const products = db.product.findMany({ take: 5 })
    await delay(config.API_DELAY)
    return HttpResponse.json(products)
  }),
  http.get(`${config.API_ENDPOINT}/products/:id`, async ({ params }) => {
    const { id } = params as { id: string }
    const maybeProduct = db.product.findFirst({ where: { id: { equals: id } } })
    await delay(config.API_DELAY)
    return HttpResponse.json(maybeProduct ?? 'Not found', { status: maybeProduct ? 200 : 404 })
  }),
]
