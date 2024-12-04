import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  addCategorie,
  updateCategorie,
  deleteCategorie,
  fetchProduitsRequest,
  fetchProduitsSuccess,
  fetchProduitsFailure,
  addProduit,
  updateProduit,
  deleteProduit,
} from "./store";

// On charge toutes les catégories à l'aide du back
export const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesRequest());
  try {
    const response = await fetch("/categorie");
    const data = await response.json();
    dispatch(fetchCategoriesSuccess(data));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error.message));
  }
};

// On utilise la méthode POST pour envoyer la catégorie sur le back
export const createCategorie = (categorie) => async (dispatch) => {
  try {
    const response = await fetch("/categorie/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(categorie),
    });
    if (response.ok) {
      const newCategorie = await response.json();
      dispatch(addCategorie(newCategorie));
    }
  } catch (error) {
    console.error(error);
  }
};

// On utilise la métode PUT pour modifier la catégorie
export const updateCategorieById = (id, categorie) => async (dispatch) => {
  try {
    const response = await fetch(`/categorie/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(categorie),
    });
    if (response.ok) {
      const updatedCategorie = await response.json();
      dispatch(updateCategorie(updatedCategorie));
    } else {
      console.error("Échec de la modification de la catégorie");
    }
  } catch (error) {
    console.error("Erreur : ", error);
  }
};

// On utilise la methode DELETE pour supprimer la catégorie
export const deleteCategorieById = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/categorie/delete/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch(deleteCategorie(id));
    } else {
      console.error("Échec de la suppression de la catégorie");
    }
  } catch (error) {
    console.error("Erreur : ", error);
  }
};

export const setSort = (field, direction) => ({
  type: "produits/setSort",
  payload: { field, direction },
});


// On charge tous les produits à l'aide du back
export const fetchProduits = () => async (dispatch) => {
  dispatch(fetchProduitsRequest());
  try {
    const response = await fetch("/produit");
    const data = await response.json();
    dispatch(fetchProduitsSuccess(data));
  } catch (error) {
    dispatch(fetchProduitsFailure(error.message));
  }
};

// On utilise la méthode POST pour envoyer le produit sur le back
export const createProduit = (produit) => async (dispatch) => {
  try {
    const response = await fetch("/produit/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produit),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la création du produit");
    }

    const newProduit = await response.json();
    dispatch(addProduit(newProduit));

    return { type: "produits/createProduit/fulfilled", payload: newProduit };
  } catch (error) {
    console.error(error);

    return { type: "produits/createProduit/rejected", error: error.message };
  }
};

// On utilise la métode PUT pour modifier le produit
export const updateProduitById = (id, produit) => async (dispatch) => {
  try {
    const response = await fetch(`/produit/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produit),
    });
    if (response.ok) {
      const updatedProduit = await response.json();
      dispatch(updateProduit(updatedProduit));
    } else {
      console.error("Échec de la mise à jour du produit");
    }
  } catch (error) {
    console.error("Erreur : ", error);
  }
};

// On utilise la methode DELETE pour supprimer le produit
export const deleteProduitById = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/produit/delete/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch(deleteProduit(id));
    } else {
      console.error("Échec de la suppression du produit");
    }
  } catch (error) {
    console.error("Erreur : ", error);
  }
};

