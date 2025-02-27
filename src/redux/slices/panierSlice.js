import { createSlice } from "@reduxjs/toolkit";

const panierSlice = createSlice({
    name: "panier",
    initialState: {
        isLoading: false,
        error: false,
        products: [],
        isOpen: false,

    },

    reducers:{
        addProductPanier(state,action){
            state.products=[...state.products,action.payload]
    },
    RemoveFromCart: (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      },
      UpdateQuantity: (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload.productId
            ? { ...product, quantity: action.payload.newQuantity }
            : product
        );
      },
      ToggleCart: (state) => {
        state.isOpen = !state.isOpen; 
      },
    },
  });

export default panierSlice.reducer;
export const {addProductPanier,RemoveFromCart,UpdateQuantity,ToggleCart} = panierSlice.actions;