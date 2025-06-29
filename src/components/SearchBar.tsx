
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-4xl mx-auto mb-12">
      <div className="relative flex items-center">
        <div className="absolute left-6 z-10">
          <Search className="h-6 w-6 text-sigma-blue" />
        </div>
        <Input
          type="text"
          placeholder="What are you looking for ?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-16 pl-16 pr-32 text-lg border-2 border-sigma-blue/20 rounded-2xl focus:border-sigma-blue focus:ring-2 focus:ring-sigma-blue/20 transition-all duration-300"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="absolute right-2 h-12 px-8 bg-sigma-blue hover:bg-sigma-navy text-white rounded-xl transition-all duration-300 font-medium"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
