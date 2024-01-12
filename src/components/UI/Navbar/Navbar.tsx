import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/_components/_navbar.scss";
import { INavbar } from './interfaces/INavbar';

const Navbar: FC<INavbar> = ({ pathname }) => {

const [isChecked, setIsChecked] = useState(false);

    return (  
        <nav className="nav">
                <input 
                    checked={isChecked}
                    type="checkbox" 
                    id="nav__ctaNavigation-button" 
                    className='nav__ctaNavigation-button'
                    onChange={(e) => setIsChecked(e.currentTarget.checked)} 
                />
                <label 
                    className='nav__ctaNavigation-label' 
                    htmlFor="nav__ctaNavigation-button">T
                </label>
                <div className="nav__ctaNavigation-background"></div>

            <div className='nav__links' id="navbar">
                <Link onClick={() => setIsChecked(false)} className={`${pathname === '/' ? 'nav__links--active' : null }`} to="/">Home</Link>
                <Link onClick={() => setIsChecked(false)} className={`${pathname === '/movies' || pathname.includes('/movie-detail') ? 'nav__links--active' : null } `} to="/movies">Movies</Link>
            </div>
        </nav> 
    )
}

export default Navbar;