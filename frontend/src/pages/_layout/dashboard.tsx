import { Header } from "../_components/Header";
import { Outlet } from "react-router-dom";
import { Container, ContainerContent } from "./styles";

export function DashboardLayout() {
    return (
        <Container>
            <Header />
            <ContainerContent>
                <Outlet />
            </ContainerContent>
        </Container>
    )
}