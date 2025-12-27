import { SideMenu } from "@/components/common/SideMenu";
import { Header } from "@/components/common/Header";
import { Outlet, useLocation } from "react-router-dom";
import { Container, ContainerContent } from "./styles";


export function DashboardLayout() {

    //this will get the current end point to update the header title
    const location = useLocation();

    const getPageTitle = (path: string) => {
        // 1. Check if the path contains specific keywords
        if (path.includes("portfolio")) return "Portfolios";
        if (path.includes("estrategias")) return "Estratégias";
        if (path.includes("corretoras")) return "Corretoras";
        if (path.includes("planos")) return "Planos";
        if (path.includes("settings")) return "Settings";

        // 2. Default fallback (for the main /dashboard path)
        return "Dashboard";
    }

    const currentTitle = getPageTitle(location.pathname)


    return (
        <Container>
            <SideMenu />
            <ContainerContent>
                <Header title={currentTitle} />
                <Outlet />
            </ContainerContent>
        </Container>
    )
}