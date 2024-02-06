import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Pricing from './Pricing'
import Dico from '../../utils/dico'
import { IntersectionObserverMock } from '../../utils/mocksTest'

beforeAll(() => (() => new IntersectionObserverMock())())
beforeEach(() => {
  render(
    <BrowserRouter>
      <Pricing />
    </BrowserRouter>
  )
})
test('should return title pricing', () => {
  const title = screen.getByRole('heading', {
    name: Dico.SECTION_PRICING.TITLE_PRICING,
  })
  expect(title).toBeInTheDocument()
})

test('should return title of 3 formulas', () => {
  const soloTitle = screen.getByRole('heading', {
    name: Dico.SECTION_PRICING.DETAILS.FORMULA_SOLO.TITLE,
  })
  const familyTitle = screen.getByRole('heading', {
    name: Dico.SECTION_PRICING.DETAILS.FORMULA_FAMILY.TITLE,
  })
  const groupTitle = screen.getByRole('heading', {
    name: Dico.SECTION_PRICING.DETAILS.FORMULA_GROUP.TITLE,
  })
  expect(soloTitle).toBeInTheDocument()
  expect(familyTitle).toBeInTheDocument()
  expect(groupTitle).toBeInTheDocument()
})

test('should return 3 buttons with title Join now', () => {
  const buttons = screen.getAllByRole('button')
  expect(buttons).toHaveLength(3)
  buttons.forEach((element) => {
    expect(element).toHaveTextContent(Dico.SECTION_PRICING.BUTTONLINK_JOIN_NOW)
  })
})

test('should return correct content of formula SOLO', () => {
  const contentFormulaSolo = screen.getByTestId('pricing__body--SOLO')
  expect(contentFormulaSolo.children[0].textContent).toBe(
    Dico.SECTION_PRICING.DETAILS.FORMULA_SOLO.SCREEN
  )
  expect(contentFormulaSolo.children[1].textContent).toBe(
    Dico.SECTION_PRICING.DETAILS.FORMULA_SOLO.DEVICE
  )
  expect(contentFormulaSolo.children[2].textContent).toBe(
    Dico.SECTION_PRICING.DETAILS.FORMULA_SOLO.DOWNLOAD
  )
  expect(contentFormulaSolo.children[3].textContent).toBe(
    Dico.SECTION_PRICING.DETAILS.FORMULA_SOLO.SUPPORT
  )
})

test('should return correct content of formula FAMILY', () => {
  const contentFormulaSolo = screen.getByTestId('pricing__body--FAMILY')
  expect(contentFormulaSolo.children[0].textContent).toBe(
    Dico.SECTION_PRICING.DETAILS.FORMULA_FAMILY.SCREEN
  )
  expect(contentFormulaSolo.children[1].textContent).toBe(
    Dico.SECTION_PRICING.DETAILS.FORMULA_FAMILY.DEVICE
  )
  expect(contentFormulaSolo.children[2].textContent).toBe(
    Dico.SECTION_PRICING.DETAILS.FORMULA_FAMILY.DOWNLOAD
  )
  expect(contentFormulaSolo.children[3].textContent).toBe(
    Dico.SECTION_PRICING.DETAILS.FORMULA_FAMILY.SUPPORT
  )
})

test('should return correct content of formula GROUP', () => {
  const contentFormulaSolo = screen.getByTestId('pricing__body--GROUP')
  expect(contentFormulaSolo.children[0].textContent).toBe(
    Dico.SECTION_PRICING.DETAILS.FORMULA_GROUP.SCREEN
  )
  expect(contentFormulaSolo.children[1].textContent).toBe(
    Dico.SECTION_PRICING.DETAILS.FORMULA_GROUP.DEVICE
  )
  expect(contentFormulaSolo.children[2].textContent).toBe(
    Dico.SECTION_PRICING.DETAILS.FORMULA_GROUP.DOWNLOAD
  )
  expect(contentFormulaSolo.children[3].textContent).toBe(
    Dico.SECTION_PRICING.DETAILS.FORMULA_GROUP.SUPPORT
  )
})
