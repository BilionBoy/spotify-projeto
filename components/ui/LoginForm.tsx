import Input from '@/components/ui/input';

const LoginForm = () => {
    return (
        <div>

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
                        <a href="#" className="font-medium text-white hover:no-underline">
                            Inscrever-se no Spotify
                        </a>
                    </p>
                </div>

            </div>

        </div>
    );
};

export default LoginForm;
