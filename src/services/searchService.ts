
export interface SearchResult {
  id: string;
  title: string;
  content: string;
  url?: string;
  score: number;
}

const API_BASE_URL = 'https://a78c-62-193-124-9.ngrok-free.app';

export const searchAPI = async (query: string): Promise<SearchResult[]> => {
  console.log(`Searching for: ${query}`);
  
  try {
    const response = await fetch(`${API_BASE_URL}/search?query=${encodeURIComponent(query)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API response:', data);
    
    // Map the API response to our SearchResult interface
    // Adjust this mapping based on your actual API response structure
    const results: SearchResult[] = data.map((item: any, index: number) => ({
      id: item.id || `result-${index}`,
      title: item.title || 'Untitled',
      content: item.content || item.description || '',
      url: item.url,
      score: item.score || item.relevance || 1,
    }));

    return results.slice(0, 10); // Return top 10 results
  } catch (error) {
    console.error('Search API error:', error);
    throw new Error('Failed to fetch search results');
  }
};
