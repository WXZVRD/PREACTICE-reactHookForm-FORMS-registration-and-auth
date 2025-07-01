'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/shared/ui"

export default function AuthChoicePage() {
    const router = useRouter()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800">Куда вы хотите перейти?</h1>
                <p className="text-gray-500">Выберите действие ниже</p>

                <div className="space-y-4">
                    <Button
                        className="w-full"
                        variant="default"
                        onClick={() => router.push('/auth/registration')}
                    >
                        Зарегистрироваться
                    </Button>

                    <Button
                        className="w-full"
                        variant="outline"
                        onClick={() => router.push('/auth/authorization')}
                    >
                        Войти
                    </Button>
                </div>
            </div>
        </div>
    )
}