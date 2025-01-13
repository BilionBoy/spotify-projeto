import React from "react";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-500 to-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                    Welcome Back
                </h2>
                <form className="space-y-6">
                    <div className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <Button
                        className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
                    >
                        Log in
                    </Button>
                </form>

                <div className="mt-6 text-center text-gray-600">
                    <p>
                        Don't have an account?{" "}
                        <a href="/signup" className="text-blue-500 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
