import { useState } from "react";

const productsData = [
  { id: 1, name: "Laptop", price: 50000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsMz9g3T9PfjNeDzAEoCqWCfjp53afA-f8Q&s" },
  { id: 2, name: "Headphones", price: 2000, image: "https://shop.zebronics.com/cdn/shop/files/Zeb-Duke-pic-1.jpg?v=1710569970&width=1200" },
  { id: 3, name: "Smartphone", price: 30000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wVlr_LqwgdQPs_NjVj8n3HYZelCLbjaVkw&s" },
  { id: 4, name: "Watch", price: 5000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ILKcMm4qLvgyT2uyhBh9Vqj8-q9KcRmKDg&s" },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");

  const addToCart = (product) => setCart([...cart, product]);

  const removeFromCart = (index) => {
    const copy = [...cart];
    copy.splice(index, 1);
    setCart(copy);
  };

  const placeOrder = () => {
    setCart([]);
    setSuccessMsg("✅ Order placed successfully!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Simple E-Commerce</h1>

      {successMsg && <div style={styles.success}>{successMsg}</div>}

      <div style={styles.container}>
        <div style={styles.products}>
          <h2>Products</h2>

          <div style={styles.grid}>
            {productsData.map((product) => (
              <div key={product.id} style={styles.card}>
                <img src={product.image} alt={product.name} style={styles.image} />
                <h3>{product.name}</h3>
                <p style={styles.price}>₹ {product.price}</p>
                <button style={styles.addBtn} onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.cart}>
          <h2>Cart ({cart.length})</h2>

          {cart.length === 0 ? (
            <p style={{ color: "#666" }}>No items in cart.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} style={styles.cartItem}>
                  <span>{item.name} - ₹ {item.price}</span>
                  <button style={styles.removeBtn} onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </div>
              ))}

              <h3 style={styles.total}>Total: ₹ {total}</h3>
              <button style={styles.orderBtn} onClick={placeOrder}>
                Place Order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- PROFESSIONAL STYLES ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    padding: "30px",
    fontFamily: "'Segoe UI', Tahoma, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
    fontWeight: "600",
  },
  success: {
    backgroundColor: "#e6fffa",
    color: "#065f46",
    padding: "12px",
    borderRadius: "8px",
    textAlign: "center",
    marginBottom: "20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  container: {
    display: "flex",
    gap: "25px",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  products: {
    width: "65%",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "18px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "12px",
  },
  price: {
    fontWeight: "600",
    color: "#2563eb",
  },
  addBtn: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "8px",
  },
  cart: {
    width: "30%",
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    fontSize: "14px",
  },
  removeBtn: {
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  total: {
    marginTop: "15px",
    fontWeight: "600",
  },
  orderBtn: {
    width: "100%",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "12px",
    fontWeight: "600",
  },
};
