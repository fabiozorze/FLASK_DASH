import { ButtonForm, ButtonShowPassword, ContainerActions, ContainerForm, ContainerInputPassword, ContainerInputs, CreateAccountLink, Input, InputPassword } from "./styles"
import { EnvelopeSimpleIcon, EyeIcon, EyeSlashIcon, LockIcon } from "@phosphor-icons/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../../../../_lib/axios"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import { login } from "@/services/login"
import { useState } from "react"


const signInUserFormSchema = z.object({
    email: z.string()
        .nonempty("Email é obrigatório"),

    password: z.string()
        .min(6, "Senha deve ter pelo menos 6 caracteres"),
})


export function LoginForm() {

    const[isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signInUserFormSchema),
    });

    const { mutateAsync: authenticate} = useMutation({
        mutationFn: login,	
    })

    async function handleLogin(data: z.infer<typeof signInUserFormSchema>) {
        // const { email, password } = data;

        try {
            await authenticate({email: data.email, password: data.password})
            // const response = await api.post("/auth/login", {
            //     email,
            //     password
            // });

            // ✅ If login is successful, redirect or go to 2FA
            console.log("Login successful", /*response.data*/);
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

    function handleShowPassword(){
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <ContainerForm>
            <div>
                <h1>FACA SEU LOGIN</h1>
                <p>Caso voce ja tenha conta na Invest.AI, ultilize o mesmo login e senha</p>
            </div>

            <form onSubmit={handleSubmit(handleLogin)}>
                <ContainerInputs>
                    <label>Email ou CPF</label>
                    <i><EnvelopeSimpleIcon size={22} /></i>
                    <Input
                        type="email"
                        {...register("email", { required: "Email é obrigatório" })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </ContainerInputs>

                <ContainerInputs>
                    <label>Senha</label>
                    <i><LockIcon size={22} /></i>
                    <ContainerInputPassword>
                        <InputPassword type={isPasswordVisible ? "text" : "password"}
                        {...register("password", { required: "Senha é obrigatória" })}
                        />
                        <ButtonShowPassword onClick={handleShowPassword} type="button">
                            {isPasswordVisible ? <EyeIcon size={30} color="#fff"/> : <EyeSlashIcon size={30} color="#fff"/>}
                        </ButtonShowPassword>
                    </ContainerInputPassword>

                    
                    {errors.password && <span>{errors.password.message}</span>}
                    <a>esqueceu a senha?</a>
                </ContainerInputs>

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