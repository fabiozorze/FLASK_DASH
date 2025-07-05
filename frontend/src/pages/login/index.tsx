import { Container } from "./styles";
import { Slogan } from "./Components/Slogan";
import { FormLogin } from "./Components/FormLogin";

export function Login() {
    
    return (
        <Container>
            <Slogan/>
            <FormLogin/>
        </Container>
    )
}
