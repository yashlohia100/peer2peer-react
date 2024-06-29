export async function getAllListingsApi(type, city, page) {
  let url = 'http://localhost:8000/api/listings';
  let isFirstParam = true;

  if (type && type !== 'all' && type !== 'null') {
    url += `?listingType=${type}`;
    isFirstParam = false;
  }

  if (city && city !== 'null') {
    if (isFirstParam) {
      url += `?city=${city}`;
      isFirstParam = false;
    } else {
      url += `&city=${city}`;
    }
  }

  if (page) {
    if (isFirstParam) {
      url += `?page=${page}`;
      isFirstParam = false;
    } else {
      url += `&page=${page}`;
    }
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error('Unable to get listings.');
  const data = await res.json();
  return data.listings;
}
