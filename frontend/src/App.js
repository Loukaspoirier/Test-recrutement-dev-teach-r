import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import HomePage from './Pages/HomePage';
import ProduitPage from './Pages/ProduitPage';
import CategoriePage from './Pages/CategoriePage';
import CreateProduitPage from './Pages/CreateProduitPage';
import CreateCategoriePage from './Pages/CreateCategoriePage';
import UpdateCategoriePage from './Pages/UpdateCategoriePage';
import UpdateProduitPage from './Pages/UpdateProduit';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path="/categorie" element={<CategoriePage />} />
        <Route path="/produit" element={<ProduitPage />} />
        <Route path="/produit/create" element={<CreateProduitPage />} />
        <Route path="/categorie/create" element={<CreateCategoriePage />} />
        <Route path="/categorie/update/:id" element={<UpdateCategoriePage />} />
        <Route path="/produit/update/:id" element={<UpdateProduitPage />} />
      </Routes>
    </Router>
  );
};

export default App;
