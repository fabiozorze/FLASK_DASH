import { ButtonForm, ContainerForm } from "./styles"
import { EnvelopeSimpleIcon, LockIcon} from "@phosphor-icons/react"

export function FormLogin() {

    return (
        <ContainerForm>
            <h1>FACA SEU LOGIN</h1>
            <p>Caso voce ja tenha conta na Invest.AI, ultilize o mesmo login e senha</p>
            <form>
                <div>
                    <label>Email ou CPF</label>
                    <i><EnvelopeSimpleIcon size={32}/></i>
                    <input/>
                </div>

                <div>
                    <label>Senha</label>
                    <i><LockIcon size={32}/></i>
                    <input/>
                    <a>esqueceu a senha?</a>
                </div>

                <ButtonForm>SUBMIT</ButtonForm>
                <p>Ainda não possui uma conta?</p>
            </form>
        
        </ContainerForm>


    )
}