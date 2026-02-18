import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./SignIn.css"
import { auth } from "../../firebase/firebase.js"
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'

function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate();

  const getAuthErrorMessage = (err) => {
    switch (err.code) {
      case "auth/invalid-credential":
      case "auth/invalid-login-credentials":
      case "auth/wrong-password":
      case "auth/user-not-found":
        return "Email or password is incorrect.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/too-many-requests":
        return "Too many attempts. Try again later.";
      default:
        return err.message || "Sign-in failed. Please try again.";
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(getAuthErrorMessage(err));
    }
  };

  const handleForgotPassword = async () => {
    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email address first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox.");
    } catch (err) {
      setError(getAuthErrorMessage(err));
    }
  };

  return (
    <section className='sign-in'>
      <form onSubmit={handleSignIn}>
        <div className="auth-container">
          <h1>Sign In</h1>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="auth-error">{error}</p>}
          {message && <p className="auth-success">{message}</p>}

          <button className="signIn-btn">Sign In</button>

          <button
            type="button"
            className="forgot-password-btn"
            onClick={handleForgotPassword}
          >
            Forgot password?
          </button>
        </div>
      </form>

      <Link className='to-signUp' to="/sign-up">
        &#8592; Don't have an account? Sign Up
      </Link>
    </section>
  );
}

export default SignIn;