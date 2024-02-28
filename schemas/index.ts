import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email valide requis",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 caractères requis",
  }),
});
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email valide requis",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 caractères requis",
  }),
  name: z.string().min(3, {
    message: "Minimum 3 caractères requis",
  }),
});
