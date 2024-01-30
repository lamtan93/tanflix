import { IGenre } from '../../UI/Genre/interfaces/IGenre'

export interface IGenreList {
  genresList: IGenre[]
  selectedGenresList: IGenre[]
  onClickGenre: (genre: IGenre) => void
  clearSelectedGenres: () => void
}
