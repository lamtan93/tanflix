import { ICard } from '../../UI/Card/interfaces/ICard'

export interface IMovieList {
  categoryLabel: string
  movieList: ICard[]
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchValue?: string
}
