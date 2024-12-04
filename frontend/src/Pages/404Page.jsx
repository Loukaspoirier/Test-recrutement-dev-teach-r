import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div className="text-center">
            <img src="https://app.teachr.fr/static/media/erreur404.9753c4395d6ffded17f9.png" alt="Error404" className="center"></img>
            <button type="button" class="text-white BgButtonError404 rounded-full text-xl px-5 py-2.5 text-center">
                <Link to={"/"}>Menu Principale</Link>
            </button>
        </div>
    )
}