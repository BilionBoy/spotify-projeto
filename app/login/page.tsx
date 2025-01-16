import GoogleLogo from '@/components/ui/logos/GoogleLogo';
import FacebookLogo from '@/components/ui/logos/FacebookLogo';
import AppleLogo from '@/components/ui/logos/AppleLogo';
import LoginForm from '@/components/ui/LoginForm';
import SpotifyLogo from '@/components/ui/logos/SpotifyLogo'; 
import ContinuarText from '@/components/ui/logos/ContinuarText';

export default function LoginPage() {
    return (
        <div className="login-container flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#191919] to-[#191919]">
            <div className="w-full max-w-lg p-8 space-y-6 bg-gradient-to-br from-[#121212] via-[#181818] to-[#121212] rounded-lg shadow-lg min-h-[750px] sm:min-h-[800px]">
                <div className="flex flex-col items-center space-y-4">
                    <SpotifyLogo />
                <h1 className="text-2xl font-bold text-white text-center">Entrar no Spotify</h1>
                </div>
                <div className="flex flex-col space-y-3">
                    <GoogleLogo />
                    <FacebookLogo />
                    <AppleLogo />
                    <ContinuarText />
                </div>
                <div className="border-t border-white/20 mt-6"></div>
                <LoginForm />

                
            </div>
        </div>
    );
}
