import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import MovieGrid from '../components/MovieGrid';
import { mockMovies } from '../data/mockMovies';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredMovie, setFeaturedMovie] = useState(mockMovies[0]);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Select a random movie from the first 5 for the hero section
      const randomIndex = Math.floor(Math.random() * Math.min(5, mockMovies.length));
      setFeaturedMovie(mockMovies[randomIndex]);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-400">Loading amazing content...</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pb-12">
      <Hero movie={featuredMovie} />
      
      <div className="mt-12 space-y-16">
        <section>
          <MovieGrid 
            movies={mockMovies} 
            title="Trending Movies" 
          />
        </section>
      </div>
    </div>
  );
};

export default HomePage;