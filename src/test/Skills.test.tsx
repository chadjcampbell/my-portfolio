import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skills } from "../components/skills/Skills";

describe("Skills component", () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });
  test("renders the component with the correct heading", () => {
    render(<Skills />);
    const headingElement = screen.getByRole("heading", { name: /skills/i });
    expect(headingElement).toBeDefined();
  });

  test("renders a list of skills", () => {
    render(<Skills />);
    const skillElements = screen.getAllByRole("listitem");
    expect(skillElements.length).toBeGreaterThan(0);
  });

  test("renders each skill with an icon, name, and link", () => {
    render(<Skills />);
    const skillElements = screen.getAllByRole("listitem");
    skillElements.forEach((skillElement) => {
      const iconElement = skillElement.querySelector(".skill-icon");
      const nameElement = skillElement.querySelector(".skill-name");
      const linkElement = skillElement.querySelector(".skill-link");
      expect(iconElement).toBeDefined();
      expect(nameElement).toBeDefined();
      expect(linkElement).toBeDefined();
    });
  });
});
