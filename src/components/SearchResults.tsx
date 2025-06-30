
import React from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SearchResult {
  id: string;
  title: string;
  content: string;
  url?: string;
  score: number;
}

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
  query: string;
}

const SearchResults = ({ results, isLoading, query }: SearchResultsProps) => {
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (results.length === 0 && query) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="w-16 h-16 bg-sigma-lightBlue/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="h-8 w-8 text-sigma-blue" />
        </div>
        <h3 className="text-xl font-semibold text-sigma-navy mb-2">No results found</h3>
        <p className="text-sigma-blue">Try adjusting your search terms or using different keywords.</p>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <p className="text-sigma-blue">
          Found <span className="font-semibold">{results.length}</span> results for "{query}"
        </p>
      </div>
      
      <div className="space-y-6">
        {results.map((result, index) => (
          <Card 
            key={result.id} 
            className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-sigma-lightBlue animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <CardTitle className="text-sigma-navy hover:text-sigma-blue transition-colors cursor-pointer">
                {result.url ? (
                  <a href={result.url} target="_blank" rel="noopener noreferrer">
                    {result.title}
                  </a>
                ) : (
                  result.title
                )}
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-sigma-blue">
                <span>Relevance: {(result.score * 100).toFixed(1)}%</span>
                {result.url && (
                  <>
                    <span>•</span>
                    <span className="text-sigma-lightBlue truncate">{result.url}</span>
                  </>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{result.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
