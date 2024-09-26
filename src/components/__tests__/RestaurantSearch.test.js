import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/RestaurantMockData";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should render input and search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const SearchBtn = screen.getByRole("button", { name: "Search" });
  const SearchInput = screen.getByPlaceholderText("search here");

  expect(SearchBtn).toBeInTheDocument();
  expect(SearchInput).toBeInTheDocument();
});

it("should search restaurant after click on search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const restaurants = screen.getAllByTestId("restrawCard");
  expect(restaurants.length).toBe(32);

  const searchInput = screen.getByPlaceholderText("search here");
  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const restaurants2 = screen.getAllByTestId("restrawCard");
  expect(restaurants2.length).toBe(4);
});

it("should perform event top rated restaurant click and filter restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const resCards = screen.getAllByTestId("restrawCard");
  expect(resCards.length).toBe(32);
  
  const topRatedBtn = screen.getByRole("button", {name : "Top Rated Restaurant"});
  fireEvent.click(topRatedBtn);
  const resCards2 = screen.getAllByTestId("restrawCard");
  expect(resCards2.length).toBe(22);

});
