import { ButtonForm, ContainerForm } from "./styles"
import { EnvelopeSimpleIcon, LockIcon } from "@phosphor-icons/react"
import{useForm} from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


const createUserFormSchema = z.object({
    email: z.string()
    .nonempty("Email é obrigatório"),

    password: z.string()
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
})


export function FormLogin() {

    const{ register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createUserFormSchema),
    });

    function createUser(data: any) {
        console.log(data);
    }

    return (
        <ContainerForm>
            <div>
                <h1>FACA SEU LOGIN</h1>
                <p>Caso voce ja tenha conta na Invest.AI, ultilize o mesmo login e senha</p>
            </div>

            <form onSubmit={handleSubmit(createUser)}>
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
                    {errors.password && <span>{errors.password.message}</span> }
                    <a>esqueceu a senha?</a>
                </div>

                <ButtonForm>ENTRAR</ButtonForm>
                <a onClick={()=>{
                    console.log("Ok I am here")
                }}>Ainda não possui uma conta?</a>
            </form>
        </ContainerForm>
    )
}