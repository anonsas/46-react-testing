import { render, screen } from '@testing-library/react';
import TDD from './TDD';
// TDD should render the text hello and if a name is passed into the component
// It should render hello follower by the name.

describe('TDD', () => {
  test('renders correctly', () => {
    render(<TDD />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  test('renders name', () => {
    render(<TDD name="Igor " />);
    const textElement = screen.getByText('Hello Igor');
    expect(textElement).toBeInTheDocument();
  });
});
