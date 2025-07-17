import { AuthImage, ContainerAuth } from "./styles";
import { KeyIcon } from "@phosphor-icons/react"


export function Authentication() {
    return (
        <ContainerAuth>
            <AuthImage>
                <i><KeyIcon size={75} /></i>
            </AuthImage>
            <h1>VALIDACAO DE CONTA</h1>
            <form>
                <div>
                    <input type="text"
                        inputMode="numeric"
                        pattern="\d"
                        maxLength={1}
                        autoComplete="one-time-code"
                    />
                    <input type="text"
                        inputMode="numeric"
                        pattern="\d"
                        maxLength={1}
                        autoComplete="one-time-code"
                    />
                    <input type="text"
                        inputMode="numeric"
                        pattern="\d"
                        maxLength={1}
                        autoComplete="one-time-code"
                    />
                    <input type="text"
                        inputMode="numeric"
                        pattern="\d"
                        maxLength={1}
                        autoComplete="one-time-code"
                    />
                    <input type="text"
                        inputMode="numeric"
                        pattern="\d"
                        maxLength={1}
                        autoComplete="one-time-code"
                    />
                    <input type="text"
                        inputMode="numeric"
                        pattern="\d"
                        maxLength={1}
                        autoComplete="one-time-code"
                    />
                </div>
                <label>Por favor, insira o código de autenticação gerado pelo seu aplicativo autenticador.</label>
                <button type="submit">VERIFICAR</button>
            </form>
        </ContainerAuth>
    );
}
