import React, { Component } from 'react';
import ResContainer from '../ResContainer/ResContainer.js';
import Form from '../Form/Form.js';
import { getReservations } from '../apiCalls.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  submitRes = (newRes) => {
    this.setState({ reservations: [...this.state.reservations, newRes] });
  }

  componentDidMount() {
    getReservations()
    .then(data => this.setState({reservations: data}))
    .catch(error => console.log('get error'))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={this.submitRes}/>
        </div>
        <div className='resy-container'>
          <ResContainer resList={this.state} />
        </div>
      </div>
    )
  }
}

export default App;
