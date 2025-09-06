import { Header } from "@/components/common/Header";
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