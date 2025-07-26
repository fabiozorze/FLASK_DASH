import { Route, Routes } from "react-router-dom"
import { Login } from "./auth/Login"
import { Home } from "./pages/Home"
import { Authentication } from "./auth/Login/Components/FormLogin/TwoFactorAuth"
import { SignUp } from "./auth/Login/Components/FormLogin/SignUp"


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/TwoFactorAuth" element={<Authentication />} />
            <Route path="/SignUp" element={<SignUp/>} />
        </Routes>
    )
}