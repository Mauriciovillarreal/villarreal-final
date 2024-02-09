import React from 'react'
import "./ItemDetail.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({ id, nombre, precio, stock, img, descripcion, alto, ancho, puente }) => {
  const [AgregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    
    const item = {id, nombre, precio, img}
    agregarAlCarrito(item, cantidad)
  }

  return (
    <Container>
    <Row className='itemDetail'>
      <Col className='imgCol'>
      <img src={img} alt={nombre} />
      </Col>
      <Col className='itemDetail2'>
        <h2>{nombre}</h2>
        <h3>${precio} </h3>
        <img src="../img/tarjetas.png" alt=""/>

        {
          AgregarCantidad > 0 ? (<Link to="/cart" className='endbuy'>Terminar compra</Link>) : (<ItemCount inicial = {1} stock = {stock} funcionAgregar = {manejadorCantidad}/>)
        }

        <h5>Descripción</h5>
        <p>{descripcion}</p>
        <h5>Medidas de lentes</h5>
        <div> Alto {alto}mm</div>
        <div> Ancho {ancho}mm</div>
        <div> Puente {puente}mm</div>
      </Col>
    </Row>
    </Container>
  )
}

export default ItemDetail