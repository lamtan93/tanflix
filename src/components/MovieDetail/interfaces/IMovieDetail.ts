import { ICard } from './../../Card/interfaces/ICard';
interface IName {
    name: string,
}

interface IGenre extends IName{
    id: number,
}

interface ICompany extends IName{
    logo_path: string
}

interface ICountry extends IName{}


export interface IMovieDetail extends ICard {
    popularity: number,
    genres: IGenre[],
    date: string,
    companies: ICompany[],
    countries: ICountry[]
}