interface IResultsListDataFromAPI<T> {
    results: T
}

interface IRawMovieDataFromAPI {
    id: number,
    title: string,
    overview: string,
    poster_path: string,
}

export interface IRawMovieVideoDataFromAPI {
    id: string,
    name: string,
    key: string,
    site: string,
    type: string
}

export interface IRawMovieDetailDataFromAPI extends IRawMovieDataFromAPI{
    popularity: number,
    genres: [{id: number, name: string}],
    release_date: string,
    production_companies: [{name: string, logo_path: string}],
    production_countries: [{name: string}]
}

export type IRawMovieListDataFromAPI = IResultsListDataFromAPI<IRawMovieDataFromAPI[]>;
export type IRawMovieVideoListDataFromAPI = IResultsListDataFromAPI<IRawMovieVideoDataFromAPI[]>;

