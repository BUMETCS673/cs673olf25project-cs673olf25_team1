import { render, screen, fireEvent } from "@testing-library/react";
import Community from "../src/pages/Community";


// tests/help_dialog.test.tsx
beforeAll(() => {
  // mock scrollIntoView for jsdom
  Element.prototype.scrollIntoView = jest.fn();
});


// mock socket since we don’t want real socket connections
jest.mock("../src/hooks/socket", () => ({
  on: jest.fn(),
  off: jest.fn(),
  emit: jest.fn(),
  id: "test-socket-id",
}));

describe("Community Help Dialog", () => {
  test("renders Help button", () => {
    render(<Community />);
    expect(screen.getByText(/help/i)).toBeInTheDocument();
  });

  test("opens Help dialog on Help click", () => {
    render(<Community />);
    fireEvent.click(screen.getByText(/help/i));
    expect(screen.getByRole("heading", { name: /faq/i })).toBeInTheDocument();
  });

  test("closes Help dialog on Close click", () => {
    render(<Community />);
    fireEvent.click(screen.getByText(/help/i));
    fireEvent.click(screen.getByText(/close/i));
    expect(screen.queryByRole("heading", { name: /faq/i })).not.toBeInTheDocument();
  });

  test("filters FAQ search", () => {
    render(<Community />);
    fireEvent.click(screen.getByText(/help/i));
    fireEvent.change(screen.getByPlaceholderText(/search faqs/i), {
      target: { value: "typing" },
    });
    expect(screen.getByText(/others are typing/i)).toBeInTheDocument();
    expect(screen.queryByText(/send a message/i)).not.toBeInTheDocument();
  });
});
