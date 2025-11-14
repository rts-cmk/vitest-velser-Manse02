// opgave 6
import { getUserData } from "../js5/userService";
import { apiClient } from "./apiClient";

jest.mock("./apiClient");

describe("getUserData", () => {
  test("returnerer brugerdata ved succes", async () => {
    apiClient.mockResolvedValueOnce({
      data: { id: 1, name: "Alice" },
    });

    const result = await getUserData(1);
    expect(result).toEqual({ id: 1, name: "Alice" });
    expect(apiClient).toHaveBeenCalledWith("/users/1");
  });

  test("kaster fejl, hvis userId mangler", async () => {
    await expect(getUserData()).rejects.toThrow("User ID mangler");
  });

  test("håndterer fejl fra apiClient", async () => {
    apiClient.mockRejectedValueOnce(new Error("API-fejl"));
    await expect(getUserData(2)).rejects.toThrow("API-fejl");
  });
});
