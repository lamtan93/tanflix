import { IComponentUIColor } from '../../interfacesUI'

export interface IGenre {
  id: number
  name: string
}

export interface IGenreUI {
  genre: IGenre
  color: IComponentUIColor
  withLineThrough?: boolean
  withLineThroughHover?: boolean
  withSharp?: boolean
  disabled?: boolean
  onClickGenre: (genre: IGenre) => void
}
