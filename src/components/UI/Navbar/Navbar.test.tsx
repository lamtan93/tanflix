import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'
import Dico from '../../../utils/dico'
import APPLICATION_PATHS from '../../../utils/paths'
import ProviderWrapper from '../../../utils/providerWrapper'

beforeEach(() => {
  render(
    <ProviderWrapper>
      <Navbar />
    </ProviderWrapper>
  )
})

test('should render 2 links', () => {
  const allLinks = screen.getAllByRole('link', {})
  expect(allLinks.length).toBe(2)
})

test('should return correctly the text name for each link', () => {
  const linkHomePage = screen.getByRole('link', {
    name: Dico.NAVBAR.MENU_HOME,
  })

  const linkMoviesPage = screen.getByRole('link', {
    name: Dico.NAVBAR.MENU_MOVIES,
  })
  expect(linkHomePage).toHaveTextContent(Dico.NAVBAR.MENU_HOME)
  expect(linkMoviesPage).toHaveTextContent(Dico.NAVBAR.MENU_MOVIES)
})

test('should return correctly the href attribut for each link', () => {
  const linkHomePage = screen.getByRole('link', {
    name: Dico.NAVBAR.MENU_HOME,
  })

  const linkMoviesPage = screen.getByRole('link', {
    name: Dico.NAVBAR.MENU_MOVIES,
  })
  expect(linkHomePage).toHaveAttribute('href', APPLICATION_PATHS.HOME)
  expect(linkMoviesPage).toHaveAttribute('href', APPLICATION_PATHS.MOVIE_LIST)
})
