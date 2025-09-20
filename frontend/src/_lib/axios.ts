import axios from "axios";

export const api = axios.create({
    //aseURL: "http://localhost:5000",
    withCredentials: true,
})