import { FC } from 'react';
import { Brand, Button, Navbar } from '../UI';
import "../../styles/_layouts/_header.scss";
import { APPLICATION_PATHS } from '../../utils/paths';
import { useIsCurrentPathActive } from '../../hooks/useIsCurrentPathActive';

const Header: FC = () => {
    const isHomePage = useIsCurrentPathActive(APPLICATION_PATHS.HOME);

    return (
        <>
        <Navbar /> 
        <header className={`header ${isHomePage && 'header--homePage'}`}>
            <Brand size="big" />
            {isHomePage && (
                <div className="header__container-slogan">
                    <h1>
                        <span className="header__slogan header__slogan--main">together</span>
                        <span className="header__slogan header__slogan--sub">let's make memories</span>
                    </h1>
                    <Button 
                        name='Discover Movies' 
                        animated={true} 
                        color='white'
                        size={'big'}
                    />
                </div>
            )}
        </header>
        </>
    );
  }

export default Header;