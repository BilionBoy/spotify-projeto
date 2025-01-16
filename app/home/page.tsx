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
                <main className="flex-1 p-6 bg-gray-900 text-white space-y-6">
                    <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Spotify</h1>

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
                        {/* Mais Playlists */}
                        <PlaylistCard
                            imageSrc="/images/playlist5.jpg"
                            title="Playlist 5"
                            description="Músicas calmas para relaxar"
                        />
                        <PlaylistCard
                            imageSrc="/images/playlist6.jpg"
                            title="Playlist 6"
                            description="A playlist perfeita para sua festa"
                        />
                        <PlaylistCard
                            imageSrc="/images/playlist7.jpg"
                            title="Playlist 7"
                            description="Músicas indie para ouvir no fim do dia"
                        />
                        <PlaylistCard
                            imageSrc="/images/playlist8.jpg"
                            title="Playlist 8"
                            description="Top hits de todos os tempos"
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
