import { PAGES } from '../data/navigation.js'

const socialNetworks = ['Instagram', 'YouTube', 'X', 'TikTok']

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <button
            className="footer-logo"
            type="button"
            onClick={() => onNavigate('Home')}
            aria-label="MovieFlix home"
          >
            <span className="brand-mark" aria-hidden="true">M</span>
            <span>Movie<span className="brand-accent">Flix</span></span>
          </button>
          <p>Find a story worth watching.</p>
        </div>

        <nav className="footer-links" aria-label="Quick links">
          <h2>Quick links</h2>
          <ul>
            {PAGES.map((page) => (
              <li key={page}>
                <button type="button" onClick={() => onNavigate(page)}>
                  {page}
                </button>
              </li>
            ))}
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
