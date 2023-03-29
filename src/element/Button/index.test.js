import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

// is disabled button
test("should not allowed click button if isDisabled present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

// is loading
test("should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

// a tags
test("should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

// Link tags
test("should render <Link> tag", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );
  expect(container.querySelector("a")).toBeInTheDocument();
});
