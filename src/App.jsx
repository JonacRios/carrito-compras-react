import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './assets/components/Navbar'
import { ComprasPage } from './assets/pages/ComprasPage'
import { CarritoPage } from './assets/pages/CarritoPage'
import { ProductosProvider } from './context/ProductosProvider'
import { CarritoProvider } from './context/CarritoProvider'

export const App = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<ComprasPage></ComprasPage>} />
            <Route path="/carrito" element={<CarritoPage></CarritoPage>} />
            <Route path="/*" element={<Navigate to={'/'}></Navigate>} />
          </Routes>
        </div>
    </CarritoProvider>
    </ProductosProvider >
   
  )
}
