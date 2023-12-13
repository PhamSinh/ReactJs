
import { render, fireEvent } from '@testing-library/react';
import MovieButton from '../../components/common/button/button';
 
describe('MovieButton', () => {
  test('renders button with label', () => {
    const label = 'Click me';
    const { getByText } = render(<MovieButton label={label} onClick={() => {}} />);
    const buttonElement = getByText(label);
    expect(buttonElement).toBeTruthy();
  });
 
  test('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<MovieButton label="Click me" onClick={onClickMock} />);
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});