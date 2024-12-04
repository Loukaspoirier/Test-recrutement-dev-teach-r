import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="text-center text-md">
                    <p className="text-gray-900">Contactez-moi :</p>
                    <p>loukaspoirier@gmail.com</p>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Gestionnaire. All Rights Reserved.</span>
            </div>
        </footer>
    )
}