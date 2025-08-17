
import { Container, NavLink, Separator } from "./styles";
import { PresentationChartIcon, ChartPieSliceIcon } from "@phosphor-icons/react"


 
export function Header(){
    return(
        <Container>
            <div>
                <h1>Invest<span>.AI</span></h1>
                <Separator/>
                <nav>
                    <NavLink
                        to="."
                        end
                        className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined)}
                    >
                        <PresentationChartIcon size={36}/>
                        stragey
                    </NavLink>
                    <NavLink
                        to="portfolio"
                        className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined)}
                    >
                        <ChartPieSliceIcon size={34}/>
                        portfolio
                    </NavLink>
                </nav>
            </div>
        </Container>
    )
}