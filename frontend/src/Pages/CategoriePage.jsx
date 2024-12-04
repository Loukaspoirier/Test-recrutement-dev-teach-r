import * as React from "react";
import NavBar from "../Components/General/Navbar";
import ReadAllCategorie from "../Components/Categorie/ReadAllCategorie";
import { Link } from "react-router-dom";
import Footer from "../Components/General/Footer";

// Page pour afficher les produits
export default function CategoriePage() {
    return (
        <div>
            <NavBar />
            <ReadAllCategorie />
            <Footer />
        </div>
    );
}