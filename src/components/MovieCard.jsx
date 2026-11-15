// Displays one movie with buttons to view details and toggle favorites.
function MovieCard({ movie, isFavorite, toggleFavorite, showDetails }) {
  return (
    <article className="movie-card">
      <img className="movie-poster" src={movie.poster} alt={`Genre-themed photo for ${movie.title}`} loading="lazy" />
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <span>{movie.genre}</span>
          <span>{movie.year}</span>
          <span className="movie-rating">★ {movie.rating.toFixed(1)}</span>
        </div>
        <div className="movie-actions">
          <button className="details-button" type="button" onClick={() => showDetails(movie)}>
            Details
          </button>
          <button
            className={`favorite-button${isFavorite ? ' favorited' : ''}`}
            type="button"
            onClick={() => toggleFavorite(movie.id)}
            aria-pressed={isFavorite}
          >
            <span aria-hidden="true">{isFavorite ? '♥' : '♡'}</span>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
