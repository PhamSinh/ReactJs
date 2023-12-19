import { render } from '@testing-library/react';
import MovieStar from '../../components/common/movie-star/movie-star';

describe('MovieStar component', () => {
  it('renders correct number of stars', () => {
    const { container } = render(<MovieStar star={3} />);
    const stars = container.querySelectorAll('.bx.bxs-star');

    expect(stars.length).toBe(3);
  });
});