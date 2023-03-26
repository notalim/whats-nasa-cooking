import React, { useState } from "react";
import "../styles/AuthForm.css";

function SignupPage() {
    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://nasa-app-test2.herokuapp.com/users/register/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );

            // console.log("Raw response:", await response.clone().text()); // Log the raw response text

            const data = await response.json();

            if (response.ok) {
                alert("User registered successfully");
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Sign Up</h2>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupPage;
