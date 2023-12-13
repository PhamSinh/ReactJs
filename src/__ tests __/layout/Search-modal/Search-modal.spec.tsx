import SearchModal from '../../../components/Layout/Search-modal/search-modal';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('SearchModal component', () => {
  it('renders without crashing', () => {
    render(
    <BrowserRouter>
    <SearchModal isSearch={true} setIsSearch={jest.fn()} />
    </BrowserRouter>
    );
  });

  it('renders the search modal', () => {
    const wrapper = render(
    <BrowserRouter>
    <SearchModal isSearch={true} setIsSearch={jest.fn()} />
    </BrowserRouter>
    );
    const modal = wrapper.findAllByPlaceholderText('Search');
    expect(modal).toBeTruthy();
  });

  it('renders the search input', () => {
    const wrapper = render(
    <BrowserRouter>
    <SearchModal isSearch={true} setIsSearch={jest.fn()} />
    </BrowserRouter>
    );
    const searchInput = wrapper.findByText('.search-input');
    expect(searchInput).toBeTruthy();
  });
});