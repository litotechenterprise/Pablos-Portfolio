import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  test("should render app with out fail", () => {
    render(<Home />);
  });
});
