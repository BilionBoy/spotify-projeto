import React from 'react';
import Image from 'next/image';

const GoogleCadastro = () => {
    return (
        <button className="flex items-center justify-start w-full max-w-[300px] mx-auto px-4 py-3 text-sm font-medium text-white bg-[#121212] border border-white/20 rounded-full hover:bg-[#333] hover:border-white transition-all">
            <Image
                src="/google.png"
                alt="Google Logo"
                width={20}
                height={20}
                className="mr-3"
            />
            <span className="text-center w-full">Inscreva-se com o Google</span>
        </button>
    );
};

export default GoogleCadastro;