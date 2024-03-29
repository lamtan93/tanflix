import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/_components/_navbar.scss'
import classNames from 'classnames'
import useIsCurrentPathActive from '../../../hooks/useIsCurrentPathActive'
import APPLICATION_PATHS from '../../../utils/paths'
import Dico from '../../../utils/dico'

function Navbar() {
  const [isCheckedButtonNav, setIsCheckedButtonNav] = useState(false)
  const isHomePage = useIsCurrentPathActive(APPLICATION_PATHS.HOME)
  const isMoviesPage = useIsCurrentPathActive(APPLICATION_PATHS.MOVIE_LIST)
  const isMoviesDetailPage = useIsCurrentPathActive(
    APPLICATION_PATHS.MOVIE_DETAIL
  )

  const linkHomePageClassNames = classNames({
    'nav__links--active': isHomePage,
  })

  const linkMoviesPageClassNames = classNames({
    'nav__links--active': isMoviesPage || isMoviesDetailPage,
  })
  return (
    <nav className="nav">
      <input
        checked={isCheckedButtonNav}
        type="checkbox"
        id="nav__ctaNavigation-button"
        className="nav__ctaNavigation-button"
        onChange={(e) => setIsCheckedButtonNav(e.currentTarget.checked)}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        className="nav__ctaNavigation-label"
        htmlFor="nav__ctaNavigation-button"
      >
        T
      </label>

      <div className="nav__links" id="navbar">
        <Link
          className={linkHomePageClassNames}
          to={APPLICATION_PATHS.HOME}
          onClick={() => setIsCheckedButtonNav(false)}
        >
          {Dico.NAVBAR.MENU_HOME}
        </Link>
        <Link
          className={linkMoviesPageClassNames}
          to={APPLICATION_PATHS.MOVIE_LIST}
          onClick={() => setIsCheckedButtonNav(false)}
        >
          {Dico.NAVBAR.MENU_MOVIES}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
