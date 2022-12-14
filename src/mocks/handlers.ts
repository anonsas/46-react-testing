import { rest } from 'msw';

export const mockedData = [
  {
    name: 'Bruce Wayne',
  },
  {
    name: 'Clark Kent',
  },
  {
    name: 'Princess Diana',
  },
];

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedData));
  }),
];
