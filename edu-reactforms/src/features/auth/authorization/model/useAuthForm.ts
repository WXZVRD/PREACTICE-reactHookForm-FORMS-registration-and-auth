import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "./validation"
import type { z } from "zod"

export type AuthFormValues = z.infer<typeof formSchema>

export const useAuthForm = () =>
    useForm<AuthFormValues>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        },
    })
