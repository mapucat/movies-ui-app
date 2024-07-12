import { render, screen } from "@testing-library/react";
import Icon, { ICON_NAME_LIST, IconName } from "./Icon";

describe("Icon Component", () => {
  test("It should be in the document", async () => {
    render(<Icon name="clear"></Icon>);
    expect(screen.getByTestId("svg-mock")).toBeInTheDocument();
  });

  // Component use cases
  describe("GIVEN a icon's name", () => {
    test.each(ICON_NAME_LIST)(
      'THEN it should add the "svg--%s" class to the component',
      (name: IconName) => {
        render(<Icon name={name}></Icon>);
        expect(screen.getByTestId("svg-mock")).toBeInTheDocument();
      },
    );
  });
});
