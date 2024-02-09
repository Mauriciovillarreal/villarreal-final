import { CartItem } from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"

import './Cart.css';


export const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className="carritoVacio">El carrito esta vacio</h2>
            </>
        )
    }
    return (
        <div className='Carrito'>
            <p className="ruta">Inicio/ Carrito</p>
            <h1>CARRITO</h1>
            {
                carrito.map(prod => <CartItem className="cartView" key={prod.id} {...prod} />)
            }
            <div>
                <button className="btnChekout" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            </div>
            <div className="btnChekoutfc">
                <Link className="link" to="/checkout"> <p>Finalizar Compra  -  Total:   ${total}  </p> </Link>
            </div>
        </div>
    )
}
