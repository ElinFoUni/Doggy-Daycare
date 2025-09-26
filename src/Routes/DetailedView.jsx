import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./DetailedView.css";

function DetailedView() {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // read ?chip=... from the URL
  const query = new URLSearchParams(location.search);
  const chip = query.get("chip");

  useEffect(() => {
    async function loadOne() {
      try {
        const res = await fetch("https://api.jsonbin.io/v3/b/68d6fcbfae596e708ffd15f0");
        const payload = await res.json();
        const data = payload.record ?? payload;
        const arr = Array.isArray(data) ? data : data.record ?? [];
        const found = arr.find((d) => d.chipNumber === chip);
        setDog(found || null);
      } catch (err) {
        console.error("Error loading dog:", err);
      } finally {
        setLoading(false);
      }
    }
    loadOne();
  }, [chip]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!dog) {
    return (
      <div>
        <p>No dog found.</p>
        <Link to="/catalog">Back to catalog</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.img} alt={dog.name} width="200" />
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Sex: {dog.sex}</p>
      <p>Chip Number: {dog.chipNumber}</p>
      <p>Present: {dog.present ? "Yes" : "No"}</p>
      <h3>Owner</h3>
      <p>{dog.owner?.name} {dog.owner?.lastName}</p>
      <p>Phone: {dog.owner?.phoneNumber}</p>
      <Link to="/catalog">Back to catalog</Link>
    </div>
  );
}

export default DetailedView;