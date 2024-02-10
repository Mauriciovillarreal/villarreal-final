import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import "./Checkout.css";
import Container from 'react-bootstrap/Container';

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
            setError("¡Todos los datos deberían estar completos!");
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
                setError("No se pudo crear la orden, revisa tu codigo maldito");
            })
    }

    return (
        <div className="padre">

            <form onSubmit={manejadorSubmit}>

                <div className="imputDatos">
                    <div className="imputDatos1">
                        <div>
                        <label htmlFor="nombre" >Nombre</label>
                        </div>
                        <div>
                        <input type="text" id="nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />

                        </div>
                    </div>

                    <div className="imputDatos1">
                        <div>
                        <label htmlFor="apellido">Apellido  </label>

                        </div>
                        <div>

                        <input type="text" id="apellido" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} />
                        </div>
                    </div>

                    <div className="imputDatos1">
                        <label htmlFor="telefono">  telefono</label>
                        <input type="text" id="telefono" placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className="imputDatos1">
                        <label htmlFor="email"> email</label>
                        <input type="email" id="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="imputDatos1">
                        <label htmlFor="emailcon">  email </label>
                        <input type="email" id="emailcon" placeholder="E-mail" onChange={(e) => setEmailConfirm(e.target.value)} />
                    </div>

                    {
                        error && <p> {error} </p>
                    }

                    <button> Finalizar Orden </button>

                    {
                        orderId && <strong>¡Gracias por su compra! Tu número de orden es el siguiente: {orderId} </strong>
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
                                    <div>
                                        <h5> {producto.item.nombre} </h5>
                                        <h5>${producto.item.precio}</h5>
                                    </div>
                                </div>
                            </>

                        ))
                    }
                    <h5>TOTAL: ${total}</h5>
                </div>


            </form>
        </div>
    )
}
