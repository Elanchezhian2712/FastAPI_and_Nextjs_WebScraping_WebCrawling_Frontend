export const searchProducts = async (query) => {
  const response = await fetch(`http://localhost:8000/search/?query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};
