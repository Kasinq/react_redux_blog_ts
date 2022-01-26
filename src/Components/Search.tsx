import React, { FC, useState } from 'react';

interface SearchProps {
    search: string 
    setSearch: (value: string) => void
    setLimit: (value: number) => void
}

const Search: FC<SearchProps> = ({ search, setSearch, setLimit }) => {

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        setLimit(100)
    }
    // очищує поле ввода та встановлює знову 10 постів відображення при втраті фокуса
    const onClear = () => { 
        setLimit(6)
        setSearch('')
    }

    return (
        <input type='text' placeholder='Search'
            value={search}
            onChange={(e) => onSearch(e)}
            onBlur={() => onClear()}
        />
    );
};

export default Search;