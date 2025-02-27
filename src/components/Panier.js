import React from 'react';
import { X } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import ProductPanierCard from './ProductPanierCard';
import { useNavigate } from 'react-router-dom';
import { CreateOrder } from '../redux/slices/orderSlice';
import { RemoveFromCart, UpdateQuantity, ToggleCart } from '../redux/slices/panierSlice';
import './Panier.css'; 

const Panier = () => {
  const navigate = useNavigate();
  const { products, isOpen } = useSelector((state) => state.panier);
  const dispatch = useDispatch();
  
  const subtotal = products.reduce((sum, product) => {
    let price = typeof product.price === "string" ? parseFloat(product.price.replace(/[^0-9.]/g, "")) : product.price;
    return sum + (price || 0) * product.quantity;
  }, 0);

  const handleCloseCart = () => {
    dispatch(ToggleCart());
  };

  return (
    <div className={`panier-container ${isOpen ? 'open' : ''}`}>
      <div className="offcanvas-header ">
        <h5 className="offcanvas-title p-4">
         PANIER <span className="text-muted">({products.length})</span>
        </h5>
        <button onClick={handleCloseCart} className="close-btn">
        <X size={20} 
  style={{
    fontSize: "14px",
    marginTop: "-60px",
    marginRight: "-54px",
    backgroundColor: "white",
    color: "black",
  }}
/>

        </button>
      </div>

      <div className="offcanvas-body">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductPanierCard
              key={product.id}
              product={product}
              onDelete={() => dispatch(RemoveFromCart(product.id))}
              onQuantityChange={(newQuantity) =>
                dispatch(UpdateQuantity({ productId: product.id, newQuantity }))
              }
            />
          ))
        ) : (
          <p className="text-center text-muted">Your cart is empty</p>
        )}
      </div>

      <div className="p-3 panier-footer">
        <div className="d-flex justify-content-between">
          <span>SUBTOTAL</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between text-muted">
          <span>SHIPPING</span>
          <span>CALCULATED ON CHECKOUT</span>
        </div>
        <div className="d-flex justify-content-between mt-3">
  <button onClick={() => navigate("/products")} className="btn btn-outline-dark w-auto">
    CONTINUE 
  </button>
  <button onClick={() => dispatch(CreateOrder({ ProductList: products }))} className="btn btn-dark w-50">
    CHECKOUT
  </button>
</div>

      </div>
    </div>
  );
};

export default Panier;
