import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { truncateText, formatRating } from '../utils/formatters';
import { Movie } from '../types/movie';
import { useWatchlist } from '../context/WatchlistContext';
import WatchlistButton from './WatchlistButton';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { isInWatchlist } = useWatchlist();
  
  return (
    <div className="group relative overflow-hidden rounded-lg bg-dark-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-full flex flex-col">
      <Link to={`/movie/${movie.id}`} className="relative block aspect-[2/3] overflow-hidden">
        <div className="absolute inset-0 bg-dark-400/30 group-hover:bg-dark-400/20 transition-all duration-300 z-10" />
        <img 
          src={movie.poster_path} 
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-400 via-dark-400/80 to-transparent z-20">
          <div className="flex items-center gap-2 mb-2">
            <Star className="text-yellow-400" size={16} fill="currentColor" />
            <span className="text-sm font-semibold">
              {formatRating(movie.vote_average)}
            </span>
            {isInWatchlist(movie.id) && (
              <div className="flex items-center gap-1 text-xs text-primary-300 ml-auto">
                <Clock size={14} />
                <span>Watchlist</span>
              </div>
            )}
          </div>
          <h3 className="text-lg font-bold text-white line-clamp-1">{movie.title}</h3>
        </div>
      </Link>
      
      <div className="p-4 flex flex-col justify-between flex-grow">
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {truncateText(movie.overview, 120)}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <Link 
            to={`/movie/${movie.id}`}
            className="text-sm font-medium text-primary-400 hover:text-primary-300 transition"
          >
            View Details
          </Link>
          <WatchlistButton movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;