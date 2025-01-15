import React from 'react';
import Image from 'next/image';

const AppleLogo = () => {
    return (
        <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-[#121212] border border-white/20 rounded-full hover:bg-[#333] hover:border-white transition-all">
            <Image
                src="/apple.png"
                alt="Apple Logo"
                width={20}
                height={20}
                className="mr-3"
            />
            Continuar com a Apple
        </button>
    );
};

export default AppleLogo;
