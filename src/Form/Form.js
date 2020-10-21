import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  submitNewRes = (event) => {
    event.preventDefault();
    const newRes = {
      id: Date.now(),
      ...this.state
    };
    this.props.addRes(newRes);
    this.clearInputs();
  }

  updateValue = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: 0});
  }

  render() {
    return(
      <div className="make-reservation">
        <form className="reservation-form">
          <input
              className="name-input"
              type='text'
              placeholder='Name'
              name='name'
              value={this.state.name}
              onChange={this.updateValue}
          />
          <input
              className="date-input"
              type='text'
              placeholder='Date'
              name='date'
              value={this.state.date}
              onChange={this.updateValue}
          />
          <input
              className="time-input"
              type='text'
              placeholder='Time'
              name='time'
              value={this.state.time}
              onChange={this.updateValue}
          />
          <input
              className="number-input"
              type='number'
              min='1'
              placeholder='Number'
              name='number'
              value={+this.state.number}
              onChange={this.updateValue}
          />
          <button className="res-btn" onClick={this.submitNewRes}>Make a Reservation</button>
        </form>
      </div>
    )
  }
}
export default Form;
