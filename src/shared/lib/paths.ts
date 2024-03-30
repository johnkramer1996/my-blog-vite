import { config } from './config'

export const PATH_PAGE = {
  root: '/',
  signUp: '/sign-up',
  signIn: '/sign-in',
  products: {
    root: '/',
    product: (id: string) => `/products/${id}`,
  },
  404: '/404',
  error: '/error',
}

export const PATH_IMAGE = (image: string) => `${config.SITE_ENDPOINT}/${image}`

export const MAIN_MENU: { to: string; name: string }[] = [
  { to: PATH_PAGE.root, name: 'Home' },
  { to: PATH_PAGE.products.root, name: 'Products' },
  { to: PATH_PAGE.signIn, name: 'Sign in' },
]
