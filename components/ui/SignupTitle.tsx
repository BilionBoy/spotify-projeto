import SpotifyLogo from '@/components/ui/logos/SpotifyLogo';

const SignupTitle = () => {
    return (
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
    );
};

export default SignupTitle;
