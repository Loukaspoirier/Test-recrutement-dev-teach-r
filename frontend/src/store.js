import { configureStore, createSlice } from "@reduxjs/toolkit";

const categorieSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchCategoriesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addCategorie: (state, action) => {
      state.categories.push(action.payload);
    },
    updateCategorie: (state, action) => {
      const index = state.categories.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
    deleteCategorie: (state, action) => {
      state.categories = state.categories.filter((c) => c.id !== action.payload);
    },
  },
});

const produitSlice = createSlice({
  name: "produits",
  initialState: {
    produits: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchProduitsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProduitsSuccess: (state, action) => {
      state.loading = false;
      state.produits = action.payload;
    },
    fetchProduitsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addProduit: (state, action) => {
      state.produits.push(action.payload);
    },
    updateProduit: (state, action) => {
      const index = state.produits.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.produits[index] = action.payload;
      }
    },
    deleteProduit: (state, action) => {
      state.produits = state.produits.filter((p) => p.id !== action.payload);
    },
  },
});

export const {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  addCategorie,
  updateCategorie,
  deleteCategorie,
} = categorieSlice.actions;

export const {
  fetchProduitsRequest,
  fetchProduitsSuccess,
  fetchProduitsFailure,
  addProduit,
  updateProduit,
  deleteProduit,
} = produitSlice.actions;

const store = configureStore({
  reducer: {
    categories: categorieSlice.reducer,
    produits: produitSlice.reducer,
  },
});

export default store;