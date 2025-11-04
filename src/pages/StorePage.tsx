import { ShoppingBag, Book, Shirt, Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Church on Fire T-Shirt',
    category: 'Merch',
    price: 25.00,
    image: 'https://images.pexels.com/photos/8112171/pexels-photo-8112171.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'merch'
  },
  {
    id: 2,
    name: 'Faith & Purpose - Book',
    category: 'Book',
    price: 18.99,
    image: 'https://images.pexels.com/photos/4132538/pexels-photo-4132538.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'book'
  },
  {
    id: 3,
    name: 'Church on Fire Hoodie',
    category: 'Merch',
    price: 45.00,
    image: 'https://images.pexels.com/photos/8148588/pexels-photo-8148588.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'merch'
  },
  {
    id: 4,
    name: 'Walking in Victory - Book',
    category: 'Book',
    price: 22.99,
    image: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'book'
  },
  {
    id: 5,
    name: 'Church on Fire Cap',
    category: 'Merch',
    price: 20.00,
    image: 'https://images.pexels.com/photos/1124469/pexels-photo-1124469.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'merch'
  },
  {
    id: 6,
    name: 'Power of Prayer - Book',
    category: 'Book',
    price: 16.99,
    image: 'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'book'
  }
];

export default function StorePage() {
  return (
    <main className="store-page">
      <section className="page-hero store-hero">
        <div className="container">
          <ShoppingBag size={64} className="hero-icon" />
          <h1>Church Store</h1>
          <p>Browse our collection of books and merchandise</p>
        </div>
      </section>

      <section className="store-content container">
        <div className="store-categories">
          <button className="category-btn active">All Products</button>
          <button className="category-btn">
            <Book size={18} /> Books
          </button>
          <button className="category-btn">
            <Shirt size={18} /> Merchandise
          </button>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="btn btn-primary btn-small">
                    <Plus size={16} /> Add to Cart
                  </button>
                </div>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="store-info">
          <div className="info-card">
            <h3>Shipping Information</h3>
            <p>We ship within 3-5 business days. Free shipping on orders over $50!</p>
          </div>
          <div className="info-card">
            <h3>Returns & Exchanges</h3>
            <p>30-day return policy on all merchandise. Books must be in original condition.</p>
          </div>
          <div className="info-card">
            <h3>Questions?</h3>
            <p>Contact us at <a href="mailto:store@churchonfire.org">store@churchonfire.org</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
