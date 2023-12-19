// import { render, screen, fireEvent } from '@testing-library/react';
// // import { useDispatch } from 'react-redux';
// import MovieDetail from '../../components/common/movie-detail/movie-detail';
// import { movieDetailAction } from '../../store/movie-detail-slice';
// import * as redux from "react-redux";

// jest.mock('react-redux', () => ({
//   useDispatch: jest.fn(),
// }));

// describe('MovieDetail', () => {
//   const movieInfor = {
//     id: '1',
//     title: 'The Great Ruler',
//     vote: 4,
//     poster: "https://hhpanda.cdn1-img.net/1682743241.jpg",
//     release_date: '2022-01-01',
//     video: "https://www.youtube.com/embed/mkxu4YSEMTo?si=ap7q8uvC-CcHGVt4",
//     overview: "Đại chúa tể",
//     isTrending: true,
//     price: 120,
//     time: 120,
//     actors: [{
//         id: "1",
//         name: "Ryo",
//         avatarUrl: "https://hhpanda.cdn1-img.net/1682743241.jpg"
//       }],
//       category: ["movie"]
//   };

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test('renders movie title correctly', () => {
//     const dispatchMock = jest.fn();
//     const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
//     useDispatchSpy.mockReturnValue(dispatchMock);
//     render(<MovieDetail movieInfor={movieInfor} SetIsCheckout={() => {}} />);
//     const movieTitleElement = screen.getByText('Actors');
//     expect(movieTitleElement).toBeTruthy();
//   });

//   test('dispatches movie detail action', () => {
//     const dispatchMock = jest.fn();
//     const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
//     useDispatchSpy.mockReturnValue(dispatchMock);

//     render(<MovieDetail movieInfor={movieInfor} SetIsCheckout={() => {}} />);
//     expect(dispatchMock).toHaveBeenCalledWith(movieDetailAction.setMovieDetail(movieInfor));
//   });

//   test('calls SetIsCheckout', () => {
//     const setIsCheckoutMock = jest.fn();
//     const dispatchMock = jest.fn();
//     const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
//     useDispatchSpy.mockReturnValue(dispatchMock);
//     render(<MovieDetail movieInfor={movieInfor} SetIsCheckout={setIsCheckoutMock} />);
//     const buyNowButton = screen.getByText('Actors');
//     fireEvent.click(buyNowButton);
//     expect(setIsCheckoutMock).toBeTruthy();
//   });
// });