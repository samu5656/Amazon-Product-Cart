
function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity,
  setQuantity,
  setSelectedColor,
  setDeliveryCity,
}) {
  const handleAddToCart = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  };

  const handleRemoveOne = () => {
    setQuantity((previousQuantity) =>
      Math.max(0, previousQuantity - 1)
    );
  };

  const handleResetCart = () => {
    setQuantity(0);
  };

  return (
    <div className="product-card">
      <div className="product-icon">🖱️</div>

      <h2>{productName}</h2>
      <p className="product-description">
        High-quality wireless mouse for work and everyday use.
      </p>

      <h3 className="product-price">Price: ₹{price}</h3>

      <div className="form-group">
        <label htmlFor="color">Select Colour:</label>
        <select
          id="color"
          value={selectedColor}
          onChange={(event) =>
            setSelectedColor(event.target.value)
          }
        >
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="city">Delivery City:</label>
        <input
          id="city"
          type="text"
          value={deliveryCity}
          onChange={(event) =>
            setDeliveryCity(event.target.value)
          }
          placeholder="Enter delivery city"
        />
      </div>

      <p>
        <strong>Selected Colour:</strong> {selectedColor}
      </p>
      <p>
        <strong>Delivery City:</strong> {deliveryCity}
      </p>
      <p>
        <strong>Quantity:</strong> {quantity}
      </p>

      <div className="button-group">
        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <button
          className="remove-btn"
          onClick={handleRemoveOne}
          disabled={quantity === 0}
        >
          Remove One
        </button>

        <button className="reset-btn" onClick={handleResetCart}>
          Reset Cart
        </button>
      </div>

      <h3 className="card-total">
        Subtotal: ₹{quantity * price}
      </h3>

      <p className={quantity === 0 ? "empty-message" : "success-message"}>
        {quantity === 0
          ? "Cart is empty"
          : "Product added to cart"}
      </p>
    </div>
  );
}

export default ProductCard;
