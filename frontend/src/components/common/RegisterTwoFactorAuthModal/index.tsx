import * as Dialog from "@radix-ui/react-dialog"
import {
    ButtonCopySecretKey,
    CloseButton,
    ContainerAuth,
    ContainerButtonsForm,
    ContainerManualQRCode,
    ContainerQRCode,
    Content,
    Overlay,
    QRCode,
    Separator,
    Title
} from "./styles"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CopyIcon, InfoIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { api } from "@/_lib/axios";
import { useMutation } from "@tanstack/react-query";
import { registerUserWith2FA } from "@/services/register";
import { Button } from "../Button";


const registerQRCodeSchema = z.object({
    qrcode: z.string()
})

type FormData = z.infer<typeof registerQRCodeSchema>



interface TwoFactorAuthModalProps {
    onSuccess: () => void;
}


export function RegisterTwoFactorAuthModal({ onSuccess }: TwoFactorAuthModalProps) {

    const [qrCodeUri, setQrCodeUri] = useState("");
    const [secretKey, setSecretKey] = useState("");
    const [loading, setLoading] = useState(true);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerQRCodeSchema),
    });

    function handleCopySecretKey() {
        navigator.clipboard.writeText("1234567890");
        toast.success("Secret key copied to clipboard");
    }


    async function handleValidation(data: FormData) {
        //const code = data.digits.map(d => d.name).join(""); // combine to "123456"
        //console.log("2FA code to send:", code);

        const code = data.qrcode;

        console.log("This is the code: ", code);

        try {
            await api.post("/auth/verify-2fa", { code }, { withCredentials: true });
            console.log("submitted!", data);
            toast.success("✅ Código verificado!")
            // window.location.replace("http://localhost:5000/"); // or redirect
            //window.open("http://localhost:5001/flask-preview", "_self");
            onSuccess?.();
        } catch (error) {
            //alert("❌ Código inválido");
            toast.error("❌ Código inválido")
        }
    }

    async function handleCancel() {
        try {
            await api.delete("/auth/cancel-2fa", { withCredentials: true });
            onCancel?.();
        } catch (error) {
            toast.error("Erro ao cancelar 2FA")
        }
    }


    const { mutateAsync: registerWith2FAFn } = useMutation({
        mutationFn: registerUserWith2FA,
    })

    useEffect(() => {
        console.log("useEffect is running!");
        const fetchQrCodeUri = async () => {
            try {
                console.log("Fetching QR URI...");

                const response = await registerWith2FAFn();
                //nst response = await api.get("/auth/get-2fa-uri");
                console.log("QR URI response:", response);
                setQrCodeUri(response.uri);
                setSecretKey(response.secret_key);

            } catch (error) {
                console.error("Error fetching QR URI:", error);
                setLoading(false);
                toast.error("Erro ao obter o QRCode");
            }
            finally {
                setLoading(false)
            }
        };

        fetchQrCodeUri();
    }, []);


    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Title>Autenticação de 2 Fatores</Title>
                <CloseButton>
                    <XIcon size={24} />
                </CloseButton>
                <p>Usando um aplicativo de autenticação, como o <span>Google Authenticator</span>, <span>Microsoft Authenticator</span>, <span>Authy</span>
                    ou outro aplicativo compativel, escaneie o QR Code abaixo. Será gerado um código de 6 dígitos para
                    você inserir no campo abaixo.</p>
                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    <ContainerAuth>
                        <ContainerQRCode>
                            <QRCode>
                                {
                                    qrCodeUri && (
                                        <>
                                            {console.log("QR Code URL:", `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeUri)}&size=200x200`)}
                                            <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeUri)}&size=200x200`} alt="QRCode" style={{ margin: '20px 0' }} />
                                        </>

                                    )
                                }

                            </QRCode>


                            <form onSubmit={handleSubmit(handleValidation)}>
                                <label>Inserir o código de autenticação gerado pelo seu aplicativo autenticador.</label>
                                <input type="text" {...register("qrcode")} placeholder="QR Code" />
                                <p><InfoIcon size={24} />Se o aplicativo pedir um nome de conta, você pode usar “Invest.AI”</p>

                                <ContainerManualQRCode>
                                    <p><span>Não conseguiu escanear?</span> Copie esta chave de código e insira manualmente no seu aplicativo de autenticação.</p>
                                    <div>
                                        <p>{secretKey}</p>
                                        <ButtonCopySecretKey
                                            type="button"
                                            onClick={handleCopySecretKey}
                                        >
                                            <CopyIcon size={24} />
                                        </ButtonCopySecretKey>
                                    </div>
                                </ContainerManualQRCode>

                                <Separator />

                                <ContainerButtonsForm>
                                    <Button onClick={() => (console.log("I am here"))} type="button" bgVariant="gray" text="CANCELAR" size="medium" />
                                    <Button type="submit" bgVariant="green" text="VERIFICAR" size="medium" color="textLight" />
                                </ContainerButtonsForm>
                            </form>

                        </ContainerQRCode>


                    </ContainerAuth>
                )
                }

            </Content>
        </Dialog.Portal>
    )

}