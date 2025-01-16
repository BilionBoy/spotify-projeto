import Input from '@/components/ui/input';
import Link from 'next/link';

const LoginForm = () => {
    return (
        <div>
            {/* Linha de separação */}
            <div className="my-4 border-t border-gray-800 w-full"></div>

            {/* Formulário de Login */}
            <div className="space-y-3 mt-6">
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail ou nome de usuário"
                    autoComplete="email"
                    required
                />

                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Senha"
                    autoComplete="current-password"
                    required
                />

                <button className="w-full px-4 py-3 text-base font-bold text-black bg-green-500 rounded-full hover:bg-green-600">
                    Entrar
                </button>
                <div className="flex flex-col items-center mt-4 space-y-2">
                    <a href="#" className="text-sm text-white underline">
                        Esqueceu sua senha?
                    </a>
                    <p className="text-sm text-gray-400">
                        Não tem uma conta?{' '}
                        <a href="/signup" className="font-medium text-white hover:no-underline">
                            Inscrever-se no Spotify
                        </a>
                    </p>
                </div>
                
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

        </div>
    );
};

export default LoginForm;
