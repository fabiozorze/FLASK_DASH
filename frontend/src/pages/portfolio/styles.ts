import styled from "styled-components";
import bgImage from "../../assets/img/background_investiment_proccess.png";



export const Page = styled.div`
max-width: 100%;

`

export const SectionHowToCreatePortfolio = styled.div`
max-width: 1400px;

margin: 0 auto;


`

export const Header = styled.div`

display: flex;
flex-direction: column;
gap: 2rem;

padding-top: 3rem;
padding-left: 2rem;
padding-right: 2rem;
padding-bottom: 3rem;

`

export const Title = styled.h1`

font-size: ${props => props.theme.fontSizes["lg"]};
color: ${props => props.theme.colors["purpleDark"]};

`

export const Text = styled.p`
color: ${props => props.theme.colors["textDark"]};

`

export const ContainerCreationPortfolioMap = styled.div`
position: relative;

width: 100%;
height: 300px;


display: flex;
justify-content: center;
align-items: center;

&::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    position: center;

    opacity: .5;
}

`

export const ListContainer = styled.ul`
    max-height: 10rem;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    z-index: 10;
    
`

export const List = styled.li`
max-width: 18rem;

display: flex;
align-items: flex-start;
gap: 1rem;

`
export const ContainerListNumber = styled.div`


`
export const NumberText = styled.p`
height: 40px;
font-size: ${props => props.theme.fontSizes["xl"]};
color: ${props => props.theme.colors["purple"]};

margin: 0;
padding: 0;

`

export const ListContent = styled.div`
display: flex;
flex-direction: column;

`

export const ListContentTitle = styled.p`

font-size: ${props => props.theme.fontSizes["lg"]};
font-weight: ${props => props.theme.fontWeights["semibold"]};
color: ${props => props.theme.colors["purple"]};

`

export const ListContentText = styled.p`
flex-wrap: wrap;

font-size: ${props => props.theme.fontSizes["base"]};
color: ${props => props.theme.colors["textDark"]};

`

 
export const SectionExplorePortfolios = styled.div`
max-width: 1400px;


margin: 0 auto;


`

export const ContainerCards = styled.div`
display: grid;
grid-template-columns: repeat(3, 20rem);
justify-items: center;
justify-content: center;
gap: 2.5rem;


`