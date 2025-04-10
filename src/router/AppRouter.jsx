import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import ProductPage from '../pages/product/ProductPage'
import LoginPage from '../pages/auth/LoginPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
