import styled from "styled-components";
import { responsive } from "@/styles/media";


export const Container = styled.div`
background-color: ${props=>props.theme.colors["bgGrayDark"]};
width: 100vw;
height: 100vh;

position: relative;

display: flex;
align-items: center;
justify-content: center;

z-index: 0;

`;

export const ContainerContent = styled.div`

width: 90%;
max-width: 78rem;
height: auto;

display: flex;
flex-direction: row;

align-items: stretch;
justify-content: space-between;

border: 1px solid ${props=> props.theme.colors["borderGray"]};	
border-radius: 8px;

  // For screens 1600px and SMALLER (not larger!)
  ${responsive.maxLaptopL`
    max-width: 55rem; // Smaller than 78rem
  `}

  ${responsive.maxMobileL`
    background-color: rgba(34, 34, 34, 0.5); /* The dark overlay effect */
    flex-direction: column;
  `}

${responsive.maxMobileXL`
    background-color: rgba(34, 34, 34, 0.5); /* The dark overlay effect */
    flex-direction: column;
  `}

`