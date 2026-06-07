import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import EmailLink from '../../Contact/EmailLink';

describe('EmailLink', () => {
  it('renders the email domain', () => {
    render(<EmailLink />);

    expect(screen.getByText('@email.com')).toBeInTheDocument();
  });

  it('renders as a link element', () => {
    render(<EmailLink />);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('renders the email prefix', () => {
    render(<EmailLink />);

    expect(screen.getByText('keagan.chasenski')).toBeInTheDocument();
  });

  it('has correct mailto href', () => {
    render(<EmailLink />);

    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe(
      'mailto:keagan.chasenski@email.com',
    );
  });

  it('renders within the email container', () => {
    render(<EmailLink />);

    const container = document.querySelector('.contact-email-container');
    expect(container).toBeInTheDocument();
  });
});
