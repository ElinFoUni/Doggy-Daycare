import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Catalog from "./Catalog";
import DetailedView from "./DetailedView";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <h1>Doggy Daycare</h1>
          <nav>
            <Link to="/">Welcome to Doggy Daycare!</Link>
            <Link to="/catalog">Catalog</Link>
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <section className="welcome">
                  <h2>Välkommen till Doggy Daycare 🐶</h2>
                  <p>
                    Här kan du se alla hundar som besöker dagiset. Klicka vidare
                    för att se detaljer om varje hund.
                  </p>
                  <Link className="cta" to="/catalog">
                    Gå till katalogen
                  </Link>
                </section>
              }
            />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/dogs/:chip" element={<DetailedView />} />
          </Routes>
        </main>

        <footer className="footer">
          <small>Doggy Daycare — Skola Projekt</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;