import { Movie, Genre } from '../types/movie';

export const genres: Genre[] = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: 'Dune: Part Two',
    overview: 'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.',
    poster_path: 'https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop_path: 'https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    vote_average: 8.6,
    release_date: '2024-02-28',
    genre_ids: [878, 12, 28],
  },
  {
    id: 2,
    title: 'Inside Out 2',
    overview: 'Follow Riley in her teenage years as new emotions join her emotional team, bringing new challenges and adventures.',
    poster_path: 'https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop_path: 'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    vote_average: 7.9,
    release_date: '2024-06-14',
    genre_ids: [16, 35, 10751],
  },
  {
    id: 3,
    title: 'Furiosa: A Mad Max Saga',
    overview: 'The origin story of renegade warrior Furiosa before her encounter with Mad Max.',
    poster_path: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop_path: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    vote_average: 8.2,
    release_date: '2024-05-24',
    genre_ids: [28, 12, 878],
  },
  {
    id: 4,
    title: 'The Batman',
    overview: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.',
    poster_path: 'https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop_path: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    vote_average: 7.8,
    release_date: '2022-03-04',
    genre_ids: [80, 9648, 28],
  },
  {
    id: 5,
    title: 'Oppenheimer',
    overview: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    poster_path: 'https://images.pexels.com/photos/2078126/pexels-photo-2078126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop_path: 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    vote_average: 8.4,
    release_date: '2023-07-21',
    genre_ids: [18, 36],
  },
  {
    id: 6,
    title: 'Joker: Folie à Deux',
    overview: 'Sequel to the 2019 film Joker, centered on Arthur Fleck as he navigates his complex relationship with Harley Quinn.',
    poster_path: 'https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop_path: 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    vote_average: 7.6,
    release_date: '2024-10-04',
    genre_ids: [80, 18, 53],
  },
  {
    id: 7,
    title: 'Avatar: The Way of Water',
    overview: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na\'vi race to protect their home.',
    poster_path: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop_path: 'https://images.pexels.com/photos/3538721/pexels-photo-3538721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    vote_average: 7.7,
    release_date: '2022-12-16',
    genre_ids: [878, 12, 28],
  },
  {
    id: 8,
    title: 'Gladiator II',
    overview: 'The sequel to the 2000 historical epic film that follows a new hero\'s journey in ancient Rome.',
    poster_path: 'https://images.pexels.com/photos/4048182/pexels-photo-4048182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    backdrop_path: 'https://images.pexels.com/photos/3250561/pexels-photo-3250561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    vote_average: 8.3,
    release_date: '2024-11-22',
    genre_ids: [28, 18, 36],
  },
];

export const getGenreName = (genreId: number): string => {
  const genre = genres.find(g => g.id === genreId);
  return genre ? genre.name : 'Unknown';
};

export const getGenresForMovie = (movie: Movie): string[] => {
  return movie.genre_ids.map(id => getGenreName(id));
};