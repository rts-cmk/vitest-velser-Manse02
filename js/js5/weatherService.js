//opgave 5
import { apiClient } from "./apiClient";

export async function getWeather(city) {
  if (!city) {
    throw new Error("By skal angives");
  }

  const response = await apiClient(`/weather?city=${city}`);

  if (!response?.data) {
    throw new Error("Ugyldigt svar fra API");
  }

  return response.data;
}
