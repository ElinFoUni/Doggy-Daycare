import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Catalog.css";

function Catalog() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://api.jsonbin.io/v3/b/YOUR_BIN_ID"); // replace with your bin id
        const payload = await res.json();
        const data = payload.record ?? payload;
        const arr = Array.isArray(data) ? data : data.record ?? [];
        setDogs(arr);
      } catch (err) {
        console.error("Error loading dogs:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  function handleExport() {
    const blob = new Blob([JSON.stringify(dogs, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "dogs.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Dog Catalog</h2>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.chipNumber}>
            <img src={dog.img} alt={dog.name} width="80" height="80" />
            <p>{dog.name}</p>
            <p>{dog.breed}</p>
            <Link to={`/detailed-view?chip=${encodeURIComponent(dog.chipNumber)}`}>
              View details
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleExport}>Export Dogs</button>
    </div>
  );
}

export default Catalog;