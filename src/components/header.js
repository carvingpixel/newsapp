import React from 'react';
import Crest from '../images/BLackBirdSimple.png';


function getName() {return "Lokin";}  
let greetings = "Greetings " + getName() + ", Welcome to Blackbird";
let ownd = "Classrooms: Hogwarts";

// functional component assigned to header var
const Header = () => {
    return (
    <div>

    <header className="App-header">
            <img src={Crest} className="App-logo" alt="logo" />
            <h1 className="App-title">Protecto Incantus</h1>
    </header>

        <h2>{greetings}</h2>
        <h4> {ownd} </h4>

    </div>
    );

};

export default Header;