import { ItemList } from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import "./ItemListContainer.css";
import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {

    const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [idCategoria])

  return (
    <>
      <div className='igBanner'></div>
      <Container>
        <h5>CATÁLOGO</h5>
        <ItemList productos={productos} />
      </Container>
    </>

  )
}

export default ItemListContainer