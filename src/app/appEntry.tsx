import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { appStore } from './app.store'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'

const enableMocking = async () => {
  if (import.meta.env.MODE !== 'development') {
    return
  }
  const { worker } = await import('mocks/browser')
  return worker.start()
}

const root = document.getElementById('root') as HTMLElement

enableMocking().then(() => {
  ReactDOM.createRoot(root).render(
    <ReduxProvider store={appStore}>
      <RouterProvider router={appRouter()} />
    </ReduxProvider>
  )
})
