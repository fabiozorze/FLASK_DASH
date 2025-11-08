import styled from "styled-components";
import LoginBG from "../../../assets/img/login_background.png"
import { media } from "@/styles/media";

export const Container = styled.div`
width: 100vw;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;

`;

export const ContainerContent = styled.div`

width: 78rem;

display: flex;

align-items: center;
justify-content: space-between;

border: 1px solid ${props=> props.theme.colors["borderGray"]};	
border-radius: 8px;

//background: url(${LoginBG}) no-repeat center center/cover;

/* 
${media.xxl}{
    gap: 60rem;
} */



`