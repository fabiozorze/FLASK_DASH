import { AuthImage, ContainerAuth } from "./styles";
import { KeyIcon } from "@phosphor-icons/react"
import { api } from "../../../lib/axios"
import { useForm, useFieldArray } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";



const verify2FASchema = z.object({
  digits: z.array(
    z.object({
      name: z.string().min(1, "Obrigatório").max(1, "Só 1 dígito").regex(/^\d$/, "Apenas números")
    })
  ).length(6, "Código precisa ter 6 dígitos"),
});


// const verify2FASchema = z.object({
//     digits: z
//         .array(z.string().min(1).max(1).regex(/^\d$/, "Apenas números"))
//         .length(6, "Código precisa ter 6 dígitos"),
// });

type FormData = z.infer<typeof verify2FASchema>;

export function Authentication() {

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


    async function handleValidation(data: FormData) {
        const code = data.digits.map(d => d.name).join(""); // combine to "123456"
        console.log("2FA code to send:", code);
        
        try {
            await api.post("/auth/verify-2fa", { code }, { withCredentials: true });
            alert("✅ Código verificado!");
            console.log("submitted!", data);
            // window.location.replace("http://localhost:5000/"); // or redirect
            window.open("http://localhost:5000/flask-preview", "_self");
        } catch (error) {
            alert("❌ Código inválido");
        }
    }

    // console.log("FIELDS", fields);
    return (

        <ContainerAuth>
            <AuthImage>
                <i><KeyIcon size={75} /></i>
            </AuthImage>
            <h1>VALIDACAO DE CONTA</h1>
            <form onSubmit={handleSubmit(handleValidation)}>
                <div>
                    {fields.map((field, index) => {
                        return (
                            <input
                                key={field.id}
                                type="text"
                                maxLength={1}
                                inputMode="numeric"
                                {...register(`digits.${index}.name`)}
                                onChange={(e) => {
                                    // Auto jump to next
                                    const next = document.querySelector<HTMLInputElement>(
                                        `input[name="digits.${index + 1}"]`
                                    );
                                    if (e.target.value && next) next.focus();
                                }}
                            />
                        )
                    })}
                </div>
                {errors.digits && <span>{errors.digits.message}</span>}
                <label>Por favor, insira o código de autenticação gerado pelo seu aplicativo autenticador.</label>
                <button type="submit">VERIFICAR</button>
            </form>
        </ContainerAuth>
    );
}
