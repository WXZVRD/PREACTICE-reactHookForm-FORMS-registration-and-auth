'use client'

import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Button,
} from "@/shared/ui"
import { toast } from "sonner"
import { useAuthForm } from "../model/useAuthForm"

export const AuthForm = () => {
    const form = useAuthForm()

    const onSubmit = form.handleSubmit((values) => {
        toast("Форма успешно отправлена", {
            description: (
                <pre>{`
Email: ${values.email}
Пароль: ${values.password}
        `}</pre>
            ),
        })
    })

    return (
        <Form {...form}>
            <form onSubmit={onSubmit} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="example@mail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Пароль</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Введите пароль" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full"
                    disabled={!form.formState.isValid || form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting ? "Отправка..." : "Авторизоваться"}
                </Button>
            </form>
        </Form>
    )
}
