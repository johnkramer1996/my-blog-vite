import { Navigate, createBrowserRouter } from 'react-router-dom'
import { ErrorPage, ProductListPage, MainPage, NotFoundPage, ProductPage } from 'pages'
import { PATH_PAGE } from 'shared/lib'
import { BaseLayout } from './layouts/baseLayout'

export const appRouter = () => {
  return createBrowserRouter([
    {
      element: <BaseLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: PATH_PAGE.signIn,
          element: <div>123</div>,
        },
        {
          path: PATH_PAGE.root,
          element: <MainPage />,
        },
        {
          path: PATH_PAGE.products.root,
          element: <ProductListPage />,
        },
        {
          path: PATH_PAGE.products.product(':productId'),
          element: <ProductPage />,
        },
        { path: PATH_PAGE[404], element: <NotFoundPage /> },
        { path: PATH_PAGE.error, element: <ErrorPage /> },
        { path: '*', element: <Navigate to={PATH_PAGE[404]} replace /> },
      ],
    },
  ])
}
