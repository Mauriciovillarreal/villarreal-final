import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div className='cartWidget'>
          <Link className='link' to="/cart">
                <img className='imgCarrito' src="../img/carrito.png" alt="Carrito" />
                {
                    cantidadTotal > 0 && <strong className="link"> {cantidadTotal} </strong>
                }        
            </Link>
    </div>
  )
}
