import * as React from "react";
import NavBar from "../Components/General/Navbar";
import ReadAllProduit from "../Components/Produit/ReadAllProduit";
import { Link } from "react-router-dom";
import Footer from "../Components/General/Footer";

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