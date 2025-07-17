import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/login"
import { Home } from "./pages/home"
import { Authentication } from "./pages/login/TwoFactorAuth"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/TwoFactorAuth" element={<Authentication />} />
        </Routes>
    )
}