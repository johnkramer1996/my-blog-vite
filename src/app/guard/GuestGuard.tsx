import { selectIsAuth } from 'entities/session'
import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'shared/model'
import { PATH_PAGE } from 'shared/lib'

export type Props = {
  children: ReactNode
}

export const GuestGuard = ({ children }: Props): ReactNode => {
  const isAuth = useAppSelector(selectIsAuth)

  if (!isAuth) return <Navigate to={PATH_PAGE.root} replace />

  return children
}
