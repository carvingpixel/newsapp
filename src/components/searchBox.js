import React from 'react';  // if component calls JSX

// Just Searchbox Only
const SearchBox = () => {
    return (
        <form className="searchBox">
          <input type='text' onChange={this.onSearchChange} />
        </form>
    );
};


export default SearchBox;