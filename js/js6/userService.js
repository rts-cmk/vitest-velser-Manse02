//opgave 6
import { apiClient } from "./apiClient";

export async function getUserData(userId) {
  if (!userId) {
    throw new Error("User ID mangler");
  }

  const response = await apiClient(`/users/${userId}`);
  return response.data;
}
