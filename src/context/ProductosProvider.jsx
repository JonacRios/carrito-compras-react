import React, { useState, useEffect } from 'react';
import { ProductosContext } from './ProductosContext';

export const ProductosProvider = ({ children }) => {

  const [Productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    try {
      const url = 'https://fakestoreapi.com/products';
      const response = await fetch(url);
      const data = await response.json();

      if (Array.isArray(data)) {
        // Verificar si data es un arreglo
        setProductos(data);
      } else {
        setProductos([]); // Si no es un arreglo, establecer Productos como un arreglo vacío
      }
    } catch (error) {
      console.log('Error en la petición: ', error);
    }
  }

  useEffect(() => {
    fetchProductos()
  }, [])

  return (
    <ProductosContext.Provider value={{ Productos, setProductos }}>
      {children}
    </ProductosContext.Provider>
  )
}
