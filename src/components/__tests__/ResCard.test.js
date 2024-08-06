import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import ResCardMock from "../mocks/ResCardMock";
import "@testing-library/jest-dom";

it("should render the Restaurant Card component", () => {
    render(<RestaurantCard resData={ResCardMock}/>);

    const name = screen.getByText("Pannalal");

    expect(name).toBeInTheDocument();
})