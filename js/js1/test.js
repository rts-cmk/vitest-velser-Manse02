// Opgave 1
import handleValue from "./main.js";

describe("handleValue", () => {
  test("returnerer tal gange 2", () => {
    expect(handleValue(5)).toBe(10);
    expect(handleValue(-3)).toBe(-6);
  });

  test("returns big letters from string", () => {
    expect(handleValue("hello")).toBe("HELLO");
  });

  test("returns 'No value' with null", () => {
    expect(handleValue(null)).toBe("No value");
  });

  test("gives error at NaN", () => {
    expect(() => handleValue(NaN)).toThrow("Invalid number");
  });

  test("throwing error with empty string", () => {
    expect(() => handleValue("")).toThrow("Empty string");
  });

  test("kaster fejl ved ikke-understøttet type", () => {
    expect(() => handleValue({})).toThrow("Unsupported type");
  });
});
