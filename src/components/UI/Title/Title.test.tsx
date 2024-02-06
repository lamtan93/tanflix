import React from 'react'
import { screen, render } from '@testing-library/react'
import Title from './Title'

test('should return the Title with text', () => {
  render(<Title name="Title name" size="med" position="center" />)
  const title = screen.getByRole('heading')
  expect(title).toBeInTheDocument()
  expect(title).toHaveTextContent('Title name')
})
