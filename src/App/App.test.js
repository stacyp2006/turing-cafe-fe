import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('should add a new reservation', () => {
    render(<App />);
    userEvent.type(screen.getByPlaceholderText('Name'), 'Stacy');
    userEvent.type(screen.getByPlaceholderText('Date'), '10/22');
    userEvent.type(screen.getByPlaceholderText('Time'), '7:00');
    userEvent.type(screen.getByPlaceholderText('Number'), '10');
    userEvent.click(screen.getByRole('button', { name: 'Make a Reservation'}));
    expect(screen.getByRole('heading', { name: 'Stacy'})).toBeInTheDocument();
  })
})
