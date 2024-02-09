import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { Glasses } from '../Glasses/Glasses';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <header>

      <div className='header'>

      <Link className="link" to="/">
        <h1><i>MAURINHO</i></h1>
      </Link>
      <div className='header'>
        <Glasses />
        <nav>
          <ul>
            <li>
              <NavLink className="link" to="/categoria/1">
                ECO GAFAS
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/categoria/2">
                SOL
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/categoria/3">
                ARMAZONES
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/categoria/4">
                24/7
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/categoria/5">
                PREMIUM SERIES
              </NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
      </div>


      <div className='navMovil'>
      <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <CartWidget />
                    <Link className="link" to="/">
                        <h1><i>MAURINHO</i></h1>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='btnMenu'>
                        <Nav className="me-auto">
                            <ul>
                                <li>
                                    <NavLink className="link" to="/categoria/1">
                                        ECO GAFAS
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" to="/categoria/2">
                                        SOL
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" to="/categoria/3">
                                        ARMAZONEZ
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" to="/categoria/4">
                                        24/7
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" to="/categoria/5">
                                        PREMIUM SERIES
                                    </NavLink>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
                </Navbar>
      </div>
    </header>
    
  )
}
