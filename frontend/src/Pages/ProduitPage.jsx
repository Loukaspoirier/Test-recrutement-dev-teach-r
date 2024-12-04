import * as React from "react";
import NavBar from "../Components/General/Navbar";
import ReadAllProduit from "../Components/Produit/ReadAllProduit";
import Footer from "../Components/General/Footer";

// Page pour afficher tous les produits
export default function ProduitPage() {
    return (
        <div>
            <NavBar />
            <div className="mt-6">
                <ReadAllProduit />
            </div>
            <Footer />
        </div>
    );
}