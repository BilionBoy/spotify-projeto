import React from "react";
import HomeIcon from "@/components/ui/shared/icons/HomeIcon";
import SearchIcon from "@/components/ui/shared/icons/SearchIcon";
import LibraryIcon from "@/components/ui/shared/icons/LibraryIcon";

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-black text-gray-400 flex flex-col">
            <div className="p-4 text-xl font-bold text-white">Spotify</div>
            <nav className="mt-4 flex flex-col space-y-2">
                <a href="#" className="px-4 py-2 flex items-center space-x-4 hover:bg-gray-800 rounded">
                    <HomeIcon />
                    <span>Home</span>
                </a>
                <a href="#" className="px-4 py-2 flex items-center space-x-4 hover:bg-gray-800 rounded">
                    <SearchIcon />
                    <span>Buscar</span>
                </a>
                <a href="#" className="px-4 py-2 flex items-center space-x-4 hover:bg-gray-800 rounded">
                    <LibraryIcon />
                    <span>Sua Biblioteca</span>
                </a>
            </nav>
        </aside>
    );
};

export default Sidebar;
