/* eslint-disable no-import-assign */
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import * as authFns from './services/auth';
import * as postFns from './services/posts';

jest.mock('./services/auth');
jest.mock('./services/posts');

const mockUser = {
  id: '0dab2c65-5911-469c-9f12-8fb47ebe52f2',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'test@example.com',
};

const fakePosts = [
  { id: 1, title: 'Fake Post #1', description: '#1 description' },
  { id: 2, title: 'Fake Post #2', description: '#2 description' },
];

test('user can sign in', async () => {
  authFns.getUser.mockReturnValue(null);
  authFns.authUser.mockReturnValue(mockUser);

  const container = render(
    <MemoryRouter initialEntries={['/auth/sign-in']}>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );

  const emailInput = await container.findByLabelText('Email:');
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  expect(emailInput.value).toBe('test@example.com');

  const passwordInput = await container.findByLabelText('Password:');
  fireEvent.change(passwordInput, { target: { value: '123456' } });
  expect(passwordInput.value).toBe('123456');

  const button = await container.findByRole('button');
  fireEvent.click(button);

  const headerText = await container.findByTestId('hello-message');
  expect(headerText.textContent).toBe('Hello test@example.com');
});

test('logged in users can see a list of items', async () => {
  authFns.getUser.mockReturnValue(mockUser);
  postFns.getPosts.mockReturnValue(fakePosts);
  render(
    <MemoryRouter initialEntries={['/posts']}>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );
  await screen.findByText(/Fake Post #1/i);
  await screen.findByText(/Fake Post #2/i);
});
