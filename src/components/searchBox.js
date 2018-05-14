import React from 'react';

// Just Searchbox Only
const SearchBox = () => {
    return (
        <form className="searchBox">
          <input type='text' onChange={this.onSearchChange} />
        </form>
    );
};


export default SearchBox;