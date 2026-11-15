import MovieList from '../components/MovieList.jsx'

function Home({ movies, favorites, toggleFavorite, setPage }) {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">YOUR NEXT FAVORITE FILM</p>
        <h1>Welcome to MovieFlix</h1>
        <p>Discover a great story for your next movie night and keep your favorites close.</p>
        <button className="primary-button" type="button" onClick={() => setPage('Movies')}>
          View all movies <span aria-hidden="true">→</span>
        </button>
      </section>

      <MovieList title="Featured movie" movies={movies.slice(0, 1)} favorites={favorites} toggleFavorite={toggleFavorite} />
      <MovieList title="Popular movies" movies={movies.slice(1, 4)} favorites={favorites} toggleFavorite={toggleFavorite} />
    </>
  )
}

export default Home
