import * as Dialog from "@radix-ui/react-dialog"
import {  CloseButton, ContainerIconModal, ContainerLearnMore, Content, Overlay, Title } from "./styles"
import { api } from "@/_lib/axios"
import { useForm, useFieldArray } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { toast } from "sonner";
import { ShieldCheck, XIcon, Lock } from "@phosphor-icons/react";
import { Button } from "../Button";
import { useTheme } from "styled-components";
import { SeparatorHorizontal } from "@/components/ui/SeparatorHorizontal";



const verify2FASchema = z.object({
    digits: z.array(
        z.object({
            name: z.string().min(1, "Obrigatório").max(1, "Só 1 dígito").regex(/^\d$/, "Apenas números")
        })
    ).length(6, "Código precisa ter 6 dígitos"),
});

type FormData = z.infer<typeof verify2FASchema>;


interface TwoFactorAuthModalProps {
    onSuccess: () => void;
}

export function TwoFactorAuthModal({ onSuccess }: TwoFactorAuthModalProps) {

    const theme = useTheme()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormData>({
        resolver: zodResolver(verify2FASchema),
        defaultValues: {
            digits: Array(6).fill({ name: "" }), // 6 empty inputs
        },
    });

    const { fields } = useFieldArray<FormData>({
        control,
        name: "digits",
    })

    // one ref per input
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const handleChangeFocus = (idx: number, val: string) => {
        if (val && inputRefs.current[idx + 1]) {
            inputRefs.current[idx + 1].focus();
        }
    };

    async function handleValidation(data: FormData) {
        const code = data.digits.map(d => d.name).join(""); // combine to "123456"
        console.log("2FA code to send:", code);

        try {
            await api.post("/auth/verify-2fa", { code }, { withCredentials: true });
            //alert("✅ Código verificado!");
            console.log("submitted!", data);
            toast.success("✅ Código verificado!")
            // window.location.replace("http://localhost:5000/"); // or redirect
            //window.open("http://localhost:5001/flask-preview", "_self");
            onSuccess?.();
            navigate("/dashboard", { replace: true })
        } catch (error) {
            //alert("❌ Código inválido");
            toast.error("❌ Código inválido")
        }
    }
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <ContainerIconModal>
                    <ShieldCheck size={35} color={theme.colors["green"]} />
                </ContainerIconModal>
                <Title>Autenticação de 2 Fatores</Title>
                <CloseButton>
                    <XIcon size={24} />
                </CloseButton>
                <form onSubmit={handleSubmit(handleValidation)}>
                <label>Para garantir a segurança do seu acesso, pedimos que você confirme sua identidade digitando o código de verificação 
                    gerado pelo seu aplicativo autenticador.</label>
                    <div>
                        {fields.map((field, idx) => {
                            const { ref: registerRef, onChange: registerOnChange, name } =
                                register(`digits.${idx}.name`);

                            return (
                                <input
                                    key={field.id}
                                    type="text"
                                    maxLength={1}
                                    inputMode="numeric"
                                    name={name}
                                    onChange={e => {
                                        registerOnChange(e);// fire RHF’s onChange
                                        handleChangeFocus(idx, e.target.value); //focus logic
                                    }}
                                    ref={el => {
                                        registerRef(el);                        // attach RHF’s ref
                                        if (el) inputRefs.current[idx] = el;    // attach your own
                                    }}
                                />
                            );
                        })}

                    </div>
                    {errors.digits && <span>{errors.digits.message}</span>}
                    <Button type="submit" bgVariant="green" text="VERIFICAR" size="full" color="textLight" />
                </form>
                <SeparatorHorizontal />
                <ContainerLearnMore>
                    <h4><Lock size={20} />Por que isso é importante?</h4>
                    <p>Esse passo protege sua conta contra acessos não autorizados. <a href="https://support.google.com/accounts/answer/185839" target="_blank">Saiba mais</a></p>
                </ContainerLearnMore>
            </Content>
        </Dialog.Portal>
    )

}