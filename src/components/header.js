import React from 'react';
import Crest from '../images/Crest.png';

// functional component assigned to header var
const Header = () => {
    return (
    <header className="App-header">
            <img src={Crest} className="App-logo" alt="logo" />
            <h1 className="App-title">Safety Native App 2.0</h1>
    </header>
    );

};

export default Header;