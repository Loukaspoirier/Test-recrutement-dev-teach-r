import * as React from "react";
import NavBar from "../Navbar";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <Link to={"categorie/create"}>Créer une categorie</Link>
            <br />
            <Link to={"produit/create"}>Créer un produit</Link>
        </div>
    );
}