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
        'ngrok-skip-browser-warning': 'true'
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API response:', data);
    
    // Handle your specific API response structure
    const resultsArray = data.results || [];
    
    // Map the API response to your SearchResult interface
    const results: SearchResult[] = resultsArray.map((item: any, index: number) => ({
      id: item.result_number?.toString() || `result-${index}`,
      title: item.title || 'Untitled',
      content: item.summary || item.content || '', // Use summary as content
      url: item.url || item.source, // Use source if no URL
      score: item.score || (1 - index * 0.1), // Generate scores if not provided
    }));
    
    return results;
  } catch (error) {
    console.error('Search API error:', error);
    throw new Error('Failed to fetch search results');
  }
};
