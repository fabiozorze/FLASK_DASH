import styled from "styled-components";
import LoginBG from "../../../assets/img/login_background.png"
import { media } from "@/styles/media";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20rem;

    background: url(${LoginBG}) no-repeat center center/cover;

    padding: 0 7rem;

    ${media.xxl}{
        gap: 60rem;
    }


`;