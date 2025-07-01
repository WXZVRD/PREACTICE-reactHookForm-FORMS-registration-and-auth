import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "./validation"
import type { z } from "zod"

export type RegisterFormValues = z.infer<typeof formSchema>

export const useRegisterForm = () =>
    useForm<RegisterFormValues>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            firstName: "",
            secondName: "",
            email: "",
            password: "",
            passwordRepeat: "",
            date: "",
            policy: true,
        },
    })
