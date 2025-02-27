import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css"; 


const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); 
  }, []);

  return (
    
    <div className="container-fluid bg-white py-3 ">
      <div className="row align-items-center text-center text-md-start">
        
        {/* Colonne de gauche */}
        <div className="col-md-3 d-flex flex-column gap-5 ">
          {[
            { id: "01", title: "Livraison Gratuite", text: "Commandez sans vous soucier des frais de livraison ! Nous vous offrons l’expédition pour un shopping sans stress." },
            { id: "02", title: "Paiement Sécurisé", text: "Payez en toute confiance grâce à notre système de paiement sécurisé. Vos transactions sont protégées à 100 % !" },
            { id: "03", title: "Retour Sans Frais", text: "Si un produit ne vous convient pas, vous pouvez le retourner sans aucun frais. Profitez d’un shopping serein avec des retours simples et gratuits !" }
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`fade-in-up delay-${index + 1} ${isVisible ? "show" : ""}`}
            >
              <h2 className="text-primary fw-bold display-6 text-dark">{feature.id}</h2>
              <h3 className="fw-semibold text-dark">{feature.title}</h3>
              <p className="text-muted small">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Image centrale avec animation */}
        <div className="col-md-6 text-center">
          <img
            className={`img-fluid fade-in-scale delay-3 ${isVisible ? "show" : ""}`}
            src="https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwf0fcd857/images/hi-res/SKU/SKU_6221/757676_swatch.jpg?sw=585&sh=585&sm=fit"
            alt="Serum Bottle"
            style={{ width: "600px", height: "600px" }}
          />
        </div>

        {/* Colonne de droite */}
        <div className="col-md-3 d-flex flex-column gap-5 text-md-end">
          {[
            { id: "04", title: "Support 24/7", text: "Notre équipe est disponible 24h/24 et 7j/7 pour répondre à toutes vos questions. Contactez-nous à tout moment !" },
            { id: "05", title: "Avis de non-responsabilité", text: "Les informations sur notre site sont indicatives. Nous ne sommes pas responsables des erreurs ou de l’utilisation des produits. Consultez nos conditions générales pour en savoir plus." },
            { id: "06", title: "Accord de Service", text: "En utilisant notre site, vous acceptez nos conditions d’utilisation concernant les commandes, paiements, livraisons et retours. Consultez notre accord de service pour plus de détails." }
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`fade-in-up delay-${index + 4} ${isVisible ? "show" : ""}`}
            >
              <h2 className="text-primary fw-bold display-6 text-dark">{feature.id}</h2>
              <h3 className="fw-semibold text-dark">{feature.title}</h3>
              <p className="text-muted small">{feature.text}</p>
            </div>
          ))}
        </div>

      </div>



      <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-light display-5">ARTICLES</h2>
       
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-0">
            <div className="overflow-hidden">
              <img src="images\makeup (1).webp" className="img-fluid hover-zoom" alt="Skincare product" />
            </div>
            <div className="card-body">
              <h4 className="fw-normal">MAQUILLAGE</h4>
              <p className="text-muted mt-3">We draw inspiration from the natural world, using high-quality, plant-based ingredients that are as close to their purest form as possible. Nature is our guide to nurturing your skin’s natural beauty.</p>
              <button className="btn btn-custom rounded-pill mt-3">Lire la suite</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <div className="overflow-hidden">
              <img src="images\skincare (2).jpg" className="img-fluid hover-zoom" alt="Skincare product" />
            </div>
            <div className="card-body">
              <h4 className="fw-normal">SKINCARE</h4>
              <p className="text-muted mt-3">We draw inspiration from the natural world, using high-quality, plant-based ingredients that are as close to their purest form as possible. Nature is our guide to nurturing your skin’s natural beauty.</p>
              <button className="btn btn-custom rounded-pill mt-3">Lire la suite</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0">
            <div className="overflow-hidden">
              <img src="images\kelvin-lutan-5f4yovjJw4c-unsplash.jpg" className="img-fluid hover-zoom" alt="Skincare product" />
            </div>
            <div className="card-body">
              <h4 className="fw-normal">PARFUM</h4>
              <p className="text-muted mt-3">Our commitment to the environment is as strong as our dedication to your skin. We use sustainable packaging and work to minimize our ecological footprint, because beauty shouldn’t cost the planet.</p>
              <button className="btn btn-custom rounded-pill mt-3">Lire la suite</button>
            </div>
          </div>
        </div>
      </div>
    </div>












    </div>
   
   
  );
};

export default FeatureSection;
