import { api } from "@/_lib/axios";

export async function signOut() {
    await api.post("/auth/sign-out")
}