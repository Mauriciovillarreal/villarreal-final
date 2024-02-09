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
                <div className="carritoVacio">
                    <h3 >El carrito esta vacio</h3>
                    <Link className="btnVerProducots" to="/">
                        <div className="btnbg">
                            <h6>VER PRODUCTOS</h6>

                        </div>
                    </Link>

                </div>
            </>
        )
    }
    return (
        <div>
            <div className='Carrito'>
                <p className="ruta">Inicio/ Carrito</p>
                <h1>CARRITO</h1>
                <div className="CarritoScroll">

                {
                    carrito.map(prod => <CartItem className="cartView" key={prod.id} {...prod} />)
                }
                </div>
            </div>
            <div className="checkoutnav">
                <div>
                    <button className="btnChekout" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
                </div>
                <div className="btnChekoutfc">
                    <Link className="link" to="/checkout"> <p>Finalizar Compra  -  Total:   ${total}  </p> </Link>
                </div>
            </div>
        </div>
    )
}
