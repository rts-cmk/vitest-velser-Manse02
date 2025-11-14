// Opgave1
function handleValue(input) {
  if (input === null) {
    return "No value";
  }

  if (typeof input === "number") {
    if (isNaN(input)) {
      throw new Error("Invalid number");
    }
    return input * 2;
  }

  if (typeof input === "string") {
    if (input.trim() === "") {
      throw new Error("Empty string");
    }
    return input.toUpperCase();
  }

  throw new Error("Unsupported type");
}

export default handleValue;
