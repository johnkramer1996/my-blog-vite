// import { HttpResponse, delay, http } from 'msw'
// import { db } from './db'
// import { config } from 'shared/lib'

// export const postHandlers = [
//   http.get(`${config.API_ENDPOINT}/posts`, async () => {
//     const posts = db.post.findMany({ take: 6 })

//     await delay(config.API_DELAY)
//     return HttpResponse.json({
//       count: 1,
//       limit: 1,
//       page: 1,
//       lastPage: 1,
//       data: posts,
//     })
//   }),
//   http.get(`${config.API_ENDPOINT}/posts/:id`, async ({ params }) => {
//     const { id } = params as { id: string }
//     const maybePost = db.post.findFirst({ where: { id: { equals: id } } })
//     await delay(config.API_DELAY)
//     return HttpResponse.json(maybePost ?? 'Not found', { status: maybePost ? 200 : 404 })
//   }),
// ]

// // http.get(`${config.API_ENDPOINT}/products`, async ({ request }) => {
// //   const url = new URL(request.url)
// //   console.log(url)

// //   const productIds = url.searchParams.getAll('id')

// //   const products = db.product.findMany({
// //     where: { id: { in: productIds } },
// //   })
// //   await delay(config.API_DELAY)
// //   return HttpResponse.json(products)
// // }),
