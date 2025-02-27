import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductPanier } from "../redux/slices/panierSlice";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/getproducts/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => quantity > 1 && setQuantity((prev) => prev - 1);
  const toggleSection = (section) =>
    setOpenSection((prev) => (prev === section ? null : section));
  const handleAddToCart = () => dispatch(addProductPanier({ ...product, quantity }));

  if (!product) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-6 text-center">
          <img
            src={product.poster}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>

        <div className="col-md-6">
          <h1 className="fw-bold">{product.name}</h1>
          <p className="text-muted fs-5">{product.description}</p>
          <h3 className="fw-bold text-success">${product.price}</h3>

          <div className="d-flex align-items-center my-3">
            <button className="btn btn-outline-secondary" onClick={handleDecrement}>
              -
            </button>
            <span className="px-3 pt-0 fw-bold">{quantity}</span>
            <button className="btn btn-outline-secondary" onClick={handleIncrement}>
              +
            </button>
          </div>

          <div className="w-100">
            <button className="btn btn-dark w-100 py-2 fw-bold shadow" onClick={handleAddToCart}>
            Ajouter Au Panier
            </button>

            <button
              className="btn btn-outline-primary w-100 text-start p-3 shadow-sm mt-2"
              onClick={() => toggleSection("details")}
            >
              DETAILS <ChevronDown className={openSection === "details" ? "rotate-180" : ""} size={20} />
            </button>

            {openSection === "details" && (
              <p className="text-muted border p-3  w-100">{product.details}</p>
            )}
          </div>
        </div>
      </div>







      <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-light display-5">PRODUITS SIMILAIRES</h2>
       
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-0">
            <div className="overflow-hidden">
              <img src="https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw416bc487/images/hi-res/SKU/SKU_5178/716518_swatch.jpg" className="img-fluid hover-zoom" alt="Skincare product" />
            </div>
            <div className="card-body">
              <h4 className="fw-normal">SKINCARE</h4>
              <button className="btn btn-custom rounded-pill">Ajouter Au Panier</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <div className="overflow-hidden">
              <img src="https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwc254dd10/images/hi-res/SKU/SKU_5080/723096_swatch.jpg" className="img-fluid hover-zoom" alt="Skincare product" />
            </div>
            <div className="card-body">
              <h4 className="fw-normal">MAQUILLAGE</h4>
              <button className="btn btn-custom rounded-pill mt-3">Ajouter Au Panier</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <div className="overflow-hidden">
              <img src="https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw9e436aaa/images/hi-res/SKU/SKU_3376/617050_swatch.jpg" className="img-fluid hover-zoom" alt="Skincare product" />
            </div>
            <div className="card-body">
              <h4 className="fw-normal">PARFUM</h4>

              <button className="btn btn-custom rounded-pill mt-3">Ajouter Au Panier</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-0">
            <div className="overflow-hidden">
              <img src="https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwa06d9023/images/hi-res/SKU/SKU_1130/470988_swatch.jpg" className="img-fluid hover-zoom" alt="Skincare product" />
            </div>
            <div className="card-body">
              <h4 className="fw-normal">SKINCARE</h4>
              <button className="btn btn-custom rounded-pill mt-3">Ajouter Au Panier</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <div className="overflow-hidden">
              <img src="https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw0b273237/images/hi-res/SKU/SKU_6066/747212_swatch.jpg" className="img-fluid hover-zoom" alt="Skincare product" />
            </div>
            <div className="card-body">
              <h4 className="fw-normal">MAQUILLAGE</h4>
              <button className="btn btn-custom rounded-pill mt-3">Ajouter Au Panier</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <div className="overflow-hidden">
              <img src="https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw4c13fea3/images/hi-res/SKU/SKU_5646/740617_swatch.jpeg" className="img-fluid hover-zoom" alt="Skincare product" />
            </div>
            <div className="card-body">
              <h4 className="fw-normal">PARFUM</h4>

              <button className="btn btn-custom rounded-pill mt-3">Ajouter Au Panier</button>
            </div>
          </div>
        </div>
      </div>



















    </div>
  );
};

export default ProductDetails;
