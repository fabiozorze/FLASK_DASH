import { Container } from "./styles";
import { Slogan } from "./Components/Slogan";
import { FormLogin } from "./Components/FormLogin";
import { Helmet } from "react-helmet-async";

export function Login() {
    return (
        <Container>
            <Helmet title="Login"/>
            <Slogan/>
            <FormLogin/>
        </Container>
    )
}
