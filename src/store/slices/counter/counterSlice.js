import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    valueCounter: 10,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.valueCounter += 1
    },
    decrement: state => {
      state.valueCounter -= 1
    },
  },
})

// Action (type, payload)
export const { increment, decrement } = counterSlice.actions
