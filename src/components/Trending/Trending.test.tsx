import React from 'react'
import { render, screen } from '@testing-library/react'
import Trending from './Trending'
import Dico from '../../utils/dico'
import { movieListMock } from '../../utils/mocksTest'
import { CONFIG_API } from '../../utils/api'
import ProviderWrapper from '../../utils/providerWrapper'

let containerComponent: HTMLElement
beforeEach(() => {
  const { container } = render(
    <ProviderWrapper>
      <Trending
        categoryLabel={Dico.SECTION_MOVIES_LIST.TRENDING.TITLE_TRENDING}
        movieList={movieListMock}
      />
    </ProviderWrapper>
  )
  containerComponent = container
})

describe('should return correctly the informations for Trending movies section', () => {
  test('should return title Trending', () => {
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent(
      Dico.SECTION_MOVIES_LIST.TRENDING.TITLE_TRENDING
    )
  })

  test('should return correctly the name, descripton and image for each card', () => {
    const allCards = screen.getAllByTestId('movie-card')
    const images = containerComponent.querySelectorAll('img')
    movieListMock.forEach((movie, i) => {
      expect(allCards[i]).toHaveTextContent(movie.name)
      expect(allCards[i]).toHaveTextContent(movie.description)
      expect(images[i]).toHaveAttribute(
        'src',
        `${CONFIG_API.BASE_IMAGE_URL}/${movie.imgSrc}`
      )
    })
  })
})
