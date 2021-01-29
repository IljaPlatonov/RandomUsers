import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input 
            className='search-box'
            type='search'
            placeholder='Search users'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;