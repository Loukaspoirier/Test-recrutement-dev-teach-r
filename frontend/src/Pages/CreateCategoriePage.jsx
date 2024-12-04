import * as React from "react";
import NavBar from "../Components/General/Navbar";
import CreateCategorie from "../Components/Categorie/CreateCategorie";

// Page pour afficher le formulaire de création de catégorie
export default function CreateCategoriePage() {
    return (
        <div>
            <NavBar />
            <CreateCategorie />
        </div>
    )
}