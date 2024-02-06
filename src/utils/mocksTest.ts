import { IMovieDetail } from '../components/MovieDetail/interfaces/IMovieDetail'
import { ICard } from '../components/UI/Card/interfaces/ICard'

export class IntersectionObserverMock {
  observe = jest.fn()

  disconnect = jest.fn()

  unobserve = jest.fn()
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})

export const movieMock: ICard = {
  type: 'trending',
  id: 0,
  name: 'Superman',
  description: 'The hero of the world',
  imgSrc: 'src/superman',
  genre_ids: [1, 2, 3],
  liked: false,
  handleOnClick: () => {},
}

export const movieListMock: ICard[] = [
  {
    type: 'trending',
    id: 0,
    name: 'Superman',
    description: 'The hero of the world',
    imgSrc: 'src/superman',
    genre_ids: [1, 2, 3],
    liked: false,
    handleOnClick: () => {},
  },
  {
    type: 'trending',
    id: 1,
    name: 'Aquaman',
    description: 'The hero of the world 2',
    imgSrc: 'src/superman',
    genre_ids: [2, 1, 6],
    liked: false,
    handleOnClick: () => {},
  },
  {
    type: 'trending',
    id: 2,
    name: 'Antman',
    description: 'The hero of the world 3',
    imgSrc: 'src/antman',
    genre_ids: [2, 1, 6],
    liked: false,
    handleOnClick: () => {},
  },
  {
    type: 'trending',
    id: 3,
    name: 'Batman',
    description: 'The hero of the world 3',
    imgSrc: 'src/batman',
    genre_ids: [2, 1, 6],
    liked: false,
    handleOnClick: () => {},
  },
]

export const movieDetailMock: IMovieDetail = {
  id: 0,
  name: 'Superman',
  description: 'Superman is the best hero in the world',
  genres: [{ id: 0, name: 'action' }],
  popularity: 9999,
  date: '12/12/2023',
  companies: [
    { name: 'superman production', logo_path: 'src/logoPath/superman' },
  ],
  countries: [{ name: 'USA' }],
  imgSrc: 'url/img/poster/superman',
}
