import { useState } from 'react'
import MovieList from '../components/MovieList.jsx'

function Movies({ movies, favorites, toggleFavorite }) {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('All genres')

  const genres = [...new Set(movies.map((movie) => movie.genre))]
  const visibleMovies = movies.filter((movie) => {
    const titleMatches = movie.title.toLowerCase().includes(search.toLowerCase().trim())
    const genreMatches = genre === 'All genres' || movie.genre === genre
    return titleMatches && genreMatches
  })

  return (
    <MovieList
      title="All movies"
      movies={visibleMovies}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      emptyMessage="No movies match your search and genre filter."
    >
      <div className="movie-filters">
        <label className="movie-filter-control">
          <span>Search by title</span>
          <input
            type="search"
            placeholder="Search movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <label className="movie-filter-control">
          <span>Filter by genre</span>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option>All genres</option>
            {genres.map((movieGenre) => (
              <option key={movieGenre}>{movieGenre}</option>
            ))}
          </select>
        </label>
      </div>
    </MovieList>
  )
}

export default Movies
