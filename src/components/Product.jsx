export default function Product({ product }) {
  return (
    <div key={product.id} className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price.toFixed(2)}</p>
        <div className="product-card-actions">
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-secondary">View Details</button>
        </div>
      </div>
    </div>
  );
}
