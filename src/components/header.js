import React from 'react';
import logo from '../images/logo.svg';


// functional component assigned to header var
const Header = () => {
    return (
    <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Recruitment 2.0</h1>
    </header>
    );

};

export default Header;