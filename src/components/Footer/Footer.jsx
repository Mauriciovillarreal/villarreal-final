import "./Footer.css";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (



    <footer>
      <Container>

        <div className="redes">
          <h1><i>MAURINHO</i></h1>
          <img className="instagram" src="../img/insta.png" alt="" />
          <img className="whatsapp" src="../img/whatsapp.png" alt="" />
        </div>
        <hr />
        <div>
          <h6>
            MEDIOS DE PAGO
            <div>
              <img src="../img/tarjetas.png" alt="" />
            </div>
          </h6>
          <h6>
            ENVIOS
            <div>
              <img className="oca" src="../img/oca.png" alt="" />

            </div>
          </h6>

        </div>
        <hr />
        <div className="footer">
           © Copyright MAURINHO - Exclusive Productions - 2024. Todos los derechos reservados
           
        </div>
      </Container>
    </footer>
  )
}
