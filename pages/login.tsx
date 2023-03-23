"use client";
import { authUtils } from "../firebase/authUtils";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";
import { Container } from "@mui/system";
import { Box, Button, TextField } from "@mui/material";
function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const handleForm = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await authUtils.login(email, password);
    } catch (e) {
      const err = e as FirebaseError;
      err.code === "auth/user-not-found" && alert("User not found");
    }
    await authUtils.login(email, password);
    return router.push("/");
  };
  return (
    <Container
      maxWidth="xl"
      sx={{ justifyContent: "center", display: "flex", marginTop: "0px" }}
    >
      <div className="wrapper">
        <div className="form-wrapper">
          <Box
            sx={{
              width: "500px",
              height: "360px",
              borderRadius: "15px",
              boxShadow: "10",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "110px",
            }}
          >
            <form onSubmit={handleForm} className="form">
              <h1>Přihlášení</h1>
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
                <p>Heslo</p>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </label>
              <br></br>
              <Button type="submit">Přihlásit se</Button>
            </form>
          </Box>
        </div>
      </div>
    </Container>
  );
}
export default Page;
