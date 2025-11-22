import styled from "styled-components";
import { responsive } from "@/styles/media";
import type { DefaultTheme } from "styled-components";


export const ContainerSlogan = styled.div`

background: rgba(34, 34, 34, .8);

width: 100%;


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 0 2rem;

border-radius: 8px 0 0 8px;


${responsive.maxMobileL`
    background: transparent;

    justify-content: flex-start;
    align-items: flex-start;
    padding: 1.5rem 1rem;
  `}


h1{
    color: ${props=> props.theme.colors["white"]};
    font-family: ${props=> props.theme.fonts["title"]};
    font-size: ${props=> props.theme.fontSizes["xxl"]};
    font-weight: ${props=> props.theme.fontWeights["bold"]};

  // For screens 1440px and SMALLER (not larger!)
  ${responsive.laptopL`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["xl"]};
  `}

  ${responsive.maxMobileL`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["lg"]};
  `}

}

h1 span{
    color: ${props=> props.theme.colors["green"]};
}

`

export const Typewriter = styled.p`

  margin: 0;
  min-height: 1.2em;

  font-family: ${props=> props.theme.fonts["slogan"]};
  font-size: ${props=> props.theme.fontSizes["base"]};
  font-weight: ${props=> props.theme.fontWeights["light"]};
  color: ${props=> props.theme.colors["white"]};

    // For screens 1440px and SMALLER (not larger!)
    ${responsive.laptopL`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["sm"]};
  `}

  ${responsive.maxMobileL`
    display: none;
  `}

`