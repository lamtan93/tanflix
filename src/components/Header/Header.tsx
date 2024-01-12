import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Brand, Button, Navbar } from '../UI';
import "../../styles/_layouts/_header.scss";

const Header: FC = () => {
    const location = useLocation();
    const { pathname } = location;
    
    const isHomePage = pathname === '/';
    return (
        <header className={`header ${isHomePage && 'header--homePage'}`}>
            <Brand size="big" />
            <Navbar pathname={pathname} /> 
            {isHomePage && (
                <div className="header__container-slogan">
                    <h1>
                        <span className="header__slogan header__slogan--main">together</span>
                        <span className="header__slogan header__slogan--sub">let's make memories</span>
                    </h1>
                    <Button 
                        title='Discover Movies' 
                        animated={true} 
                        color='white'
                        size={'big'}
                    />
                </div>
            )}
        </header>
    );
  }

export default Header;