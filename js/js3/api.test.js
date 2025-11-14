//opgave 3
import { fetchData } from "./api";

describe("fetchData", () => {
  test("returnerer data ved succes", async () => {
    const data = await fetchData(true);
    expect(data).toEqual({ message: "Data hentet korrekt!" });
  });

  test("kaster fejl ved fejltilfælde", async () => {
    await expect(fetchData(false)).rejects.toThrow("Noget gik galt!");
  });
});