import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import RootPage from '../page';

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

describe('RootPage', () => {
  it('redirects to home page', () => {
    render(<RootPage />);
    expect(require('next/navigation').redirect).toHaveBeenCalledWith('/home');
  });
}); 