import React from 'react';
import { Brand, ButtonLink, Navbar } from '../UI';
import '../../styles/_layouts/_header.scss';
import APPLICATION_PATHS from '../../utils/paths';
import useIsCurrentPathActive from '../../hooks/useIsCurrentPathActive';
import Dico from '../../utils/dico';

function Header() {
  const isHomePage = useIsCurrentPathActive(APPLICATION_PATHS.HOME);

  return (
    <>
      <Navbar />
      <header className={`header ${isHomePage && 'header--homePage'}`}>
        <Brand size="big" />
        {isHomePage && (
        <div className="header__container-slogan">
          <h1>
            <span className="header__slogan header__slogan--main">{Dico.HEADER.SLOGAN.MAIN}</span>
            <span className="header__slogan header__slogan--sub">{Dico.HEADER.SLOGAN.SUB}</span>
          </h1>
          <ButtonLink
            name={Dico.HEADER.BUTTONLINK_DISCOVER_MOVIES}
            animated
            color="white"
            size="big"
            href={APPLICATION_PATHS.MOVIE_LIST}
          />
        </div>
        )}
      </header>
    </>
  );
}

export default Header;
