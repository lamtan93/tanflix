import { FC } from 'react';
import { Button, Navbar } from '../UI';
import "../../styles/_layouts/_header.scss";

const Header: FC = () => {
    return (
      <header className="header">  
            <Navbar />
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
    </header>
    );
  }

export default Header;