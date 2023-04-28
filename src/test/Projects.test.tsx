import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Projects } from "../components/projects/Projects";
import { projectArray } from "../components/projects/projectArray";
import { act } from "react-dom/test-utils";

describe("Projects component ", () => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;

  test("renders header", () => {
    render(<Projects />);
    const headingElement = screen.getByRole("heading", { name: /projects/i });
    expect(headingElement).toBeDefined();
  });

  test("at first, renders only the first project description", () => {
    render(<Projects />);
    const projectDescriptions = screen.getAllByRole("region");
    expect(projectDescriptions.length).toBe(1);
  });

  test("expands project description when clicked", () => {
    render(<Projects />);
    const projectTitles = screen.getAllByRole("button");
    projectTitles.forEach((title) => {
      act(() => {
        title.click();
      });
      const projectDescription = screen.getAllByRole("region");
      expect(projectDescription).toBeDefined();
    });
  });

  test("renders project links when expanded", () => {
    render(<Projects />);
    const projectTitles = screen.getAllByRole("button");
    projectTitles.forEach((title, i) => {
      act(() => {
        title.click();
      });
      const codeLink = screen.getByRole("link", { name: /Code/i });
      const previewLink = screen.getByRole("link", { name: /Live/i });
      expect(codeLink).toHaveProperty("href", projectArray[i].code);
      expect(previewLink).toHaveProperty("href", projectArray[i].preview);
    });
  });
});
