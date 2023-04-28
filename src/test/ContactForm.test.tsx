import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ContactForm from "../components/contact/ContactForm";

describe("ContactForm", () => {
  test("renders the form elements", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText("Name")).toBeDefined();
    expect(screen.getByLabelText("Email")).toBeDefined();
    expect(screen.getByLabelText("Message")).toBeDefined();
    expect(screen.getByRole("button", { name: "Submit" })).toBeDefined();
  });
});
