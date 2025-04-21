import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';
import { formatRating } from '../utils/formatters';
import { getGenresForMovie } from '../data/mockMovies';
import WatchlistButton from './WatchlistButton';

interface HeroProps {
  movie: Movie;
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
  const genres = getGenresForMovie(movie);
  
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/80 to-dark-300/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-300 to-transparent z-10" />
        <img 
          src={movie.backdrop_path} 
          alt={movie.title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {movie.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm mb-6">
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1" size={16} fill="currentColor" />
              <span className="font-bold">{formatRating(movie.vote_average)}</span>
            </div>
            
            <span className="text-gray-400">|</span>
            
            <div className="flex items-center flex-wrap gap-2">
              {genres.map((genre, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-dark-200/60 rounded-full text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-gray-300 mb-8 text-lg leading-relaxed line-clamp-3">
            {movie.overview}
          </p>
          
          <div className="flex items-center gap-4">
            <Link 
              to={`/movie/${movie.id}`}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-full text-white font-medium transition flex items-center gap-2"
            >
              View Details
              <ChevronRight size={16} />
            </Link>
            
            <WatchlistButton movie={movie} size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;