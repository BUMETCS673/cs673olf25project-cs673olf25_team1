import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "./Sidebar";

test("renders AI and Community links", () => {
  render(
    <MemoryRouter>
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    </MemoryRouter>
  );

  expect(screen.getByText("AI")).toBeInTheDocument();
  expect(screen.getByText("Community")).toBeInTheDocument();
});
