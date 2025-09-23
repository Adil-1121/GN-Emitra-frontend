import React, { useState } from "react";
import "./login.scss";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError("Please fill in all fields.");
            return;
        }
        setError("");
        // Simulate login (replace with real API call)
        console.log("Logging in:", formData);
    };

    return (
        <div className="login">
            <div className="loginContainer">
                <h2>Welcome Back</h2>
                <p className="subtitle">Please login to your account</p>

                <form onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="password">Password</label>
                        <div className="passwordWrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <span
                                className="toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                    </div>

                    {error && <p className="error">{error}</p>}

                    <button type="submit" className="loginButton">
                        Login
                    </button>
                </form>

                <div className="footer">
                    <p>Don't have an account? <a href="#">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
