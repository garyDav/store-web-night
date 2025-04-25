import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isProductModalOpen: false,
  },
  reducers: {
    onOpenProductModal: state => {
      state.isProductModalOpen = true
    },
    onCloseProductModal: state => {
      state.isProductModalOpen = false
    },
  },
})

export const { onOpenProductModal, onCloseProductModal } = uiSlice.actions
