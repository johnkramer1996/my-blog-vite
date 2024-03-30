export type SessionDto = {
  accessToken: string
  refreshToken: string
}

export type LoginBodyDto = {
  login: string
  password: string
}

export type RegisterBodyDto = {
  login: string
  email: string
  password: string
}
