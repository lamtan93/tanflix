import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MovieList from './MovieList'
import Dico from '../../utils/dico'
import ProviderWrapper from '../../utils/providerWrapper'
import { movieListMock } from '../../utils/mocksTest'
import { CONFIG_API } from '../../utils/api'

let containerComponent: HTMLElement
const onChangeMock = jest.fn()
beforeEach(() => {
  const { container } = render(
    <ProviderWrapper>
      <MovieList
        categoryLabel={Dico.SECTION_MOVIES_LIST.OTHERS.POPULAR.TITLE_POPULAR}
        movieList={movieListMock}
        onChange={onChangeMock}
      />
    </ProviderWrapper>
  )
  containerComponent = container
})

describe('test MovieList component', () => {
  test('should return title Popular', () => {
    const title = screen.getByRole('heading', {
      name: Dico.SECTION_MOVIES_LIST.OTHERS.POPULAR.TITLE_POPULAR,
    })

    expect(title).toBeInTheDocument()
  })

  test('should return the search input component', () => {
    const searchInput = screen.getByRole('textbox')

    expect(searchInput).toBeInTheDocument()
    expect(searchInput).toHaveAttribute(
      'placeholder',
      Dico.SECTION_MOVIES_LIST.SEARCH_INPUT.PLACE_HOLDER
    )
  })

  test('should return the correct information for all cards', () => {
    const movieCards = screen.getAllByTestId('movie-card')
    const images = containerComponent.querySelectorAll('img')
    const favorisButton = screen.getAllByTestId('favoris-button')

    expect(movieCards).toHaveLength(movieListMock.length)
    expect(favorisButton).toHaveLength(movieListMock.length)
    movieListMock.forEach((movie, i) => {
      expect(movieCards[i]).toHaveTextContent(movie.name)
      expect(movieCards[i]).toHaveTextContent(movie.description)
      expect(images[i]).toHaveAttribute(
        'src',
        `${CONFIG_API.BASE_IMAGE_URL}/${movie.imgSrc}`
      )
    })
  })

  test('should return correctly the text typed by user and fire the event onSearch', async () => {
    const searchValueMock = 'superman'
    const searchInput = screen.getByRole('textbox')
    userEvent.type(searchInput, searchValueMock)
    expect(onChangeMock).toBeCalledTimes(searchValueMock.length)
    expect(searchInput).toHaveValue(searchValueMock)
  })
})
