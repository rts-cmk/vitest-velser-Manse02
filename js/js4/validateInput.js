//opgave 4
export function validateInput(input) {
  if (typeof input !== "string") {
    throw new Error("Ugyldigt input: Skal være en streng");
  }
  return input.trim();
}