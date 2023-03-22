"use client";
import { authUtils } from "../firebase/authUtils";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button, Container, TextField } from "@mui/material";
function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const handleForm = async (event: FormEvent) => {
    event.preventDefault();
    await authUtils.register(email, password);
    return router.push("/");
  };
  return (
    <Container
      maxWidth="xl"
      sx={{ justifyContent: "center", display: "flex", marginTop: "250px" }}
    >
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Register</h1>
          <form onSubmit={handleForm} className="form">
            <label htmlFor="email">
              <p>Email</p>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
              />
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </label>
            <Button type="submit">Sign up</Button>
          </form>
        </div>
      </div>
    </Container>
  );
}
export default Page;
