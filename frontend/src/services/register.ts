import { api } from "@/_lib/axios";

interface RegisterBody{
    uri?:string;
    secret_key?: string;
    name: string;
    email: string;
    password: string;
    cpf: string;
    issuer?: string;
}

export async function registerUser(data: RegisterBody) {
    const { name, email, password} = data;

    const response = await api.post("/auth/register", {name, email,password})

    console.log("Response:", response.data);

    return response.data;
}

export async function registerUserWith2FA() {

    const response = await api.get("/auth/get-2fa-uri")

    console.log(" Here is the Response of file register.tsx:", response.data);

    return {
        uri: response.data.uri,
        secret_key: response.data.secret_key,
    };
}
