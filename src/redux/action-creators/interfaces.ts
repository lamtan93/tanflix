interface IRawMovieDataFromAPI {
    id: number,
    title: string,
    overview: string,
    poster_path: string,
}

export interface IRawMovieListDataFromAPI {
    results: IRawMovieDataFromAPI[]
};

export interface IRawMovieDetailDataFromAPI extends IRawMovieDataFromAPI{
    popularity: string,
    genres: [{id: number, name: string}],
    release_date: string,
    production_companies: [{name: string, logo_path: string}],
    production_countries: [{name: string}]
}