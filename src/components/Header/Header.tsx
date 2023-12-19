import { FC } from 'react';
import Button from '../Button/Button';
import "../../styles/_layouts/_header.scss";

const Header: FC = () => {
    return (
      <header className="header">
        <div className="header__container-nav">
            <a className="header__brand" href="/">TANFLIX</a>
            <nav className="header__nav">
                <a href="/">Home</a>
                <a href="/movies">Movies</a>
            </nav>
        </div>
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