import { ICard } from '../components/UI/Card/interfaces/ICard';

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
        // event.preventDefault();
    }  
}

export const scrollBody = (isScroll: boolean) => {
    document.body.style.cssText = `overflow: ${isScroll  ? 'auto' : 'hidden'}`;
}

export const scrollAnimation = () => {
    const hiddenElements = document.querySelectorAll('.scroll--hidden');
    hiddenElements.forEach((el) => {
        observer.observe(el);
    })
};