import { useState } from "react";

export const Login = () => {
  // check if handleChange working
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <form className="loginForm">
        <label htmlFor="email" className="form-label">
          E-mail
        </label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter your email address"
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          onChange={handleChange}
          name="password"
          type="text"
          id="password"
          className="form-control"
          placeholder="Enter your password"
        />
      </form>
      <button type="submit">Login</button>
    </div>
  );
};
