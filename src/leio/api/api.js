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
