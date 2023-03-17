"use client";
import { authUtils } from "../firebase/authUtils";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
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
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Register</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
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
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
export default Page;
