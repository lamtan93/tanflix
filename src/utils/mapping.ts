import { IGenre } from './../components/UI/Genre/interfaces/IGenre';
import { IMovieDetail } from '../components/MovieDetail/interfaces/IMovieDetail';
import { IReviewItem } from '../components/Reviewer/interfaces/IReviewer';
import { ICard } from '../components/UI/Card/interfaces/ICard';
import { IRawMovieDetailDataFromAPI, IRawMovieListDataFromAPI, IRawMovieReviewListDataFromAPI, IRawMovieVideoDataFromAPI } from './../redux/action-creators/interfaces';
import { CONFIG_API } from './api';
import { truncateString } from "./utils";

export const getMappingMovieListData = (rawDataFromAPI: IRawMovieListDataFromAPI): ICard[] => {
    return rawDataFromAPI.results.map(data => {
        return {
            id: data.id,
            name: data.title,
            description: truncateString(data.overview, 55),
            imgSrc: data.poster_path,
            genre_ids: data.genre_ids,
            liked: false
        }
    });
}

export const getMappingMovieDetailData = (rawDataFromAPI: IRawMovieDetailDataFromAPI): IMovieDetail => {
    const {
        id,
        title,
        overview,
        poster_path,
        popularity,
        genres,
        release_date,
        production_companies,
        production_countries
    } = rawDataFromAPI || {};

    return { 
        id,
        popularity,
        genres,
        name: title,
        description: overview,
        imgSrc: poster_path,
        date: new Date(release_date).toLocaleDateString(),
        companies: production_companies,
        countries: production_countries
    }
}


export const getMappingMovieReviewListData = (rawDataFromAPI: IRawMovieReviewListDataFromAPI): IReviewItem[] => {
    return rawDataFromAPI
            .results
            .map((r, i) => {
                return {
                    id: r.id,
                    name: r.author || r.author_details.name || r.author_details.username,
                    img: `${CONFIG_API.BASE_IMAGE_URL_RANDOM},${i}`,
                    stars: Math.round(r.author_details.rating/2),
                    message: truncateString(r.content, 150),
                    date: new Date(r.updated_at).toLocaleDateString(),
                }
            })
}


export const getMappingMovieVideoListData = (rawDataFromAPI: IRawMovieVideoDataFromAPI[] ): IRawMovieVideoDataFromAPI[]  => {
    return rawDataFromAPI.filter(video => {
        return video.site.toLocaleLowerCase() === 'youtube'
        && video.type.toLocaleLowerCase() === 'trailer'
    })
}

// export const getMappingMovieGenreListData = (rawDataFromAPI: IRawMovieGenreListDataFromAPI): IGenre[]  => {
//     return rawDataFromAPI.genres.map(genre => {
//         return {
//             id: genre.id,
//             name: truncateString(genre.name.split('').join(''), 15)
//             // name: genre.name
//         }
//     });
// }

export const getMoviesByName = (movieName: string, movieList: Array<ICard>) => {
    return movieList.filter(movie => {
        return movie.name.toLowerCase().includes(movieName.toLocaleLowerCase());
    });
}

export const getMoviesByGenres = (movieList: ICard[], selectedGenres: IGenre[]) => {
    if(selectedGenres.length === 0) return movieList;
    
    return movieList.filter((movie,i) => selectedGenres.some(selectedGenre => {
        return movie.genre_ids.includes(selectedGenre.id);
    }))  
};