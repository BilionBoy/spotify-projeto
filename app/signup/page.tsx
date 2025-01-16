import Link from 'next/link';
import GoogleCadastro from '@/components/ui/logos/GoogleCadastro';
import FacebookCadastro from '@/components/ui/logos/FacebookCadastro';
import AppleCadastro from '@/components/ui/logos/AppleCadastro';
import SpotifyLogo from '@/components/ui/logos/SpotifyLogo';
import Input from '@/components/ui/input';

export default function SignupPage() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen pt-10 relative">
            {/* Fundo com gradiente mais preto */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0c0c0c] to-[#000000] opacity-98"></div>

            {/* Logo e Título */}
            <div className="flex flex-col items-center mb-8 z-10 relative">
                <div className="mb-6">
                    <SpotifyLogo />
                </div>
                <h1
                    className="text-[48px] font-extrabold text-white text-center tracking-tighter leading-tight"
                    style={{
                        fontFamily: 'SpotifyMixUITitle, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, sans-serif'
                    }}
                >
                    <span className="block">Se inscreva e</span>
                    <span className="block">comece a curtir</span>
                </h1>
            </div>

            {/* Formulário */}
            <div className="w-full max-w-sm px-6 z-10 relative">
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Endereço de e-mail"
                    autoComplete="email"
                    required
                />

                <a
                    href="#"
                    className="block mt-2 mb-6 text-sm text-gray-400 hover:underline text-center"
                >
                    Usar número de telefone
                </a>

                <button className="w-full py-3 text-base font-bold text-black bg-green-500 rounded-full hover:bg-green-600">
                    Avançar
                </button>

                {/* Divisor */}
                <div className="relative my-6">
                    <div className="flex items-center justify-center">
                        {/* Linha à esquerda */}
                        <div className="flex-grow border-t border-white"></div>
                        {/* Texto 'ou' */}
                        <span className="px-2 text-sm text-gray-400">
                            ou
                        </span>
                        {/* Linha à direita */}
                        <div className="flex-grow border-t border-white"></div>
                    </div>
                </div>





                {/* Botões de Redes Sociais */}
                <div className="flex flex-col space-y-4">
                    <GoogleCadastro />
                    <FacebookCadastro />
                    <AppleCadastro />
                </div>
            </div>

            {/* Rodapé */}
            <div className="mt-8 text-center text-sm text-gray-400 z-10 relative">
                Já tem uma conta?{' '}
                <a href="login" className="text-white hover:underline">
                    Faça login aqui.
                </a>
            </div>
        </div>
    );
}
