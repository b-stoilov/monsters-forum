import React, { Component } from 'react';
import './App.css';
import CardList from './components/card_list.component';


class App extends Component {
  constructor () {
    super ();

    this.state = {
      members : [
      ]
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (users => this.setState( { members : users }));
  }

  render () {
     return (
      <div className="App">
        <CardList members = {this.state.members}> 
         </CardList>
        
      </div>
    );
  } 
}

export default App;
