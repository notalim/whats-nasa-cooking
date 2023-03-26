import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    user: null,
    setUser: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const value = { user, setUser, logout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
export { AuthContext }; 