import GoogleLogo from '@/components/ui/logos/GoogleLogo';
import FacebookLogo from '@/components/ui/logos/FacebookLogo';
import AppleLogo from '@/components/ui/logos/AppleLogo';
import SpotifyLogo from '@/components/ui/logos/SpotifyLogo';
import Input from '@/components/ui/input';

export default function SignupPage() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-neutral-900 pt-10">
            {/* Logo e Título */}
            <div className="flex flex-col items-center mb-8">
                <div className="mb-6">
                    <SpotifyLogo />
                </div>
                <h1
                    className="text-[48px] font-extrabold text-white text-center tracking-tight leading-tight"
                    data-encore-id="text"
                >
                    Se inscreva
                    e comece a curtir
                </h1>
            </div>

            {/* Formulário */}
            <div className="w-full max-w-sm px-6">
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
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-neutral-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 text-gray-400 bg-neutral-900">
                            ou
                        </span>
                    </div>
                </div>

                {/* Botões de Redes Sociais */}
                <div className="flex flex-col space-y-4">
                    <GoogleLogo />
                    <FacebookLogo />
                    <AppleLogo />
                </div>
            </div>

            {/* Rodapé */}
            <div className="mt-8 text-center text-sm text-gray-400">
                Já tem uma conta?{' '}
                <a href="#" className="text-white hover:underline">
                    Faça login aqui.
                </a>
            </div>
        </div>
    );
}
