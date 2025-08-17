import { 
    ContainerAssetIcon, 
    ContainerInfoPerformance, 
    ContainerReturn, 
    ContainerReturnPercentage, 
    ContainerStretegyPerformance, 
    PeriodTag } from "./styles"
import { ArrowLineUpLeftIcon} from "@phosphor-icons/react"

import BTC from"@/assets/currency-icons/btc.png"
import ETH from"@/assets/currency-icons/eth.png"
import { PerformanceChart } from "../PerformanceChart"


export function StrategyPerformance(){

    return(
<ContainerStretegyPerformance>
    <ContainerInfoPerformance>
        <PeriodTag>
            <p>Last 2 years</p>
        </PeriodTag>
        <ContainerAssetIcon>
            <img src={BTC} alt="" />
            <img src={ETH} alt="" />
        </ContainerAssetIcon>
        <ContainerReturn>
            <p>RETURN</p>
            <ContainerReturnPercentage>
                <ArrowLineUpLeftIcon size={16}/>
                <p>495,44</p>
                <span>%</span>
            </ContainerReturnPercentage>
        </ContainerReturn>

    </ContainerInfoPerformance>
    <PerformanceChart/>
</ContainerStretegyPerformance>
    )
}