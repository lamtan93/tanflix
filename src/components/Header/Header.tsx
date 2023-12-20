import { FC } from 'react';
import Button from '../Button/Button';
import "../../styles/_layouts/_header.scss";

const Header: FC = () => {
    return (
      <header className="header">  
            <nav className="nav">
                <a className="nav__brand" href="/">TANFLIX</a>
                <div className='nav__links'>
                    <a href="/">Home</a>
                    <a href="/movies">Movies</a>
                </div>
            </nav>
        <div className="header__container-slogan">
            <h1>
                <span className="header__slogan header__slogan--main">together</span>
                <span className="header__slogan header__slogan--sub">let's make memories</span>
            </h1>
            <Button title='Découvrir nos films' animated={true} color='white' />
        </div>
    </header>
    );
  }

export default Header;