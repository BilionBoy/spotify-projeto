import GoogleLogo from '@/components/ui/logos/GoogleLogo';
import FacebookLogo from '@/components/ui/logos/FacebookLogo';
import AppleLogo from '@/components/ui/logos/AppleLogo';

export default function LoginPage() {
    return (
        <div className="login-container flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#191919] to-[#191919]">
            <div className="w-full max-w-lg p-8 space-y-6 bg-gradient-to-br from-[#121212] via-[#181818] to-[#121212] rounded-lg shadow-lg min-h-[750px] sm:min-h-[800px]">
                <div className="flex flex-col items-center space-y-4">
                    <img
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                        alt="Spotify Logo"
                        className="h-12 mb-1"
                    />
                </div>
                <h1 className="text-2xl font-bold text-white text-center">Entrar no Spotify</h1>

                {/* Botões de Login Social */}
                <div className="flex flex-col space-y-3">
                    <GoogleLogo />
                    <FacebookLogo />
                    <AppleLogo />
                </div>

                {/* Formulário de Login */}
                <div className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                            E-mail ou nome de usuário
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="Insira seu e-mail"
                            className="w-full px-4 py-3 text-base text-white bg-[#333] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                            Senha
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            placeholder="Insira sua senha"
                            className="w-full px-4 py-3 text-base text-white bg-[#333] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
                        />
                    </div>
                    <button className="w-full px-4 py-3 text-base font-bold text-white bg-green-500 rounded-full hover:bg-green-600">
                        Entrar
                    </button>
                </div>

                {/* Links Inferiores */}
                <div className="flex flex-col items-center mt-4 space-y-2">
                    <a href="#" className="text-sm text-gray-400 hover:underline">
                        Esqueceu sua senha?
                    </a>
                    <p className="text-sm text-gray-400">
                        Não tem uma conta?{' '}
                        <a href="#" className="font-medium text-white hover:underline">
                            Inscrever-se no Spotify
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
