import { render, screen } from '@testing-library/react';
import Page from '../page';

describe('Page', () => {
  it('renders the main heading', () => {
    render(<Page />);
    
    const heading = screen.getByRole('heading', {
      name: /transform your videos with ai/i,
    });
    
    expect(heading).toBeInTheDocument();
  });

  it('renders the get started button', () => {
    render(<Page />);
    
    const button = screen.getByRole('link', {
      name: /get started/i,
    });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-600');
  });

  it('renders the learn more link', () => {
    render(<Page />);
    
    const link = screen.getByRole('link', {
      name: /learn more/i,
    });
    
    expect(link).toBeInTheDocument();
  });
}); 