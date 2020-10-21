import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Form from './Form.js';

describe('Form', () => {
  it('should render a new reservation form', () => {
    const fakeAddRes = jest.fn();
    render(<Form addRes={fakeAddRes}/>);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Time')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Number')).toBeInTheDocument();
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument();
  });

  it('should update values when user enters info', () => {
    const fakeAddRes = jest.fn();
    render (<Form addRes={fakeAddRes}/>);
    fireEvent.change(screen.queryByPlaceholderText('Name'), {target: {value: 'Stacy'}});
    fireEvent.change(screen.queryByPlaceholderText('Date'), {target: {value: '10/22'}});
    fireEvent.change(screen.queryByPlaceholderText('Time'), {target: {value: '7:00'}});
    fireEvent.change(screen.queryByPlaceholderText('Number'), {target: {value: '2'}});
    expect(screen.queryByPlaceholderText('Name').value).toBe('Stacy');
    expect(screen.queryByPlaceholderText('Date').value).toBe('10/22');
    expect(screen.queryByPlaceholderText('Time').value).toBe('7:00');
    expect(screen.queryByPlaceholderText('Number').value).toBe('2');
  })
})
