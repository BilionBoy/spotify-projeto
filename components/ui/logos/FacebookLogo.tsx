import React from 'react';
import Image from 'next/image';

const FacebookLogo = () => {
    return (
        <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200">
            <Image
                src="/facebook.png"
                alt="Facebook Logo"
                width={20}
                height={20}
                className="mr-2"
            />
            Continuar com o Facebook
        </button>
    );
}

export default FacebookLogo;