import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('renders Header and checks navigation', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  // Check if "New Post" link is in the document
  const newPostLink = screen.getByTestId("newPostTest").querySelector('a');
  expect(newPostLink).toBeInTheDocument();
  expect(newPostLink).toHaveAttribute('href', '/new-post');

  // Check if "About" link is in the document
  const aboutLink = screen.getByTestId("aboutTest").querySelector('a');
  expect(aboutLink).toBeInTheDocument();
  expect(aboutLink).toHaveAttribute('href', '/about');
});


