import SignupTitle from '@/components/ui/SignupTitle';
import SignupForm from '@/components/ui/SignupForm';
import GoogleCadastro from '@/components/ui/logos/GoogleCadastro';
import FacebookCadastro from '@/components/ui/logos/FacebookCadastro';
import AppleCadastro from '@/components/ui/logos/AppleCadastro';
import SingupFooter from '@/components/ui/SingupFooter';

export default function SignupPage() {
    return (
        <div className="flex flex-col items-center min-h-screen pt-10 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0c0c0c] to-[#000000] opacity-98"></div>
            {/* Formulário */}
            <SignupTitle />
            <div className="w-full max-w-sm px-6 z-10 text-white relative flex-grow">
                <SignupForm />
                <div className="flex flex-col space-y-4">
                    <GoogleCadastro />
                    <FacebookCadastro />
                    <AppleCadastro />
                    {/* Linha de separação */}
                    <div className="my-4 border-t border-gray-800 w-full"></div> 
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            Já tem uma conta?{' '}
                            <a href="login" className="text-white hover:underline">
                                Faça login aqui.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <SingupFooter />
        </div>
    );
}
