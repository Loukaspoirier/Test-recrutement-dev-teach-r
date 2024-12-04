import * as React from "react";
import NavBar from "../Components/General/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/General/Footer";

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <div className="Homepage">
                <div className="Row">
                    <h5 className=" font-bold ps-6 pt-6 ColorTextHomepage">Gestionnaire de Produit <br /> Un nouveau gestionnaire de produit <br />Facile à prendre en main <br />Rapide et efficace</h5>
                </div>
                <Footer />
            </div>
        </div>
    );
}