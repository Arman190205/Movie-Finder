import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Film } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import { useMovies } from '../hooks/useMovies';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hasSearched, setHasSearched] = useState(false);
  
  const query = searchParams.get('q') || '';
  const { movies, isLoading, error } = useMovies(query);
  
  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim() === '') {
      setSearchParams({});
    } else {
      setSearchParams({ q: searchQuery });
    }
    setHasSearched(true);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Search Movies</h1>
          <SearchBar 
            onSearch={handleSearch}
            initialQuery={query}
          />
        </div>
        
        <div className="mt-12">
          {isLoading ? (
            <div className="flex flex-col items-center py-16">
              <LoadingSpinner size="md" />
              <p className="mt-4 text-gray-400">Searching for "{query}"...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="bg-dark-200 rounded-full p-6 mb-4">
                <Film size={48} className="text-error-500" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Error</h2>
              <p className="text-gray-400 max-w-md">{error}</p>
            </div>
          ) : query ? (
            <div>
              <p className="text-gray-400 mb-6">
                {movies.length} {movies.length === 1 ? 'result' : 'results'} for "{query}"
              </p>
              <MovieGrid 
                movies={movies}
                emptyMessage={`No movies found matching "${query}"`}
              />
            </div>
          ) : hasSearched ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="bg-dark-200 rounded-full p-6 mb-4">
                <Film size={48} className="text-primary-500" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Search cleared</h2>
              <p className="text-gray-400 max-w-md">
                Enter a movie title or keyword to search again
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="bg-dark-200 rounded-full p-6 mb-4">
                <Film size={48} className="text-primary-500" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Find your next favorite movie</h2>
              <p className="text-gray-400 max-w-md">
                Search by movie title, actors, or keywords to discover new content
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;