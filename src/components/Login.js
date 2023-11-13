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
  // console.log(onSuccess);
  // console.log(onFaillure);

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

    userDatas.find((userDatas) => {
      if (inputEmail !== userDatas.userEmail) {
        onError();
        setTypeError("no email");
      } else if (inputEmail === userDatas.userEmail) {
        if (inputPassword === userDatas.userPassword) {
          onSuccess();
        } else if (inputPassword !== userDatas.userPassword) {
          setTypeError("incorrect password");
        } else if (inputEmail !== userDatas.userEmail) {
          setTypeError("incorrect email");
        }
      }
    });
    // userDatas.forEach((userData) => {
    //   if (
    //     inputEmail === userData.userEmail &&
    //     inputPassword === userData.userPassword
    //   ) {
    //     onSuccess();
    //     console.log("match" + inputEmail + inputPassword);
    //   } else if (
    //     inputEmail === userData.userEmail &&
    //     inputPassword !== userData.userPassword
    //   ) {
    //     alert("the password doesnt match");
    //   }
    // });

    // let currentUserData = userDatas.find(
    //   (userDatas) =>
    //     inputEmail === userDatas.userEmail &&
    //     inputPassword === userDatas.userPassword
    // );
    // currentUserData?successLogin():faillureLogin();
  };

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
