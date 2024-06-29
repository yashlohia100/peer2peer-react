const API_URL = 'http://localhost:8000/api';

export async function getAllListingsApi(searchParamsString) {
  let url = 'http://localhost:8000/api/listings';

  if (searchParamsString) {
    url += '?' + searchParamsString;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error('Unable to get listings.');
  const data = await res.json();
  return data.listings;
}

export async function getListingApi(listingId) {
  const res = await fetch(`${API_URL}/listings/${listingId}`);
  if (!res.ok) throw new Error('Unable to get listing.');
  const data = await res.json();
  return data.listing;
}
