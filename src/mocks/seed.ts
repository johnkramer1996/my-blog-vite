import { faker } from '@faker-js/faker'
import { db } from './db'

export const startSeed = () => {
  const users = db.user.getAll()

  if (users.length > 0) return

  db.user.create({ id: '1', email: 'vitalii', password: '123' })

  // faker.seed([1, 2, 3, 4, 5])

  const categoriesMock = faker.helpers.multiple(
    () => ({
      id: String(faker.number.int()),
      name: faker.lorem.lines(1),
      image: faker.image.url(),
    }),
    { count: 2 }
  )

  const productsMock = faker.helpers.multiple(
    () => ({
      id: String(faker.number.int()),
      categoryId: '1',
      name: faker.animal.cat(),
      subtitle: faker.animal.cat(),
      image: faker.image.url(),
      price: faker.number.int({ min: 10, max: 100 }),
    }),
    { count: 15 }
  )
  categoriesMock.forEach((row) => db.category.create(row))

  productsMock.forEach((row) => db.product.create(row))
}
