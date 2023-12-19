enum CONFIG_API {
    BASE_URL = "https://api.themoviedb.org/3",
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const returnCorrectRequest = (method: Method, data: unknown) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmE4MzdhYWQ5MjIzNjI0YjhmY2ZkYzcwYmVlNTE5MSIsInN1YiI6IjY1NTczOGRkNTM4NjZlMDBlMjkzYzliZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.93TJVaRMLkBN3W5vMRdl1fZxTGG00bZI7he-I2ImqKA'
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


export default sendAPIRequest;