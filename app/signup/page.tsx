import GoogleLogo from '@/components/ui/logos/GoogleLogo';
import FacebookLogo from '@/components/ui/logos/FacebookLogo';
import AppleLogo from '@/components/ui/logos/AppleLogo';
import Input from '@/components/ui/input';

export default function SignupPage() {
    return (
        <div className="signup-container flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#191919] to-[#191919]">
            <div className="w-full max-w-lg p-8 space-y-6 bg-gradient-to-br from-[#121212] via-[#181818] to-[#121212] rounded-lg shadow-lg min-h-[800px]">
                <div className="flex flex-col items-center space-y-4">
                    <img
                        src="/spotify.png"
                        alt="Spotify Logo"
                        className="h-12 mb-1"
                    />
                </div>
                <h1 className="text-2xl font-bold text-white text-center">
                    Inscreva-se no Spotify
                </h1>

                {/* Botões de Redes Sociais */}
                <div className="flex flex-col space-y-3">
                    <GoogleLogo />
                    <FacebookLogo />
                    <AppleLogo />
                </div>

                <div className="border-t border-white/20 mt-6"></div>

                {/* Formulário de Cadastro */}
                <div className="space-y-6 mt-6">
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Qual é o seu e-mail?"
                        autoComplete="email"
                        required
                    />

                    <Input
                        id="confirm-email"
                        name="confirm-email"
                        type="email"
                        placeholder="Confirme seu e-mail"
                        autoComplete="email"
                        required
                    />

                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Crie uma senha"
                        autoComplete="new-password"
                        required
                    />

                    <Input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Como devemos chamar você?"
                        required
                    />

                    <button className="w-full px-4 py-3 text-base font-bold text-white bg-green-500 rounded-full hover:bg-green-600">
                        Inscrever-se
                    </button>
                </div>

                {/* Links Inferiores */}
                <div className="flex flex-col items-center mt-4 space-y-2">
                    <p className="text-sm text-gray-400 text-center">
                        Ao clicar em inscrever-se, você concorda com os{' '}
                        <a href="#" className="font-medium text-white hover:underline">
                            Termos e Condições de Uso
                        </a>{' '}
                        do Spotify.
                    </p>
                    <p className="text-sm text-gray-400 text-center">
                        Já tem uma conta?{' '}
                        <a href="/login" className="font-medium text-white hover:underline">
                            Faça login
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
