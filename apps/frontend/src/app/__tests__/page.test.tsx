import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../page';

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    
    const heading = screen.getByRole('heading', {
      name: /transform your videos with ai/i,
    });
    
    expect(heading).toBeInTheDocument();
  });

  it('renders the get started button', () => {
    render(<HomePage />);
    
    const button = screen.getByTestId('hero-cta');
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-600');
    expect(button).toHaveTextContent(/get started/i);
  });

  it('renders the learn more link', () => {
    render(<HomePage />);
    
    const link = screen.getByTestId('hero-learn-more');
    
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('bg-gray-100');
    expect(link).toHaveTextContent(/learn more/i);
  });

  it('renders feature highlights', () => {
    render(<HomePage />);
    
    const features = [
      'Smart Editing',
      'Auto Enhancement',
      'Quick Export'
    ];

    features.forEach(feature => {
      const heading = screen.getByRole('heading', { name: feature });
      expect(heading).toBeInTheDocument();
    });
  });
}); 