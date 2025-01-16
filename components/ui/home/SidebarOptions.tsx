import Link from "next/link";

interface Option {
    name: string;
    path: string;
}

const options: Option[] = [
    { name: "Estações de rádio", path: "/stations" },
    { name: "Discover Weekly", path: "/discover-weekly" },
    { name: "Lançamentos", path: "/releases" },
];

const SidebarOptions = () => {
    return (
        <div className="mt-6">
            <div className="flex flex-col space-y-2">
                {options.map((option) => (
                    <Link
                        key={option.name}
                        href={option.path}
                        className="cursor-pointer hover:text-[#1db954] transition-colors"
                    >
                        {option.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SidebarOptions;
