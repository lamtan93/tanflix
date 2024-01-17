import { useEffect, useState, } from 'react';

export const useLoadMore = <T> (listData: T[], limitedNumberData_ = 4) => {
    const [limitedNumberData, setLimitedNumberData] = useState(limitedNumberData_);
    const [isLoadMoreCompleted, setIsLoadMoreCompleted] = useState(false);
    const [isDisabledLoadMore, setIsDisabledLoadMore] = useState(false);
    const listDataFinal = listData.slice(0 ,limitedNumberData);

    useEffect(() => {
        if(listData?.length <= limitedNumberData_){
            setIsDisabledLoadMore(true);
        };
    }, [listData?.length, limitedNumberData_])
    
    const loadMore = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setLimitedNumberData(limitedNumberData + 4);
        if(limitedNumberData >= listData.length){
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
        limitedNumberData,
    }
}