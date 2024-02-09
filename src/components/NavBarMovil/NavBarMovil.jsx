import './NavBarMovil.css';
import { Link, NavLink } from 'react-router-dom';

export const NavBarMovil = () => {
  return (
    <div className='navMovil'>
        <nav className='navbar__me'>
        <Link className="link" to="/">
        <h1><i>MAURINHO</i></h1>
      </Link>
        <input type="checkbox" id="checkbox" class="checkbox"></input>
        <label for="checkbox" class="toggle">
                <div class="bars" id="bar1"></div>
                <div class="bars" id="bar2"></div>
                <div class="bars" id="bar3"></div>
            </label>
            <ul className='menu__me'>
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
    </div>
  )
}
