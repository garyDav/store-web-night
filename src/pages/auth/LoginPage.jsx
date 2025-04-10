import { useState } from 'react'
import { useForm } from '../../hooks/useForm'

import './LoginPage.css'

const loginFormValues = {
  email: '',
  password: '',
}

const loginValidations = {
  email: [
    value => value.includes('@') && value.includes('.'),
    'El correo debe tener una "@" y un "."',
  ],
  password: [
    value => value.length >= 6,
    'La contraseña debe de tener más de 6 caracteres',
  ],
}

const registerFormValues = {
  fullName: '',
  email: '',
  password: '',
  passwordRepeat: '',
}

function LoginPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    email: loginEmail,
    password: loginPassword,
    formValues: formLogin,
    onInputChange: onLoginInputChange,

    isFormValid,
    emailValid,
    passwordValid,
  } = useForm(loginFormValues, loginValidations)

  const {
    fullName: registerFullName,
    email: registerEmail,
    password: registerPassword,
    passwordRepeat: registerPasswordRepeat,
    formValues: formRegister,
    onInputChange: onRegisterInputChange,
  } = useForm(registerFormValues)

  const loginSubmit = event => {
    event.preventDefault()
    setFormSubmitted(true)

    if (!isFormValid) return

    // Petición HTTP a la API
    console.log(formLogin)
  }

  const registerSubmit = event => {
    event.preventDefault()

    console.log(formRegister)
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="email"
                value={loginEmail}
                onChange={onLoginInputChange}
                autoComplete="off"
                spellCheck="false"
              />
              {!!emailValid && formSubmitted && (
                <div>
                  <span>{emailValid}</span>
                </div>
              )}
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={loginPassword}
                onChange={onLoginInputChange}
                autoComplete="off"
                spellCheck="false"
              />
              {!!passwordValid && formSubmitted && (
                <div>
                  <span>{passwordValid}</span>
                </div>
              )}
            </div>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className={`btnSubmit ${!isFormValid && formSubmitted ? 'btn-disabled' : ''}`}
                disabled={!isFormValid && formSubmitted}>
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="fullName"
                value={registerFullName}
                onChange={onRegisterInputChange}
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="email"
                value={registerEmail}
                onChange={onRegisterInputChange}
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={registerPassword}
                onChange={onRegisterInputChange}
                autoComplete="off"
                spellCheck="false"
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="passwordRepeat"
                value={registerPasswordRepeat}
                onChange={onRegisterInputChange}
                autoComplete="off"
                spellCheck="false"
              />
            </div>

            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
