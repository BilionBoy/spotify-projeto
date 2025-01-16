"use client";

import Link from "next/link";
import { FC } from "react";

const SidebarOptions: FC = () => {
    return (
        <div className="flex flex-col space-y-3 mt-auto">
            <span className="text-white text-sm font-semibold">Opções</span>
            <Link
                href="/settings"
                className="flex items-center cursor-pointer hover:bg-[#282828] p-3 rounded-lg transition-all duration-300 ease-in-out transform"
            >
                <span className="text-base font-medium">Configurações</span>
            </Link>
            <Link
                href="/account"
                className="flex items-center cursor-pointer hover:bg-[#282828] p-3 rounded-lg transition-all duration-300 ease-in-out transform"
            >
                <span className="text-base font-medium">Conta</span>
            </Link>
        </div>
    );
};

export default SidebarOptions;
