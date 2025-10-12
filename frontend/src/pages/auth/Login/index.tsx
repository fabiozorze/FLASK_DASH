import { Container } from "./styles";
import { Slogan } from "./components/Slogan";
import { LoginForm } from "./components/LoginForm";


export function Login() {

    return (
        <Container>
            <Slogan/>
            <LoginForm/>
        </Container>
    )
}
