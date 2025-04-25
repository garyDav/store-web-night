import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import { onAddNewProduct, onSetActiveProduct } from '../store'

export const useProductStore = () => {
  // Variables Locales
  const dispatch = useDispatch()
  const { products, activeProduct } = useSelector(state => state.product)

  // Métodos
  const setActiveProduct = product => {
    dispatch(onSetActiveProduct(product))
  }
  const startSavingProduct = async product => {
    if (product._id) {
      // Actualizar la BBDD (Update)
      // TODO: llega al backend HTTP
      console.log('Update Product')
    } else {
      // Crear en la BBDD (Create)
      // TODO: llega al backend HTTP
      dispatch(onAddNewProduct({ ...product, _id: new Date().getTime() }))
      console.log('New Product')
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Producto Guardado',
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }

  // Devuelve
  return {
    //* Propiedades
    products,
    activeProduct,

    //* Métodos
    setActiveProduct,
    startSavingProduct,
  }
}
