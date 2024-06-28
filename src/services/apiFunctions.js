export async function getAllListingsApi(type) {
  let url = null;
  if (type !== 'all') {
    url = `http://localhost:8000/api/listings?listingType=${type}`;
  } else {
    url = `http://localhost:8000/api/listings`;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error('Unable to get listings.');
  const data = await res.json();
  return data.listings;
}
