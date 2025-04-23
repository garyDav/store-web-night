import { createSlice } from '@reduxjs/toolkit'

const tempProduct = {
  name: 'Durazno',
  product_date: new Date(),
  expiration_date: new Date('2025-04-30T00:00:00.000Z'),
  stock: 200,
  price: 1,
  tags: ['fruta', 'oferta'],
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
