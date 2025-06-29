
// Mock search service that simulates vector search API calls
export interface SearchResult {
  id: string;
  title: string;
  content: string;
  url?: string;
  score: number;
}

// Mock data for demonstration
const mockResults: SearchResult[] = [
  {
    id: '1',
    title: 'Advanced Vector Search Algorithms',
    content: 'Vector search algorithms utilize high-dimensional vector spaces to find semantically similar content. These algorithms are particularly effective for natural language processing and recommendation systems.',
    url: 'https://example.com/vector-search',
    score: 0.95
  },
  {
    id: '2',
    title: 'Machine Learning in Search Technology',
    content: 'Modern search engines leverage machine learning models to understand user intent and deliver more relevant results. This includes neural networks, transformer models, and embedding techniques.',
    url: 'https://example.com/ml-search',
    score: 0.89
  },
  {
    id: '3',
    title: 'Semantic Search and Natural Language Understanding',
    content: 'Semantic search goes beyond keyword matching to understand the meaning and context of queries. It uses advanced NLP techniques to interpret user intent and provide contextually relevant results.',
    url: 'https://example.com/semantic-search',
    score: 0.87
  },
  {
    id: '4',
    title: 'Building Scalable Search Infrastructure',
    content: 'Creating search systems that can handle millions of queries requires careful architecture design, including distributed indexing, caching strategies, and real-time data processing.',
    url: 'https://example.com/scalable-search',
    score: 0.82
  },
  {
    id: '5',
    title: 'Vector Embeddings and Similarity Metrics',
    content: 'Vector embeddings transform text, images, and other data into numerical representations that capture semantic relationships. Common similarity metrics include cosine similarity and Euclidean distance.',
    url: 'https://example.com/embeddings',
    score: 0.78
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const searchAPI = async (query: string): Promise<SearchResult[]> => {
  console.log(`Searching for: ${query}`);
  
  // Simulate API call delay
  await delay(1000 + Math.random() * 1000);
  
  // Filter and score results based on query relevance
  const filteredResults = mockResults
    .map(result => ({
      ...result,
      score: result.score * (0.7 + Math.random() * 0.3) // Add some randomness
    }))
    .filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.content.toLowerCase().includes(query.toLowerCase()) ||
      Math.random() > 0.3 // Include some results even if they don't match exactly
    )
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // Return top 10 results
  
  return filteredResults;
};
