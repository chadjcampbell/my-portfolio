import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BsGithub, BsTvFill } from "react-icons/bs";
import { Project, Projects } from "../components/projects/Projects";
import { projectArray } from "../components/projects/projectArray";

describe("Projects", () => {
  const projects: Project[] = projectArray;
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
  /*   test("renders project titles", () => {
    render(<Projects />);
    const projectTitles = screen.getAllByRole("button");
    expect(projectTitles.length).toBe(projects.length);
    projectTitles.forEach((title, i) => {
      expect(title).toBe(projects[i].name);
    });
  });
 */
  test("renders only the first project description", () => {
    render(<Projects />);
    const projectDescriptions = screen.getAllByRole("region");
    expect(projectDescriptions.length).toBe(1);
  });

  test("expands project description when clicked", () => {
    render(<Projects />);
    const projectTitles = screen.getAllByRole("button");
    projectTitles.forEach((title) => {
      title.click();
      const projectDescription = screen.getAllByRole("region");
      expect(projectDescription).toBeDefined();
    });
  });

  test("renders project links when expanded", () => {
    render(<Projects />);
    const projectTitles = screen.getAllByRole("button");
    projectTitles.forEach((title) => {
      title.click();
      const codeLink = screen.getByRole("link", { name: /Code/i });
      const previewLink = screen.getByRole("link", { name: /Live/i });
      expect(codeLink).toHaveProperty("href", projects[0].code);
      expect(previewLink).toHaveProperty("href", projects[0].preview);
      expect(codeLink.firstChild).toEqual(<BsGithub size="1.5rem" />);
      expect(previewLink.firstChild).toEqual(<BsTvFill size="1.75rem" />);
    });
  });
});
