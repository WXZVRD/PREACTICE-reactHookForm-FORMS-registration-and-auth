'use client'

import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Checkbox,
    Button,
} from "@/shared/ui"
import { toast } from "sonner"
import { useRegisterForm } from "../model/useRegisterForm"

export const RegisterForm = () => {
    const form = useRegisterForm()

    const onSubmit = form.handleSubmit((values) => {
        toast("Форма успешно отправлена", {
            description: (
                <pre>{`
Имя: ${values.firstName}
Фамилия: ${values.secondName}
Email: ${values.email}
Пароль: ${values.password}
Дата рождения: ${values.date}
Согласие: ${values.policy ? "Да" : "Нет"}
        `}</pre>
            ),
        })
    })

    return (
        <Form {...form}>
            <form onSubmit={onSubmit} className="space-y-4">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Имя</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Введите имя" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="secondName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Фамилия</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Введите фамилию" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

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

                <FormField
                    control={form.control}
                    name="passwordRepeat"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Повторите пароль</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Повторите пароль" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Дата рождения</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="policy"
                    render={({ field }) => (
                        <FormItem className="flex items-center gap-2">
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel className="m-0">Я согласен с политикой</FormLabel>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full"
                    disabled={!form.formState.isValid || form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting ? "Отправка..." : "Зарегистрироваться"}
                </Button>
            </form>
        </Form>
    )
}
