import { createSlice } from '@reduxjs/toolkit'
import { addDays } from 'date-fns'

const tempProduct = {
  _id: new Date().getTime(),
  name: 'Leche Bolsa',
  product_date: new Date(),
  expiration_date: addDays(new Date(), 20),
  stock: 100,
  price: 7,
  tags: ['bebida', 'lacteo', 'natural', 'refrigerado'],
}

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [tempProduct],
    activeProduct: null,
  },
  reducers: {
    onSetActiveProduct: (state, { payload }) => {
      state.activeProduct = payload
    },
    onAddNewProduct: (state, { payload }) => {
      state.products.push(payload)
      state.activeProduct = null
    },
  },
})

export const { onSetActiveProduct, onAddNewProduct } = productSlice.actions
