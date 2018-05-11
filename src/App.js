import React, { Component } from 'react';
import './App.css';
import Header from './components/header';

//immutable list defined didnt get changed via the dismiss 
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

// High Order Function outside of the class
// function isSearched(searchPassed) {
//   return function(s) {
//     return s.title.toLowerCase().indexOf(searchPassed.toLowerCase()) !== -1;
//  }
// }

const isSearched = searchPassed => s => s.teacher.toLowerCase().includes(searchPassed.toLowerCase());
//data.title.toLowerCase().includes(searchTerm.toLowerCase());

function getName() {
  return "Lokin";
}


// CLASS APP -------------------------------------------------------
class App extends Component {

 // THE THIS object references your class instance i.e. THIS OBJECT 
//  In order to define onDismiss as a class method, you have to bind it in the constructor
//  bogus, you dont have to bind it in construtor to set as a class method by any means.
//  you would only need to add it to constructor if you want to bind it to state.

    //CONSTRUCTOR
    constructor(props) {
      super(props);
      this.state = { 
        list,  // list: list 
        numbz: 0,
        searchTerm: '',
      };

      this.onSearchChange = this.onSearchChange.bind(this);
      this.jeepers = this.jeepers.bind(this); // not really required because of arrow funciton 
      this.onDismiss = this.onDismiss.bind(this);
      // ** CLASS METHODS DONT AUTO BIND this TO THE CLASS INSTANCE
      // this was before fat arrow functions and how they solved the 
      // *this* issue. Before, *this* in a method would be its own
      // unique this and not the actual *this* of the class itself.
      // when you created the method it would then have its very own
      // this reference to the method. so here in constructor
      // we are saying to bind this.onDismiss in that method to the this
      // of hte class here in the constructor.
    }//constructor 

  
  //METHODs -----------------------------------------------------------


  //jeepers
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
      // Inner state view here is still the value that it started with prior to changes 
      // within the function as it shows the actual current view prior or curr
    }

   outerCheck(){
      console.log("True State: " + this.state.numbz);
    }

    alertMsg(){
      alert("Alert Broadcasted");
     }
   

//DISMISS
  onDismiss(id) {
    // called onclick and passed the ObjectID as id
    // this.state.list.filter()
    const updatedList = this.state.list.filter(data => data.objectID !== id);
   //update state with updatedList to list
    this.setState({ list: updatedList })
    console.log(this);
    //cosnt updatedList = this.state.list.filter(function isNotId(item) {
      //   return item.objectID !== id;
      //   })
      //FUNCTION PASSED IS WHICH WE LATER EXTRACTED BY ITSELF
      // function isNotId(item) {
      // return item.objectID !== id;
      // }
      // EXTRACT FUNCTION AND PASS TO THE FILTER FUNCTION - 2ND CONCISE
      // function isNotId(item) { return item.objectID !== id; }
      // const updatedList = this.state.list.filter(isNotId);
      //THIRD CONCISE USING ARROW FUNCTION on item
      // const isNotId = item => item.objectID !== id;
      // const updatedList = this.state.list.filter(isNotId); //stayed the same    
  }

  // onClickMe = () => {
    // console.log(this);
    // } //onClick={this.onClickMe}

  //SEARCH
  onSearchChange(e){
    this.setState({ searchTerm: e.target.value}); 
    }
 
    //RENDER METHOD ---------------------------------------------------
  render() {
    
    const { searchTerm, list } = this.state;
    let greetings = "Greetings " + getName() + ", Welcome to SNAPP!";
    let ownd = "Classrooms: Hogwarts";

    return (
      <div className="App">  

        <Header />

        <h2>{greetings}</h2>
        <h4> {ownd} </h4>

        <form className="searchBox">
          <input type='text' onChange={this.onSearchChange} />
        </form>
    
        {/* {list.map(function(item, key)*/}
        {/* {list.map(item =>  */}
        {/* {this.state.list.map(data => */}
        {/*{this.state.list.filter(isSearched(this.state.searchTerm)).map(data =>   */}
           {this.state.list.filter(isSearched(searchTerm)).map(data =>
          <div className='codeLine' key={data.objectID}>
            
            <span>
            <a href={data.url}>{data.teacher}</a>
            </span>

            <span> {data.classroom}</span>
            <span> {data.num_comments}</span>
            <span> {data.points} </span>

          <span>
          <button className="btn btn-default" onClick={ () =>
            this.onDismiss(data.objectID)
            // onDismiss() this would be a function but we have binded it to this.onDismiss  
            // and is now a class method inside an arrow method (HOC) to pass objectIDs
            }
            type='button'>
            Dismiss</button>
          </span>        
                

          <span>
          <button className="pLeft btn btn-default"      
          onClick={ () => this.jeepers()}         
            type='button'>
            Register
            </button>
            </span>    


          <span>
          <button className="pLeft btn btn-default"      
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