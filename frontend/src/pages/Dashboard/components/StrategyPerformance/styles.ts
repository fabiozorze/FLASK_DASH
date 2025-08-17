import styled from "styled-components";

export const ContainerStretegyPerformance = styled.div`
background-color: ${props => props.theme.colors["bgGrayDark"]};

width: 100%;

display: flex;
gap: 1.5rem;

padding: .8rem;

border-radius: 8px;

`

export const ContainerInfoPerformance = styled.div`

display: flex;
flex-direction: column;

`

export const PeriodTag = styled.div`

background-color: ${props => props.theme.colors["bgWhite"]};

width: 4.60rem;
height: 1.2rem;

text-align: center;

padding: .2rem;

border-radius: 15px;

margin-bottom: .5rem;

p{
    font-size: ${props => props.theme.fontSizes["xxs"]};
    font-weight: ${props => props.theme.fontWeights["bold"]};
    color: ${props => props.theme.colors["textDark"]};

}

`

export const ContainerAssetIcon = styled.div`

width: 100%;

display: flex;
gap: .5rem;

margin-bottom: 1.5rem;

img{
height: 1.3rem;
}


`

export const ContainerReturn = styled.div`

display: flex;
flex-direction: column;
gap: .5rem;

p{
    font-size: ${props => props.theme.fontSizes["xxs"]};
    font-weight: ${props => props.theme.fontWeights["bold"]};
    color: ${props => props.theme.colors["white"]};
}

`

export const ContainerReturnPercentage = styled.div`
display: flex;
align-items: flex-end;

p{
    font-size: ${props => props.theme.fontSizes["md"]};
    font-weight: ${props => props.theme.fontWeights["bold"]};
    color: ${props => props.theme.colors["white"]};

    margin-left: .3rem;
}

`