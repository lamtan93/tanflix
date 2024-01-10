import { ICard } from './../components/Card/interfaces/ICard';
export enum CONFIG_API {
    BASE_URL = 'https://api.themoviedb.org/3',
    BASE_IMAGE_URL= 'https://image.tmdb.org/t/p/w500',
    BASE_IMAGE_URL_RANDOM= 'https://source.unsplash.com/random/?face,beautiful,top',
    BASE_VIDEO_URL_YOUTUBE='https://www.youtube.com/embed'
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

export const sendAPIRequest = async <T>(url: string, method: Method, data: unknown = {})
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
    document.getElementById(`${id}`)?.scrollIntoView({ block: 'start',  behavior: 'smooth' });
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

export const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('scroll--show');
        }else {
            entry.target.classList.remove('scroll--show');
            entry.target.classList.add('scroll--hidden');
        }
    })
})

export const scrollVertical = (event: React.WheelEvent<HTMLDivElement>, containerId: string) => {
    const container = document.getElementById(containerId);
    if(container){
        container.scrollLeft += event.deltaY > 0 ? 20 : -20;
        event.preventDefault();
    }  
}

export const scrollAnimation = () => {
    const hiddenElements = document.querySelectorAll('.scroll--hidden');
    hiddenElements.forEach((el) => {
        observer.observe(el);
    })
};