import { Container, ContainerContent } from "./styles";
import { Slogan } from "./components/Slogan";
import { LoginForm } from "./components/LoginForm";
import { VantaBackground } from "@/components/ui/vantaBackground";

export function Login() {

    return (
        <Container>
            <ContainerContent>
                <VantaBackground
                    color={0x00c46f}
                    backgroundColor={0x222222}
                    showDots={true}
                    points={11}
                />
                <Slogan />
                <LoginForm />
            </ContainerContent>
        </Container>
    )
}