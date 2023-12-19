import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import * as ReactRedux from "react-redux";
import store from "../../../store";
import { MovieDetail } from "../../../components/common/movie-detail/movie-detail";

// Mocking the fetchMedia service
jest.mock("../../../services/fetchMedia", () => ({
  getMovieDetail: jest.fn(() => ({})),
}));

// Mock the entire react-redux module
jest.mock("react-redux");

describe("MovieDetail component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders MovieDetail component", () => {
    // Mock useSelector to return the required state
    (ReactRedux.useSelector as jest.Mock).mockReturnValue({
      detail: {
        isShowPay: false,
        isClosed: false,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/movie/1"]}>
          <Route path="/movie/:id" Component={MovieDetail} />
        </MemoryRouter>
      </Provider>
    );

    // Use toBeInTheDocument on screen.getBy...
    expect(screen.getByTestId("someElementTestId")).toBeTruthy();
  });

  // Add more test cases based on different scenarios and interactions
  // For example, test what happens when the "Watch trailer" button is clicked
  test("handles 'Watch trailer' button click", () => {
    // Mock useSelector to return the required state
    (ReactRedux.useSelector as jest.Mock).mockReturnValue({
      detail: {
        isShowPay: false,
        isClosed: false,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/movie/1"]}>
          <Route path="/movie/:id" Component={MovieDetail} />
        </MemoryRouter>
      </Provider>
    );

    // Simulate button click
    // Use toBeInTheDocument on screen.getBy...
    expect(screen.getByText("Watch trailer")).toBeTruthy();
  });
});
