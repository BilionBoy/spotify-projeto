import Input from '@/components/ui/input';

const SignupForm = () => {
    return (
        <div className="">

            <Input
                id="email"
                name="email"
                type="email"
                placeholder="Endereço de e-mail"
                autoComplete="email"
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Link para usar número de telefone */}
            <a
                href="#"
                className="block mt-2 text-sm text-green-500 underline"
            >
                Usar número de telefone
            </a>

            <button className="w-full py-3 text-base font-bold text-black bg-green-500 rounded-full hover:bg-green-600 mt-6">
                Avançar
            </button>

            {/* Divisor */}
            <div className="relative my-6">
                <div className="flex items-center justify-center">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <span className="px-2 text-sm text-white">ou</span>
                    <div className="flex-grow border-t border-gray-600"></div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
