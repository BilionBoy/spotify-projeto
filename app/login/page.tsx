import GoogleLogo from '@/components/ui/logos/GoogleLogo';
import FacebookLogo from '@/components/ui/logos/FacebookLogo';
import AppleLogo from '@/components/ui/logos/AppleLogo';



export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-full max-w-md p-8 space-y-6 bg-[#191919] rounded-lg shadow-lg">
                <div className="flex flex-col items-center space-y-4">
                    <img
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                        alt="Spotify Logo"
                        className="h-12 mb-4"
                    />
                    <h1 className="text-2xl font-bold text-white">Entrar no Spotify</h1>
                </div>

                <div className="space-y-4">
                    <GoogleLogo />
                    <FacebookLogo />
                    <AppleLogo />

                </div>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                            E-mail ou nome de usuário
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="Insira seu e-mail"
                            className="w-full px-3 py-2 mt-1 text-white bg-[#333] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white">
                            Senha
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            placeholder="Insira sua senha"
                            className="w-full px-3 py-2 mt-1 text-white bg-[#333] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <button className="w-full px-4 py-2 text-sm font-bold text-white bg-green-500 rounded-full hover:bg-green-600">
                        Entrar
                    </button>
                </div>

                <div className="flex flex-col items-center mt-6 space-y-2">
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
