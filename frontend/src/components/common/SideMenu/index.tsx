
import { 
    Container, 
    ContainerAccount, 
    ContainerTitle, 
    Menu, 
    MenuContainer, 
    NavLink 
} from "./styles";
import { 
    BankIcon, 
    GearIcon, RobotIcon, 
    SquaresFourIcon, 
    TrendUpIcon, 
    WallIcon 
} from "@phosphor-icons/react"



 
export function SideMenu(){
    return(
        <Container>
            <MenuContainer>
                <ContainerTitle>
                    <h1>Invest<span>.AI</span></h1>
                </ContainerTitle>
                
                <Menu>
                    <NavLink
                        to="."
                        end
                        className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined)}
                    >
                        <SquaresFourIcon size={20}/>
                        Dashboard

                    </NavLink>
                    <NavLink
                        to="portfolio"
                        className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined)}
                    >
                        <TrendUpIcon size={20}/>
                        Portfolios
                    </NavLink>

                    <NavLink
                        to="estrategias"
                        className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined)}
                    >
                        <RobotIcon size={20}/>
                        Estrategias
                    </NavLink>

                    <ContainerAccount>
                        <p>CONTAS</p>
                    </ContainerAccount>

                    <NavLink
                        to="corretora"
                        className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined)}
                    >
                        <BankIcon size={20}/>
                        Corretoras
                    </NavLink>

                    <NavLink
                        to="planos"
                        className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined)}
                    >
                        <WallIcon size={20}/>
                        Planos
                    </NavLink>

                    <NavLink
                        to="planos"
                        className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined)}
                    >
                        <GearIcon size={20}/>
                        Settings
                    </NavLink>
                </Menu>
            </MenuContainer>
        </Container>
    )
}