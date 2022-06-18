
import { Routes, Route } from "react-router-dom"
import { Signin } from "../Auth/Signin/Signin"
import { Signup } from "../Auth/Signup/Signup"

export const Router = () => {
    return (
        <Routes>
            <Route path="login" element={<Signin></Signin>}></Route>
            <Route path="signup" element={<Signup></Signup>}></Route>
        </Routes>
    )
}