import { api } from "@/_lib/axios"

export interface GetUserInfoResponse {
  profile: {
    name: string
    email: string
  }
  security: {
    has_2fa_enabled: boolean
    password_last_changed?: string
  }
  session: {
    authenticated: boolean
    session_email: string
    session_name: string
    permanent: boolean
  }
  account: {
    created_at?: string
    last_login?: string
    account_status: string
  }
}

export async function getUserInfo(){
  const response = await api.get<GetUserInfoResponse>("/auth/user-info")
  return response.data
}
