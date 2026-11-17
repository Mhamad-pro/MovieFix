import { useState } from 'react'
import MovieCard from './MovieCard.jsx'

// Displays movie cards and opens a movie's details when clicked.
function MovieList({
  title,
  movies,
  favorites,
  toggleFavorite,
  emptyMessage = 'There are no movies to show right now.',
  children,
}) {
  const [selectedMovie, setSelectedMovie] = useState(null)

  return (
    <section className="movie-section">
      <div className="section-heading">
        <p className="eyebrow">PICK YOUR NEXT WATCH</p>
        <h2>{title}</h2>
      </div>

      {children}

      {selectedMovie && (
        <article className="movie-detail-view">
          <img className="movie-poster" src={selectedMovie.poster} alt={`${selectedMovie.title} poster`} />
          <div className="movie-detail-content">
            <button className="details-button" type="button" onClick={() => setSelectedMovie(null)}>
              ← Back to movies
            </button>
            <h2>{selectedMovie.title}</h2>
            <div className="movie-meta">
              <span>{selectedMovie.genre}</span>
              <span>{selectedMovie.year}</span>
              <span className="movie-rating">★ {selectedMovie.rating.toFixed(1)}</span>
            </div>
            <p className="movie-description">{selectedMovie.description}</p>
          </div>
        </article>
      )}

      {!selectedMovie && movies.length === 0 && (
        <p className="empty-message">{emptyMessage}</p>
      )}

      {!selectedMovie && movies.length > 0 && (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.includes(movie.id)}
              toggleFavorite={toggleFavorite}
              showDetails={setSelectedMovie}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default MovieList
