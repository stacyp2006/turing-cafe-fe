import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ResCard from './ResCard.js';

describe('ResCard', () => {
  it('should render a card', () => {
    render(<ResCard
            id={2}
            key={2}
            name='Stacy'
            date='10/10'
            time='7:00'
            number='2'
          />);
    expect(screen.getByText('Stacy')).toBeInTheDocument();
    expect(screen.getByText('Date: 10/10')).toBeInTheDocument();
    expect(screen.getByText('Time: 7:00')).toBeInTheDocument();
    expect(screen.getByText('Number: 2')).toBeInTheDocument();
  });
})
