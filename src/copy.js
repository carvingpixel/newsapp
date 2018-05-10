import React, { Component } from 'react';
import './App.css';
import Header from './components/header';

const list = [
  {
    teacher: 'Albus Dumbledore',
    url: 'https://facebook.github.io/react',
    classroom: 'HeadMaster',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    teacher: 'Minerva McGonagall',
    url: 'https://github.com/reactjs/redux',
    classroom: 'Transfiguration',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    teacher: 'Horace Slughorn',
    url: 'https://github.com/reactjs/redux',
    classroom: 'Potions',
    num_comments: 2,
    points: 5,
    objectID: 2,
  }
]

const isSearched = searchPassed => s => s.teacher.toLowerCase().includes(searchPassed.toLowerCase());
// THE ABOVE WORKS ONLY WHEN I REMOVE TOLOWER OFF SEARCHPASSED 
// AND ADD IT TO THE ONSEARCHCHANGE() INSTEAD
//const isSearched = searchPassed => s => s.teacher.toLowerCase().includes(searchPassed);


function getName() {
  return "Lokin";
}


// CLASS APP -------------------------------------------------------
class App extends Component {

    //CONSTRUCTOR
    constructor(props) {
      super(props);
      this.state = { 
        list,  
        numbz: 0,
        searchTerm: null,
      };

      this.onSearchChange = this.onSearchChange.bind(this);
      this.jeepers = this.jeepers.bind(this); 
      this.onDismiss = this.onDismiss.bind(this);

    }//constructor 

  
  //METHODs -----------------------------------------------------------

  //SEARCH
  onSearchChange(e){
    this.setState({ searchTerm: e.target.value});   
    //  Added tolower here as work around and it works
    // this.setState({ searchTerm: e.target.value.toLowerCase() });
    }

  //Playing around with State and noticed how added values dont exist until its completed.
  jeepers() {
      let myState = this.state.numbz;
      console.log("J: Current " + myState);
      const tally = myState + 1;
      this.setState({numbz: tally});
      console.log("J: Values to State " + tally);
      this.innerCheck();
      }
   innerCheck(){
      console.log("J: Inner State View: " + this.state.numbz);
    }
   outerCheck(){
      console.log("True State: " + this.state.numbz);
    }
    //end playing around with state.

    //playing around with events/methods
    alertMsg(){
      alert("Alert Broadcasted");
     }
   

//DISMISS
  onDismiss(id) {
    const updatedList = this.state.list.filter(data => data.objectID !== id);
    this.setState({ list: updatedList })
    console.log(this);

  }


 
    //RENDER METHOD ---------------------------------------------------
  render() {
    let greetings = "Greetings " + getName() + ", Welcome to SNAPP!";
    let ownd = "Classrooms: Hogwarts";
    return (
      <div className="App">  

        <Header />

        <h2>{greetings}</h2>
        <h4> {ownd} </h4>

        <form>
          <input type='text' onChange={this.onSearchChange} />
        </form>
      
          {this.state.list.filter(isSearched(this.state.searchTerm)).map(data =>
          <div className='codeLine' key={data.objectID}>
            
            <span>
            <a href={data.url}>{data.teacher}</a>
            </span>

            <span> {data.classroom}</span>
            <span> {data.num_comments}</span>
            <span> {data.points} </span>

          <span>
          <button onClick={ () =>
            this.onDismiss(data.objectID)
            }
            type='button'>
            Dismiss</button>
          </span>        
                

          <span className="pLeft">
          <button       
          onClick={ () => this.jeepers()}         
            type='button'>
            Register
            </button>
            </span>    


          <span className="pLeft">
          <button       
          onClick={this.alertMsg}         
            type='button'>
            Alert
            </button>
            </span>    


          </div>
        )}    
        {this.outerCheck() }   
      </div>
    );
  }//render

}//class

export default App;