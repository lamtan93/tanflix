import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './Card'
import ProviderWrapper from '../../../utils/providerWrapper'
import { movieMock } from '../../../utils/mocksTest'
import { CONFIG_API } from '../../../utils/api'

let containerComponent: HTMLElement
const handleOnClickMock = jest.fn()
beforeEach(() => {
  const { container } = render(
    <ProviderWrapper>
      <Card
        type="trending"
        key={movieMock.id}
        id={movieMock.id}
        name={movieMock.name}
        description={movieMock.description}
        imgSrc={movieMock.imgSrc}
        genre_ids={movieMock.genre_ids}
        liked={movieMock.liked}
        handleOnClick={handleOnClickMock}
      />
    </ProviderWrapper>
  )
  containerComponent = container
})

describe('test Card component', () => {
  test('should return correctly the information for Card component', () => {
    const card = screen.getByTestId('movie-card')
    const image = containerComponent.querySelector('img')

    expect(card).toHaveTextContent(movieMock.name)
    expect(card).toHaveTextContent(movieMock.description)
    expect(image).toHaveAttribute(
      'src',
      `${CONFIG_API.BASE_IMAGE_URL}/${movieMock.imgSrc}`
    )
  })

  test('should have a component Star', () => {
    const favorisButton = screen.getByTestId('favoris-button')
    expect(favorisButton).toBeInTheDocument()
  })

  test('should fire function handle when click Card', () => {
    const card = screen.getByTestId('movie-card')
    userEvent.click(card)
    expect(handleOnClickMock).toBeCalled()
  })
})
