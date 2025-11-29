import { ButtonForm, 
    ButtonShowPassword, 
    ContainerActions, 
    ContainerForgotPassword, 
    ContainerLogin, 
    ContainerLogin_title,
    ContainerLogin_form,
    ContainerInputEmail, 
    ContainerInputPassword, 
    ContainerInputs, 
    CreateAccountLink, 
    IconEmail, 
    IconPassword, 
    IconEye,
    InputEmail, 
    InputPassword } from "./styles"
import { EnvelopeSimpleIcon, EyeIcon, EyeSlashIcon, LockIcon } from "@phosphor-icons/react"
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import { login } from "@/services/login"
import { useState } from "react"
import { TwoFactorAuthModal } from "../../../../../components/common/TwoFactorAuthModal";


const signInUserFormSchema = z.object({
    email: z.string()
        .nonempty("Email é obrigatório"),

    password: z.string()
        .min(6, "Senha deve ter pelo menos 6 caracteres"),
})


export function LoginForm() {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [showTwoFactorModal, setShowTwoFactorModal] = useState(false);

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { isValid } } = useForm({
        resolver: zodResolver(signInUserFormSchema),
        mode: "onChange",
    });

    const { mutateAsync: authenticate } = useMutation({
        mutationFn: login,
    })

    async function handleLogin(data: z.infer<typeof signInUserFormSchema>) {
        // const { email, password } = data;

        try {
            await authenticate({ email: data.email, password: data.password })
            // const response = await api.post("/auth/login", {
            //     email,
            //     password
            // });

            // ✅ If login is successful, redirect or go to 2FA
            console.log("Login successful", /*response.data*/);
            toast.success("Login realizado com successo.")

            setShowTwoFactorModal(true);
            //navigate("/two-factor", { replace: true })
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

    function handleShowPassword() {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <ContainerLogin>
            <ContainerLogin_title>
                <h1>Login</h1>
                <p>Entre com seu email e senha para acessar a plataforma</p>
            </ContainerLogin_title>

            <ContainerLogin_form onSubmit={handleSubmit(handleLogin)}>
                <ContainerInputs>
                    <label>Email ou CPF</label>
                    <IconEmail><EnvelopeSimpleIcon color="black" /></IconEmail>
                    <ContainerInputEmail>
                        <InputEmail
                            type="email"
                            {...register("email")}
                        />
                    </ContainerInputEmail>
                </ContainerInputs>

                <ContainerInputs>
                    <label>Senha</label>
                    <IconPassword><LockIcon  color="black" /></IconPassword>
                    <ContainerInputPassword>
                        <InputPassword type={isPasswordVisible ? "text" : "password"}
                            {...register("password")}
                        />
                        <ButtonShowPassword onClick={handleShowPassword} type="button">
                            {isPasswordVisible ? <IconEye><EyeIcon color="black" /></IconEye> : <IconEye><EyeSlashIcon color="black" /></IconEye> }
                        </ButtonShowPassword>
                        <ContainerForgotPassword>
                            <a>esqueceu a senha?</a>
                        </ContainerForgotPassword>
                    </ContainerInputPassword>
                </ContainerInputs>

                <ContainerActions>

                    <ButtonForm type="submit" disabled={!isValid}>ENTRAR</ButtonForm>
                    <CreateAccountLink>
                        Ainda não possui uma conta?<a href="#" onClick={e => {
                            e.preventDefault()   // prevent the href="#" from jumping
                            handleRegister()     // call your function when clicked
                        }}>Criar uma conta</a>
                    </CreateAccountLink>
                </ContainerActions>
            </ContainerLogin_form>


            {/*Using radix UI to create a modal for the 2fac authentication*/}
            <Dialog.Root open={showTwoFactorModal} onOpenChange={setShowTwoFactorModal}>
                <Dialog.Trigger asChild>
                    <TwoFactorAuthModal onSuccess={() => setShowTwoFactorModal(false)} />
                </Dialog.Trigger>
            </Dialog.Root>
        </ContainerLogin>
    )
}





