import { render, screen } from "@testing-library/react";
import Loader from "./Loader";


describe("Loader Component", () => {
  test("It should be in the document", async () => {
    render(<Loader/>);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
