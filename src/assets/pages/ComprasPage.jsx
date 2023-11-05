import { ProductosContext } from '../../context/ProductosContext'
import { Card } from '../components/card'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

export const ComprasPage = () => {

  const { Productos, setProductos } = useContext( ProductosContext)
  const { listaCompras, agregarProducto, eliminarProducto} = useContext(CarritoContext)
  const handleAgregarProducto = (producto) => {
    agregarProducto(producto)
  }
  const handleEliminarProducto = (id) => {
    eliminarProducto(id)
  }
  
  return (
    <>
      <h1>Compras: </h1>
      <hr />
      
        {Productos.map((producto) => (
          <Card
            key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            handleAgregarProducto={() => handleAgregarProducto(producto)}
            handleEliminarProducto={() => handleEliminarProducto(producto.id)}

          />
        )
        ) 
        }
    </>
  )
}
