import Link from 'next/link';
import GoogleCadastro from '@/components/ui/logos/GoogleCadastro';
import FacebookCadastro from '@/components/ui/logos/FacebookCadastro';
import AppleCadastro from '@/components/ui/logos/AppleCadastro';
import SpotifyLogo from '@/components/ui/logos/SpotifyLogo';
import SignupForm from '@/components/ui/SignupForm';
import FooterCadastro from '@/components/ui/FooterCadastro';

export default function SignupPage() {
    return (
        <div className="flex flex-col items-center min-h-screen pt-10 relative">
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
            <div className="w-full max-w-sm px-6 z-10 text-white relative flex-grow">
                <SignupForm />

                {/* Botões de Redes Sociais */}
                <div className="flex flex-col space-y-4">
                    <GoogleCadastro />
                    <FacebookCadastro />
                    <AppleCadastro />
                </div>
                {/* Linha de separação */}
                <div className="my-4 border-t border-gray-800 w-full"></div>
                {/* Link de login */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">
                        Já tem uma conta?{' '}
                        <Link href="login" className="text-white hover:underline">
                            Faça login aqui.
                        </Link>
                    </p>
                </div>
            </div>
            {/* Footer */}
            <FooterCadastro />
        </div>
    );
}
