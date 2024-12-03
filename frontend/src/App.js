import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import ReadAllCategories from './Components/ReadAllCategorie';
import CreateCategorie from './Components/CreateCategorie';
import UpdateCategorie from './Components/UpdateCategorie';
import ReadAllProduit from './Components/ReadAllProduit';
import CreateProduit from './Components/CreateProduit';
import UpdateProduit from './Components/UpdateProduit';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/produit">Produit</Link>
          </li>
          <li>
            <Link to="/create/produit">Créer un produit</Link>
          </li>
          <li>
            <Link to="/create">Créer une Catégories</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ReadAllCategories />} />
        <Route path="/produit" element={<ReadAllProduit />} />
        <Route path="/create/produit" element={<CreateProduit />} />
        <Route path="/create" element={<CreateCategorie />} />
        <Route path="/update/categorie/:id" element={<UpdateCategorie />} />
        <Route path="/update/produit/:id" element={<UpdateProduit />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
