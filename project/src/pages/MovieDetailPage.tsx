import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star, Calendar, Clock } from 'lucide-react';
import { Movie } from '../types/movie';
import { mockMovies, getGenresForMovie } from '../data/mockMovies';
import { formatDate, formatRating } from '../utils/formatters';
import WatchlistButton from '../components/WatchlistButton';
import LoadingSpinner from '../components/LoadingSpinner';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      if (id) {
        const movieId = parseInt(id, 10);
        const foundMovie = mockMovies.find(m => m.id === movieId);
        
        if (foundMovie) {
          setMovie(foundMovie);
          
          // Find movies with at least one matching genre
          const related = mockMovies
            .filter(m => {
              if (m.id === movieId) return false;
              return m.genre_ids.some(g => foundMovie.genre_ids.includes(g));
            })
            .slice(0, 4);
            
          setSimilarMovies(related);
        }
      }
      
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen pt-20">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-400">Loading movie details...</p>
      </div>
    );
  }
  
  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen pt-20">
        <h1 className="text-2xl font-semibold mb-4">Movie Not Found</h1>
        <p className="text-gray-400 mb-8">Sorry, we couldn't find the movie you're looking for.</p>
        <Link 
          to="/"
          className="flex items-center gap-2 text-primary-500 hover:text-primary-400 transition"
        >
          <ChevronLeft size={20} />
          Back to Home
        </Link>
      </div>
    );
  }
  
  const genres = getGenresForMovie(movie);
  
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/80 to-dark-300/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-300 to-transparent z-10" />
          <img 
            src={movie.backdrop_path} 
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute top-4 left-4 z-30">
          <Link 
            to="/"
            className="flex items-center gap-2 text-white bg-dark-300/60 px-4 py-2 rounded-full hover:bg-dark-300/80 transition"
          >
            <ChevronLeft size={20} />
            Back
          </Link>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={movie.poster_path} 
                alt={movie.title}
                className="w-full h-auto"
              />
            </div>
            
            <div className="mt-6 flex flex-col gap-4">
              <button className="w-full py-3 bg-primary-600 hover:bg-primary-700 rounded-lg text-white font-medium transition">
                Watch Trailer
              </button>
              
              <div className="flex items-center justify-center gap-4">
                <WatchlistButton movie={movie} size="lg" />
              </div>
            </div>
          </div>
          
          {/* Details */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {movie.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1" size={18} fill="currentColor" />
                <span className="font-bold">{formatRating(movie.vote_average)}</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Calendar size={16} className="mr-1" />
                <span>{formatDate(movie.release_date)}</span>
              </div>
              
              <div className="flex items-center flex-wrap gap-2 mt-2 md:mt-0">
                {genres.map((genre, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-dark-100 rounded-full text-xs"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-dark-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {movie.overview}
              </p>
            </div>
            
            {/* Similar Movies */}
            {similarMovies.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Similar Movies You Might Like</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {similarMovies.map(similar => (
                    <Link 
                      key={similar.id} 
                      to={`/movie/${similar.id}`}
                      className="block rounded-lg overflow-hidden group"
                    >
                      <div className="relative aspect-[2/3]">
                        <img 
                          src={similar.poster_path} 
                          alt={similar.title}
                          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-dark-400/40 group-hover:bg-dark-400/20 transition-all duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-dark-400 to-transparent">
                          <h3 className="text-sm font-medium text-white truncate">
                            {similar.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;