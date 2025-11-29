import styled from "styled-components";
import { responsive } from "@/styles/media";


export const VantaLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;

    ${responsive.maxMobileXL`
    height: 33%;
    top: 113px

  `}

    ${responsive.maxMobileL`
    height: 30%;
    top: 93px

  `}

`;


