import React from 'react';
import './ResCard.css';

const ResCard = (props) => {
  return (
    <div className="reservation-card">
      <h2>{props.name}</h2>
      <h2>Date: {props.date}</h2>
      <h2>Time: {props.time}</h2>
      <h2>Number: {props.number}</h2>
    </div>
  )
}

export default ResCard;
