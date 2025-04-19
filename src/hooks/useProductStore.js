import { useDispatch } from 'react-redux'
import { onSetActiveProduct } from '../store/product'

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
      console.log('New Product')
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
