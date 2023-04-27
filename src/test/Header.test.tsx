import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/header/Header";

describe("Header component", () => {
  test("should render icons", () => {
    render(<Header />);
    const linkedIn = screen.getByLabelText("linked-in");
    const github = screen.getByLabelText("github");
    expect(linkedIn).toBeDefined();
    expect(github).toBeDefined();
  });
});
