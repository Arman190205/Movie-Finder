import { useState, useEffect } from 'react';
import { Movie } from '../types/movie';

const OMDB_API_KEY = 'a2ee96d4';
const OMDB_BASE_URL = 'https://www.omdbapi.com';

export const useMovies = (searchQuery: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchQuery.trim()) {
        setMovies([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${OMDB_BASE_URL}/?s=${encodeURIComponent(searchQuery)}&apikey=${OMDB_API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }

        const data = await response.json();

        if (data.Response === 'False') {
          setMovies([]);
          setError(data.Error || 'No movies found');
          return;
        }

        const transformedMovies: Movie[] = data.Search.map((movie: any) => ({
          id: parseInt(movie.imdbID.slice(2), 10),
          title: movie.Title,
          overview: 'Overview will be fetched on detail page',
          poster_path: movie.Poster !== 'N/A' ? movie.Poster : 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg',
          backdrop_path: 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg',
          vote_average: 0,
          release_date: movie.Year,
          genre_ids: [],
        }));

        setMovies(transformedMovies);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimeout = setTimeout(fetchMovies, 500);
    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  return { movies, isLoading, error };
};