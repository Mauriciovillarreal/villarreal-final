import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import "./Checkout.css";

export const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext)

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
            setError("¡Todos los campos deberían estar completos!");
            return;
        }

        if (email !== emailConfirm) {
            setError("Los emails no coinciden!");
            return;
        }

        const order = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }
        addDoc(collection(db, "ordenes"), order)
            .then(docRef => {
                setOrderId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden compra", error);
                setError("No se pudo crear la orden");
            })
    }

    return (
        <div className="padre">
            <form className="finalizarCompra" onSubmit={manejadorSubmit}>
                <div className="inputDatos">
                    <div className="inputDatos1">
                        <div>
                            <label htmlFor="nombre" >Nombre</label>
                        </div>
                        <div>
                            <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
                        </div>
                    </div>
                    <div className="inputDatos1">
                        <div>
                            <label htmlFor="apellido">Apellido  </label>
                        </div>
                        <div>
                            <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
                        </div>
                    </div>
                    <div className="inputDatos1">
                        <div>
                            <label htmlFor="telefono">Telefono</label>
                        </div>
                        <div>
                            <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                    </div>
                    <div className="inputDatos1">
                        <div>
                            <label htmlFor="email"> Email</label>
                        </div>
                        <div>
                            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="inputDatos1">
                        <div>
                            <label htmlFor="emailcon">  Confirmar Email </label>
                        </div>
                        <div>
                            <input type="email" id="emailcon" onChange={(e) => setEmailConfirm(e.target.value)} />
                        </div>
                    </div>
                    {
                        error && <p> {error} </p>
                    }
                    <button> Finalizar Orden </button>
                    {
                        orderId && <div className="compraFinalizada">¡Gracias por su compra! Tu número de orden es el siguiente: {orderId} </div>
                    }
                </div>
                <div className="derCheckout">
                    {
                        carrito.map(producto => (
                            <>
                                <div className="checkoutCard" key={producto.item.id}>
                                    <div>
                                        <img src={producto.item.img} alt="" /> <strong>x{producto.cantidad}</strong>
                                    </div>
                                    <div className="margincc">
                                        <h6> {producto.item.nombre} </h6>
                                        <h6>${producto.item.precio}</h6>
                                    </div>
                                </div>
                                <hr />
                            </>

                        ))
                    }
                
                    <h5>TOTAL: ${total}</h5>
                </div>
            </form>
        </div>
    )
}
