import React, { useState } from 'react';
import { useContext } from 'react';

export const Card = ({ imagen, titulo, descripcion, precio, handleAgregarProducto, 
  handleEliminarProducto, handleAumentarCantidad, handleDisminuirCantidad}) => {

  const [Added, setAdded] = useState(false)

    const Agregar = () => {
    handleAgregarProducto()
    setAdded(true)
    }
    const Quitar= () => {
    handleEliminarProducto()
    setAdded(false)
    }

  return (
    <>
      <div className='tarjeta'>
        <img className='tarjeta-imagen' src={imagen} alt={titulo} />
        <div className='tarjeta-contenido'>
          <h3 className='tarjeta-titulo'>{titulo}</h3>
          <p className='tarjeta-descripcion'>{descripcion}</p>
          <p className='tarjeta-precio'>${precio}</p>
        {Added ? (
          <button type='button' className='boton-quitar' onClick={Quitar}>
            Quitar
          </button>
        ) : (
          <button type='button' className='boton-agregar' onClick={Agregar}>
            Agregar
          </button>
        )}
        </div>
      </div>
    </>
  )
}

