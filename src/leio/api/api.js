export const fetchBooks = async (query, maxResults, orderBy) => {
  try {
    if (!query || !maxResults || !orderBy) {
      throw new Error('Missing required parameters');
    }

    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=${maxResults}&orderBy=${orderBy}`;
    console.log('Fetching books from URL:', url);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export const fetchFilteredBooks = async (query, maxResults, orderBy, filters) => {
  try {
    if (!query || !maxResults || !orderBy) {
      throw new Error('Missing required parameters');
    }

    let baseUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

    if (filters.genres && filters.genres.length > 0) {
      const genreParam = filters.genres.map(genre => `subject:${encodeURIComponent(genre)}`).join('+');
      baseUrl += `+${genreParam}`;
    }

    if (filters.formats && filters.formats.length > 0) {
      const formatParam = filters.formats.map(format => `printType:${encodeURIComponent(format)}`).join('+');
      baseUrl += `+${formatParam}`;
    }

    const url = `${baseUrl}&maxResults=${maxResults}&orderBy=${orderBy}`;

    console.log('Fetching filtered books from URL:', url);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching filtered books:', error);
    return [];
  }
};
