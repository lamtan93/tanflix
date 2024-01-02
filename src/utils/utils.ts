import { ICard } from './../components/Card/interfaces/ICard';
export enum CONFIG_API {
    BASE_URL = 'https://api.themoviedb.org/3',
    BASE_IMAGE_URL= 'https://image.tmdb.org/t/p/w500',
}
const KEY = process.env.REACT_APP_API_KEY;

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const returnCorrectRequest = (method: Method, data: unknown) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KEY}`
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
    document.getElementById(`${id}`)?.scrollIntoView({ block: 'nearest',  behavior: 'smooth' });
}


export const stopVideo = () => {
    const iframe = document.querySelector( 'iframe');
    const video = document.querySelector( 'video');
    
    if(iframe){
        let iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if(video){
        video.pause();
    }
}
export default sendAPIRequest;