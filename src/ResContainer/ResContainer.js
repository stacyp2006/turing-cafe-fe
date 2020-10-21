import React from  'react';
import ResCard from '../ResCard/ResCard.js';
import './ResContainer.css';

const ResContainer = (props) => {
  console.log(props.resList.reservations);
  let list = props.resList.reservations;
  let reservationCards;
  if (list.length !== 0) {
    reservationCards = list.map(reservation => {
      return (
        <ResCard
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          number={reservation.number}
        />
      )
    })
  }
  return(
    <div className='card-container'>
      {reservationCards}
    </div>
  )
}
export default ResContainer;
