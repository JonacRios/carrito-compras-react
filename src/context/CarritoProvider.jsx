import React from 'react'
import { CarritoContext } from './CarritoContext'
import { useReducer } from 'react'

export const CarritoProvider = ({ children }) => {
    const initialState = []
    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO]agregar-producto':
                return [...state, action.payload]

            case '[CARRITO]eliminar-producto':
                return state.filter((producto) => producto.id !== action.payload.id)
            case '[CARRITO]aumentar-producto':
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if (item.id === action.payload.id)
                        return {
                            ...item,
                            cantidad: cant
                        }
                    return item
                })


            case '[CARRITO]disminuir-producto':
                return state.map(item => {
                    const cant = item.cantidad + -1
                    if (item.id === action.payload.id && item.cantidad > 1)
                        return {
                            ...item,
                            cantidad: cant
                        }
                    return item
                })
        }
    }
    const agregarProducto = (producto) => {
        producto.agregado = true
        producto.cantidad = 1
        const action = {
            type: '[CARRITO]agregar-producto',
            payload: producto
        }
        dispatch(action)
    }

    const eliminarProducto = (id) => {
        const action = {
            type: '[CARRITO]eliminar-producto',
            payload: { id }
        }
        dispatch(action)
    }

    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO]aumentar-producto',
            payload: { id }
        }
        dispatch(action)
    }

    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO]disminuir-producto',
            payload: { id }
        }
        dispatch(action)
    }


    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)
    return (
        <CarritoContext.Provider value={{ listaCompras, agregarProducto, eliminarProducto, disminuirCantidad, aumentarCantidad }}>
            {children}
        </CarritoContext.Provider>
    )
}

