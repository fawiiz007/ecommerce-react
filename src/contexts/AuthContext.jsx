import { createContext } from "react"
import { useState } from "react";
import { set } from "react-hook-form";

const AuthContext = createContext(null)

export default function AuthProvider({children}){
    const [user, setUser] = useState(null)

    function signUp(email, password){
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some((u) => u.email === email)) {
            return {success: false, message: "Email already exists"};
        }

        const newUser = {email, password}
        users.push(newUser)

        localStorage.setItem("users", JSON.stringify(users))

        setUser(newUser)
        return {success: true, message: "User registered successfully"};

    }

    function logIn(email, password){
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.email === email && u.password === password);
        setUser(user);
    }

    return <AuthContext.Provider value={{user, setUser, signUp}}>{children}</AuthContext.Provider> 
}