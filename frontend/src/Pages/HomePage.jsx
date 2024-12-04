import * as React from "react";
import NavBar from "../Components/General/Navbar";
import Footer from "../Components/General/Footer";

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
                <Footer />
            </div>
        </div>
    );
}