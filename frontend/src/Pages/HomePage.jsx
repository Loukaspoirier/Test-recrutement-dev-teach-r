import * as React from "react";
import NavBar from "../Components/General/Navbar";
import Footer from "../Components/General/Footer";

// Page d'accueil
export default function HomePage() {
    return (
        <div>
            <NavBar />
            <div className="Homepage">
                <div className="ps-6">
                    <h1 className="font-bold ps-6 pt-6 ColorTextHomepage">Gestionnaire de Produit</h1>
                    <h1 className="font-bold ps-6 pt-6 ColorTextHomepage">Un nouveau gestionnaire de produit</h1>
                    <h1 className="font-bold ps-6 pt-6 ColorTextHomepage">Facile à prendre en main</h1>
                    <h1 className="font-bold ps-6 pt-6 ColorTextHomepage">Rapide et efficace</h1>
                </div>
                <div className="text-center text-xl m-6 p-6">
                    <section>
                        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Pourquoi choisir notre solution de gestion de produits ?</h1>
                        <p className="text-gray-800 text-lg text-center mb-6">Découvrez une solution qui combine simplicité, efficacité et fiabilité pour optimiser la gestion de vos produits.</p>
                        <li><strong>Simplicité et convivialité :</strong> Une interface intuitive, adaptée aux utilisateurs de tous niveaux.</li>
                        <li><strong>Fonctionnalités complètes :</strong> Gestion des catégories, tri avancé, et mise à jour simplifiée des produits.</li>
                        <li><strong>Flexibilité :</strong> Une solution qui s'adapte à vos besoins, quelle que soit la taille de votre entreprise.</li>
                        <li><strong>Gain de temps :</strong> Automatisez les tâches répétitives pour vous concentrer sur vos priorités.</li>
                        <li><strong>Fiabilité et sécurité :</strong> Vos données sont protégées et l'outil est conçu pour une performance optimale.</li>
                        <li><strong>Support dédié :</strong> Une équipe réactive pour vous accompagner à chaque étape.</li>
                        <div>
                            <p className="text-lg text-gray-800 font-medium mb-4">Avec notre solution, vous choisissez bien plus qu'un outil : vous choisissez un partenaire fiable pour votre croissance.</p>
                            <p className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg">Testez notre solution dès maintenant</p>
                        </div>
                    </section>

                </div>
                <Footer />
            </div>
        </div>
    );
}