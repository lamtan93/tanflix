import { useState, } from 'react';

export const useSearchInput = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleOnChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
    }

    return {
        searchValue,
        handleOnChangeSearchValue,
    }
}