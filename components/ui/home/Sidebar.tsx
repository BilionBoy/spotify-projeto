"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SidebarPlaylists from "@/components/ui/home/SidebarPlaylists"; // Componente SidebarPlaylists
import SidebarOptions from "@/components/ui/home/SidebarOptions"; // Componente SidebarOptions

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState<string>("/home");

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <div className="w-64 bg-[#121212] p-6 flex flex-col space-y-6">
            {/* Logo do Spotify */}
            <div className="text-white font-extrabold text-3xl mb-6 tracking-wide">
                Spotify
            </div>

            {/* Seção de navegação com links principais */}
            <div className="flex flex-col space-y-3">
                <Link
                    href="/home"
                    className={`flex items-center text-white cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out transform ${activeLink === "/home" ? "bg-[#282828]" : "hover:bg-[#282828]"
                        }`}
                    onClick={() => handleLinkClick("/home")}
                >
                    <Image
                        src="/album1.jpg"
                        alt="Home"
                        width={24}
                        height={24}
                        className="mr-4 rounded-full"
                    />
                    <span className="text-base font-medium">Página Inicial</span>
                </Link>
                <Link
                    href="/search"
                    className={`flex items-center text-white cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out transform ${activeLink === "/search" ? "bg-[#282828]" : "hover:bg-[#282828]"
                        }`}
                    onClick={() => handleLinkClick("/search")}
                >
                    <Image
                        src="/album1.jpg"
                        alt="Search"
                        width={24}
                        height={24}
                        className="mr-4 rounded-full"
                    />
                    <span className="text-base font-medium">Buscar</span>
                </Link>
                <Link
                    href="/library"
                    className={`flex items-center text-white cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out transform ${activeLink === "/library" ? "bg-[#282828]" : "hover:bg-[#282828]"
                        }`}
                    onClick={() => handleLinkClick("/library")}
                >
                    <Image
                        src="/album1.jpg"
                        alt="Library"
                        width={24}
                        height={24}
                        className="mr-4 rounded-full"
                    />
                    <span className="text-base font-medium">Sua Biblioteca</span>
                </Link>
            </div>

            {/* Seção de Playlists usando o SidebarPlaylists */}
            <SidebarPlaylists />

            {/* Seção de opções da Sidebar usando SidebarOptions */}
            <SidebarOptions />
        </div>
    );
};

export default Sidebar;
