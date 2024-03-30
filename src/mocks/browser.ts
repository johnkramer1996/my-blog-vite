import { setupWorker } from 'msw/browser'
import { productsHandlers } from './products.handlers'
import { startSeed } from './seed'
import { RequestHandler } from 'msw'

const handlers: RequestHandler[] = [...productsHandlers]

startSeed()

export const worker = setupWorker(...handlers)
