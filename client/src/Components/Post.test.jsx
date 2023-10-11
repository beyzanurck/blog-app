
import { render, screen } from '@testing-library/react';
import Post from './Post';

test('renders blog post', () => {
  const samplePost = {
    img_url: 'sampleImageUrl',
    title: 'Sample Title',
    content: 'This is a sample content for testing.'
  };

  render(<Post posts={samplePost} />);

  const titleElements = screen.getAllByText(samplePost.title);
  const contentElements = screen.getAllByText(samplePost.content);

  expect(titleElements.length).toBe(1);
  expect(contentElements.length).toBe(1);
});

