import { render, screen } from '@testing-library/react';
import TDD from './TDD';

describe('TDD', () => {
  test('renders correctly', () => {
    render(<TDD />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  test('renders name', () => {
    render(<TDD name="Igor" />);
    const textElement = screen.getByText('Hello Igor');
    expect(textElement).toBeInTheDocument();
  });
});
