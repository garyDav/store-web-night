import { useDispatch } from 'react-redux'
import { onOpenProductModal, onCloseProductModal } from '../store/ui'

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
    toggleProductModal,
  }
}
