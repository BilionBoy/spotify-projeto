import Input from '@/components/ui/input';

const LoginForm = () => {
    return (
        <div>

            {/* Formulário de Login */}
            <div className="space-y-6 mt-6">
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

                <button className="w-full px-4 py-3 text-base font-bold text-white bg-green-500 rounded-full hover:bg-green-600">
                    Entrar
                </button>
            </div>

        </div>
    );
};

export default LoginForm;
