import Footer from '../../../components/Layout/Footer/Footer';
import { render } from "@testing-library/react";
describe('Footer component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders the footer section', () => {
    const wrapper = render(<Footer />);
    const footerSection = wrapper.findByText('.footer-app');
    expect(footerSection).toBeTruthy();
  });

  it('renders the logo', () => {
    const wrapper = render(<Footer />);
    const logo = wrapper.findByText('.logo');
    expect(logo).toBeTruthy();
  });
});