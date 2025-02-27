import React, { useState, useEffect } from "react";
import { Minus, Plus } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductPanierCard = ({ product, onDelete, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setQuantity(product.quantity); 
  }, [product.quantity]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity); 
    }
  };

  return (
    <div className="d-flex gap-3 py-3 border-bottom">
      <img
        src={product.poster}
        alt={product.name}
        className="img-fluid rounded bg-light"
        style={{ width: '100px', height: '100px', objectFit: 'cover' , margin: '10px', marginTop:'-15px' }}
      />
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between align-items-start">
          <div>
          <h5 className="mt-3 fs-6">{product.name}</h5>

            <p className="text-muted mb-1">{product.ingredients}</p>
          </div>
          <div className="text-end">
  <button
    onClick={onDelete}
    style={{marginRight:'0px'}}
    className="btn btn-link text-decoration-none text-muted fs-6 mt-1 "
  >
    Delete
  </button>
</div>



        </div>
        <div className="d-flex justify-content-between align-items-center ">
          <div className="d-flex align-items-center gap-0 "
          style={{marginLeft:'-40px'}}>
            <button
            
              onClick={() => handleQuantityChange(quantity - 1)}
              className="btn btn-sm"
            >
              <Minus size={16} />
            </button>
            <span className= "pt-5">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="btn btn-sm"
            >
              <Plus size={16} />
            </button>
          </div>
          <span 
          style={{marginRight:'30px'}}
          className="fw-bold fs-6 mt-5">${product.price}</span>

        </div>
      </div>
    </div>
  );
};

export default ProductPanierCard;
