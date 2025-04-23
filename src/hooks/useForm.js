import { useState, useEffect, useMemo } from 'react'

export const useForm = (initialState = {}, formValidations = {}) => {
  const [formValues, setFormValues] = useState(initialState)
  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    createValidators()
  }, [formValues])

  useEffect(() => {
    setFormValues(initialState)
  }, [initialState])

  const isFormValid = useMemo(() => {
    for (const formField of Object.keys(formValidation)) {
      if (formValidation[formField] !== null) return false
    }

    return true
  }, [formValidation])

  const onInputChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onResetForm = () => {
    setFormValues(initialState)
  }

  const createValidators = () => {
    const formCheckedValues = {}

    for (const formField of Object.keys(formValidations)) {
      // { key: value, key: value }
      const [fn, errorMessage] = formValidations[formField]
      if (Array.isArray(fn)) {
        formCheckedValues[`${formField}Valid`] = []
        for (const [fn, errorMessage] of formValidations[formField]) {
          if (!fn(formValues[formField])) {
            formCheckedValues[`${formField}Valid`].push(errorMessage)
          }
        }
        if (formCheckedValues[`${formField}Valid`].length === 0) {
          formCheckedValues[`${formField}Valid`] = null
        }
      } else {
        formCheckedValues[`${formField}Valid`] = fn(formValues[formField])
          ? null
          : errorMessage
      }
    }

    setFormValidation(formCheckedValues)
  }

  return {
    // * Propiedades
    ...formValues,
    formValues,
    ...formValidation,

    // * Métodos
    onInputChange,
    onResetForm,
    isFormValid,
  }
}
