import { useState } from "react"
import './ItemCount.css';


const ItemCount = ({inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(1);


    const incrementar = () => {
      if(contador < stock) {
        setContador(contador + 1);
      }
    }

    const decrementar = () => {
      if(contador > inicial) {
        setContador(contador - 1);
      }
    }


  return (
    <>
      <button className="btnAddCarrito" onClick={() => funcionAgregar(contador)}> AÑADIR AL CARRITO </button>
    <div className="itemCount">
        <button onClick={decrementar}> - </button>
        <div> {contador} </div>
        <button onClick={incrementar}> + </button>
    </div>
    </>
  )
}

export default ItemCount