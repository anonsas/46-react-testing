import { render, screen } from '@testing-library/react';
import CounterTwo from './CounterTwo';
import user from '@testing-library/user-event';

describe('CounterTwo', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText('Counter Two');
    expect(textElement).toBeInTheDocument();
  });

  test('handlers are called', async () => {
    user.setup();
    const decrementHandler = jest.fn();
    const incrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );

    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    await user.click(decrementButton);
    await user.click(incrementButton);

    expect(decrementHandler).toHaveBeenCalledTimes(1);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
  });
});
