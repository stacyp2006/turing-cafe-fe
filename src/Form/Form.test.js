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
})
