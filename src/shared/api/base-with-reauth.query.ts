import { type FetchArgs } from '@reduxjs/toolkit/query'
import { type BaseQueryApi } from '@reduxjs/toolkit/query'
import { baseQueryWithAccessToken as baseQuery } from './base.query'
import { invalidateAccessToken } from './invalidate-access-token.action'
import { refreshTokens } from './refresh-tokens.action'

const AUTH_ERROR_CODES = new Set([401])

export async function baseWithReauthQuery(args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) {
  const result = await baseQuery(args, api, extraOptions)

  if (result.error && typeof result.error?.status === 'number' && AUTH_ERROR_CODES.has(result.error.status)) {
    const refreshToken = (api.getState() as RootState).session.refreshToken
    const refreshResult = await baseQuery({ url: '/users/refreshToken', body: { refreshToken }, method: 'POST' }, api, extraOptions)
    if (refreshResult.data) {
      const response = refreshResult.data as { accessToken: string; refreshToken: string }
      api.dispatch(refreshTokens(response))

      return await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(invalidateAccessToken())
    }
  }

  return result
}
