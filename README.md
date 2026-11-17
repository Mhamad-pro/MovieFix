# MovieFlix — Simple React Version

An easier-to-read version of the original MovieFlix React website. The same pages and styling are included, along with movie search, genre filtering, movie details, favorites, and a demo contact form.

**The code uses simple `if` statements instead of `switch` or `case`, and each named function/component has one short comment.** Pages are switched with React Router, so each page has its own address (for example `/movies`). It does not use a database or other complex libraries.

## How to run

1. Open the `MovieFlx` folder (the one containing `package.json`) in VS Code.
2. Open a terminal in that folder.
3. Run:

```bash
npm install
npm run dev
```

Open the localhost address shown in the terminal.

## Where the important code is

- `src/main.jsx` — wraps the app in `BrowserRouter`.
- `src/App.jsx` — remembers favorites; maps each URL to a page with `<Routes>` and `<Route>`.
- `src/pages/Home.jsx` — welcome banner and featured/popular movies.
- `src/pages/Movies.jsx` — movie search and genre filter.
- `src/pages/Favourites.jsx` — favorite movies.
- `src/pages/Contact.jsx` — example contact form (does not send a real email).
- `src/pages/About.jsx` — about page.
- `src/components/Navbar.jsx` — navigation bar.
- `src/components/Footer.jsx` — footer.
- `src/components/MovieList.jsx` — movie cards, empty message, and selected movie details.
- `src/components/MovieCard.jsx` — one movie card and its buttons.
- `src/data/movies.js` — the movie data.
- `src/data/navigation.js` — page names and their URL paths.
- `src/*.css` — original dark/red website styling.

## Changes from the original

- Navigation uses React Router: `/`, `/movies`, `/favorites`, `/about`, `/contact`.
- Comments are above functions, rather than on nearly every line.
- Removed extra display components and kept movie cards/details inside just `MovieCard` and `MovieList`.
- Simplified names and removed excessive code comments.
- The website design and main features are kept.

**Note:** Favorite selections disappear after refreshing the webpage, just as in the original. The movie images are real posters loaded from TMDB (themoviedb.org). The contact form is only a demo, so submitting it does not send a real message.

## Optional checks

```bash
npm run lint
npm run build
```
