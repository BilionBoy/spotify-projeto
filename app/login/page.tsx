import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="bg-[#121212] text-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex flex-col items-center mb-6">
                    <img
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                        alt="Spotify Logo"
                        className="h-12 mb-4"
                    />
                    <h2 className="text-2xl font-bold">Entrar no Spotify</h2>
                </div>

                <form className="space-y-6">
                    <div className="flex flex-col space-y-4">
                        <Input
                            type="email"
                            placeholder="E-mail ou nome de usuário"
                            className="w-full p-3 border border-gray-700 bg-[#282828] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            className="w-full p-3 border border-gray-700 bg-[#282828] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <Button
                        className="w-full py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition duration-200"
                    >
                        Entrar
                    </Button>
                </form>

                <div className="mt-6 text-center text-gray-400">
                    <p className="mb-2">
                        <a href="#" className="text-white hover:underline">
                            Esqueceu sua senha?
                        </a>
                    </p>
                    <p>
                        Não tem uma conta?{" "}
                        <a href="/signup" className="text-green-500 hover:underline">
                            Inscreva-se no Spotify
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
