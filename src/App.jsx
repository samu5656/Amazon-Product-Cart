
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;
  const total = quantity * price;

  // useEffect: runs when the component mounts
  useEffect(() => {
    document.title = "Amazon Product Store";
  }, []);

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <h2>Welcome to Amazon Product Store</h2>
        <p className="intro">
          Choose your favourite colour and add the product to your cart.
        </p>

        <button
          className="toggle-btn"
          onClick={() => setShowProduct(!showProduct)}
        >
          {showProduct ? "Hide Product" : "Show Product"}
        </button>

        {showProduct && (
          <ProductCard
            productName={productName}
            price={price}
            quantity={quantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
            setQuantity={setQuantity}
            setSelectedColor={setSelectedColor}
            setDeliveryCity={setDeliveryCity}
          />
        )}

        <section className="cart-summary">
          <h2>Cart Summary</h2>
          <p>
            <strong>Product:</strong> {productName}
          </p>
          <p>
            <strong>Quantity:</strong> {quantity}
          </p>
          <p>
            <strong>Price per item:</strong> ₹{price}
          </p>
          <p>
            <strong>Selected Colour:</strong> {selectedColor}
          </p>
          <p>
            <strong>Delivery City:</strong> {deliveryCity}
          </p>
          <h3 className="total">Total: ₹{total}</h3>

          <p className={quantity === 0 ? "empty-message" : "success-message"}>
            {quantity === 0
              ? "Cart is empty"
              : "Product added to cart"}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
