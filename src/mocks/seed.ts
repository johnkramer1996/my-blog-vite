// import { faker } from '@faker-js/faker'
// import { db } from './db'

// export const startSeed = () => {
//   const users = db.user.getAll()

//   if (users.length > 0) return

//   db.user.create({ id: '1', email: 'vitalii', password: '123' })

//   // faker.seed([1, 2, 3, 4, 5])

//   const postMock = faker.helpers.multiple(
//     () => ({
//       id: String(faker.number.int()),
//       categoryId: '1',
//       title: faker.animal.cat(),
//       text: faker.animal.cat(),
//     }),
//     { count: 15 }
//   )
//   postMock.forEach((row) => db.post.create(row))
// }
