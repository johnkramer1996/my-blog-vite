import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { baseApi } from 'shared/api'

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

// setupListeners(appStore.dispatch)

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
