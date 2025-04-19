import { configureStore } from '@reduxjs/toolkit'

// import { counterSlice } from './counter/counterSlice'
import { productSlice } from './product'
import { uiSlice } from './ui'

export const store = configureStore({
  reducer: {
    // counter: counterSlice.reducer,
    product: productSlice.reducer,
    ui: uiSlice.reducer,
  },
})
