import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignUp"

//styles
import styles from "./SignUp.module.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error} = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles["signup-form"]}>
        <h2>Sign Up</h2>
        <label>
          <span>Email</span>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>Display Name</span>
          <input
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        {!isPending && <button className="btn">Sign Up</button>}
        {isPending && <button className="btn" disabled>Loading</button>}
        {error && <p>{error}</p>}
      </form>
    </>
  );
}
