import { ButtonForm, ContainerActions, ContainerForm, CreateAccountLink } from "./styles"
import { EnvelopeSimpleIcon, LockIcon } from "@phosphor-icons/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../../../../_lib/axios"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"


const signInUserFormSchema = z.object({
    email: z.string()
        .nonempty("Email é obrigatório"),

    password: z.string()
        .min(6, "Senha deve ter pelo menos 6 caracteres"),
})


export function FormLogin() {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signInUserFormSchema),
    });

    async function handleLogin(data: z.infer<typeof signInUserFormSchema>) {
        const { email, password } = data;

        try {
            const response = await api.post("/auth/login", {
                email,
                password
            });
            // ✅ If login is successful, redirect or go to 2FA
            console.log("Login successful", response.data);
            toast.success("Login realizado com successo.")
            navigate("/two-factor", { replace: true })
            // window.location.href = "/TwoFactorAuth";// example - adjust to your route

        } catch (error: any) {
            if (error.response && error.response.status === 403) {
                //alert("Email ou senha inválidos");
                toast.error("Email ou senha inválidos.")
            } else {
                //alert("Erro ao tentar fazer login");
                console.error(error);
                toast.error("Erro ao tentar fazer login.")
            }
        }
    }

    async function handleRegister() {
        try {
            navigate("/signup", { replace: true })
            //window.open("http://localhost:5001/auth/register.html", "_self");
        } catch (error) {
            alert("❌ Código inválido");
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

                <ContainerActions>
                    <ButtonForm type="submit">ENTRAR</ButtonForm>
                    <CreateAccountLink>
                        Ainda não possui uma conta?<a href="#" onClick={e => {
                            e.preventDefault()   // prevent the href="#" from jumping
                            handleRegister()     // call your function when clicked
                        }}>Sign Up</a>
                    </CreateAccountLink>

                </ContainerActions>


            </form>
        </ContainerForm>
    )
}