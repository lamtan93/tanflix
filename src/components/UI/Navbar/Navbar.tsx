import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/_components/_navbar.scss";
import { INavbar } from './interfaces/INavbar';
import { useIsCurrentPathActive } from '../../../hooks/useIsCurrentPathActive';
import { APPLICATION_PATHS } from '../../../utils/paths';

const Navbar: FC<INavbar> = () => {

const [isCheckedButtonNav, setIsCheckedButtonNav] = useState(false);

const isHomePage = useIsCurrentPathActive(APPLICATION_PATHS.HOME);
const isMoviesPage = useIsCurrentPathActive(APPLICATION_PATHS.MOVIE_LIST);
const isMoviesDetailPage = useIsCurrentPathActive(APPLICATION_PATHS.MOVIE_DETAIL);

    return (  
        <nav className="nav">
                <input 
                    checked={isCheckedButtonNav}
                    type="checkbox" 
                    id="nav__ctaNavigation-button" 
                    className='nav__ctaNavigation-button'
                    onChange={(e) => setIsCheckedButtonNav(e.currentTarget.checked)} 
                />
                <label 
                    className='nav__ctaNavigation-label' 
                    htmlFor="nav__ctaNavigation-button">T
                </label>

            <div className='nav__links' id="navbar">
                <Link 
                    className={`${isHomePage && 'nav__links--active' }`}
                    to={APPLICATION_PATHS.HOME}
                    onClick={() => setIsCheckedButtonNav(false)} 
                >
                        Home
                </Link>
                <Link 
                    className={`${(isMoviesPage || isMoviesDetailPage) && 'nav__links--active'  } `}
                    to={APPLICATION_PATHS.MOVIE_LIST} 
                    onClick={() => setIsCheckedButtonNav(false)} 
                >
                        Movies
                </Link>
            </div>
        </nav> 
    )
}

export default Navbar;