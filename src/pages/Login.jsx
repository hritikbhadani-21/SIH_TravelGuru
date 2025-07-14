// src/pages/Login.jsx
import React, { useState } from "react";
import Input from "../Components/common/Input";
import Button from "../Components/common/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in as ${email}`);
  };

  return (
    <main style={{ padding: "80px 40px" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ maxWidth: "400px" }}>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </main>
  );
};

export default Login;
