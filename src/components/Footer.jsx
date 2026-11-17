import { Link, NavLink } from 'react-router-dom'

const socialNetworks = ['Instagram', 'YouTube', 'X', 'TikTok']

/** Displays the brand, quick navigation links, and footer information. */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link className="footer-logo" to="/" aria-label="MovieFlix home">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span>Movie<span className="brand-accent">Flix</span></span>
          </Link>
          <p>Find a story worth watching.</p>
        </div>

        <nav className="footer-links" aria-label="Quick links">
          <h2>Quick links</h2>
          <ul>
           <NavLink to="/" className="nav-link" end>Home</NavLink>
<NavLink to="/movies" className="nav-link" end>Movies</NavLink>
<NavLink to="/favorites" className="nav-link" end>Favorites</NavLink>
<NavLink to="/about" className="nav-link" end>About</NavLink>
<NavLink to="/contact" className="nav-link" end>Contact</NavLink>
            
          </ul>
        </nav>

        <div className="footer-social">
          <h2>Follow us</h2>
          <ul>
            {socialNetworks.map((network) => (
              <li key={network}>{network}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MovieFlix. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
