import * as Dialog from "@radix-ui/react-dialog"
import { Content, Overlay } from "./styles"
import { api } from "@/_lib/axios"
import { useForm, useFieldArray } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { toast } from "sonner";


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
                <Dialog.Title>2 Factor Authentication</Dialog.Title>
                <form onSubmit={handleSubmit(handleValidation)}>
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
                    <label>Por favor, insira o código de autenticação gerado pelo seu aplicativo autenticador.</label>
                    <button type="submit">VERIFICAR</button>
                </form>
                <Dialog.Close />
            </Content>
        </Dialog.Portal>
    )

}