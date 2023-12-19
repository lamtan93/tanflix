import { ICard } from './../../Card/interfaces/ICard';
export interface IMovieDetail extends ICard {
    popularity: string,
    genres: [{id: number, name: string}],
    date: string,
    companies: [{name: string, logo_path: string}],
    countries: [{name: string}]
}