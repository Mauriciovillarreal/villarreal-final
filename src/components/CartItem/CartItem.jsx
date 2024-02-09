import { React, useContext } from 'react'
import "./CartItem.css";
import { CarritoContext } from "../../context/CarritoContext"


export const CartItem = ({ item, cantidad, }) => {
  const { eliminarProducto } = useContext(CarritoContext)

  return (
    <div className='Carrito2'>
      <div>
        <img src={item.img} alt="" />
      </div>
      <h5> {item.nombre}  </h5>
      <div> Cantidad: {cantidad} </div>
      <div> ${item.precio} </div>
      <button className='bin-button' onClick={() => eliminarProducto(item.id)}>
       
      </button>
    </div>
  )
}
