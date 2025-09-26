import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <h1>Doggy Daycare</h1>
        <nav className="nav">
          <Link to="/">Start</Link>
          <Link to="/catalog">Katalog</Link>
        </nav>
      </header>

      <main className="main">
        <section className="welcome">
          <h2>Välkommen till Doggy Daycare 🐶</h2>
          <p>
            Här kan du se alla hundar som besöker dagiset. Gå till katalogen för
            att bläddra eller klicka dig vidare till en hunds detaljsida.
          </p>
          <Link className="cta" to="/catalog">
            Gå till katalogen
          </Link>
        </section>
      </main>

      <footer className="footer">
        <small>Doggy Daycare • Skolprojekt</small>
      </footer>
    </div>
  );
}