import { AsyncThunkPayloadCreator, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { sessionApi } from 'entities/session'
import { RegisterDto } from 'entities/session/dto/register.dto'

const asyncThunk: AsyncThunkPayloadCreator<void, RegisterDto, { state: RootState }> = async (body, { dispatch, rejectWithValue, requestId }) => {
  try {
    await dispatch(sessionApi.endpoints.signUp.initiate(body)).unwrap()
  } catch (err) {
    return rejectWithValue(err)
  }
}

export const signUpThunk = createAsyncThunk('session/signUp', asyncThunk)
