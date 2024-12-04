import * as React from "react";
import NavBar from "../Components/General/Navbar";
import ReadAllCategorie from "../Components/Categorie/ReadAllCategorie";
import { Link } from "react-router-dom";
import Footer from "../Components/General/Footer";

export default function CategoriePage() {
    return (
        <div>
            <NavBar />
            <Link to={"/categorie/create"}>Ajouter une categorie</Link>
            <ReadAllCategorie />
            <Footer />
        </div>
    );
}