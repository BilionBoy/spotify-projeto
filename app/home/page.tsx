"use client";

import Sidebar from "../../components/ui/home/Sidebar";
import Player from "../../components/ui/home/Player";
import PlaylistCard from "../../components/ui/home/PlaylistCard"; // Componente de card de playlist

export default function HomePage() {
    const playlists = [
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Playlist 1",
            description: "Descrição da playlist 1"
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Playlist 2",
            description: "Descrição da playlist 2"
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Playlist 3",
            description: "Descrição da playlist 3"
        },
        {
            imageSrc: "https://via.placeholder.com/150",
            title: "Playlist 4",
            description: "Descrição da playlist 4"
        }
    ];

    return (
        <div className="flex h-screen bg-[#191414] text-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Main Content Area */}
                <main className="flex-1 p-6">
                    <h1 className="text-3xl font-semibold mb-8">Sua Biblioteca</h1>

                    {/* Playlist Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {playlists.map((playlist, index) => (
                            <PlaylistCard
                                key={index}
                                imageSrc={playlist.imageSrc}
                                title={playlist.title}
                                description={playlist.description}
                            />
                        ))}
                    </div>
                </main>

                {/* Player */}
                <Player />
            </div>
        </div>
    );
}
