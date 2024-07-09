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

export async function loginApi(payload) {
  const res = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Unable to login.');

  const data = await res.json();
  return data.user;
}

export async function signupApi(payload) {
  const res = await fetch(`${API_URL}/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Unable to signup.');

  const data = await res.json();
  return data.user;
}

export async function getCurrentUserApi() {
  const res = await fetch(`${API_URL}/users/me`, { credentials: 'include' });

  if (!res.ok) throw new Error('Unable to get user.');

  const data = await res.json();
  return data.user;
}

export async function logoutApi() {
  const res = await fetch(`${API_URL}/users/logout`, {
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Unable to logout.');

  const data = await res.json();
  return data;
}
