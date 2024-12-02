import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import ReadAllCategories from './Components/ReadAllCategorie';
import CreateCategorie from './Components/CreateCategorie';
import UpdateCategorie from './Components/UpdateCategorie';

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
            <Link to="/create">Créer une Catégories</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ReadAllCategories />} />
        <Route path="/create" element={<CreateCategorie />} />
        <Route path="/update/:id" element={<UpdateCategorie />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
