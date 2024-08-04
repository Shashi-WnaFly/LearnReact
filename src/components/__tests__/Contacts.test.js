import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load heading element inside ContactUs component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
})

test("Should load Submit inside ContactUs component", () => {
    render(<ContactUs />);
    const but = screen.getByText('Submit');

    expect(but).toBeInTheDocument();
})

test("Should input elements render inside ContactUs component", () => {
    render(<ContactUs />);
    const textboxes = screen.getAllByRole('textbox');
    expect(textboxes.length).toBe(2)
})