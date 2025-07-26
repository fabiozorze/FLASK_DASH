import { useState } from "react";
import { ContainerSlogan, Typewriter } from "./styles";
import { useTypewriter, Cursor } from "react-simple-typewriter";


export function Slogan() {


    // 1) call the hook instead of <Typewriter>
    const [text, helper] = useTypewriter({
        words: ['O investimento realmente inteligente!'],
        loop: 2,           // run the full list twice
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000,
    })

    // 2) the helper object gives us a “isDone” flag
    const { isDone } = helper

    return (
        <ContainerSlogan>
            <div>
                <h1>Invest<span>.AI</span></h1>
            </div>
            
            {
                !isDone ?
                    (
                        <Typewriter>{text || '\u00A0'}</Typewriter>
                    )
                    :
                    (
                        <Typewriter>O investimento realmente inteligente!</Typewriter>
                    )
            }

        </ContainerSlogan>
    )
}