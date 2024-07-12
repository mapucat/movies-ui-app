import { act, fireEvent, render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";
import React from "react";
import Debounce from "use-debounce";

// GIVEN ELEMENT AND THERE IS A CHANGE (USER EVENT || CLICK), IT SHOULD UPDATE INPUT

describe("Search Input Component", () => {
  test("It should be in the document", async () => {
    render(<SearchInput onSearch={jest.fn()}></SearchInput>);
    expect(screen.getByTestId("search-input-element")).toBeInTheDocument();
    expect(screen.getByTestId("search-clear-button")).toBeInTheDocument();
  });

  // Component use cases
  describe("GIVEN a user's change event on Input Element", () => {
    afterEach(() => {
      jest.useRealTimers();
      jest.clearAllMocks();
    });

    test("THEN it should use debounce hook", async () => {
      jest.useFakeTimers();

      const onSearch = jest.fn();
      const { rerender } = render(
        <SearchInput onSearch={onSearch}></SearchInput>
      );
      const inputElement = screen.getByTestId("search-input-element");

      expect(onSearch).toHaveBeenCalledTimes(1);
      expect(onSearch).toHaveBeenCalledWith("");

      await act(async () => {
        fireEvent.change(inputElement, { target: { value: "dragon" } });
        rerender(<SearchInput onSearch={onSearch}></SearchInput>);
        jest.advanceTimersByTime(300);
      });

      expect(onSearch).toHaveBeenCalledTimes(2);
      expect(onSearch).toHaveBeenCalledWith("dragon");

      expect(inputElement).toHaveValue("dragon");
    });

    test("THEN it should updates the search input value", async () => {
      jest.useFakeTimers();

      const setState = jest.fn();
      jest
        .spyOn(React, "useState")
        .mockImplementation(() => ["", setState]);

      const onSearch = jest.fn();
      const { rerender } = render(
        <SearchInput onSearch={onSearch}></SearchInput>
      );
      const inputElement = screen.getByTestId("search-input-element");

      fireEvent.change(inputElement, { target: { value: "dragon" } });

      expect(setState).toHaveBeenCalledTimes(1);
      expect(setState).toHaveBeenCalledWith("dragon");
    });
  });
});
