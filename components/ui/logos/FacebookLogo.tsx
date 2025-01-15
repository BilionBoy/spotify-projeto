import React from 'react';
import Image from 'next/image';

const FacebookLogo = () => {
    return (
        <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-[#121212] border border-white/20 rounded-full hover:bg-[#333] hover:border-white transition-all">
            <Image
                src="/facebook.png"
                alt="Facebook Logo"
                width={20}
                height={20}
                className="mr-3"
            />
            Continuar com o Facebook
        </button>
    );
};

export default FacebookLogo;
