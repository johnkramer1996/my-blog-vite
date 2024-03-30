import { factory, nullable, primaryKey } from '@mswjs/data'

export const db = factory({
  user: {
    id: primaryKey(String),
    email: String,
    password: String,
  },
  category: {
    id: primaryKey(String),
    name: String,
    image: String,
  },
  product: {
    id: primaryKey(String),
    categoryId: String,
    name: String,
    subtitle: String,
    description: nullable(String),
    price: Number,
    image: String,
  },
})
