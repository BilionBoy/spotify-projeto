"use client";

import Sidebar from "@/components/ui/home/Sidebar";
import Player from "@/components/ui/home/Player";

export default function HomePage() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Main Content Area */}
                <main className="flex-1 p-6 bg-gray-900 text-white">
                    <h1 className="text-2xl font-bold">Bem-vindo ao Spotify</h1>
                    {/* Outras seções da home podem ser adicionadas aqui */}
                </main>

                {/* Player */}
                <Player />
            </div>
        </div>
    );
}
