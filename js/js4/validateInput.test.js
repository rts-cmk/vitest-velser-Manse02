// opgave 4
import { validateInput } from "./validateInput";

describe("validateInput", () => {
  test("returnerer trimmed streng ved gyldigt input", () => {
    const result = validateInput("  Hej  ");
    expect(result).toBe("Hej");
  });

  test("kaster fejl ved ugyldigt input (tal)", () => {
    expect(() => validateInput(123)).toThrow("Ugyldigt input: Skal være en streng");
  });

  test("kaster fejl ved ugyldigt input (null)", () => {
    expect(() => validateInput(null)).toThrow("Ugyldigt input: Skal være en streng");
  });

  test("kaster fejl ved ugyldigt input (objekt)", () => {
    expect(() => validateInput({ navn: "Test" })).toThrow("Ugyldigt input: Skal være en streng");
  });
});