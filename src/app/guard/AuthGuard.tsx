import { selectIsAuth } from 'entities/session'
import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'shared/model'

export type Props = {
  children: ReactNode
}

export const AuthGuard = ({ children }: Props): ReactNode => {
  const isAuth = useAppSelector(selectIsAuth)

  if (isAuth) return <Navigate to='/' replace />

  return children
}
