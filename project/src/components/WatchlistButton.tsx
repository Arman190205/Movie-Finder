import React from 'react';
import { Heart } from 'lucide-react';
import { Movie } from '../types/movie';
import { useWatchlist } from '../context/WatchlistContext';

interface WatchlistButtonProps {
  movie: Movie;
  size?: 'sm' | 'md' | 'lg';
}

const WatchlistButton: React.FC<WatchlistButtonProps> = ({ movie, size = 'md' }) => {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  
  const inWatchlist = isInWatchlist(movie.id);
  
  const handleToggleWatchlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };
  
  // Define sizes
  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2.5',
  };
  
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };
  
  return (
    <button
      onClick={handleToggleWatchlist}
      className={`${sizeClasses[size]} rounded-full bg-dark-100 hover:bg-dark-300 transition-all duration-300 group relative ${
        inWatchlist ? 'text-error-500' : 'text-gray-400 hover:text-white'
      }`}
      aria-label={inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
      title={inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
    >
      <Heart 
        size={iconSizes[size]} 
        fill={inWatchlist ? 'currentColor' : 'none'} 
        className="transition-all duration-300"
      />
      
      <span className="sr-only">
        {inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
      </span>
      
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-dark-300 px-2 py-1 text-xs font-medium text-white opacity-0 shadow transition-opacity group-hover:opacity-100">
        {inWatchlist ? 'Remove' : 'Add to watchlist'}
      </span>
    </button>
  );
};

export default WatchlistButton;