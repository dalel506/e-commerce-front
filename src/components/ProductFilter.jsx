import React from "react";



const ProductFilter = ({ activeFilter, onFilterChange }) => {
    const filters = ['TOUS LES PRODUITS', 'SKINCARE', 'MAQUILLAGE', 'PARFUM'];


    return(
        <div className="d-flex justify-content-center gap-3 mb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`btn border rounded-pill px-4 py-2 text-sm w-auto ${
              activeFilter === filter ? 'btn-dark text-white' : 'btn-outline-dark'
            }`}
          >
      {filter}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;