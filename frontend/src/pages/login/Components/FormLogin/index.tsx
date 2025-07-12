import { Typewriter } from "react-simple-typewriter"
import { ButtonForm, ContainerForm } from "./styles"
import { EnvelopeSimpleIcon, LockIcon } from "@phosphor-icons/react"

export function FormLogin() {

    return (
        <ContainerForm>
            <div>
                <h1>FACA SEU LOGIN</h1>
                <p>Caso voce ja tenha conta na Invest.AI, ultilize o mesmo login e senha</p>
            </div>

            <form>
                <div>
                    <label>Email ou CPF</label>
                    <i><EnvelopeSimpleIcon size={22} /></i>
                    <input />
                </div>

                <div>
                    <label>Senha</label>
                    <i><LockIcon size={22} /></i>
                    <input />
                    <a>esqueceu a senha?</a>
                </div>

                <ButtonForm>ENTRAR</ButtonForm>
                <a>Ainda não possui uma conta?</a>
            </form>
        </ContainerForm>
    )
}