import { IGenre } from '../../UI/Genre/interfaces/IGenre'
import { ICard } from '../../UI/Card/interfaces/ICard'

interface IName {
  name: string
}

interface ICompany extends IName {
  logo_path: string
}

interface ICountry extends IName {}

export interface IMovieDetail
  extends Omit<ICard, 'genre_ids' | 'handleOnClick'> {
  popularity: number
  genres: IGenre[]
  date: string
  companies: ICompany[]
  countries: ICountry[]
}
