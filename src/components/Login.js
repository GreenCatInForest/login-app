import { useState } from "react";

export const Login = ({
  userDatas,
  setUserImg,
  onSuccess,
  onError,
  setUserName,
}) => {
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
      // success case: login accepted
      if (inputEmail === userDatas.userEmail) {
        if (inputPassword === userDatas.userPassword) {
          onSuccess();
          setUserName(userDatas.userName);
          setUserImg(userDatas.userImg);
        }

        // error: email not find, password doesn't matter
        else if (inputEmail !== userDatas.userEmail) {
          onError();
          setTypeError("It seems your email isn't registered yet");
        }

        // error: email correct, password wrong
        else if (
          inputEmail === userDatas.userEmail &&
          inputPassword !== userDatas.userPassword
        ) {
          onError();
          setTypeError("Wrong credentials");
        }
      } else if (!inputEmail) {
        setTypeError("Please enter your email");
        onError();
      } else if (!inputPassword) {
        setTypeError("Please enter your password");
        onError();
      }

      // case: input email and password empty
      else if (inputEmail === "" && inputPassword === "") {
        setTypeError("Please enter your email and a password");
        onError();
      }
    });
  };

  // password functionality with forEach

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
      <form className="loginForm" onSubmit={handleLogin}>
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
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      {typeError ? <div className="errorMessage">{typeError}!</div> : null}
    </div>
  );
};
