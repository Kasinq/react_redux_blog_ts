import React, { FC, useState } from 'react';
import { DebounceInput } from 'react-debounce-input'

interface SearchProps {
    setSearch: (value: string) => void
}

const Search: FC<SearchProps> = ({ setSearch }) => {

    return (
        < DebounceInput
            placeholder='Search'
            minLength={3}
            debounceTimeout={300}
            onChange={e => setSearch(e.target.value)} />
    )
}

export default Search;