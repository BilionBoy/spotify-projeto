"use client";

interface PlaylistCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const PlaylistCard = ({ imageSrc, title, description }: PlaylistCardProps) => {
    return (
        <div className="w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300">
            {/* Imagem da playlist */}
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
                {/* Título e descrição */}
                <h2 className="text-lg font-semibold text-white truncate">{title}</h2>
                <p className="text-sm text-gray-400 truncate">{description}</p>
            </div>
        </div>
    );
};

export default PlaylistCard;
