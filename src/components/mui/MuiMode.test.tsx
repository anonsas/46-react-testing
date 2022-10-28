import { render, screen } from '../../test-utils';
import MuiMode from './MuiMode';

describe('MuiMode', () => {
  test('Renders text correctly', () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
  });

  test('Renders text in white color for dark mode', () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveStyle({ color: "'rgb(255,255,255)'" });
  });
});
