import { ICard } from './../components/Card/interfaces/ICard';
export enum CONFIG_API {
    BASE_URL = 'https://api.themoviedb.org/3',
    AUTHORIZATION_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmE4MzdhYWQ5MjIzNjI0YjhmY2ZkYzcwYmVlNTE5MSIsInN1YiI6IjY1NTczOGRkNTM4NjZlMDBlMjkzYzliZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.93TJVaRMLkBN3W5vMRdl1fZxTGG00bZI7he-I2ImqKA',
    BASE_IMAGE_URL= 'https://image.tmdb.org/t/p/w500',
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
const returnCorrectRequest = (method: Method, data: unknown) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': CONFIG_API.AUTHORIZATION_KEY
    };

    if(method === 'GET'){
        return {
            method,
            headers
        }
    }

    return {
        method,
        headers,
        body: JSON.stringify(data)
    }
}

const sendAPIRequest = async <T>(url: string, method: Method, data: unknown = {})
: Promise<T> => {
    const responseAPI = await fetch(`${CONFIG_API.BASE_URL}/${url}`, returnCorrectRequest(method, data))
    if(!responseAPI.ok){
        const message = `Error${responseAPI.status}`
        throw new Error(message);
    }
    
    return await (responseAPI.json()) as T;
}


export const getMoviesByName = (movieName: string, movieList: Array<ICard>) => {
    return movieList.filter(movie => {
        return movie.name.toLowerCase().includes(movieName.toLocaleLowerCase());
    });
}

export const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
}

export const scrollToViewId = (id: string) => {
    document.getElementById(`${id}`)?.scrollIntoView({ block: 'center',  behavior: 'smooth' });
}

export default sendAPIRequest;