import { render, screen } from '@testing-library/react';
import Users from './Users';
import { server } from '../../mocks/server';
import { rest } from 'msw';
import { mockedData } from '../../mocks/handlers';

describe('Users render', () => {
  test('renders correctly', () => {
    render(<Users />);
    const textElement = screen.getByRole('heading');
    expect(textElement).toHaveTextContent('Users');
  });

  test('renders a list of users', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(mockedData.length);
  });

  test('renders error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const error = await screen.findByText('Error fetching users');
    expect(error).toBeInTheDocument();
  });
});
