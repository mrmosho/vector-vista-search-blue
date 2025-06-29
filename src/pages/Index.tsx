
import React, { useState } from 'react';
import SearchHeader from '@/components/SearchHeader';
import SearchBar from '@/components/SearchBar';
import SearchResults from '@/components/SearchResults';
import GeometricBackground from '@/components/GeometricBackground';
import { searchAPI, SearchResult } from '@/services/searchService';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setCurrentQuery(query);
    
    try {
      console.log('Starting search for:', query);
      const searchResults = await searchAPI(query);
      console.log('Search results received:', searchResults);
      setResults(searchResults);
      
      toast({
        title: "Search completed",
        description: `Found ${searchResults.length} results for "${query}"`,
      });
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Search failed",
        description: "An error occurred while searching. Please try again.",
        variant: "destructive"
      });
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <GeometricBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <SearchHeader />
            <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          </div>

          {/* Results Section */}
          <SearchResults 
            results={results} 
            isLoading={isLoading} 
            query={currentQuery}
          />

          {/* Footer */}
          <footer className="mt-20 text-center text-sigma-blue/60">
            <p>Powered by advanced vector search technology</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
