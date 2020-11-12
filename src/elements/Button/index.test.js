import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("should not allowed click button if disabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
