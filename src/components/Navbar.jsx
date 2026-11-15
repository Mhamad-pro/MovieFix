import { PAGES } from '../data/navigation.js'

function Navbar({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <button
        className="brand"
        type="button"
        onClick={() => onNavigate('Home')}
        aria-label="MovieFlix home"
      >
        <span className="brand-mark" aria-hidden="true">M</span>
        <span>Movie<span className="brand-accent">Flix</span></span>
      </button>

      <nav className="main-nav" aria-label="Main navigation">
        {PAGES.map((page) => (
          <button
            key={page}
            className={`nav-link${activePage === page ? ' active' : ''}`}
            type="button"
            onClick={() => onNavigate(page)}
            aria-current={activePage === page ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
