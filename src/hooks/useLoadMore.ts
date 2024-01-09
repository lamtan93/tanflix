import { useEffect, useState, } from 'react';

export const useLoadMore = <T> (listData: T[], limitedNumberMovies_ = 4) => {
    const [limitedNumberMovies, setLimitedNumberMovies] = useState(limitedNumberMovies_);
    const [isLoadMoreCompleted, setIsLoadMoreCompleted] = useState(false);
    const [isDisabledLoadMore, setIsDisabledLoadMore] = useState(false);
    const listDataFinal = listData.slice(0 ,limitedNumberMovies);

    useEffect(() => {
        if(listData?.length <= limitedNumberMovies_){
            setIsDisabledLoadMore(true);
        };
    }, [listData?.length, limitedNumberMovies_])
    
    const loadMore = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setLimitedNumberMovies(limitedNumberMovies + 4);
        if(limitedNumberMovies >= listData.length){
            setIsLoadMoreCompleted(true);
            setIsDisabledLoadMore(true);
        }else {
            setIsLoadMoreCompleted(false);
        }
    }

    return {
        listDataFinal,
        loadMore,
        isLoadMoreCompleted,
        isDisabledLoadMore,
    }
}