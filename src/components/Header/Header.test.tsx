import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import Dico from '../../utils/dico'
import APPLICATION_PATHS from '../../utils/paths'
import ProviderWrapper from '../../utils/providerWrapper'

beforeEach(() => {
  render(
    <ProviderWrapper>
      <Header />
    </ProviderWrapper>
  )
})

test('should have a Slogan', () => {
  const slogan = screen.getByRole('heading')
  expect(slogan).toHaveTextContent(
    `${Dico.HEADER.SLOGAN.MAIN}${Dico.HEADER.SLOGAN.SUB}`
  )
})

test('should have a Navbar', () => {
  const nav = screen.getByRole('navigation')
  expect(nav).toBeInTheDocument()
})

test('should have a Brand with corerct href attribut', () => {
  const brand = screen.getByRole('link', { name: 'T A N F L I X' })
  expect(brand).toBeInTheDocument()
  expect(brand).toHaveAttribute('href', APPLICATION_PATHS.HOME)
})

test('should have a Button', () => {
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})
