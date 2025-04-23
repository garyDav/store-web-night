import { useState, useMemo } from 'react'
import Modal from 'react-modal'
import { useForm, useUiStore } from '../../hooks'
import DatePicker, { registerLocale } from 'react-datepicker'
import { es } from 'date-fns/locale'
import { addDays } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('es', es)

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

const today = new Date()

const year = today.getFullYear()
const month = today.getMonth()
const day = today.getDate()

const productFormValues = {
  name: '',
  product_date: today,
  expiration_date: addDays(new Date(year, month, day), 30),
  stock: 100,
  price: '',
}

const productValidations = {
  // propiedad: [funValidadora, mensajeError]
  name: [value => value.length > 2, 'Debe ingresar un producto válido'],
  stock: [
    [value => +value, 'Debe ingresar número'],
    [value => +value > 29, 'Debe ingresar mínimo 30 unidades'],
  ],
  price: [value => +value > 0, 'Debe ingresar precio'],
}

export const ProductModal = () => {
  // Custom Hooks
  const { isProductModalOpen, closeProductModal } = useUiStore()
  const {
    name,
    product_date,
    expiration_date,
    stock,
    price,
    formValues,
    onInputChange,
    onResetForm,

    isFormValid,
    nameValid,
    stockValid,
    priceValid,
  } = useForm(productFormValues, productValidations)

  // Estados locales useState
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [tags, setTags] = useState([])

  const nameClass = useMemo(() => {
    if (!formSubmitted) return ''

    return !nameValid ? '' : 'is-invalid'
  }, [formSubmitted, nameValid])

  const stockClass = useMemo(() => {
    if (!formSubmitted) return ''

    return !stockValid ? '' : 'is-invalid'
  }, [formSubmitted, stockValid])

  const priceClass = useMemo(() => {
    if (!formSubmitted) return ''

    return !priceValid ? '' : 'is-invalid'
  }, [formSubmitted, priceValid])

  const onDateChange = (value, changing) => {
    onInputChange({ target: { name: changing, value } })
  }

  const onCloseModal = () => {
    closeProductModal()
  }

  const onSubmit = event => {
    event.preventDefault()

    setFormSubmitted(true)
    console.log('Formulario completado')
  }

  return (
    <Modal
      isOpen={isProductModalOpen}
      className="modal"
      overlayClassName="modal-fondo"
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal">
      <h1>Nuevo Producto</h1>
      <hr />

      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Fecha de compra </label>
          <DatePicker
            selected={product_date}
            onChange={value => onDateChange(value, 'product_date')}
            className="form-control"
            showTimeSelect
            dateFormat="Pp"
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha de expiración </label>
          <DatePicker
            selected={expiration_date}
            onChange={value => onDateChange(value, 'expiration_date')}
            className="form-control"
            dateFormat="P"
            locale="es"
          />
        </div>

        <div className="form-group mb-2">
          <label>Producto</label>
          <input
            type="text"
            className={`form-control ${nameClass}`}
            placeholder="Nombre del producto"
            name="name"
            value={name}
            autoComplete="off"
            onChange={onInputChange}
          />
          {nameValid && <span className="invalid-feedback">{nameValid}</span>}
        </div>

        <div className="form-group mb-2">
          <label>Stock</label>
          <input
            type="text"
            className={`form-control ${stockClass}`}
            placeholder="Unidades disponibles"
            name="stock"
            value={stock}
            autoComplete="off"
            onChange={onInputChange}
          />
          {stockValid?.length > 0 &&
            stockValid.map(msgError => (
              <div key={msgError} className="invalid-feedback">
                <span>{msgError}</span>
              </div>
            ))}
        </div>

        <div className="form-group mb-2">
          <label>Precio</label>
          <input
            type="text"
            className={`form-control ${priceClass}`}
            placeholder="Precio en Bs.-"
            name="price"
            value={price}
            autoComplete="off"
            onChange={onInputChange}
          />
          {priceValid && <span className="invalid-feedback">{priceValid}</span>}
        </div>

        <div className="form-group mb-2">
          <label>Características</label>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  )
}
