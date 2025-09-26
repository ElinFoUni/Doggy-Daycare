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
          <h2>Welcome to Doggy Daycare 🐶</h2>
          <p>
            Here you can view all our doggy day care visitors in our catalog:
          </p>
          <Link className="cta" to="/catalog">
            Go to the Catalog!
          </Link>
        </section>
      </main>

      <footer className="footer">
        <small>Doggy Daycare • School project</small>
      </footer>
    </div>
  );
}