import { useState } from "react";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // check if states are working
  // console.log(loginEmail, loginPassword);

  let userDatas = [
    {
      userLogin: "Jon Snow",
      password: "KnowNothingExceptTheNightKingisREAL1111",
    },
    {
      userLogin: "Arya Stark",
      password: "StickThemWithThePoinEnd",
    },
  ];

  const handleChange = (event) => {
    // check if handleChange working
    // console.log(event.target.value);

    // took email and password values from login form
    if (event.target.name === "email") {
      setLoginEmail(event.target.value);
    } else if (event.target.name === "password") {
      setLoginPassword(event.target.value);
    }
  };
  console.log("loginEmail: " + loginEmail);
  console.log("loginPassword: " + loginPassword);

  const handleLogin = (LoginEmail, LoginPassword) => {
    userDatas.forEach((userData) => {
      if (
        userData.userLogin === LoginEmail &&
        userData.userPassword === LoginPassword
      ) {
        console.log("+");
      }
      console.log("-");
    });
  };

  return (
    <div className="login">
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
      <button className="loginButton" type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
