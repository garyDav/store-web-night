import { useState } from 'react'
import { useForm } from '../../hooks/useForm'

const initialState = {
  email: '',
  password: '',
}

const formValidations = {
  email: [
    value => value.includes('@') && value.includes('.'),
    'El correo debe tener una "@" y un "."',
  ],
  password: [
    value => value.length >= 6,
    'La contraseña debe de tener más de 6 caracteres',
  ],
}

function LoginPage() {
  // const dispatch = useDispatch()
  const {
    email,
    password,
    formValues,
    onInputChange,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(initialState, formValidations)
  const [isStartForm, setIsStartForm] = useState(false)

  const handleLogin = event => {
    event.preventDefault()
    setIsStartForm(true)

    if (!isFormValid) return

    // Petición HTTP a la API
    console.log(formValues)
  }

  return (
    <>
      <main>
        <section>
          <h1>Iniciar sesión</h1>

          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="txtEmail">Ingrese correo.</label>
              <input
                id="txtEmail"
                type="text"
                placeholder="Correo"
                name="email"
                value={email}
                onChange={onInputChange}
                autoComplete="off"
                spellCheck="false"
              />
              {!!emailValid && isStartForm && (
                <div>
                  <span>{emailValid}</span>
                </div>
              )}
            </div>
            <br />

            <div>
              <label htmlFor="txtPassword">Ingrese contraseña.</label>
              <input
                id="txtPassword"
                type="password"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
                autoComplete="off"
                spellCheck="false"
              />
              {!!passwordValid && isStartForm && (
                <div>
                  <span>{passwordValid}</span>
                </div>
              )}
            </div>
            <br />

            {!isFormValid && isStartForm && (
              <div>
                <span>Formulario es inválido (Errores).</span>
              </div>
            )}

            <div>
              <button
                type="submit"
                className={`${!isFormValid && isStartForm ? 'btn-disabled' : ''}`}
                disabled={!isFormValid && isStartForm}>
                Iniciar sesión
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default LoginPage
