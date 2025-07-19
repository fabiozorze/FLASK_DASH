import { ButtonForm, ContainerForm } from "./styles"
import { EnvelopeSimpleIcon, LockIcon } from "@phosphor-icons/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../../../lib/axios"


const createUserFormSchema = z.object({
    email: z.string()
        .nonempty("Email é obrigatório"),

    password: z.string()
        .min(6, "Senha deve ter pelo menos 6 caracteres"),
})


export function FormLogin() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createUserFormSchema),
    });

    async function handleLogin(data: z.infer<typeof createUserFormSchema>) {
        const { email, password } = data;

        try {
            const response = await api.post("/auth/login", {
                email,
                password
            });
            // ✅ If login is successful, redirect or go to 2FA
            console.log("Login successful", response.data);
            window.location.href = "/TwoFactorAuth";// example - adjust to your route

        } catch (error: any) {
            if (error.response && error.response.status === 403) {
                alert("Email ou senha inválidos");
            } else {
                alert("Erro ao tentar fazer login");
                console.error(error);
            }
        }
    }

    return (
        <ContainerForm>
            <div>
                <h1>FACA SEU LOGIN</h1>
                <p>Caso voce ja tenha conta na Invest.AI, ultilize o mesmo login e senha</p>
            </div>

            <form onSubmit={handleSubmit(handleLogin)}>
                <div>
                    <label>Email ou CPF</label>
                    <i><EnvelopeSimpleIcon size={22} /></i>
                    <input
                        type="email"
                        {...register("email", { required: "Email é obrigatório" })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div>
                    <label>Senha</label>
                    <i><LockIcon size={22} /></i>
                    <input
                        type="password"
                        {...register("password", { required: "Senha é obrigatória" })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                    <a>esqueceu a senha?</a>
                </div>

                <ButtonForm>ENTRAR</ButtonForm>
                <a onClick={() => {
                    console.log("Ok I am here")
                }}>Ainda não possui uma conta?</a>
            </form>
        </ContainerForm>
    )
}