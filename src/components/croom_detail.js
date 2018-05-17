import React from 'react';  // if component calls JSX
import SearchBox from './searchBox';
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

class CroomDetail extends React.Component {
    
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

      }//constructor 

      
  //METHODs -----------------------------------------------------------

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

  alertMsg(){
    alert("Alert Broadcasted");
   }


 
  //DISMISS
  onDismiss(id) {
    const updatedList = this.state.list.filter(data => data.objectID !== id);
    this.setState({ list: updatedList })
    console.log(this);
  }

  //SEARCH
  onSearchChange(e){
    console.log("Presto");
    this.setState({ searchTerm: e.target.value}); 
    }

  
    render() {
    
        const { searchTerm } = this.state;
    
        return (  
        <div>

          {/* <SearchBox searchTerm={this.state.searchTerm} /> */}
          <form>
          <input type='text' onChange={this.onSearchChange} />
          </form>

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

 }
}

export default CroomDetail;