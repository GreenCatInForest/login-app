import { useState } from "react";

let userDatas = [
  {
    userEmail: "Jon Snow",
    userPassword: "KnowNothingExceptTheNightKingisREAL1111",
  },
  {
    userEmail: "Arya Stark",
    userPassword: "StickThemWithThePoinEnd",
  },
  {
    userEmail: "1",
    userPassword: "1",
  },
];

export const Login = ({ onSuccess, onError }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [typeError, setTypeError] = useState("");

  const handleChange = (event) => {
    // test handleChange works
    console.log(event.target.value);

    // take email and password from login form
    if (event.target.name === "email") {
      setInputEmail(event.target.value);
    }

    if (event.target.name === "password") {
      setInputPassword(event.target.value);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // check password functionality with find

    userDatas.find((userDatas) => {
      // success case: input email exist
      if (inputEmail) {
        // success case: input password exist
        if (inputPassword) {
          // success case: login accepted
          if (
            inputEmail === userDatas.userEmail &&
            inputPassword === userDatas.userPassword
          ) {
            onSuccess();
          }
          // error: email correct, password wrong
          else if (
            inputEmail === userDatas.userEmail &&
            inputPassword !== userDatas.userPassword
          ) {
            onError();
            setTypeError("Wrong credentials");
          }
        }
        setTypeError("Please enter your password");
        onError();
      }
      // case: input email and password empty
      else if (inputEmail === "" && inputPassword === "") {
        setTypeError("Please enter your email and a password");
        onError();
      } else if (inputEmail === "") {
        setTypeError("Please enter your email");
        onError();
      }
      // error: email not find, password doesn't matter
    });
  };

  // check password functionality with forEach

  //   userDatas.forEach((userData) => {
  //     if (
  //       inputEmail === userData.userEmail &&
  //       inputPassword === userData.userPassword
  //     ) {
  //       onSuccess();
  //       console.log("match" + inputEmail + inputPassword);
  //     } else if (
  //       inputEmail === userData.userEmail &&
  //       inputPassword !== userData.userPassword
  //     ) {
  //       onError();
  //       setTypeError("the password doesnt match");
  //     } else if (inputEmail === "" && inputPassword === "") {
  //       onError();
  //       setTypeError("enter the email and the password");
  //     } else if (
  //       inputEmail !== userData.userEmail &&
  //       inputPassword !== userData.userPassword
  //     ) {
  //       onError();
  //       setTypeError("the email isn't registered");
  //     }
  //   });
  // };

  return (
    <div className="login">
      {typeError ? alert(typeError) : null}
      <form className="loginForm" onSubmit={handleLogin}>
        <label htmlFor="email" className="form-label">
          E-mail
        </label>
        <input
          onChange={handleChange}
          name="email"
          type="text"
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
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
