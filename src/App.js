import { useState } from "react";

import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { DataExamplesLogin } from "./components/DataExamplesLogin";

let userDatas = [
  {
    userEmail: "JohnSnow@wall.co.north",
    userPassword: "KnowNothingExceptTheNightKingisREAL1111",
    userName: "Jon Snow",
  },
  {
    userEmail: "Arya_no_one_stark@braavos.com",
    userPassword: "StickThemWithThePoinEnd",
    userName: "Arya Stark",
  },
  {
    userEmail: "1",
    userPassword: "1",
    userName: "Daenerys",
  },
];

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const onSuccess = () => setIsLoggedIn(true);
  console.log(isLoggedIn);

  const onError = () => setIsLoggedIn(false);

  return (
    <div className="app">
      {!isLoggedIn ? (
        <div>
          <Header />
          <Login
            userDatas={userDatas}
            onSuccess={onSuccess}
            onError={onError}
            setUserName={setUserName}
          />
          <DataExamplesLogin />
        </div>
      ) : (
        <div>Hello, {userName}!</div>
      )}
    </div>
  );
};
