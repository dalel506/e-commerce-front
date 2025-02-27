import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetProducts } from '../redux/slices/productSlice';
import ProductFilter from '../components/ProductFilter';



const Products = () => {
  const { isLoading, error, products } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('TOUS LES PRODUITS');
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);
  

  useEffect(() => {
    if (!products || products.length === 0) return;

    if (activeFilter === 'TOUS LES PRODUITS') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        product => product.category?.toLowerCase().trim() === activeFilter.toLowerCase().trim()
      );
      setFilteredProducts(filtered);
    }
  }, [activeFilter, products]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleProductClick = (productId) => {
    navigate(`/productdetails/${productId}`);
  };

  return (
    <div className="container py-5">
      <ProductFilter activeFilter={activeFilter} onFilterChange={handleFilterChange} />

      {isLoading && (
        <div className="text-center">
          <p className="text-muted">Loading...</p>
        </div>
      )}

      {error && <p className="text-danger">{error}</p>}

      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div
            className="col-12 col-md-6 col-lg-4"
            onClick={() => navigate(`/productdetails/${product._id || product.id}`)}
            key={product._id || product.id}
            style={{ cursor: 'pointer' }}
          >
            <div className="card border-0">
              <div className="overflow-hidden" style={{ height: '405px' }}>
                <img
                  src={product.poster}
                  alt={product.name}
                  className="card-img-top w-100 h-100 object-fit-cover"
                />
              </div>

              <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title text-truncate">{product.name}</h5>
                <h5 className="text-muted">${product.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;