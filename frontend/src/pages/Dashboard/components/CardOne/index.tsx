import { AllocationBar } from "../AllocationBar";
import { StrategyPerformance } from "../StrategyPerformance";
import { ButtonCreateStrategy, ButtonDtail, CardContainer, ContainerCardTitle, ContainerDetails } from "./styles";

export function CardOne() {

    const btcValue = 20 * 3000;
    const ethValue = 10 * 1000;

    return (
        <CardContainer>
            <ContainerCardTitle>
                <h2>Long Term HODL</h2>
            </ContainerCardTitle>

            <AllocationBar
                slices={[
                    { key: 'BTC', label: 'BTC', color: '#F7931A', value: btcValue },
                    { key: 'ETH', label: 'ETH', color: '#627EEA', value: ethValue },
                ]}
            />
            <StrategyPerformance />
            <ContainerDetails>
                <p>Aim for stability and long-term growth by focusing on Bitcoin and Ethereum</p>
                <ButtonDtail>DETALHE</ButtonDtail>
            </ContainerDetails>
            <ButtonCreateStrategy>CRIAR</ButtonCreateStrategy>
        </CardContainer>
    );
}