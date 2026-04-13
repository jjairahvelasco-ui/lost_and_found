import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/items`
        );
        setItems(res.data);
      } catch (err) {
        console.log(err);
        setError("Failed to load items");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center border-x border-gray-200 max-w-[1126px] mx-auto text-center bg-white text-gray-700 p-6">

      <h1 className="text-5xl font-bold text-gray-900 my-6">
        Lost & Found System
      </h1>

      <h2 className="text-xl mb-2">
        Find your lost items easily
      </h2>

      <p className="text-gray-600 mb-4">
        Backend-connected system
      </p>

      <div className="mb-6">
        <code className="bg-gray-100 px-3 py-1 rounded">
          API Status: {error ? "Error ❌" : "Connected ✅"}
        </code>
      </div>

      {/* LOADING */}
      {loading && <p>Loading items...</p>}

      {/* ERROR */}
      {error && <p className="text-red-500">{error}</p>}

      {/* ITEMS */}
      <div className="w-full space-y-3 mt-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="border border-gray-200 rounded p-3"
          >
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
            <p className="text-xs text-gray-400">{item.location}</p>
          </div>
        ))}
      </div>

    </div>
  );
}