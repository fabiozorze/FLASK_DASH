import {
    Container,
    ContainerInputs,
    ContainerTitleSignUp,
    FormSignUp,
    ButtonFormSignUp,
    ContainerCheckBox,
    HiddenCheckbox,
    StyledCheckbox,
    Checkmark,
    ContainerPolices,
    ContainerForm,
    Logo,
    ContainerReturnPage,
    IconReturnPage
} from "./styles"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// import { api } from "../../../_lib/axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { registerUser } from "@/services/register"
import * as Dialog from "@radix-ui/react-dialog"
import { RegisterTwoFactorAuthModal } from "@/components/common/RegisterTwoFactorAuthModal"
import { insertMaskCPF } from "./utils/cpf"
import { VantaBackground } from "@/components/ui/vantaBackground"
import { SignOutIcon } from "@phosphor-icons/react"
import { SeparatorHorizontal } from "@/components/ui/SeparatorHorizontal"

const createUserFormSchema = z.object({
    name: z.string().nonempty("Campo Nome é obrogatario"),
    cpf: z.string().nonempty("Campo CPF é obrigatorio"),
    email: z.string().nonempty("Campo Email é obrigatório"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
})


export function SignUp() {

    const navigate = useNavigate();
    const [showTwoFactorModal, setShowTwoFactorModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [cpf, setCpf] = useState("");

    const { register, handleSubmit, formState: { isValid} } = useForm({
        resolver: zodResolver(createUserFormSchema),
        mode: "onChange",
    });

    const { mutateAsync: registerUserFn } = useMutation({
        mutationFn: registerUser,
    })



    const handleChange = () => {
        setIsChecked(!isChecked);
        console.log("Checkbox clicked")
    };

    const handle2FASuccess = () => {
        setShowTwoFactorModal(false);
        navigate("/dashboard", { replace: true })
    }

    function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCpf(insertMaskCPF(e.target.value));
    }




    async function handleSignUp(data: z.infer<typeof createUserFormSchema>) {
        //const { name, email, password } = data;
        if (isRegistered) {
            return;
        }

        try {
            const response = await registerUserFn(data)
            // const response = await api.post("/auth/register", {
            //     name,
            //     email,
            //     password
            // });

            // ✅ If login is successful, redirect or go to 2FA
            console.log("Login successful", /*response.data*/);

            if (response.needs_2fa_setup) {
                console.log("I am here!!!!!!");
                setIsRegistered(true);
                setShowTwoFactorModal(true);
            }
            // navigate("/TwoFactorAuth", {replace: true})
            //window.open("http://localhost:5001/auth/setup-2fa", "_self");
            // navigate('/auth/setup-2fa', { replace: true })

        } catch (error: any) {
            if (error.response && error.response.status === 403) {
                alert("Email ou senha inválidos");
            } else {
                alert("Erro ao tentar fazer login");
                console.error(error);
            }
        }
    }

    async function handleReturnPage() {
        try {
            navigate("/")
            //window.open("http://localhost:5001/auth/register.html", "_self");
        } catch (error) {
            alert("❌ Código inválido");
        }
    }


    return (
        <Container>
            <VantaBackground
                color={0x00c46f}
                backgroundColor={0x222222}
                showDots={true}
                points={11}
            />
            <ContainerForm>
            <Logo>Invest<span>.AI</span></Logo>
            <FormSignUp onSubmit={handleSubmit(handleSignUp)}>
                <ContainerTitleSignUp>
                    <h2>CADASTRE-SE</h2>
                    <h2>GRATUITAMENTE</h2>
                </ContainerTitleSignUp>
                <ContainerInputs>
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="digite seu nome"
                        {...register("name", { required: "Campo Nome é obrigatório" })}
                    />
                    {/* {errors.name && <span>{errors.name.message}</span>} */}
                </ContainerInputs>

                <ContainerInputs>
                    <label>CPF</label>
                    <input
                        type="text"
                        placeholder="digite seu cpf"
                        {...register("cpf", { required: "Campo CPF é obrigatório" })}
                        onChange={(e) => register.onChange(e.target.value)}
                    />
                    {/* {errors.cpf && <span>{errors.cpf.message}</span>} */}
                </ContainerInputs>

                <ContainerInputs>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="digite seu email"
                        {...register("email", { required: "Campo Email é obrigatório" })}
                    />
                    {/* {errors.email && <span>{errors.email.message}</span>} */}
                </ContainerInputs>

                <ContainerInputs>
                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="digite sua senha"
                        {...register("password", { required: "Campo Senha é obrigatória" })}
                    />
                    {/* {errors.password && <span>{errors.password.message}</span>} */}
                </ContainerInputs>

                <ContainerPolices>
                    <ContainerCheckBox>
                        <label>
                            <HiddenCheckbox checked={isChecked} onChange={handleChange} />
                            <StyledCheckbox>
                                <Checkmark>✓</Checkmark>
                            </StyledCheckbox>
                            <span>Li e aceito os <a href="#">Termos de Uso</a></span>
                        </label>
                    </ContainerCheckBox>

                    <ContainerCheckBox>
                        <label>
                            <HiddenCheckbox checked={isChecked} onChange={handleChange} />
                            <StyledCheckbox>
                                <Checkmark>✓</Checkmark>
                            </StyledCheckbox>
                            <span>Li e aceito a <a href="#">Política de Privacidade</a></span>
                        </label>
                    </ContainerCheckBox>
                </ContainerPolices>

                <ButtonFormSignUp type="submit" disabled={!isValid}>CADASTRAR-SE</ButtonFormSignUp >


                {/*Using radix UI to create a modal for the 2fac authentication*/}
                {
                    showTwoFactorModal && (
                        <Dialog.Root open={showTwoFactorModal} onOpenChange={setShowTwoFactorModal}>
                            <Dialog.Trigger asChild>
                                <RegisterTwoFactorAuthModal onSuccess={handle2FASuccess} />
                            </Dialog.Trigger>
                        </Dialog.Root>
                    )
                }

            </FormSignUp>

            <SeparatorHorizontal/>

            <ContainerReturnPage>
                <IconReturnPage><SignOutIcon/></IconReturnPage>
                    <a href="#" onClick={e => {
                        e.preventDefault()   // prevent the href="#" from jumping
                        handleReturnPage()     // call your function when clicked
                    }}>
                        Eu ja tenho uma conta
                    </a>
            </ContainerReturnPage>

            </ContainerForm>

        </Container>
    )
}