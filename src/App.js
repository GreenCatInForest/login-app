import { useState } from "react";

import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { DataExamplesLogin } from "./components/DataExamplesLogin";

let userDatas = [
  {
    userEmail: "JohnSnow@wall.co.north",
    userPassword: "KnowNothingExceptTheNightKingisREAL1111",
    userName: "Jon Snow",
    userImg:
      "https://images.newindianexpress.com/uploads/user/imagelibrary/2018/6/24/original/kit_and_rose.jpg",
  },
  {
    userEmail: "Arya_no_one_stark@braavos.com",
    userPassword: "StickThemWithThePoinEnd",
    userName: "Arya Stark",
    userImg:
      "https://m.media-amazon.com/images/M/MV5BMmVhODQ1NmUtMzJiYi00MGNiLWExNmQtYmUxNGJmY2U5ZmJlXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UY1200_CR751,0,630,1200_AL_.jpg",
  },
  {
    userEmail: "1",
    userPassword: "1",
    userName: "Daenerys",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Ok6Kl3CfpMeyXj7Kgs_f9avPePjjq9owsA&usqp=CAU",
  },
];

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userImg, setUserImg] = useState("");

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
            setUserImg={setUserImg}
          />
          <DataExamplesLogin />
        </div>
      ) : (
        <div>
          Hello, {userName}!
          <img src={userImg} alt="avatar" />
        </div>
      )}
    </div>
  );
};
