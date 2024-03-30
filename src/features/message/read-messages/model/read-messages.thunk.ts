import { createAsyncThunk } from '@reduxjs/toolkit'
import { Message, messageApi } from 'entities/message'

export const readMessagesThunk = createAsyncThunk<Promise<any>, { messages: Message[]; currentMemberId: string }, { state: RootState }>(
  'message/read-message',
  async ({ messages, currentMemberId }, { dispatch, getState }) => {
    try {
      const results = messages
        .filter((message) => !(message.isRead || !(message.toMemberId === currentMemberId)))
        .map(async (message) => {
          return dispatch(messageApi.endpoints.updateMessage.initiate({ messageId: message.id, isRead: true }))
        })
      return await Promise.all(results)
    } finally {
      //
    }
  }
)
