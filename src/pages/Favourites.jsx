import MovieList from "../components/MovieList.jsx";

function Favourites({ movies, favorites, toggleFavorite }) {
  return (
    <MovieList
      title="Your favorites"
      movies={movies}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      emptyMessage="Save a movie with the heart button and it will show up here."
    />
  );
}

export default Favourites;
