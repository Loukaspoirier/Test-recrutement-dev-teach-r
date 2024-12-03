import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import CreateCategorie from './Components/CreateCategorie';
import UpdateCategorie from './Components/UpdateCategorie';
import CreateProduit from './Components/CreateProduit';
import UpdateProduit from './Components/UpdateProduit';
import HomePage from './Components/Page/HomePage';
import ProduitPage from './Components/Page/ProduitPage';
import CategoriePage from './Components/Page/CategoriePage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path="/categorie" element={<CategoriePage />} />
        <Route path="/produit" element={<ProduitPage />} />
        <Route path="/create/produit" element={<CreateProduit />} />
        <Route path="/create" element={<CreateCategorie />} />
        <Route path="/update/categorie/:id" element={<UpdateCategorie />} />
        <Route path="/update/produit/:id" element={<UpdateProduit />} />
      </Routes>
    </Router>
  );
};

export default App;
