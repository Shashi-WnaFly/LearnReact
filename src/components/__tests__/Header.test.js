import { screen, render, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load Login button inside Header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should load cart button inside Header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByText("Cart (0 items)");
  expect(cart).toBeInTheDocument();
});

it("Should load cart items inside Header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByText(/Cart/); // using regex (gives flexibility) that cart have some items
  expect(cart).toBeInTheDocument();
});

it("should load buttons inside Header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(1);
});

it("should login event work or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button', {name : "Login"});
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole('button', {name : "Logout"});

  expect(logoutButton).toBeInTheDocument();
});
