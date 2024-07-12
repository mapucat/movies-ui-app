import { render, screen } from "@testing-library/react";

import Button from "./Button";
import Icon from "./Icon";

describe("Button Component", () => {
  test("It should be in the document", async () => {
    render(<Button>Click me!</Button>);
    expect(screen.getByText("Click me!")).toBeInTheDocument();
  });

  // Component use cases
  describe("GIVEN text content", () => {
    test("WITHOUT specific properties THEN it should set up the default values on classes", async () => {
      render(<Button>Click me!</Button>);
      expect(screen.getByText("Click me!")).toHaveClass(
        "btn btn--primary btn--flat",
      );
    });

    test("WITH specific properties { color: secondary, variant: stroked, className: btn--hidden } THEN it should set up the values on classes", async () => {
      render(
        <Button color="secondary" variant="stroked" className="btn--hidden">
          Click me!
        </Button>,
      );
      expect(screen.getByText("Click me!")).toHaveClass(
        "btn btn--secondary btn--stroked btn--hidden",
      );
    });
  });

  describe("GIVEN icon content", () => {
    test("THEN it should be in the document", async () => {
      render(
        <Button data-testid="button" variant="icon">
          <Icon name="clear"></Icon>
        </Button>
      );
      expect(screen.getByTestId("svg-mock")).toBeInTheDocument();
      expect(screen.getByTestId("button")).toBeInTheDocument();
    });
  });
});
