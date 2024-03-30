import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type SessionSliceState =
  | {
      isAuth: true
      accessToken: string
      refreshToken: string
    }
  | {
      isAuth: false
      accessToken: null
      refreshToken: null
    }

const initialState: SessionSliceState = {
  isAuth: false,
  accessToken: null,
  refreshToken: null,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState as SessionSliceState,
  reducers: {
    clearSessionData: (state) => {
      state.isAuth = initialState.isAuth
      state.accessToken = initialState.accessToken
      state.refreshToken = initialState.refreshToken
    },
    setSessionData: (state, action: PayloadAction<SessionSliceState>) => {
      state.isAuth = action.payload.isAuth
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
  },
})

export const selectIsAuth = (state: RootState) => state.session.isAuth

export const { clearSessionData, setSessionData } = sessionSlice.actions
