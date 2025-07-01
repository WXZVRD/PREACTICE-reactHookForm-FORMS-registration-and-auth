import {AuthForm} from "@/features/auth/authorization/ui/AuthForm";

export default function AuthPage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-xl">
                <h1 className="text-xl font-semibold mb-4 text-center">Войти</h1>
                <AuthForm />
            </div>
        </div>
    )
}
