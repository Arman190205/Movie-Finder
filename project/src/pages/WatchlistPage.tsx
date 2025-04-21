import React, { useState, useEffect } from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import MovieGrid from '../components/MovieGrid';
import { Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const WatchlistPage: React.FC = () => {
  const { watchlist } = useWatchlist();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen pt-20">
        <LoadingSpinner size="md" />
        <p className="mt-4 text-gray-400">Loading your watchlist...</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Watchlist</h1>
          <p className="text-gray-400">
            Movies and shows you've saved to watch later
          </p>
        </div>
        
        {watchlist.length > 0 ? (
          <MovieGrid 
            movies={watchlist} 
            emptyMessage="Your watchlist is empty"
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-dark-200 rounded-full p-6 mb-4">
              <Film size={48} className="text-primary-500" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Your watchlist is empty</h2>
            <p className="text-gray-400 max-w-md mb-6">
              Save movies and shows to your watchlist to keep track of what you want to watch next.
            </p>
            <Link
              to="/"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-full text-white font-medium transition"
            >
              Discover Movies
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchlistPage;