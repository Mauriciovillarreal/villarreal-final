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
      <div>
        <h5> {item.nombre}  </h5>
        <div> ${item.precio} </div>
        <div> Cantidad: {cantidad}
        </div>
          <button className='bin-button' onClick={() => eliminarProducto(item.id)}>
            <p>BORRAR</p>
          </button>


        <div>

        </div>

      </div>
    </div>
  )
}
