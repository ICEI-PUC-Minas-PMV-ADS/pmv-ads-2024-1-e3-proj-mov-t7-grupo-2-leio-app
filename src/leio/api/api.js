export const fetchBooks = async (query, maxResults, orderBy) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&orderBy=${orderBy}`
  );
  const data = await response.json();
  return data.items || [];
};
