import React from 'react';

let greetings = "Greetings " + getName() + ", Welcome to Protego!";
let ownd = "Classrooms: Hogwarts";

function getName() {
    return "Lokin";
  }
  

// Just Searchbox Only
const SearchBox = () => {
    return (
        <form className="searchBox">
          <input type='text' onChange={this.onSearchChange} />
        </form>
    );
};


export default SearchBox;