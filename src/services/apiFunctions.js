export async function getAllListingsApi() {
  const res = await fetch(`http://localhost:8000/api/listings`);
  if (!res.ok) throw new Error('Unable to get listings.');
  const data = await res.json();
  return data.listings;
}
