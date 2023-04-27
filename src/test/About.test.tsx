import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { About, aboutArray } from "../components/about/About";
import { act } from "react-dom/test-utils";

describe("About component", () => {
  test("renders the text 'Hello, I'm'", () => {
    render(<About />);
    const helloText = screen.getByText("Hello, I'm");
    expect(helloText).toBeDefined();
  });
  test("renders the AnimatedHeader component with the initial header value", () => {
    render(<About />);
    const initialHeader = aboutArray[0];
    const headerElement = screen.getByText(initialHeader);
    expect(headerElement).toBeDefined();
  });
  test("renders the profile picture with the correct alt attribute", () => {
    render(<About />);
    const profilePicture = screen.getByAltText("Chad Campbell Profile Picture");
    expect(profilePicture).toBeDefined();
  });
  test("changes the header value after 1500ms", async () => {
    vi.useFakeTimers();
    render(<About />);
    const initialHeader = aboutArray[0];
    const headerElement = screen.getByText(initialHeader);
    expect(headerElement).toBeDefined();
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    const secondHeader = aboutArray[1];
    const newHeaderElement = screen.getByText(secondHeader);
    expect(newHeaderElement).toBeDefined();
    vi.useRealTimers();
  });
});
