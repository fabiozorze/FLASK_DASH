import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Authentication } from "./pages/Login/TwoFactorAuth"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/TwoFactorAuth" element={<Authentication />} />
        </Routes>
    )
}