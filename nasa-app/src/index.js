import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

function Index() {
    const [user, setUser] = useState(null);

    const logout = () => {
        setUser(null);
    };

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{ user, setUser, logout }}>
                <App />
            </AuthContext.Provider>
        </BrowserRouter>
    );
}

ReactDOM.render(<Index />, document.getElementById("root"));
