"use client";

import Image from "next/image";

interface PlaylistCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const PlaylistCard = ({ imageSrc, title, description }: PlaylistCardProps) => {
    return (
        <div className="w-64 bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <Image src={imageSrc} alt={title} width={256} height={256} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-white truncate">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default PlaylistCard;
