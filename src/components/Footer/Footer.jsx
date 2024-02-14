import "./Footer.css";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (



    <footer>
      <Container>
        <div className="redes">
          <img className="instagram" src="../img/Instagram.png" alt="" />
          <img className="youtube" src="../img/youtube.png" alt="" />
          <img className="x" src="../img/logo-black.png" alt="" />

        </div>
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
        <div className="footer">
          © 2024 MAURINHO | Todos los derechos reservados
        </div>
      </Container>
    </footer>
  )
}
