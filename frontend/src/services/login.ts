import { api } from "@/_lib/axios";

interface LoginBody{
    email: string;
    password: string;
}

export async function login({email, password}: LoginBody) {
    await api.post("/auth/login", {email, password})
}
