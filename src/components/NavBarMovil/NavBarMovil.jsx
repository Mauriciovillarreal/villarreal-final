import './NavBarMovil.css';
import { Link, NavLink } from 'react-router-dom';

export const NavBarMovil = () => {
    return (
        <>
         <div className='navMovil'>
            <nav className='navbar__me'>
                <Link className="link" to="/">
                    <h1><i>MAURINHO</i></h1>
                </Link>
                <input type="checkbox" id="checkbox" className="checkbox"></input>
                <label htmlFor='checkbox' className='toggle'>
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
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
        </>
       
    )
}
