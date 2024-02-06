import React from 'react'
import { render, screen } from '@testing-library/react'
import Dico from '../../utils/dico'
import MovieDetail from './MovieDetail'
import ProviderWrapper from '../../utils/providerWrapper'
import { movieDetailMock } from '../../utils/mocksTest'
import APPLICATION_PATHS from '../../utils/paths'
import { CONFIG_API } from '../../utils/api'

let containerComponent: HTMLElement
const {
  id,
  name,
  description,
  genres,
  popularity,
  date,
  companies,
  countries,
  imgSrc,
} = movieDetailMock || {}

beforeEach(() => {
  const { container } = render(
    <ProviderWrapper>
      <MovieDetail
        id={id}
        name={name}
        description={description}
        genres={genres}
        popularity={popularity}
        date={date}
        companies={companies}
        countries={countries}
        imgSrc={imgSrc}
      />
    </ProviderWrapper>
  )
  containerComponent = container
})

describe('test MovieDetail component', () => {
  test('should return correctly all information for detail movie', () => {
    const movieName = screen.getByText(name)
    const movieDescription = screen.getByText(description)
    const movieGenre = screen.getByText(`#${genres[0].name}`)
    const movieDate = screen.getByText(
      `${Dico.SECTION_DETAIL_MOVIE.DATE_LABEL}: ${date}`
    )
    const moviePopularity = screen.getByText(
      `${Dico.SECTION_DETAIL_MOVIE.POPULARITY_LABEL}: ${popularity}`
    )
    const movieCountry = screen.getByText(
      `${Dico.SECTION_DETAIL_MOVIE.COUNTRY_LABEL}: ${countries[0].name}`
    )
    const image = containerComponent.querySelector('img')
    const buttonWatchTrailer = screen.getByRole('button', {
      name: 'anchor-button',
    })
    expect(movieName).toBeInTheDocument()
    expect(movieDescription).toBeInTheDocument()
    expect(movieDate).toBeInTheDocument()
    expect(moviePopularity).toBeInTheDocument()
    expect(movieGenre).toBeInTheDocument()
    expect(movieCountry).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'src',
      `${CONFIG_API.BASE_IMAGE_URL}/${imgSrc}`
    )
    expect(buttonWatchTrailer).toBeInTheDocument()
    expect(buttonWatchTrailer).toHaveTextContent(
      Dico.SECTION_DETAIL_MOVIE.BUTTONLINK_WATCH_TRAILER
    )
  })
})
