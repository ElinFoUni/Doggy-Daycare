import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Catalog.css";

function Catalog() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("https://api.jsonbin.io/v3/b/68ccf99ad0ea881f4082d5b8");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const payload = await res.json();
        const arr = Array.isArray(payload.record) ? payload.record : [];
        setDogs(arr);
      } catch (err) {
        console.error("Error loading dogs:", err);
        setError("Failed to load dogs.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!dogs.length) return <p>No dogs found.</p>;

  return (
    <div>
      <h2>Dog Catalog</h2>
      <section className="gallery-grid">
        {dogs.map((dog) => (
          <Link
            key={dog.chipNumber}
            className="gallery-card"
            to={`/detailed-view?chip=${encodeURIComponent(dog.chipNumber)}`}
          >
            <img src={dog.img} alt={dog.name} />
            <span>{dog.name}</span>
          </Link>
        ))}
      </section>

      <div className="back-container">
        <Link className="back-button" to="/">
          ← Back to Main
        </Link>
      </div>
    </div>
  );
}

export default Catalog;