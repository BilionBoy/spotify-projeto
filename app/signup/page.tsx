import GoogleCadastro from '@/components/ui/logos/GoogleCadastro';
import FacebookCadastro from '@/components/ui/logos/FacebookCadastro';
import AppleCadastro from '@/components/ui/logos/AppleCadastro';
import SignupForm from '@/components/ui/SignupForm';
import FooterCadastro from '@/components/ui/FooterCadastro';
import SignupTitle from '@/components/ui/SignupTitle';

export default function SignupPage() {
    return (
        <div className="flex flex-col items-center min-h-screen pt-10 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0c0c0c] to-[#000000] opacity-98"></div>
            <SignupTitle />
            {/* Formulário */}
            <div className="w-full max-w-sm px-6 z-10 text-white relative flex-grow">
                <SignupForm />
                <div className="flex flex-col space-y-4">
                    <GoogleCadastro />
                    <FacebookCadastro />
                    <AppleCadastro />
                </div>
            </div>
            {/* Footer */}
            <FooterCadastro />
        </div>
    );
}
