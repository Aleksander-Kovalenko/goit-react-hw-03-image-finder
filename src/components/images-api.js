function fetchImages(nextName, page = 1) {
  return fetch(
    `https://pixabay.com/api/?q=${nextName}&page=${page}&key=24200561-e33c219a52f08aa11179044b0&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => response.json());
}

const api = {
  fetchImages,
};

export default api;
