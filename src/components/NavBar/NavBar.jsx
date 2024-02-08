import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { Glasses } from '../Glasses/Glasses';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header>
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
    </header>
  )
}
