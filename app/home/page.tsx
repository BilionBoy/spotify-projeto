"use client";

import Sidebar from "@/components/ui/home/Sidebar";
import Player from "@/components/ui/home/Player";
import PlaylistCard from "@/components/ui/home/PlaylistCard";

const HomePage = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Main Content Area */}
                <main className="flex-1 p-6 bg-gray-900 text-white">
                    <h1 className="text-2xl font-bold mb-6">Bem-vindo ao Spotify</h1>

                    {/* Cards de Playlists */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <PlaylistCard
                            imageSrc="/images/playlist1.jpg"
                            title="Playlist 1"
                            description="Uma playlist incrível para seu dia"
                        />
                        <PlaylistCard
                            imageSrc="/images/playlist2.jpg"
                            title="Playlist 2"
                            description="Playlist para relaxar e curtir"
                        />
                        <PlaylistCard
                            imageSrc="/images/playlist3.jpg"
                            title="Playlist 3"
                            description="Músicas animadas para você dançar"
                        />
                        <PlaylistCard
                            imageSrc="/images/playlist4.jpg"
                            title="Playlist 4"
                            description="Melhores hits do momento"
                        />
                    </div>
                </main>

                {/* Player */}
                <Player />
            </div>
        </div>
    );
};

export default HomePage;
