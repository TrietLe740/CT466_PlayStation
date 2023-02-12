import React from "react";

export default function Form() {
  return (
    <div className="form-login-container">
      <div className="form-login-header">
        <h1>Login</h1>
      </div>
      <div className="form-login-content">
        <form className="form-login" action="" method="POST">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Sign-In ID (Email Address)"
          />
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
