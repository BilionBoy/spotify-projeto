import GoogleLogo from '@/components/ui/logos/GoogleLogo';
import FacebookLogo from '@/components/ui/logos/FacebookLogo';
import AppleLogo from '@/components/ui/logos/AppleLogo';
import LoginForm from '@/components/ui/LoginForm'; // Importe o LoginForm

export default function LoginPage() {
    return (
        <div className="login-container flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#191919] to-[#191919]">
            <div className="w-full max-w-lg p-8 space-y-6 bg-gradient-to-br from-[#121212] via-[#181818] to-[#121212] rounded-lg shadow-lg min-h-[750px] sm:min-h-[800px]">
                <div className="flex flex-col items-center space-y-4">
                    <img
                        src="spotify.png"
                        alt="Spotify Logo"
                        className="h-12 mb-1"
                    />
                </div>
                <h1 className="text-2xl font-bold text-white text-center">Entrar no Spotify</h1>

                <div className="flex flex-col space-y-3">
                    <GoogleLogo />
                    <FacebookLogo />
                    <AppleLogo />
                </div>
                <div className="border-t border-white/20 mt-6"></div>

                <LoginForm />

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
