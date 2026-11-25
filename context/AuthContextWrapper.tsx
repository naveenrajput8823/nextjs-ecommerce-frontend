"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

const initUser = {
    name: "",
    email: "",
    image: ""
}
const AuthContext = createContext(null)
const AuthContextWrapper = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState(initUser);
    useEffect(() => {
        console.log("Auth Context User :", user);
    }, [user]);
    const login = async (username: string, password: string): Promise<boolean> => {
        const response = await fetch("/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: username, password }),
        });
        const data = await response.json();
        console.log("Response is :", data);

        setUser({
            ...user,
            image: "https://media.licdn.com/dms/image/v2/D5603AQF6Jg0zTVWBzQ/profile-displayphoto-scale_200_200/B56ZjazRsiH8Ac-/0/1756017532600?e=2147483647&v=beta&t=ZjjwETYcdYZ464B7MlBjEaAzoNvkmWwalikR8gYsnUE",
            ...data.user
        });
        setLoggedIn(true);
        return true;
    }
    const logout = async () => {
        setUser(initUser);
        setLoggedIn(false);
    }
    return <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextWrapper;
export { AuthContext };