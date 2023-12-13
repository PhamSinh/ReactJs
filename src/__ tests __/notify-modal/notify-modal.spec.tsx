// import { render } from '@testing-library/react';
// import NotifyModal from '../../components/common/notify-modal/notify-modal';

// describe('NotifyModal component', () => {
//   it('renders modal when isSuccess is true', () => {
//     const setIsSuccess = jest.fn();
//     const { getByText } = render(
//       <NotifyModal isSuccess={true} SetIsSuccess={setIsSuccess} />
//     );

//     const modalHeader = getByText(
//       'Checkout successfully, the movie will be sent to your email soon!'
//     );

//     expect(modalHeader).toBeTruthy();
//     expect(setIsSuccess).not.toHaveBeenCalled();
//   });

//   it('does not render modal when isSuccess is false', () => {
//     const setIsSuccess = jest.fn();
//     const { queryByText } = render(
//       <NotifyModal isSuccess={false} SetIsSuccess={setIsSuccess} />
//     );

//     const modalHeader = queryByText(
//       'Checkout successfully, the movie will be sent to your email soon!'
//     );

//     expect(modalHeader).toBeNull();
//     expect(setIsSuccess).not.toHaveBeenCalled();
//   });
// });