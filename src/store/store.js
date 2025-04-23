import { configureStore } from '@reduxjs/toolkit'

import { uiSlice, productSlice } from './'

export const store = configureStore({
  reducer: {
    // counter: counterSlice.reducer,
    product: productSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
