import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';




import AppTop from './AppTop.js';
import AppTable from './AppTable';
//import AppName from './AppName';



class App extends React.Component {
	state = {
		clicks: 5
	}


  
  render(){

	  return (
		
		
		<div id="mainpage">
	   			<AppTop/>
				   <br></br>
				<AppTable/>

			
			<button onClick={()=>this.setState({ clicks: this.state.clicks + 1})}>Click to increment by 1</button>
			<button onClick={()=>this.setState({ clicks: this.state.clicks - 1})}>Click to decrement by 1</button>
    	</div>
    );
  }
}

export default App;




