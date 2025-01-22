const API_KEY = '28421510-bfe8297e886d2caaf1b8bcf7e';

function getImg(searchValue) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`https://pixabay.com/api/?${searchParams.toString()}`).then(
    res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    }
  );
}

export { getImg };