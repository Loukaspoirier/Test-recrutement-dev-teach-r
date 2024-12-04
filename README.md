# Documentation pour le test rectrutement dev teach'r

## Préambule

Le projet été divisé en deux partie un backend et un frontend, le backend est en Symfony Framework de PHP pour une utilisation beaucoup plus rapide et facile à utiliser que PHP. Le frontend est en React Librairie de JavaScript avec l'utilisation de Redux. Le CSS est mélangé à la fois avec l'index.css et l'utiisation de Tailwind. Pour la base de données j'ai utilisé PHPMyAdmin.

## Backend

### Instalation

Le test technique a été réalisé sur un backend en `Symfony` comme demandé dans la consigne. 

Voici la liste des dépendances installées pour le projet en backend :

`composer require profiler debug-bundle makerbundle symfony/orm-pack phpunit-bridge form validator security-csrf`

### Réalisation 

Le backend Symfony est une API qui n'est pas directement connecté au frontend comme le permet la suite Twig de Symfony.
Pour réaliser les différentes tâches du niveau 1. Je me suis servie des dépendances installer précédemment et mis à dispostion par Symfony, comme `php bin/console make:entity`, ou les migrations pour envoyer les tables pour la BDD directement construit. Cela permet d'être plus efficace et de vraiment se servir du Framework Symfony.

### Fonctionnalités

Pour créer cette API j'ai donc créé deux Entity :
- Categorie
- Produit

j'ai utilisé une relation `ManyToOne` pour lier les différents produits à une catégorie.

Pour faire fonctionner les `CRUD` j'ai manipulé deux Controller un pour chaque Entity 

Mes deux Controller pour les deux Entity sont assez similaire, ils disposent d'un `create` pour créer une Entity. Un `readAll` pour lire toute les Entity. Un `read{id}` pour seulement lire une Entity de la table. Un `update` pour modifier l'Entity et un `delete` pour supprimer une Entity.

## Frontend

### Instalation

Le test technique été à realiser sur un frontend en `React` comme demandé dans la consigne

Voici la liste des dépendances installées pour le projet en frontend :

`npm install @reduxjs/toolkit react-redux react-router-dom`

### Réalisation

Pour réaliser le frontend. J'ai d'abord commencé par afficher les données de mon backend à l'aide de `fetch` `UseEffect` et `UseSate`, sans m'occuper de la partie design ou de la création de plusieur composant.

Une fois fait je me suis occupé de la modification, la création et la suppression des données toujours en brute.

Toute les étapes réalisées j'ai ajouté le CDN de `tailwind` commencé à créer plusieur composant réutilisable et à me servir de `Redux` pour la première fois.

Et pour finir j'ai commencé à m'occuper de l'aspect visuel du projet en récupérant la police, la couleur et d'autre fonctionnalités du site `Teach'r`. Et, est ajouté des fonctionnalités bonus.

### Fonctionnalités

J'ai donc plusieurs composants secondaire comme une `Navbar` ou un `Footer`.
Des composants principales pour faire marcher le `CRUD` des deux entités, plus précisement un composant pour chaque fonctionnalités et chaque entités donc `Create`,`Read`, `Update`, `Delete`.
Plus un composent pour le tri de produit.

Chaque composants est dans un sous dossier qui lui est attribué pour un code plus agréable à lire.

En plus des composants j'ai créé des pages pour que le code soit plus aéré et ne pas avoir tout dans un seul 
fichier.jsx. Et des pages optionnelles comme une page 404 et un home, pour un meilleur confort de l'expériance UI.

Dans le `App.jsx` j'ai créé toute les routes pour accèder à toutes les différentes pages.

j'ai un `store.js` et un `actions.js` pour l'utilisation de `Redux`.

## Code 

J'ai commenté la plupart de mon code pour l'explication des différentes fonctionnalités

## Aspect critique et amélioration potentiel du travail

- Mélange d'anglais et de français, le nom des entités et des attributs est en fraçais pour respect les noms utilisés dans les consignes alors que le reste du code est en anglais
- Faire une petite annimation pendant les chargements
- Créer beaucoup plus de composant réutilisable mais contrainte de temps  
