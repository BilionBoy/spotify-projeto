"use client";

import Link from "next/link";
import HomeIcon from "./icons/HomeIcon";
import SearchIcon from "./icons/SearchIcon";
import LibraryIcon from "./icons/LibraryIcon";
import SidebarOptions from "./SidebarOptions";
import SidebarPlaylists from "./SidebarPlaylists";

const Sidebar = () => {
    return (
        <div className="w-64 bg-[#121212] p-6 flex flex-col space-y-6">
            {/* Logo do Spotify */}
            <div className="text-white font-extrabold text-3xl mb-6 tracking-wide">
                Spotify
            </div>

            {/* Seção de navegação */}
            <div className="flex flex-col space-y-3">
                <Link
                    href="/home"
                    className="flex items-center text-white cursor-pointer hover:bg-[#282828] p-3 rounded-lg transition-colors duration-200"
                >
                    <HomeIcon className="w-7 h-7 mr-4" />
                    <span className="text-base font-medium">Página Inicial</span>
                </Link>
                <Link
                    href="/search"
                    className="flex items-center text-white cursor-pointer hover:bg-[#282828] p-3 rounded-lg transition-colors duration-200"
                >
                    <SearchIcon className="w-7 h-7 mr-4" />
                    <span className="text-base font-medium">Buscar</span>
                </Link>
                <Link
                    href="/library"
                    className="flex items-center text-white cursor-pointer hover:bg-[#282828] p-3 rounded-lg transition-colors duration-200"
                >
                    <LibraryIcon className="w-7 h-7 mr-4" />
                    <span className="text-base font-medium">Sua Biblioteca</span>
                </Link>
            </div>

            {/* Categorias */}
            <SidebarPlaylists />
            <SidebarOptions />
        </div>
    );
};

export default Sidebar;
