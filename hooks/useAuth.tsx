import { AuthContext } from "@/context/AuthContextWrapper";
import { useContext } from "react";

const useAuth = () => {
    const data = useContext(AuthContext);
    if (!data) {
        throw new Error("Wrap Component with AuthContextWrapper before using!");
    }
    return data;
}

export default useAuth