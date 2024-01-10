import { FC } from 'react';
import "../../styles/_components/_navbar.scss";
import { useLocation, Link } from 'react-router-dom';
import Brand from '../Brand/Brand';

const Navbar: FC = () => {
    const location = useLocation();
    const { pathname } = location;
    
    return (
        <nav className="nav">
                <Brand size="big" />
                <div id="navbar" className='nav__links'>
                    <Link className={`${pathname === '/' ? 'nav__links--active' : null }`} to="/">Home</Link>
                    <Link className={`${pathname === '/movies' || pathname.includes('/movie-detail') ? 'nav__links--active' : null } `} to="/movies">Movies</Link>
                </div>
            </nav>
    )
}

export default Navbar;