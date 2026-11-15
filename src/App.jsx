import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import Favourites from './pages/Favourites.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import movies from './data/movies.js'

function App() {
  const [page, setPage] = useState('Home')
  const [favorites, setFavorites] = useState([])

  // Adds a movie to favorites or removes it if already saved.
  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((movieId) => movieId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  function showPage() {
    if (page === 'Movies') {
      return <Movies movies={movies} favorites={favorites} toggleFavorite={toggleFavorite} />
    }

    if (page === 'Favorites') {
      const savedMovies = movies.filter((movie) => favorites.includes(movie.id))
      return <Favourites movies={savedMovies} favorites={favorites} toggleFavorite={toggleFavorite} />
    }

    if (page === 'About') return <About />
    if (page === 'Contact') return <Contact />

    return (
      <Home movies={movies} favorites={favorites} toggleFavorite={toggleFavorite} setPage={setPage} />
    )
  }

  return (
    <div className="app-shell">
      <Navbar activePage={page} onNavigate={setPage} />
      <main className="main-content" aria-live="polite">{showPage()}</main>
      <Footer onNavigate={setPage} />
    </div>
  )
}

export default App
