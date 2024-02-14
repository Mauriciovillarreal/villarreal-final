import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div className='cartWidget'>
          <Link className='link2' to="/cart">
            <div>
                <img className='imgCarrito' src="../img/carrito.png" alt="Carrito" />
            </div>
            <div>
                {
                    cantidadTotal > 0 && <strong className="link2"> {cantidadTotal} </strong>
                }        

            </div>
            </Link>
    </div>
  )
}
