import { getProducts } from "../data/products";
import Product from "../components/Product";


const products = getProducts();

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="home-hero">
          <h1 className="home-title">Welcome to MyStore</h1>
          <p className="home-subtitle">This is the home page.</p>
        </div>
        <h1 className="page-title">Our Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
