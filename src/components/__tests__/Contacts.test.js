import ContactUs from "../ContactUs"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("header element is render or not", () => {
    render(<ContactUs />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
})