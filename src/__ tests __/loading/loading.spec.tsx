import { render } from '@testing-library/react';
import Loading from '../../components/common/loading/loading';


test('renders Loading component', () => {
  const { container } = render(<Loading />);
  const loadingImage = container;

  expect(loadingImage).toBeTruthy();
});