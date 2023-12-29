import { FC } from 'react';
import "../../styles/_components/_navbar.scss";
import { useLocation, Link } from 'react-router-dom';

const Navbar: FC = () => {
    const location = useLocation();
    const { pathname } = location;
    
    return (
        <nav className="nav">
                <a className="nav__brand" href="/">
                    <span>T</span>
                    <span>A</span>
                    <span>N</span>
                    <span>F</span>
                    <span>L</span>
                    <span>I</span>
                    <span>X</span>
                </a>
                <div className='nav__links'>
                    <Link className={`${pathname === '/' ? 'nav__links--active' : null }`} to="/">Home</Link>
                    <Link className={`${pathname === '/movies' || pathname.includes('/movie-detail') ? 'nav__links--active' : null } `} to="/movies">Movies</Link>
                </div>
            </nav>
    )
}

export default Navbar;