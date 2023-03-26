import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/AuthForm.css";

function LoginPage() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const { setUser } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://nasa-app-test2.herokuapp.com/users/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );
            
            //console.log("Response:", response);
            
            const data = await response.json();
            //console.log("Received data:", data);

            if (response.ok) {
                setUser(data.user);
                localStorage.setItem("user", JSON.stringify(data.user));
                //console.log("User set in context:", data.user);
                alert("User logged in successfully");
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                    }
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default LoginPage;
