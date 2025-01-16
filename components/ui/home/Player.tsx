"use client";

import { useState } from "react";

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(50);

    const togglePlayPause = () => setIsPlaying(!isPlaying);

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProgress(Number(e.target.value));
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(e.target.value));
    };

    return (
        <div className="bg-black text-white p-4 flex items-center justify-between">
            {/* Titulo do Som  */}
            <div>
                <span className="text-sm font-semibold">Titulo da Música</span>
                <span className="text-xs block">Nome do Artista</span>
            </div>

            {/* Middle section - Controls */}
            <div className="flex items-center space-x-6">
                <button className="text-2xl" onClick={() => setProgress(progress - 10)}>
                    ◁
                </button>
                <button className="text-3xl" onClick={togglePlayPause}>
                    {isPlaying ? "❚❚" : "▶"}
                </button>
                <button className="text-2xl" onClick={() => setProgress(progress + 10)}>
                    ▷
                </button>
            </div>

            {/* Volume */}
            <div className="flex items-center space-x-2">
                <span className="text-xs">Volume</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20"
                />
            </div>
        </div>
    );
};

export default Player;
