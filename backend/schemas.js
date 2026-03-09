import z from "zod";

const usernameSchema = z.object({
    username: z.string().min(4, "Nome de usuário deve ter no mínimo 4 caracteres.").max(12, "Nome de usuário deve ter no máximo 12 caracteres.")
});

const emailSchema = z.object({
    email: z.email("Email inválido.")
});

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.])(?=.{8,})/;

const passwordSchema = z.object({
    password: z.string("Senha inválida.").regex(passwordRegex)
})

export const registerSchema = z.object({
    ...usernameSchema.shape,
    ...emailSchema.shape,
    ...passwordSchema.shape
})