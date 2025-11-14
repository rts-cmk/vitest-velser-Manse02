//opgave 5
import { describe, it, expect, vi } from "vitest";
import { getWeather } from "./weatherService";
import { apiClient } from "./apiClient";

vi.mock("./apiClient");

describe("getWeather", () => {
  it("returnerer vejrdata ved succes", async () => {
    apiClient.mockResolvedValueOnce({ data: { temp: 20, condition: "Sunny" } });

    const result = await getWeather("Copenhagen");

    expect(result).toEqual({ temp: 20, condition: "Sunny" });
    expect(apiClient).toHaveBeenCalledWith("/weather?city=Copenhagen");
  });

  it("kaster fejl, hvis by mangler", async () => {
    await expect(getWeather()).rejects.toThrow("By skal angives");
  });

  it("kaster fejl, hvis API returnerer ugyldigt svar", async () => {
    apiClient.mockResolvedValueOnce({});
    await expect(getWeather("Aarhus")).rejects.toThrow("Ugyldigt svar fra API");
  });

  it("kaster fejl, hvis apiClient fejler", async () => {
    apiClient.mockRejectedValueOnce(new Error("Netværksfejl"));
    await expect(getWeather("Odense")).rejects.toThrow("Netværksfejl");
  });
});
