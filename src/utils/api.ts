export enum CONFIG_API {
    BASE_URL = 'https://api.themoviedb.org/3',
    BASE_IMAGE_URL= 'https://image.tmdb.org/t/p/w500',
    BASE_IMAGE_URL_RANDOM= 'https://source.unsplash.com/random/100x100?face',
    BASE_VIDEO_URL_YOUTUBE='https://www.youtube.com/embed',
    BASE_VIDEO_URL_COMPOSITION_1= 'https://player.vimeo.com/progressive_redirect/playback/880997948/rendition/1080p/file.mp4?loc=external&signature=746d3f0e13d55dc253d534b10225f0dbfced5e960aade7c6a53a192d7c5036f6',
    BASE_VIDEO_URL_COMPOSITION_2= 'https://player.vimeo.com/progressive_redirect/playback/887459544/rendition/1080p/file.mp4?loc=external&signature=f57dc344aefdc517f6b06e3ceb81a9ec1f8e99c22404a04b8c7d939058943963',
    BASE_VIDEO_URL_COMPOSITION_3= 'https://player.vimeo.com/progressive_redirect/playback/892396243/rendition/1080p/file.mp4?loc=external&signature=694cb7c4b3bf372df8cde4de1f3b4989130d61a677e7a8f7ee0cfc2603232a4f',
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