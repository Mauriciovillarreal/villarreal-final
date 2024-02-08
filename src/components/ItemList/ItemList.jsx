import Item from "../Item/Item"
import "./ItemList.css";
import Row from 'react-bootstrap/Row';

export const ItemList = ({productos}) => {
  return (
    <Row className="contenedorProductos">
        {productos.map(prod => <Item key={prod.id} {...prod}/>)}
    </Row>
  )
}
