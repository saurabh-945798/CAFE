import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch menu data from Firebase
  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        "https://menu2-2dbe2-default-rtdb.europe-west1.firebasedatabase.app/Menu.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
      const data = await response.json();
      console.log(data);

      if (!data) {
        Swal.fire({
          icon: "warning",
          title: "No Data Found",
          text: "No menu items available in the database.",
        });
        setLoading(false);
        return;
      }

      // Convert object to array
      const formattedData = Object.entries(data).map(([id, item]) => ({
        id,
        ...item,
      }));

      setMenuItems(formattedData);
      setLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Unable to load menu. Please try again later.",
      });
      console.error("Error fetching menu data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <div style={{ backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      <header style={{ backgroundColor: "#4CAF50", padding: "1rem", color: "#fff" }}>
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Menu</h1>
      </header>

      <div style={{ padding: "2rem" }}>
        {loading ? (
          <div style={{ textAlign: "center", marginTop: "5rem" }}>
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : menuItems.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {menuItems.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={item.image || "https://via.placeholder.com/300"}
                  alt={item.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "1rem" }}>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0 0 0.5rem" }}>
                    {item.name}
                  </h2>
                  <p style={{ color: "#555", margin: "0 0 0.5rem" }}>{item.description}</p>
                  <p style={{ color: "#007BFF", margin: "0 0 0.5rem" }}>
                    Category: {item.category}
                  </p>
                  <p style={{ fontWeight: "bold", color: "#000", margin: "0 0 0.5rem" }}>
                    ₹{item.price}
                  </p>
                  <p style={{ color: "#ff9800", margin: 0 }}>⭐ {item.rating}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: "5rem" }}>
            <h2 style={{ color: "#555" }}>No menu items found</h2>
          </div>
        )}
      </div>

      <style>
        {`
          .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #4CAF50;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 0 auto;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default MenuPage;
