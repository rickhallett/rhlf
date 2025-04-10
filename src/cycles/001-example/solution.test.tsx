// Test for Cycle 001 Solution
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './solution';

describe('Counter Component', () => {
  it('should render initial count 0', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('should increment count on button click', async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    await userEvent.click(incrementButton);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('should decrement count on button click', async () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    await userEvent.click(decrementButton);
    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });
});
