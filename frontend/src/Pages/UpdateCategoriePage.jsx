import * as React from "react";
import NavBar from "../Components/General/Navbar";
import UpdateCategorie from "../Components/Categorie/UpdateCategorie";

// Page pour afficher le formulaire de modification de catégorie
export default function UpdateCategoriePage() {
    return (
        <div>
            <NavBar />
            <UpdateCategorie />
        </div>
    )
}