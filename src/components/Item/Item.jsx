import './Item.css';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
    return (
         
        <Col lg={true} className="card2">
            <img src={img} alt={nombre} fluid />
            <div className='line'></div>
            <h2>{nombre}</h2>
            <p> ${precio} </p>
            <Link  className='linkBtn' to={`/item/${id}`}> + </Link>
        </Col> 
    )
}

export default Item