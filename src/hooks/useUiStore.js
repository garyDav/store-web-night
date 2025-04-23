import { useDispatch, useSelector } from 'react-redux'
import { onOpenProductModal, onCloseProductModal } from '../store'

export const useUiStore = () => {
  // Variables Locales
  const dispatch = useDispatch()
  const { isProductModalOpen } = useSelector(state => state.ui)

  // Métodos
  const openProductModal = () => {
    dispatch(onOpenProductModal())
  }
  const closeProductModal = () => {
    dispatch(onCloseProductModal())
  }
  const toogleProductModal = () => {
    isProductModalOpen ? closeProductModal() : openProductModal()
  }

  // Devuelve
  return {
    //* Propiedades
    isProductModalOpen,

    //* Métodos
    openProductModal,
    closeProductModal,
    toogleProductModal,
  }
}
