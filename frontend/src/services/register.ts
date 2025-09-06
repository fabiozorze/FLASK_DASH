import { api } from "@/_lib/axios";

interface RegisterBody{
    name: string;
    email: string;
    password: string;
}

export async function registerUser({name, email, password}: RegisterBody) {
    await api.post("/auth/register", {name, email, password})
}