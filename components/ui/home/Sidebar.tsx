// components/ui/home/Sidebar.tsx

"use client";

import HomeIcon from "./icons/HomeIcon";
import SearchIcon from "./icons/SearchIcon";
import LibraryIcon from "./icons/LibraryIcon";


const Sidebar = () => {
    return (
        <div className="w-64 bg-[#121212] p-6 flex flex-col space-y-4">
            {/* Logo do Spotify */}
            <div className="text-white font-bold text-2xl mb-8">Spotify</div>

            {/* Seção de navegação */}
            <div className="flex flex-col space-y-4">
                {/* Link para a Página Inicial */}
                <div className="flex items-center text-white cursor-pointer hover:bg-[#3c3c3c] p-2 rounded-md">
                    <HomeIcon className="w-6 h-6 mr-3" />
                    <span className="text-sm">Página Inicial</span>
                </div>

                {/* Link para Buscar */}
                <div className="flex items-center text-white cursor-pointer hover:bg-[#3c3c3c] p-2 rounded-md">
                    <SearchIcon className="w-6 h-6 mr-3" />
                    <span className="text-sm">Buscar</span>
                </div>

                {/* Link para Sua Biblioteca */}
                <div className="flex items-center text-white cursor-pointer hover:bg-[#3c3c3c] p-2 rounded-md">
                    <LibraryIcon className="w-6 h-6 mr-3" />
                    <span className="text-sm">Sua Biblioteca</span>
                </div>
            </div>

            {/* Seção de categorias estáticas */}
            <div className="flex flex-col space-y-2 mt-8 text-white text-sm">
                <span className="font-semibold">Playlists</span>
                <div className="cursor-pointer hover:text-[#1db954]">Músicas</div>
                <div className="cursor-pointer hover:text-[#1db954]">Álbuns</div>
                <div className="cursor-pointer hover:text-[#1db954]">Artistas</div>
                <div className="cursor-pointer hover:text-[#1db954]">Podcasts</div>
            </div>

            {/* Outras opções (opcionais) */}
            <div className="flex flex-col space-y-2 mt-8 text-white text-sm">
                <div className="cursor-pointer hover:text-[#1db954]">Estações de rádio</div>
                <div className="cursor-pointer hover:text-[#1db954]">Discover Weekly</div>
                <div className="cursor-pointer hover:text-[#1db954]">Lançamentos</div>
            </div>
        </div>
    );
};

export default Sidebar;
