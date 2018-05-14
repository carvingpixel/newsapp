import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
// import SearchBox from './components/searchBox';
import CroomDetail from './components/croom_detail';


// CLASS APP -------------------------------------------------------
class App extends Component {

  //RENDER METHOD ---------------------------------------------------
  render() {
    return (
      <div className="App">  
        <Header />   
        <CroomDetail />
     </div>
    );
  }//render

}//class

export default App;