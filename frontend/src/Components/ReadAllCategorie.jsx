import React, { useEffect, useState } from 'react';

export default function ReadAllCategories() {
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    fetch('/categorie') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Une erreur est survenue lors de la récupération des catégories.');
        }
        return response.json();
      })
      .then(data => setCategories(data)) 
      .catch(error => console.error('Erreur :', error));
  }, []); 

  return (
    <div>
      <h1>Liste des Catégories</h1>
      <ul>
        {categories.map(categorie => (
          <li key={categorie.id}>{categorie.nom}</li>
        ))}
      </ul>
    </div>
  );
};
