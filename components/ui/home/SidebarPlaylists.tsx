"use client";

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const SidebarPlaylists: FC = () => {
    const playlists = [
        { id: 1, name: "Playlist 1", image: "/album1.jpg" },
        { id: 2, name: "Playlist 2", image: "/album1.jpg" },
        { id: 3, name: "Playlist 3", image: "/album1.jpg" },
        { id: 4, name: "Playlist 4", image: "/album1.jpg" },
    ];

    return (
        <div className="flex flex-col space-y-3 mt-6">
            <span className="text-white text-sm font-semibold">Playlists</span>
            {playlists.map((playlist) => (
                <Link
                    key={playlist.id}
                    href={`/playlist/${playlist.id}`}
                    className="flex items-center cursor-pointer hover:bg-[#282828] p-3 rounded-lg transition-all duration-300 ease-in-out transform"
                >
                    <Image
                        src={playlist.image}
                        alt={playlist.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-4"
                    />
                    <span className="text-base font-medium">{playlist.name}</span>
                </Link>
            ))}
        </div>
    );
};

export default SidebarPlaylists;
