import { Link, NavLink } from 'react-router-dom'

/** Displays the main navigation and highlights the page that matches the URL. */
function Navbar() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="MovieFlix home">
        <span className="brand-mark" aria-hidden="true">M</span>
        <span>Movie<span className="brand-accent">Flix</span></span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" className="nav-link" end>Home</NavLink>
<NavLink to="/movies" className="nav-link" end>Movies</NavLink>
<NavLink to="/favorites" className="nav-link" end>Favorites</NavLink>
<NavLink to="/about" className="nav-link" end>About</NavLink>
<NavLink to="/contact" className="nav-link" end>Contact</NavLink>
        
      </nav>
    </header>
  )
}

export default Navbar
