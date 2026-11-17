import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import Favourites from './pages/Favourites.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import movies from './data/movies.js'

// Main component: remembers favorite movies and shows the page that matches the URL.
function App() {
  const [favorites, setFavorites] = useState([])

  // Adds a movie to favorites or removes it if already saved.
  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((movieId) => movieId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const savedMovies = movies.filter((movie) => favorites.includes(movie.id))

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content" aria-live="polite">
        <Routes>
          <Route path="/" element={<Home movies={movies} favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/movies" element={<Movies movies={movies} favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/favorites" element={<Favourites movies={savedMovies} favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
