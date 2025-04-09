import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import StoreApp from './StoreApp.jsx'
import { store } from './store'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <StoreApp />
    </Provider>
  </StrictMode>,
)
