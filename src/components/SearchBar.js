import React, { useState } from 'react';



export default function SearchBar(props) {

    const { puppies, setReturnedPuppyList } = props;

    const [searchPup, setSearchPup] = useState('');

    const searchPuppies = (puppiesArray, searchTerm) =>
        puppiesArray.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (

        <div className="search-bar">
            <label htmlFor="searchpup">Enter a search term:</label>
            <input
                type="text"
                name="searchpup"
                value={searchPup}
                onChange={(event) => setSearchPup(event.target.value)}
            />
            <button
                onClick={() => {
                    let filteredList = searchPuppies(puppies, searchPup);
                    setReturnedPuppyList(filteredList);

                }}

                className='search-button'>Search</button>
        </div>
    )
}

