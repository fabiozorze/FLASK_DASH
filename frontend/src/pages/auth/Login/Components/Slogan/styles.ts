import styled from "styled-components";
import { media } from "@/styles/media";

export const ContainerSlogan = styled.div`

background: rgba(34, 34, 34, .8);

width: 100%;
height: min(90vh, 42rem);

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

border-radius: 8px 0 0 8px;



h1{
    color: ${props=> props.theme.colors["white"]};
    font-family: ${props=> props.theme.fonts["title"]};
    font-size: ${props=> props.theme.fontSizes["xxl"]};
    font-weight: ${props=> props.theme.fontWeights["bold"]};

    ${media.xxl}{
        font-size: ${props=> props.theme.fontSizes.xxxl};
    }
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

`