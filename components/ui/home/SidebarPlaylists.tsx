import Link from "next/link";

interface Playlist {
    name: string;
    path: string;
}

const playlists: Playlist[] = [
    { name: "Músicas", path: "/playlists/musicas" },
    { name: "Álbuns", path: "/playlists/albuns" },
    { name: "Artistas", path: "/playlists/artistas" },
    { name: "Podcasts", path: "/playlists/podcasts" },
];

const SidebarPlaylists = () => {
    return (
        <div className="mt-6">
            <div className="text-white font-semibold text-sm mb-2">Playlists</div>
            <div className="flex flex-col space-y-2">
                {playlists.map((playlist) => (
                    <Link
                        key={playlist.name}
                        href={playlist.path}
                        className="cursor-pointer hover:text-[#1db954] transition-colors"
                    >
                        {playlist.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SidebarPlaylists;
