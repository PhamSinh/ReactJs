import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ListMovie from "../../../pages/List-movie/list-movie";
import { RootState } from "../../../store";

const mockStore = configureStore([]);

describe("ListMovie component", () => {
  const initialState: RootState = {
    // Define your initial state here
    movies: {
      filterMovies: [],
      loading: false,
      movieList: [],
      trendingMovives: []
    },
    detail: {
      isShow: false,
      isShowPay: true,
      isClosed: true,
      vote: 0,
      movieDetail: {},
      actors: []
    },
    payment: {}
  };
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <ListMovie />
    </Provider>
  );
});

test("renders ListMovie component", () => {
  expect(screen.getByText("Movie Series")).toBeTruthy();
});

test("renders filter options correctly", () => {
  expect(screen.getByLabelText("Default select example")).toBeTruthy();
  expect(screen.getByText("All Ratings")).toBeTruthy();
  expect(screen.getByText("All Years")).toBeTruthy();
});