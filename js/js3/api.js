//opgave 3
export function fetchData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ message: "Data hentet korrekt!" });
      } else {
        reject(new Error("Noget gik galt!"));
      }
    }, 500);
  });
}