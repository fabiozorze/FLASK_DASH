import { api } from "@/_lib/axios"

interface GetProfileResponse {
    name: string
    email: string
    authenticated: boolean
    has_2fa: boolean
    session_info: {
        email: string
        name: string
        authenticated: boolean
    }
}

export async function getProfile() {
    const response = await api.get<GetProfileResponse>("/auth/profile")
    return response.data
}