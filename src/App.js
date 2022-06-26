import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';

 class Subject extends Component {
   render(){
     return (
       <header>
           <h1>WEB</h1>
           world wide web!
       </header>  
     );
   }
 }

 class App extends Component {
   render() {
     return (
       <div className="App">
         Hello, React!!
         <Subject></Subject>
       </div>
     );
   }
  }

  export default App;