import styled from "styled-components";
import { responsive } from "@/styles/media";


export const Container = styled.div`
width: 100vw;
height: 100vh;

position: relative;

display: flex;
align-items: center;
justify-content: center;

`;

export const ContainerContent = styled.div`

width: 90%;
max-width: 78rem;
height: auto;

display: flex;

align-items: stretch;
justify-content: space-between;

border: 1px solid ${props=> props.theme.colors["borderGray"]};	
border-radius: 8px;

  // For screens 1600px and SMALLER (not larger!)
  ${responsive.laptopL`
    max-width: 55rem; // Smaller than 78rem
  `}

`