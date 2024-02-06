export interface ICard {
  type?: 'trending' | 'others'
  id: number
  name: string
  description: string
  imgSrc: string
  genre_ids: number[]
  liked?: boolean
  handleOnClick: (idMovie: number) => void
}
