import { z } from "zod"

export const formSchema = z
    .object({
        firstName: z.string().min(1, "Имя обязательно"),
        secondName: z.string().min(1, "Фамилия обязательна"),
        email: z.string().email("Неверный email"),
        password: z.string().min(6, "Мин. 6 символов"),
        passwordRepeat: z.string(),
        date: z.string().refine((val) => {
            const date = new Date(val)
            const age = new Date().getFullYear() - date.getFullYear()
            return age >= 18
        }, { message: "Вам должно быть 18 лет" }),
        policy: z.literal(true, {
            errorMap: () => ({ message: "Вы должны согласиться" }),
        }),
    })
    .refine((data) => data.password === data.passwordRepeat, {
        message: "Пароли не совпадают",
        path: ["passwordRepeat"],
    })
