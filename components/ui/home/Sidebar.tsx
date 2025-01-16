import React from "react";

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-black text-gray-400 flex flex-col">
            <div className="p-4 text-xl font-bold text-white">Spotify</div>
            <nav className="mt-4 flex flex-col space-y-2">
                <a href="#" className="px-4 py-2 hover:bg-gray-800 rounded">
                    Home
                </a>
                <a href="#" className="px-4 py-2 hover:bg-gray-800 rounded">
                    Buscar
                </a>
                <a href="#" className="px-4 py-2 hover:bg-gray-800 rounded">
                    Sua Biblioteca
                </a>
            </nav>
        </aside>
    );
};

export default Sidebar;
