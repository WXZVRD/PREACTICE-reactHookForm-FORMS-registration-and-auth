import { z } from "zod"

export const formSchema = z
    .object({
        email: z.string().email("Неверный email"),
        password: z.string().min(6, "Мин. 6 символов"),
    })
